import { sequelizeDB } from "../../../config/db";
import { DataTypes } from "sequelize";

export const Users = sequelizeDB.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mediaLink: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  },
);
