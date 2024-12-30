import { Sequelize, Dialect } from "sequelize";
import { dbConfig } from "./db.config";

export const sequelizeDB = new Sequelize(
  dbConfig.DB || "",
  dbConfig.USER || "",
  dbConfig.PASSWORD || "",
  {
    host: dbConfig.HOST,
    port: Number(dbConfig.PORT),
    dialect: dbConfig.dialect as Dialect,
    dialectOptions: {
      multipleStatements: true,
      charset: "utf8mb4_general_ci",
    },
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
    logging: false,
  },
);

import { Categories } from "../modules/products/models/category.model";
import { Orders } from "../modules/orders/models/order.model";
import { ProductCategories } from "../modules/products/models/productCategory.model";
import { Products } from "../modules/products/models/product.model";
import { Reviews } from "../modules/reviews/models/review.model";
import { Roles } from "../modules/roles/models/role.model";
import { TransactionMethods } from "../modules/orders/models/transactionMethod.model";
import { Transactions } from "../modules/orders/models/transaction.model";
import { Users } from "../modules/users/models/user.model";

//Orders
Users.hasMany(Orders, {
  foreignKey: "customerId",
  sourceKey: "id",
});
Products.hasMany(Orders, {
  foreignKey: "productId",
  sourceKey: "id",
});
Transactions.hasMany(Orders, {
  foreignKey: "transactionId",
  sourceKey: "id",
});

//Product Categories
Products.hasMany(ProductCategories, {
  foreignKey: "productId",
  sourceKey: "id",
});
Categories.hasMany(ProductCategories, {
  foreignKey: "categoryId",
  sourceKey: "id",
});

//Products
Users.hasMany(Products, {
  foreignKey: "sellerId",
  sourceKey: "id",
});
Categories.hasMany(Products, {
  foreignKey: "categoryId",
  sourceKey: "id"
});

//Reviews
Users.hasMany(Reviews, {
  foreignKey: "userId",
  sourceKey: "id", 
});
Products.hasMany(Reviews, {
  foreignKey: "productId",
  sourceKey: "id",
});

//Transactions
Users.hasMany(Transactions, {
  foreignKey: "userId",
  sourceKey: "id",
});
TransactionMethods.hasMany(Transactions, {
  foreignKey: "methodId",
  sourceKey: "id",
});

//Users
Roles.hasMany(Users, {
  foreignKey: "roleId",
  sourceKey: "id",
});

export const db = {
  sequelizeDB,
  Sequelize,
  Global_table: global,
  Categories,
  Orders,
  ProductCategories,
  Products,
  Reviews,
  Roles,
  TransactionMethods,
  Transactions,
  Users,
};