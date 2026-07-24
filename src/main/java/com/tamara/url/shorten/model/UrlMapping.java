package com.tamara.url.shorten.model;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "url_mapping", indexes = {
        @Index(columnList = "code", unique = true),
<<<<<<< HEAD
        @Index(columnList = "originalUrl")
=======
       // @Index(columnList = "originalUrl")
>>>>>>> 8121f06 (Linked back-end to front-end)
})
public class UrlMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

<<<<<<< HEAD
    @Column(nullable = false, unique = true, length = 10)
    private String code;

    @Column(nullable = false)
    private String originalUrl;
    
    @Column(nullable = false)
    private String shortUrl;

    @Column(nullable = false)
    private Instant createdAt = Instant.now();

    @Column(nullable = false)
=======
    @Column(nullable = false, unique = true, length = 10, name = "code")
    private String code;
    
    @Column(nullable = false, length = 2048, name = "original_url")
    private String originalUrl;

    
    @Column(nullable = false, name = "short_url")
    private String shortUrl;

    @Column(nullable = false, name = "created_at")
    private Instant createdAt = Instant.now();

    @Column(nullable = false, name = "redirect_count")
>>>>>>> 8121f06 (Linked back-end to front-end)
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

