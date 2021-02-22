import sql from "mssql";
import { config } from "../config/dbconfig.js";

export async function getOrders() {
  try {
    let pool = await sql.connect(config); //ne conectam la bd
    let records = await pool.request().query("Select * from Orders"); //preluam inregistrarile
    return records.recordsets;
  } catch (err) {
    console.log(err);
  }
}

export async function getOrderbyId(orderId) {
  try {
    let pool = await sql.connect(config);
    let records = await pool
      .request()
      .input("input_parameter", sql.Int, orderId)
      .query("Select * from Orders where OrderId = @input_parameter");
    return records.recordsets;
  } catch (err) {
    console.log(err);
  }
}

export async function addOrder(order) {
  try {
    let pool = await sql.connect(config);
    let insertedProduct = await pool
      .request()
      .input("Title", sql.VarChar, order.Title)
      .input("Quantity", sql.Decimal, order.Quantity)
      .input("Message", sql.VarChar, order.Message)
      .input("City", sql.VarChar, order.City)
      .query("Insert into Orders Select @Title, @Quantity,@Message,@City");
    return insertedProduct.recordsets;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteOrder(orderId) {
  try {
    let pool = await sql.connect(config);
    await pool
      .request()
      .input("input_parameter", sql.Int, orderId)
      .query("Delete from Orders where OrderId = @input_parameter");
    return `Order with id ${orderId} was deleted`;
  } catch (err) {
    console.log(err);
  }
}
