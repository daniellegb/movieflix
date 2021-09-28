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

@Service
public class GenreService {

	@Autowired
	private GenreRepository repository;
	
	@Transactional(readOnly = true)
	public Page<GenreDTO> findAllPaged(PageRequest pageRequest){
		Page<Genre> list = repository.findAll(pageRequest);
		return list.map(genre -> new GenreDTO(genre));
	}
	
	@Transactional(readOnly = true)
	public GenreDTO findById(Long id) {
		Optional<Genre> genre = repository.findById(id);
		Genre entity = genre.orElseThrow(null); //Exception need to be add!!
		return new GenreDTO(entity);
	}
	
}
