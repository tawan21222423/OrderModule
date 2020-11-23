# OrderModule
OrderModule สร้างใบสั่งซื้อโดยการเรียกสินค้ามาจาก ProductModule แล้วส่งใบสั่งซื้อให้ PaymentModule เพื่อรอรับการชำระเงินจากลูกค้า เมื่อลูกค้าชำระระเงินสำเร็จ OrderModule จะส่งใบสั่งซื้อให้ ShippingModule เพื่อทำการจัดส่งสินค้า

![Untitled Diagram](https://user-images.githubusercontent.com/42997302/100000918-e3ad7d00-2df4-11eb-9e2b-b90bdf8b7ae7.png)

# Installation Webpages
  เว็บได้ใช้ react ในการสร้างผู้ที่ต้องการใช้จึงจำเป็นต้องทำตามขั้นตอนเพื่อที่จะสามารถใช้งานเว็บได้
  ## First
  1 ขั้นตอนเเรกให้พิม :
```
npm install
```
  2 ขั้นตอนต่อมาให้พิม :
```
npm start
```

API
```
file : swagger.json
```
  
