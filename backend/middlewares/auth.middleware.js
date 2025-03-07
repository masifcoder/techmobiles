const jwt = require('jsonwebtoken');
require('dotenv').config();
const userModel = require('../models/user.model');

const authMiddleware = async (req, res, next) => {
    try {
        // Check if Authorization header exists
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: 'Authorization header missing' });
        }

        // Check if the header format is correct (Bearer token)
        if (!authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Invalid authorization format. Use Bearer token' });
        }

        // Extract the token
        const token = authHeader.split(' ')[1];

        // verify token is correct
        const encoded = jwt.verify(token, process.env.JWT_KEY);
        req.userId = encoded.id;
        const user = await userModel.findById(encoded.id);
        req.role = user.role;

        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired' });
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const adminCheckMiddleware = async (req, res, next) => {
    try {
        // Check if Authorization header exists
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: 'Authorization header missing' });
        }

        // Check if the header format is correct (Bearer token)
        if (!authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Invalid authorization format. Use Bearer token' });
        }

        // Extract the token
        const token = authHeader.split(' ')[1];

        // verify token is correct
        const encoded = jwt.verify(token, process.env.JWT_KEY);
        req.userId = encoded.id;
        const user = await userModel.findById(encoded.id);
        if(user.role !== 'admin') {
            return res.status(401).json({ message: 'You are not authorized' });
        }
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired' });
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Role-based authorization middleware
const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Unauthorized access' });
        }

        next();
    };
};

module.exports = { authMiddleware, authorize, adminCheckMiddleware };
