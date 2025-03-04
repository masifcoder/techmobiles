// Create an order
const orderModel = require("../models/order.model");

const createOrder = async (req, res) => {
    try {
        const { items, totalPrice, discountedPrice } = req.body;

        const userId = req.userId;

        const order = new orderModel({ items, totalPrice, discountedPrice, userId });
        await order.save();

        res.status(201).json(order);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Failed to create order' });
    }
};

const getOrdersByUserId = async (req, res) => {
    try {
        const userId = req.userId;
        
        const orders = await orderModel.find({ userId })
            .sort({ createdAt: -1 }) // Sort by most recent first
            .populate('items.productId', 'name price images'); // Populate product details

        res.status(200).json(orders);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};

module.exports = {
    createOrder,
    getOrdersByUserId
};