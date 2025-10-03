package com.tamara.url.shorten.repository;

import com.tamara.url.shorten.model.UrlMapping;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UrlMappingRepository extends JpaRepository<UrlMapping, Long> {

    Optional<UrlMapping> findByCode(String code);

    boolean existsByCode(String code);

	Optional<UrlMapping> findByOriginalUrl(String originalUrl);
}
