import Sequelize from "sequelize";

const sequelize = new Sequelize("database1", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {
    // options: {
    //   trustedConnection: true,
    //   enableArithAbort: true,
    // },
  },
});

export const Orders = sequelize.define("Orders", {
  OrderId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: true,
  },
  Title: {
    type: Sequelize.STRING,
  },
  Quantity: {
    type: Sequelize.DECIMAL(18, 2),
  },
  Message: {
    type: Sequelize.STRING,
  },
  City: {
    type: Sequelize.STRING,
  },
});

export const Products = sequelize.define("Products", {
  ProductId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  ProductName: {
    type: Sequelize.STRING,
  },
  ProductPrice: {
    type: Sequelize.DECIMAL(18, 2),
  },
});

Orders.hasMany(Products, { foreignKey: "OrderId", foreignKeyConstraint: true });
// Products.belongsTo(Orders, {
//   foreignKey: "OrderId",
//   foreignKeyConstraint: true,
// });

export const Books = sequelize.define("Books", {
  BookId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  BookName: {
    type: Sequelize.STRING,
  },
});

export const Authors = sequelize.define("Authors", {
  AuthorId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  AuthorName: {
    type: Sequelize.STRING,
  },
});

export const AuthorsXBooks = sequelize.define("AuthorsXBooks", {
  Id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
});

Books.belongsToMany(Authors, {
  through: { model: AuthorsXBooks },
  foreignKey: "BooksId",
  foreignKeyConstraint: true,
});

Authors.belongsToMany(Books, {
  through: { model: AuthorsXBooks },
  foreignKey: "AuthorId",
  foreignKeyConstraint: true,
});



sequelize
  .authenticate()
  .then(() => console.log("Sequelize has successfully connected to database"))
  .catch((err) => console.error("Unable to connect to the database: " + err));

sequelize
  .sync({ force: false, alter: false })
  .then(() => {
    console.log("Sync complete!");
  })
  .catch((err) => console.log("Error at creating: " + err));
