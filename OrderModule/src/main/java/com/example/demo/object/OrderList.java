package com.example.demo.object;

import java.util.List;

public class OrderList {
	
	private int shop_id;
	private String ProductName;
	private int Amount;
	private double Price;
	private int shipping_option_id;
	
	
	
//	public OrderList (String ProductName, int Amount, String Shipping) {

//		this.ProductName = ProductName;
//		this.Amount = Amount;
//		this.Shipping = Shipping;

	public OrderList () {
		
	}

	public String getProductName() {
		return ProductName;
	}

	public void setProductName(String productName) {
		ProductName = productName;
	}

	public int getAmount() {
		return Amount;
	}

	public void setAmount(int amount) {
		Amount = amount;
	}

	public double getPrice() {
		return Price;
	}

	public void setPrice(double price) {
		Price = price;
	}

	public int getShipping_option_id() {
		return shipping_option_id;
	}

	public void setShipping_option_id(int shipping_option_id) {
		this.shipping_option_id = shipping_option_id;
	}
	
}
