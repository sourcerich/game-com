import { sequelizeDB } from "../../../config/db";
import { DataTypes } from "sequelize";

export const Products = sequelizeDB.define(
  "Products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mediaLink: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  },
);
