import { sequelizeDB } from "../../../config/db";
import { DataTypes } from "sequelize";

export const Reviews = sequelizeDB.define(
  "Reviews",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    content: {
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
