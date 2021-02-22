const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");

// TODO - Sequelize instance
const db = new Sequelize("database1", "sa1", "sa1", {
  host: "localhost",
  dialect: "mssql",
  dialectOptions: {
    options: {
      trustedConnection: true,
      enableArithAbort: true,
    },
  },
});

let FoodItem = db.define(
  "foodItem",
  {
    name: Sequelize.STRING,
    category: {
      type: Sequelize.STRING,
      validate: {
        len: [3, 10],
      },
      allowNull: false,
    },
    calories: Sequelize.INTEGER,
  },
  {
    timestamps: false,
  }
);

const app = express();
// TODO
app.use(bodyParser.json());

app.get("/create", async (req, res) => {
  try {
    await db.sync({ force: true });
    for (let i = 0; i < 10; i++) {
      let foodItem = new FoodItem({
        name: "name " + i,
        category: ["MEAT", "DAIRY", "VEGETABLE"][Math.floor(Math.random() * 3)],
        calories: 30 + i,
      });
      await foodItem.save();
    }
    res.status(201).json({ message: "created" });
  } catch (err) {
    console.warn(err.stack);
    res.status(500).json({ message: "server error" });
  }
});

app.get("/food-items", async (req, res) => {
  try {
    let foodItems = await FoodItem.findAll();
    res.status(200).json(foodItems);
  } catch (err) {
    console.warn(err.stack);
    res.status(500).json({ message: "server error" });
  }
});

app.post("/food-items", async (req, res) => {
  try {
    // TODO
    const foodItem = {
      name: req.body.name,
      category: req.body.category,
      calories: req.body.calories,
    };

    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ message: "body is missing" });
    } else if (!foodItem.name || !foodItem.category || !foodItem.calories) {
      res.status(400).json({ message: "malformed request" });
    } else if (foodItem.calories < 0) {
      res.status(400).json({ message: "calories should be a positive number" });
    } else if (foodItem.category.length < 3 || foodItem.category.length > 10) {
      res.status(400).json({ message: "not a valid category" });
    } else {
      await FoodItem.create(foodItem);
      res.status(201).send({ message: "created" });
    }
  } catch (err) {
    // TODO
    console.warn(err.stack);
    res.status(500).json({ message: "server error" });
  }
});

module.exports = app;
