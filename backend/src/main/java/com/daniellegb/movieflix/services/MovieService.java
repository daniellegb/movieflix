package com.daniellegb.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.daniellegb.movieflix.dto.MovieDTO;
import com.daniellegb.movieflix.entities.Genre;
import com.daniellegb.movieflix.entities.Movie;
import com.daniellegb.movieflix.repositories.GenreRepository;
import com.daniellegb.movieflix.repositories.MovieRepository;
import com.daniellegb.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private GenreRepository genreRepository;
		
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest){
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		Page<Movie> list = (genreId == 0) ? repository.findAll(pageRequest) : repository.find(genre, pageRequest);
		return list.map(x -> new MovieDTO(x));
	}

	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Movie not found"));
		return new MovieDTO(entity, entity.getReviews());
	}
	
}
