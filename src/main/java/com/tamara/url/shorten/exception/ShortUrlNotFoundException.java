package com.tamara.url.shorten.exception;


public class ShortUrlNotFoundException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private final String shortUrl;
	
	public ShortUrlNotFoundException(String url, String message) {

		super("Redirect for " + url + " not found");
		this.shortUrl = url;
	};

    public String getShortUrl() {
        return shortUrl;
    }

}
