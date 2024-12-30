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

import { Address } from "..//modules/Address/model/address.model";
import { Consignee } from "..//modules/Address/model/consignee.model";
import { Customer } from "..//modules/customer/model/customer.model";
Address.hasMany(Consignee, {
  foreignKey: "addressId",
  sourceKey: "id",
});
Customer.hasMany(Address, {
  foreignKey: "customerId",
  sourceKey: "id",
});

export const db = {
  sequelizeDB,
  Sequelize,
  Global_table: global,
  Address,
  Customer,
  Consignee,
};