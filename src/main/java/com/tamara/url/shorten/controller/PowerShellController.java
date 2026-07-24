package com.tamara.url.shorten.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/api/powershell")
public class PowerShellController {

    // Path helper pointing to your local scripts folder
    private static final String SCRIPT_DIR = "C:\\Users\\JavaProjects\\PS_scripts\\";

    @GetMapping(value = "/start", produces = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> startApp() {
        return executePowerShellScript(SCRIPT_DIR + "start_URLshortener.ps1");
    }

    @GetMapping(value = "/stop", produces = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> stopApp() {
        return executePowerShellScript(SCRIPT_DIR + "stop_URLshortener.ps1");
    }
    
    @GetMapping(value = "/restart", produces = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> restartApp() {
        return executePowerShellScript(SCRIPT_DIR + "restart_URLshortener.ps1");
    }


    /**
     * Core utility method to execute the shell command safely and capture output
     */
    private ResponseEntity<String> executePowerShellScript(String scriptPath) {
        StringBuilder outputLog = new StringBuilder();
        
        // Command parameters structure required by Windows PowerShell
        String[] command = {
            "powershell.exe", 
            "-NoProfile", 
            "-ExecutionPolicy", "Bypass", 
            "-File", scriptPath
        };

        try {
            ProcessBuilder processBuilder = new ProcessBuilder(command);
            // Merge error stream into standard stream so you see runtime exceptions in the output
            processBuilder.redirectErrorStream(true); 
            
            Process process = processBuilder.start();

            // Read the script's live console outputs line-by-line
            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(process.getInputStream(), StandardCharsets.UTF_8))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    outputLog.append(line).append("\n");
                }
            }

            // Enforce a hard timeout limit so scripts don't hang your application thread indefinitely
            boolean finished = process.waitFor(30, TimeUnit.SECONDS);
            
            if (!finished) {
                process.destroyForcibly();
                return ResponseEntity.status(HttpStatus.REQUEST_TIMEOUT)
                        .body("Execution Timeout: Script took longer than 30 seconds to respond.");
            }

            int exitCode = process.exitValue();
            if (exitCode == 0) {
                return ResponseEntity.ok(outputLog.toString());
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Script Exited with Error Code: " + exitCode + "\n\nLogs:\n" + outputLog.toString());
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Java Exception occurred while initiating script: " + e.getMessage());
        }
    }
}
