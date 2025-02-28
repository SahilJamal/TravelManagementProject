import Order from "../models/Order.model.js";
import User from "../models/User.model.js";
import Trip from "../models/Trip.model.js";
import { calcPrices } from "../utils/calcPrices.js";
import { checkIfNewTransaction, verifyPayPalPayment } from "../utils/paypal.js";

const getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    if (orders) {
      res.status(200).json(orders);
    } else {
      throw new Error("No Orders Found");
    }
  } catch (error) {
    next(error);
    console.log("error", error);
  }
};

const getOrderById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id).populate({
      path: "user",
      model: User,
      select: "name email",
    });
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404);
      throw new Error("Order Not found");
    }
  } catch (error) {
    next(error);
    console.log("error", error);
  }
};

const updateOrderToPaid = async (req, res, next) => {
  const { id } = req.params;
  try {
    // const products = await Order.find({});
    const { verified, value } = await verifyPayPalPayment(req.body.id);
    if (!verified) throw new Error("Payment not verified");

    // check if this transaction has been used before
    const isNewTransaction = await checkIfNewTransaction(Order, req.body.id);
    if (!isNewTransaction) throw new Error("Transaction has been used before");
    const order = await Order.findById(id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updatedOrder = await order.save();
      res.status(200).json(updatedOrder);
    } else {
      res.status(404);
      throw new Error("Order not found");
    }
  } catch (error) {
    next(error);

    console.log("error", error);
  }
};

const updateOrderToDelivered = async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      throw new Error("No order found");
    }
  } catch (error) {
    next(error);

    console.log("error", error);
  }
};

const addOrderItems = async (req, res, next) => {
  const { orderItems, shippingAddress, paymentMethod } = req.body;
  try {
    if (orderItems && orderItems.length === 0) {
      throw new Error("No order Items");
    } else {
      const itemsFromDB = await Trip.find({
        _id: { $in: orderItems.map((x) => x._id) },
      });

      // map over the order items and use the price from our items from database
      const dbOrderItems = orderItems.map((itemFromClient) => {
        const matchingItemFromDB = itemsFromDB.find(
          (itemFromDB) => itemFromDB._id.toString() === itemFromClient._id
        );
        return {
          ...itemFromClient,
          product: itemFromClient._id,
          price: matchingItemFromDB.price,
          _id: undefined,
        };
      });

      // calculate prices
      const { itemsPrice, taxPrice, shippingPrice, totalPrice } =
        calcPrices(dbOrderItems);

      const order = new Order({
        orderItems: orderItems?.map((item) => ({
          ...item,
          product: item._id,
          _id: undefined,
        })),
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });
      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  } catch (error) {
    next(error);

    console.log("error", error);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const products = await Order.find({}).populate({
      model: User,
      path: "user",
      select: "name email",
    });
    res.json(products);
  } catch (error) {
    next(error);

    console.log("error", error);
  }
};

export {
  addOrderItems,
  getUserOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
};
