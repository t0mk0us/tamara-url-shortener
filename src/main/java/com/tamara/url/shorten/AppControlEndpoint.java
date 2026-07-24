package com.tamara.url.shorten;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.File;
import java.util.Map;
import java.util.HashMap;
import java.util.concurrent.CompletableFuture;

@Configuration
@RestController
public class AppControlEndpoint {

    private final String SCRIPTS_DIR = "C:\\Users\\JavaProjects\\PS_scripts\\";

    // 1. LINK TO START ACTION
    @GetMapping("/script-automation/start")
    public Map<String, String> triggerStart() {
        return executeSequence("start_URLshortener.ps1", "START");
    }

    // 2. LINK TO STOP ACTION
    @GetMapping("/script-automation/stop")
    public Map<String, String> triggerStop() {
        return executeSequence("stop_URLshortener.ps1", "STOP");
    }

    // 3. LINK TO RESTART ACTION
    @GetMapping("/script-automation/restart")
    public Map<String, String> triggerRestart() {
        return executeSequence("restart_URLshortener.ps1", "RESTART");
    }

    private Map<String, String> executeSequence(String scriptName, String actionLabel) {
        Map<String, String> response = new HashMap<>();
        
        CompletableFuture.runAsync(() -> {
            try {
                // Short sleep to allow the HTTP response to return to the browser first
                Thread.sleep(400); 
                ProcessBuilder pb = new ProcessBuilder("powershell.exe", "-ExecutionPolicy", "Bypass", "-File", SCRIPTS_DIR + scriptName);
                pb.directory(new File(SCRIPTS_DIR));
                pb.start();
            } catch (Exception e) {
                System.err.println("Execution failed: " + e.getMessage());
            }
        });

        response.put("status", "success");
        response.put("message", "PowerShell sequence '" + actionLabel + "' initialized successfully.");
        return response;
    }
}