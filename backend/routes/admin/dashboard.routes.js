const express = require("express");

const dashboardRouter = express.Router();
const  { totalCardsData, totalSalesRevenue } = require("../../controllers/admin/dashboard.controller");
const { adminCheckMiddleware } = require("../../middlewares/auth.middleware");


dashboardRouter.get('/totalCards', adminCheckMiddleware, totalCardsData);
dashboardRouter.get('/totalSalesRevenue', adminCheckMiddleware, totalSalesRevenue);


module.exports = dashboardRouter;