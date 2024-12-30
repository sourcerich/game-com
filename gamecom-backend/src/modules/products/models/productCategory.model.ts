import { sequelizeDB } from "../../../config/db";
import { DataTypes } from "sequelize";

export const ProductCategories = sequelizeDB.define(
  "ProductCategories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  },
);
