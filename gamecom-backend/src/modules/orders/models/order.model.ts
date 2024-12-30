import { sequelizeDB } from "../../../config/db";
import { DataTypes } from "sequelize";
import { OrderStatusEnum } from "../../../utils/status.order";

export const Orders = sequelizeDB.define(
  "Orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transactionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM,
      values: Object.values(OrderStatusEnum),
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
