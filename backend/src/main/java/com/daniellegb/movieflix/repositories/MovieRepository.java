package com.daniellegb.movieflix.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.daniellegb.movieflix.entities.Genre;
import com.daniellegb.movieflix.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long>{

	@Query("SELECT obj FROM Movie obj WHERE "
			+ ":genre IN obj.genre")
	Page<Movie> find(Genre genre, Pageable pageable);
	
}
