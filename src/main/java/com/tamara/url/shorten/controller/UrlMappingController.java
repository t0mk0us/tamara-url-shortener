package com.tamara.url.shorten.controller;


import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.extern.slf4j.Slf4j;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.InvalidDataAccessResourceUsageException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.tamara.url.shorten.exception.ShortUrlNotFoundException;
import com.tamara.url.shorten.model.UrlMapping;
import com.tamara.url.shorten.repository.UrlMappingRepository;
import com.tamara.url.shorten.service.UrlMappingService;
import com.tamara.url.shorten.util.RandomStringGenerator;

import java.net.URI;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

@RestController
@Validated
@Slf4j
@RequestMapping("/api")
public class UrlMappingController {
	
    private final UrlMappingService service;
    
    private final UrlMappingRepository urlMappingRepository;
    
    private static final String BASE_URL = "https://localhost:7777/";
 

    public UrlMappingController(UrlMappingService service, UrlMappingRepository repository) {
        this.service = service;
		this.urlMappingRepository = repository;
    }

    // DTO for input
    public static class ShortenRequest {
        @NotBlank
        public String url;
        public ShortenRequest() {}
        public ShortenRequest(String url) { this.url = url; }
		public String getUrl() {
			return null;
		}
    }

    public static class ShortenResponse {
        public String shortUrl;
        public String code;
        public String originalUrl;

        public ShortenResponse(String shortUrl, String code, String originalUrl) {
            this.shortUrl = shortUrl;
            this.code = code;
            this.originalUrl = originalUrl;
        }
    }

    @PostMapping("/shorten")
    public ResponseEntity<?> shorten(@RequestBody Map<String, String> body) {
        String originalUrl = body.get("url");

        // generate a unique short code
        String code = generateUniqueCode();

        UrlMapping mapping = new UrlMapping();
        mapping.setCode(code);
        mapping.setOriginalUrl(originalUrl);
        urlMappingRepository.save(mapping);

        return ResponseEntity.ok(Map.of(
                "shortUrl", BASE_URL + code,
                "code", code,
                "originalUrl", originalUrl
        ));
    }
    

    @GetMapping("/{code}")
    public ResponseEntity<?> redirect(@PathVariable String code) {
        Optional<UrlMapping> mappingOpt = urlMappingRepository.findByCode(code);

        if (mappingOpt.isPresent()) {
            UrlMapping mapping = mappingOpt.get();

            return ResponseEntity.status(302)
                    .location(URI.create(mapping.getOriginalUrl()))
                    .build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	
	 public ResponseEntity<Void> returnNotFound(@PathVariable String code) {
	  
		  HttpHeaders headers = new HttpHeaders();
		  headers.add("X-Error-Message", "Short URL not found.");

		  return new ResponseEntity<Void>(headers, HttpStatus.NOT_FOUND);
	  
	  }
	 
	    private String generateUniqueCode() {
	        String chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	        Random random = new Random();
	        String code;

	        do {
	            StringBuilder sb = new StringBuilder();
	            for (int i = 0; i < 10; i++) {
	                sb.append(chars.charAt(random.nextInt(chars.length())));
	            }
	            code = sb.toString();
	        } while (urlMappingRepository.existsByCode(code));

	        return code;
	    }
	       
	    private String generateCode(int length) {
	        //String raw = RandomStringUtilsFacade.randomAlphabetic(length);
	        String raw = RandomStringGenerator.randomAlphaNumeric(length);
	        // Normalize to URL-safe set: keep A-Za-z0-9 only, rotate until length satisfied
	        StringBuilder sb = new StringBuilder();
	        for (char c : raw.toCharArray()) {
	            if (Character.isLetterOrDigit(c)) sb.append(c);
	            if (sb.length() == length) break;
	        }
	        return sb.toString();
	    }

    @ExceptionHandler({ShortUrlNotFoundException.class})
    public ResponseEntity<ProblemDetail> erreurModification(Exception ex, WebRequest request) {   	
    	ProblemDetail problemDetails = ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
    	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(problemDetails);
    }
}

