package com.daniellegb.movieflix.dto;

import java.io.Serializable;


public class ReviewDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String text;
	private Long movieId;
	private Long userId;
	
	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text, Long movieId, Long userId) {
		super();
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.userId = userId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
}
