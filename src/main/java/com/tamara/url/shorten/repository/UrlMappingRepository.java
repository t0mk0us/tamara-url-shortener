package com.tamara.url.shorten.repository;

import com.tamara.url.shorten.model.UrlMapping;
import org.springframework.data.jpa.repository.JpaRepository;
<<<<<<< HEAD

import java.util.Optional;

public interface UrlMappingRepository extends JpaRepository<UrlMapping, Long> {

    Optional<UrlMapping> findByCode(String code);

    boolean existsByCode(String code);

	Optional<UrlMapping> findByOriginalUrl(String originalUrl);
=======
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UrlMappingRepository extends JpaRepository<UrlMapping, Long> {
    Optional<UrlMapping> findByCode(String code);
    Optional<UrlMapping> findByOriginalUrl(String originalUrl);
    boolean existsByCode(String code);
	Optional<UrlMapping> findByShortUrl(String shortUrl);
>>>>>>> 8121f06 (Linked back-end to front-end)
}
