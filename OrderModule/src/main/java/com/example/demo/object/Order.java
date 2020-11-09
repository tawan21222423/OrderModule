package com.example.demo.object;

import java.util.List;

public class Order {
	
	private String id;
	private int user_id;
	private List<String> product;
	
	public Order() {
		super();
	}
	
	public Order(String id, int user_id) {
		super();
		this.id = id;
		this.user_id = user_id;
		
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public List<String> getProduct() {
		return product;
	}

	public void setProduct(List<String> product) {
		this.product = product;
	}



	
	

}
