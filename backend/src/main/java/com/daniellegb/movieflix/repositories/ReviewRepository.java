package com.daniellegb.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.daniellegb.movieflix.entities.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long>{

}
