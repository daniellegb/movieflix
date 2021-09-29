package com.daniellegb.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.daniellegb.movieflix.dto.GenreDTO;
import com.daniellegb.movieflix.entities.Genre;
import com.daniellegb.movieflix.repositories.GenreRepository;
import com.daniellegb.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class GenreService {

	@Autowired
	private GenreRepository repository;
	
	@Transactional(readOnly = true)
	public Page<GenreDTO> findAllPaged(PageRequest pageRequest){
		Page<Genre> list = repository.findAll(pageRequest);
		return list.map(genre -> new GenreDTO(genre, genre.getMovies()));
	}
	
	@Transactional(readOnly = true)
	public GenreDTO findById(Long id) {
		Optional<Genre> genre = repository.findById(id);
		Genre entity = genre.orElseThrow(() -> new ResourceNotFoundException("Genre not found"));
		return new GenreDTO(entity, entity.getMovies());
	}
	
}
