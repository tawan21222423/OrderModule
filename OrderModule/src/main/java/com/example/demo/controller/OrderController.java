package com.example.demo.controller;

import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.object.Order;
import com.example.demo.service.FirebaseServices;

@RestController
public class OrderController {
	
	@Autowired
	private FirebaseServices firebaseServices;
	
	
	
	@PostMapping("/createOrder")
	public String createNewOrder(@RequestBody Order order) throws InterruptedException, ExecutionException {
		return firebaseServices.saveOrderDetails(order);
	}
	
	@GetMapping("/getOrderDetails/{id}")
	public Order getOrderDetails(@PathVariable("id") int id) throws InterruptedException, ExecutionException {
		return firebaseServices.getOrderDetails(id);
	}

}
