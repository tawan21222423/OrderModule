package com.example.demo.service;

import java.security.PublicKey;
import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;

import com.example.demo.object.Order;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.google.firebase.database.core.Path;

@Service
public class FirebaseServices {
	
	public String saveOrderDetails(Order message) throws InterruptedException, ExecutionException {
        Firestore db = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> future = db.collection("orders").document(message.getId()).set(message);
        return future.get().getUpdateTime().toString();
    }

	public Order getOrderDetails(String name) throws InterruptedException, ExecutionException {
		Firestore db = FirestoreClient.getFirestore();
		DocumentReference docRef = db.collection("orders").document(name);
	
		ApiFuture<DocumentSnapshot> future = docRef.get();

		DocumentSnapshot document = future.get();
		Order order = null;
		if (document.exists()) {

		  order = document.toObject(Order.class);
		  System.out.println(order);
		  return order;
		} else {
		  System.out.println("No such document!");
		  return null;
		}
	}
	

}
