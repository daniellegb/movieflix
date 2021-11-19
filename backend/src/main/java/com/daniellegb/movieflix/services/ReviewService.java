package com.daniellegb.movieflix.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.daniellegb.movieflix.dto.ReviewDTO;
import com.daniellegb.movieflix.entities.Review;
import com.daniellegb.movieflix.entities.User;
import com.daniellegb.movieflix.repositories.MovieRepository;
import com.daniellegb.movieflix.repositories.ReviewRepository;
import com.daniellegb.movieflix.repositories.UserRepository;
import com.daniellegb.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private UserRepository userRepository;

	@Transactional(readOnly = true)
	public List<ReviewDTO> findAll() {
		List<Review> list = repository.findAll();
		return createDtoFromEntities(list);
	}

	@Transactional(readOnly = true)
	public ReviewDTO findById(Long id) {
		Optional<Review> obj = repository.findById(id);
		Review entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new ReviewDTO(entity);
	}
	
	@Transactional(readOnly = true) ///////////////////////////////////////////////////////////////////////
	public List<ReviewDTO> findByMovieId(Long movieId) {
		List<Review> list = repository.findAll();
		return createDtoFromMovieSelectedEntities(list, movieId);
	}

	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		Review entity = createEntityFromDto(dto);
		entity = repository.save(entity);
		return new ReviewDTO(entity);
	}

	private Review createEntityFromDto(ReviewDTO dto) {
		Review entity = new Review();
		entity.setId(getNextId());
		entity.setText(dto.getText());
		entity.setMovie(movieRepository.getOne(dto.getMovieId()));
		User loggedUser = userRepository.findByEmail(getCurrentUserEmail());
		entity.setUser(loggedUser);
		return entity;
	}

	private List<ReviewDTO> createDtoFromEntities(List<Review> entities) {
		List<ReviewDTO> listDTO = new ArrayList<>();
		for (int x = 0; x < entities.size(); x++) {
			Review entity = new Review();
			entity.setId(entities.get(x).getId());
			entity.setMovie(entities.get(x).getMovie());
			entity.setText(entities.get(x).getText());
			try {
				entity.setUser(userRepository.getOne(entities.get(x).getUser().getId()));
			} catch (EntityNotFoundException e) {
				throw new ResourceNotFoundException("Id not find" + entities.get(x).getUser().getId());
			}
			ReviewDTO dto2 = new ReviewDTO(entity);
			listDTO.add(dto2);
		}
		return listDTO;
	}
	
	private List<ReviewDTO> createDtoFromMovieSelectedEntities(List<Review> entities, Long movieId) { ////////////////////////
		List<ReviewDTO> listDTO = new ArrayList<>();
		for (int x = 0; x < entities.size(); x++) {
			if(entities.get(x).getMovie().getId() == movieId) {
				Review entity = new Review();
				entity.setId(entities.get(x).getId());
				entity.setMovie(entities.get(x).getMovie());
				entity.setText(entities.get(x).getText());
				try {
					entity.setUser(userRepository.getOne(entities.get(x).getUser().getId()));
				} catch (EntityNotFoundException e) {
					throw new ResourceNotFoundException("Id not find" + entities.get(x).getUser().getId());
				}
				ReviewDTO dto2 = new ReviewDTO(entity);
				listDTO.add(dto2);
			}
		}
		return listDTO;
	}
	
	

	public Long getNextId() {
		return repository.count() + 1;
	}

	public String getCurrentUserEmail() {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String username;
		if (principal instanceof UserDetails) {
			username = ((UserDetails) principal).getUsername();
		} else {
			username = principal.toString();
		}
		return username;
	}
}