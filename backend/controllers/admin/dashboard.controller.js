const orderModel = require("../../models/order.model");



const totalCardsData = async (req, res) => {
    try {
        const totalOrders = await orderModel.countDocuments();
        const totalSales = await orderModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: '$totalPrice' }
                }
            }
        ]);

        const totalRevenue = totalSales.length > 0 ? totalSales[0].totalRevenue : 0;

        res.status(200).json({
            totalOrders,
            totalRevenue
        });
    } catch (error) {
        console.error('Error fetching order stats:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const totalSalesRevenue = async (req, res) => {
    try {
        const orders = await orderModel.aggregate([
            {
                $group: {
                    _id: { $month: "$createdAt" },
                    totalSales: { $sum: { $size: "$items" } },
                    totalRevenue: { $sum: "$totalPrice" }
                }
            },
            {
                $sort: { "_id": 1 }
            }
        ]);

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const salesData = Array(12).fill(0);
        const revenueData = Array(12).fill(0);

        orders.forEach(order => {
            const monthIndex = order._id - 1;
            salesData[monthIndex] = order.totalSales;
            revenueData[monthIndex] = order.totalRevenue;
        });

        res.json({ months, salesData, revenueData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {totalCardsData, totalSalesRevenue}