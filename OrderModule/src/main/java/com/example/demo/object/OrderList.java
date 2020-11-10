package com.example.demo.object;

public class OrderList {
	
	private String ProductName;
	private int Amount;
	private double Price;
	private String Shipping;
	
	
	public OrderList (String ProductName, int Amount, String Shipping) {
		this.ProductName = ProductName;
		this.Amount = Amount;
		this.Shipping = Shipping;

		
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

	public String getShipping() {
		return Shipping;
	}

	public void setShipping(String shipping) {
		Shipping = shipping;
	}


	
}
