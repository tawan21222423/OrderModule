package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.Query;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;

@RestController
public class OrderController {
	
	@Autowired
	private FirebaseServices firebaseServices;
	
	
	@CrossOrigin
	@PostMapping("/createOrder")
	public String createNewUser(@RequestBody Order order) throws InterruptedException, ExecutionException {
		return firebaseServices.saveOrderDetails(order);
	}
	@CrossOrigin
	@GetMapping("/getOrderDetails/{id}")
	public Order getOrderDetails(@PathVariable("id") int id) throws InterruptedException, ExecutionException {
		return firebaseServices.getOrderDetail(id);
	}
	@CrossOrigin
	@GetMapping("/getUserOrder/{user_id}")
	public List<Order> getUserOrderDetail(@PathVariable("user_id") int user_id) throws InterruptedException, ExecutionException {
		return firebaseServices.getUserOrderDetail(user_id);
	}
	@CrossOrigin
	@GetMapping("/findByStatus/{status}")
	public List<Order> getStatusOrderDetail(@PathVariable("status") String status) throws InterruptedException, ExecutionException {
		return firebaseServices.getStatusOrderDetail(status);
	}

	@CrossOrigin
	@PutMapping("/updateOrder")
	public String updateOrder(@RequestBody Order order) {
		return "Updated order "+order.getId();
	}
	@CrossOrigin
	@DeleteMapping("/deleteOrder/{id}")
	public String deleteOrder(@PathVariable("id") int id) throws InterruptedException, ExecutionException {
		return firebaseServices.deleteOrder(id);
	}
	@CrossOrigin
	@GetMapping("/AllOrder")
	public List<Order> getAllOrder() throws InterruptedException, ExecutionException {
		List<Order> orList = new ArrayList<Order>();
		CollectionReference order= firebaseServices.getFirebase().collection("orders");
		ApiFuture<QuerySnapshot> querySnapshot= order.get();
		for(DocumentSnapshot doc:querySnapshot.get().getDocuments()) {
			Order or = doc.toObject(Order.class);
			orList.add(or);
		}
		System.out.println("All order");
		return orList;
	}
	
//	@CrossOrigin
//	@GetMapping("/Last")
//	public String getLast() {
//		return firebaseServices.getLast();
//		
//	}

	

}
