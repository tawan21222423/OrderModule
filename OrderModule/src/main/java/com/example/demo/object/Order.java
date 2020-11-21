package com.example.demo.object;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class Order {
	
	int id = 0;
	private int user_id;
	private List<OrderList> product;
	private String status = "Waiting";
	private String time;

	
	public Order() {
		super();
	}
	
	public Order(int id, int user_id) {
		super();
		this.id = id;
		this.user_id = user_id;
		
	}

	public int getId() {
		return id;
	}

	public void setId(int a) {
		this.id = a;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public List<OrderList> getProduct() {
		return product;
	}

	public void setProduct(List<OrderList> product) {
		this.product = product;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getTime() {
		if (this.time == null) {
		 DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
		   LocalDateTime now = LocalDateTime.now();  
		return (dtf.format(now));
		}else {
			return time;
		}
	}

	public void setTime(String time) {
		this.time = time;
	}

	
}

