package com.daniellegb.movieflix.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
	public List<GenreDTO> findAll(){
		List<Genre> list = repository.findAll();
		return createDtoFromEntity(list);
	}
	
	@Transactional(readOnly = true)
	public GenreDTO findById(Long id) {
		Optional<Genre> genre = repository.findById(id);
		Genre entity = genre.orElseThrow(() -> new ResourceNotFoundException("Genre not found"));
		return new GenreDTO(entity, entity.getMovies());
	}
	
	private List<GenreDTO> createDtoFromEntity(List<Genre> entities){
		List<GenreDTO> dtos = new ArrayList<>();
		for(int x = 0; x<entities.size(); x++) {
			Genre entity = new Genre();
			entity.setId(entities.get(x).getId());
			entity.setName(entities.get(x).getName());
			dtos.add(new GenreDTO(entity, entities.get(x).getMovies()));
		}
		return dtos;
	}
	
}
