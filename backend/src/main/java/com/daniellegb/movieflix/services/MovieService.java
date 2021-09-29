package com.daniellegb.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.daniellegb.movieflix.dto.MovieDTO;
import com.daniellegb.movieflix.entities.Movie;
import com.daniellegb.movieflix.repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;
		
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(PageRequest pageRequest){
		Page<Movie> list = repository.findAll(pageRequest);
		return list.map(movie -> new MovieDTO(movie, movie.getReviews()));
	}

	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(null); //Need to add exception
		return new MovieDTO(entity, entity.getReviews());
	}
	
}
