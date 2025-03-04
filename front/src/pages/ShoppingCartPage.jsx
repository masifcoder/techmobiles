import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity } from "../redux/cartSlice";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import {resetCart} from "../redux/cartSlice";

const ShoppingCartPage = () => {
  const [couponCode, setCouponCode] = useState('');
  const cart = useSelector(state => state.cartState.cart);
  const [cartItems, setCartItems] = useState([]);
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const token = useSelector(state => state.authSlice.token);


  // update quantity in global state
  const updateStateQuantity = (id, newQty) => {
    dispatcher(updateQuantity({ id, newQty }));
  }

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 5.00; // Example discount value
  const total = subtotal - discount;


  // place order
  const placeOrder = async () => {
    setLoading(true);
    try {
       // Get token from Redux store
      if (token == null) {
        navigate("/login");
      }
      const orderData = {
        items: cartItems,
        totalPrice: subtotal,
        discountedPrice: total
      }

      const response = await axios.post('http://localhost:3000/api/order/create', orderData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setLoading(false);
      if (response.data) {
        // Show success message
        message.success({
          content: 'Order placed successfully!',
          duration: 1,
          style: { position: 'fixed', top: 20, right: 20 }
        });
        
        // Empty the cart (assuming you have a cart state and setCart function)
        dispatcher(resetCart());
        setCartItems([]);
        
        return response.data;
      }
    } catch (error) {
      setLoading(false);
      message.error({
        content: error.response?.data?.message || 'Failed to place order',
        duration: 2,
        style: { position: 'fixed', top: 20, right: 20 }
      });
      throw error;
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column - Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                <h1 className="text-2xl font-semibold mb-1">Shopping Bag</h1>
                <p className="text-gray-600 mb-6">{cartItems.length} items in your bag.</p>

                <div className="border-b pb-2 mb-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                      <h2 className="font-semibold">Product</h2>
                    </div>
                    <div className="col-span-2 text-right">
                      <h2 className="font-semibold">Price</h2>
                    </div>
                    <div className="col-span-2 text-center">
                      <h2 className="font-semibold">Quantity</h2>
                    </div>
                    <div className="col-span-2 text-right">
                      <h2 className="font-semibold">Total Price</h2>
                    </div>
                  </div>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="py-4 border-b">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-32 object-cover rounded"
                          />
                          <div>
                            <p className="text-gray-500 text-sm">{item.brand}</p>
                            <h3 className="font-medium">{item.name}</h3>
                            <div className="mt-2 text-sm">
                              <div className="flex items-center space-x-2">
                                <span className="text-gray-600">Color:</span>
                                <span>{item.color}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-gray-600">Size:</span>
                                <span>{item.size}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-2 text-right">
                        <span>${item.price.toFixed(2)}</span>
                      </div>

                      <div className="col-span-2">
                        <div className="flex items-center justify-center">
                          <button
                            className="w-8 h-8 border rounded-full flex items-center justify-center"
                            onClick={() => updateStateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="w-8 h-8 border rounded-full flex items-center justify-center"
                            onClick={() => updateStateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="col-span-2 text-right text-amber-500 font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Summary and Shipping */}
            <div className="lg:w-1/3">
              {/* Shipping Calculator */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                <div className="">
                  <h2 className="text-xl font-semibold mb-4">Coupon Code</h2>
                  <p className="text-gray-500 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Design by Fluttertop
                  </p>

                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="border rounded p-3 w-full"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                  </div>

                  <button className="w-full bg-black text-white rounded py-3 font-medium">
                    Apply
                  </button>
                </div>
              </div>

              {/* Cart Total */}
              <div className="bg-amber-100 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Cart Total</h2>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Cart Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Design by Fluttertop</span>
                    <span>Free</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span>${discount.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Cart Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button loading={loading} onClick={placeOrder} className="cursor-pointer w-full bg-white rounded py-3 font-medium">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;