package com.tamara.url.shorten.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.tamara.url.shorten.exception.ShortUrlNotFoundException;

import java.net.URI;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ShortUrlNotFoundException.class)
    public ProblemDetail handleShortUrlNotFoundException(ShortUrlNotFoundException ex) {
        // Create a ProblemDetail instance with standard fields
        ProblemDetail problemDetails = ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());

        // Set the problem type URI (can link to documentation)
        problemDetails.setType(URI.create("http://localhost:7777/errors/short-url-not-found"));
        
        // Set a human-readable title
        problemDetails.setTitle("Short URL Not Found");

        // Add custom, non-standard properties to the ProblemDetail
        problemDetails.setProperty("ShortUrl", ex.getShortUrl());
        problemDetails.setProperty("ShortUrl", ex.getCause());

        return problemDetails;
    }

    // You can add more @ExceptionHandler methods for other custom or standard exceptions
    // For example, handling general IllegalArgumentException:
    @ExceptionHandler(IllegalArgumentException.class)
    public ProblemDetail handleIllegalArgumentException(IllegalArgumentException ex) {
        ProblemDetail problemDetails = ProblemDetail.forStatusAndDetail(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage());
        problemDetails.setTitle("Invalid Argument");
        return problemDetails;
    }
}
