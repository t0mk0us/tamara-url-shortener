package com.tamara.url.shorten.model;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "url_mapping", indexes = {
        @Index(columnList = "code", unique = true),
        @Index(columnList = "originalUrl")
})
public class UrlMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 10)
    private String code;

    @Column(nullable = false)
    private String originalUrl;
    
    @Column(nullable = false)
    private String shortUrl;

    @Column(nullable = false)
    private Instant createdAt = Instant.now();

    @Column(nullable = false)
    private long redirectCount = 0L;

    public UrlMapping() {}

    public UrlMapping(String code, String originalUrl, String shortUrl) {
        this.code = code;
        this.originalUrl = originalUrl;
        this.shortUrl = shortUrl;
    	}

    public Long getId() { 
    	return id; 
    	}
    
    public String getCode() { 
    	return code; 
    	}
    
    public void setCode(String code) { 
    	this.code = code; 
    	}
    
    public String getOriginalUrl() { 
    	return originalUrl; 
    	}
    
    public void setOriginalUrl(String originalUrl) { 
    	this.originalUrl = originalUrl; 
    	}
    
    public String getShortUrl() {
		return shortUrl;
	}

	public void setShortUrl(String shortUrl) {
		this.shortUrl = shortUrl;
	}

	public Instant getCreatedAt() { 
    	return createdAt; 
    	}
    
    public void setCreatedAt(Instant createdAt) { 
    	this.createdAt = createdAt; 
    	}
    
    public long getRedirectCount() { 
    	return redirectCount; 
    	}
    
    public void setRedirectCount(long redirectCount) { 
    	this.redirectCount = redirectCount; 
    	}
    
    public void incrementRedirectCount() { 
    	this.redirectCount++; 
    	}
}

