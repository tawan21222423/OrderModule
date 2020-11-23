package com.example.demo.object;

import java.util.List;

public class OrderList {
	
	private int shop_id;
	private int product_id;
	private int option_id;
	private String special_name;
	private String ProductName;
	private int Amount;
	private double Price;
	private String shipping_option_id;
	
	
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


	public int getShop_id() {
		return shop_id;
	}

	public void setShop_id(int shop_id) {
		this.shop_id = shop_id;
	}

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public int getOption_id() {
		return option_id;
	}

	public void setOption_id(int option_id) {
		this.option_id = option_id;
	}

	public String getSpecial_name() {
		return special_name;
	}

	public void setSpecial_name(String special_name) {
		this.special_name = special_name;
	}

	public String getShipping_option_id() {
		return shipping_option_id;
	}

	public void setShipping_option_id(String shipping_option_id) {
		this.shipping_option_id = shipping_option_id;
	}
	
}
