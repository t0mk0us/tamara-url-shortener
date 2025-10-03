package com.tamara.url.shorten.service;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tamara.url.shorten.model.UrlMapping;
import com.tamara.url.shorten.repository.UrlMappingRepository;
import com.tamara.url.shorten.util.RandomStringGenerator;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@Service
public class UrlMappingService {
	
    private final UrlMappingRepository repository;
    private final String baseUrl;

    public UrlMappingService(UrlMappingRepository repository,
                      @Value("${app.base-url}") String baseUrl) {
        this.repository = repository;
        this.baseUrl = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
    }

    public static final int CODE_LENGTH = 10; // base62-ish short code length

    /**
     * Creates or returns a short URL for the given original URL.
     * In th
     */
    @Transactional
    public UrlMapping shorten(String originalUrl) {
    	
    	Optional<UrlMapping> optionalMapping = repository.findByOriginalUrl(originalUrl);

    	if (optionalMapping != null) {
    		
    		return optionalMapping.get();
    		
    	} else {
	        // Generate a code and ensure uniqueness
	        String code;
	        int attempts = 0;
	        do {
	            code = generateCode(CODE_LENGTH);
	            attempts++;
	            if (attempts > 10) {
	                // fallback: increase length or throw
	                code = generateCode(CODE_LENGTH + 2);
	                break;
	            }
	        } while (repository.existsByCode(code));  //generate while 
	
	        UrlMapping mapping = new UrlMapping(code, originalUrl, baseUrl + code);
	        repository.save(mapping);
	        return mapping;
    	}
    }

    public Optional<UrlMapping> resolve(String code) {
        return repository.findByCode(code);
    }

    @Transactional
    public void incrementRedirectCount(UrlMapping mapping) {
        mapping.incrementRedirectCount();
        repository.save(mapping);
    }

    public String buildShortUrl(String code) {
        return baseUrl + code;
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

    public boolean isValidUrl(String url) {
        try {
            URI uri = new URI(url);
            return uri.getScheme() != null && (uri.getScheme().equalsIgnoreCase("http") || uri.getScheme().equalsIgnoreCase("https"));
        } catch (URISyntaxException e) {
            return false;
        }
    }
}

