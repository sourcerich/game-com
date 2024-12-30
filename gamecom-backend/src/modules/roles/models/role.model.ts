import { sequelizeDB } from "../../../config/db";
import { DataTypes } from "sequelize";

export const Roles = sequelizeDB.define(
  "Roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  },
);
