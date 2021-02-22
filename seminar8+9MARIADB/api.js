//sa1 - sa1

import { app, router } from "./init/serverInit.js";
import {
  getOrders,
  getOrderbyId,
  addOrder,
  deleteOrder,
} from "./operations/dbOperations.js";

router.route("/orders").get((request, response) => {
  getOrders().then((result) => {
    response.json(result);
  });
});

router.route("/orderById/:id").get((request, response) => {
  getOrderbyId(request.params.id).then((result) => {
    response.json(result);
  });
});

router.route("/orders").post((request, response) => {
  let order = request.body;
  addOrder(order).then((result) => {
    response.json(result);
  });
});

router.route("/orderById/:id").delete((request, response) => {
  deleteOrder(request.params.id).then((result) => response.json(result));
});

var port = 8000;
app.listen(8000, () => console.log(`Server is listening to: ${port}...`));

/*CREATE TABLE Orders (
OrderId INT IDENTITY (1,1) PRIMARY KEY NOT NULL,
Title VARCHAR(20),
Quantity DECIMAL (18,2),
[Message] VARCHAR(256),
City VARCHAR(30)
)

CREATE TABLE Products (
ProductId INT IDENTITY (1,1) PRIMARY KEY NOT NULL,
Name VARCHAR(20),
Price DECIMAL(18, 2),
OrderId INT NOT NULL
CONSTRAINT FK_OrderId_Orders FOREIGN KEY (OrderId) REFERENCES Orders(OrderId)
)
 */
