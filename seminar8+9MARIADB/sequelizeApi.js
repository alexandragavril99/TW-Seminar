import { app, router } from "./init/serverInit.js";
import { Authors, Books, Orders, Products } from "./sequelize/sequelize.js";
import seq from "sequelize";

// ----- ORDERS ----- //
router.route("/sequelize/orders").get((request, response) => {
  // const result = await Orders.findAll();
  // response.json(result); punem await la (req,res)
  Orders.findAll().then((result) => response.json(result));
});

router.route("/sequelize/orders/:id").get((req, res) => {
  // Orders.findAll({
  //     where: {
  //         OrderId: req.params.id
  //     }
  // }).then(result=> res.json(result))

  Orders.findByPk(req.params.id).then((result) => res.json(result));
});

router.route("/sequelize/ordersWithSearch").get((req, res) => {
  Orders.findAll({
    where: {
      Title: req.query.Title,
    },
  }).then((result) => res.json(result));
});

router.route("/sequelize/ordersWithLike").get((req, res) => {
  Orders.findAll({
    where: {
      Title: { [seq.Op.like]: `%${req.query.Title}%` },
    },
  }).then((result) => res.json(result));
});

router.route("/sequelize/orders").post((req, res) => {
  Orders.create({
    Title: req.body.Title,
    Quantity: req.body.Quantity,
    Message: req.body.Message,
    City: req.body.City,
  }).then((result) => res.json(result));
});

router.route("/sequelize/orders/:id").put((req, res) => {
  Orders.findByPk(req.params.id).then((record) => {
    record
      .update({
        Title: req.body.Title,
        Quantity: req.body.Quantity,
        Message: req.body.Message,
        City: req.body.City,
      })
      .then((result) => res.json(result));
  });
});

router.route("/sequelize/orders/:id").delete((req, res) => {
  Orders.findByPk(req.params.id)
    .then((record) => {
      record.destroy();
    })
    .then(() =>
      res.json(`The order with the id ${req.params.id} was deleted!`)
    );
});

router.route("/sequelize/ordersWithAggregate").get((req, res) => {
  Orders.findAll({
    attributes: [[seq.fn("SUM", seq.col("Quantity")), "TotalQuantity"]],
    where: {
      Quantity: {
        [seq.Op.lte]: 30.0,
      },
    },
  }).then((result) => res.json(result));
});

// ----- ORDERS ----- //

// ----- ORDERS WITH PRODUCTS(1:N) ----- //

router.route("/sequelize/ordersWithProducts").get((req, res) => {
  Orders.findAll({
    include: [
      {
        model: Products,
      },
    ],
  }).then((result) => res.json(result));
});

router.route("/sequelize/ordersWithProducts/search").get((req, res) => {
  Orders.findAll({
    include: [
      {
        model: Products,
        where: {
          ProductPrice: {
            [seq.Op.gt]: 25,
          },
        },
      },
    ],
  }).then((result) => res.json(result));
});

router.route("/sequelize/ordersWithProducts").post((req, res) => {
  Orders.create({
    Title: req.body.Title,
    Quantity: req.body.Quantity,
    Message: req.body.Quantity,
    City: req.body.City,
  }).then((order) => {
    req.body.Products.forEach((product) => {
      Products.create({
        ProductName: product.ProductName,
        ProductPrice: product.ProductPrice,
        OrderId: order.OrderId,
      }).then(() => res.json("Orders with products inserted!"));
    });
  });
});

// ----- ORDERS WITH PRODUTCS(1:N) ----- //

// ----- BOOKS WITH AUTHORS(M:N) ----- //

router.route("/sequelize/AuthorsWithBooks").get((req, res) => {
  Authors.findAll({
    include: [
      {
        model: Books,
      },
    ],
  }).then((result) => res.json(result));
});

// ----- BOOKS WITH AUTHORS(M:N) ----- //

var port = 8080;
app.listen(port, () => {
  console.log("Sequelize API listening to port " + port);
});
