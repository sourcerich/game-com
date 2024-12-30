import { sequelizeDB } from "../../../config/db";
import { DataTypes } from "sequelize";
import { TransactionStatusEnum } from "../../../utils/status.transaction";

export const Transactions = sequelizeDB.define(
  "Transactions",
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
    methodId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM,
      values: Object.values(TransactionStatusEnum),
      defaultValue: null
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  },
  {
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  },
);
