package com.example.demo.service;

import java.security.PublicKey;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;

import com.example.demo.object.Order;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.google.firebase.database.Query;
import com.google.firebase.database.core.Path;

@Service
public class FirebaseServices {
	
	public String saveOrderDetails(Order message, int i) throws InterruptedException, ExecutionException {
		//getLast();
		if(i != -1) {
			i++;
		}else{
			i = message.getId();
			System.out.println(i);
		}
		
        Firestore db = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> future = db.collection("orders").document(i+"").set(message);
        DocumentReference docRef = db.collection("orders").document(i+"");
        ApiFuture<WriteResult> writeResult = docRef.update("id", i);
        return writeResult.get().getUpdateTime().toString();
    }

	public Order getOrderDetail(int id) throws InterruptedException, ExecutionException {
		Firestore db = FirestoreClient.getFirestore();
		DocumentReference docRef = db.collection("orders").document(id+"");
	
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
	
	public List<Order> getUserOrderDetail(int user_id) throws InterruptedException, ExecutionException {
		int n = user_id;
		Firestore db = FirestoreClient.getFirestore();
		List<Order> orList = new ArrayList<Order>();
		ApiFuture<QuerySnapshot> future =
			    db.collection("orders").whereEqualTo("user_id", n).get();
			List<QueryDocumentSnapshot> documents = future.get().getDocuments();
			for (DocumentSnapshot document : documents) {
			  System.out.println(document.getId() + " => " + document.toObject(Order.class));
			  Order or = document.toObject(Order.class);
				orList.add(or);
			}
			if (orList.isEmpty()) {
				System.out.println("No such document!");
				return null;
			}else{	
				return orList;
			}
	}
	
	public List<Order> getStatusOrderDetail(String status) throws InterruptedException, ExecutionException {
		String s = status;
		Firestore db = FirestoreClient.getFirestore();
		List<Order> orList = new ArrayList<Order>();
		ApiFuture<QuerySnapshot> future =
			    db.collection("orders").whereEqualTo("status", s).get();
			List<QueryDocumentSnapshot> documents = future.get().getDocuments();
			for (DocumentSnapshot document : documents) {
			  System.out.println(document.getId() + " => " + document.toObject(Order.class));
			  Order or = document.toObject(Order.class);
				orList.add(or);
			}
			if (orList.isEmpty()) {
				System.out.println("No such document!");
				return null;
			}else{	
				return orList;
			}
	}
	
	public String deleteOrder(int id) throws InterruptedException, ExecutionException {
		Firestore db = FirestoreClient.getFirestore();
		ApiFuture<WriteResult> writeResult = db.collection("orders").document(id+"").delete();
		return writeResult.get().getUpdateTime().toString();
	}
	
	public int getLast() throws InterruptedException, ExecutionException {
		Firestore db = FirestoreClient.getFirestore();
		//CollectionReference order = db.collection("orders");
		com.google.cloud.firestore.Query query  = db.collection("orders").orderBy("id");
		ApiFuture<QuerySnapshot> future = query.get();
		QuerySnapshot document = future.get();
		List<Order> order = null;
		order = document.toObjects(Order.class);

		//Order.setId(order.get(order.size() - 1).getId()+1);
		if (order.size() == 0) {
			System.out.println("Last id = " + 1);
			return 0;
		}else {
			System.out.println("Last id = " + (order.get(order.size() - 1).getId()+1));
			return order.get(order.size() - 1).getId();
		}
		
	}
	
	public String updateCancell(int id) throws InterruptedException, ExecutionException {
		Firestore db = FirestoreClient.getFirestore();
        DocumentReference docRef = db.collection("orders").document(id+"");
        ApiFuture<WriteResult> writeResult = docRef.update("status", "Cancelled");
        System.out.println("Cancell id : " + id);
        return "Cancell id : " + id;
	}
	
	public String updateSuccess(int id) throws InterruptedException, ExecutionException {
		Firestore db = FirestoreClient.getFirestore();
        DocumentReference docRef = db.collection("orders").document(id+"");
        ApiFuture<WriteResult> writeResult = docRef.update("status", "Success");
        System.out.println("id "+ id + " Success");
        return "id "+ id + " Success";
	}

	
	public Firestore getFirebase() {
		return FirestoreClient.getFirestore();
	}

	
}
