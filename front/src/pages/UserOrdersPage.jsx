import React, { useState, useEffect } from 'react';
import { Table, Menu, Card, Tag, message } from 'antd';
import { ShoppingCart, Clock, CircleCheckBig, CircleOff } from 'lucide-react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { apiClient } from '../utils/apiClient';
import authApiClient from '../utils/authApiClient';

const columns = [
    {
        title: 'Order ID',
        dataIndex: '_id',
        key: '_id',
        render: (id) => <span className="font-mono">#{id.slice(-6)}</span>
    },
    {
        title: 'Date',
        dataIndex: 'createdAt',
        key: 'date',
        render: (date) => new Date(date).toLocaleDateString()
    },
    {
        title: 'Total',
        dataIndex: 'totalPrice',
        key: 'total',
        render: (price) => `$${price.toFixed(2)}`
    },
    {
        title: 'Discounted Total',
        dataIndex: 'discountedPrice',
        key: 'total',
        render: (price) => `$${price.toFixed(2)}`
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => (
            <Tag
                color={
                    status === 'pending' ? 'orange' :
                        status === 'completed' ? 'green' : 'blue'
                }
            >
                {status.toUpperCase()}
            </Tag>
        )
    }
];

const UserOrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState('all');
    const token = useSelector(state => state.authSlice.token);

    useEffect(() => {

        const fetchOrders = async () => {
            try {
                setLoading(true);
                const response = await authApiClient.get('/api/order/user-orders');
                setOrders(response.data);
            } catch (error) {
                message.error(error.response?.data?.message || 'Failed to fetch orders');
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchOrders();
        }
    }, [token]);

    const filteredOrders = filter === 'all' 
        ? orders 
        : orders.filter(order => order.status === filter);

    return (
        <>
            <Navbar />
            <div className=" max-w-7xl mx-auto  p-6">
                <h1 className='text-3xl my-3'>Your Orders</h1>
                <div className='flex gap-6'>
                    {/* Left Side - Filters */}
                    <div className="w-1/3">
                        <Card className="shadow-sm">
                            <Menu
                                mode="inline"
                                selectedKeys={[filter]}
                                onSelect={({ key }) => setFilter(key)}
                            >
                                <Menu.Item key="all" icon={<ShoppingCart size={16} />}>
                                    All Orders
                                </Menu.Item>
                                <Menu.Item key="pending" icon={<Clock size={16} />}>
                                    Pending Orders
                                </Menu.Item>
                                <Menu.Item key="completed" icon={<CircleCheckBig size={16} />}>
                                    Completed Orders
                                </Menu.Item>
                                <Menu.Item key="cancelled" icon={<CircleOff size={16} />}>
                                    Cancelled Orders
                                </Menu.Item>
                            </Menu>
                        </Card>
                    </div>
                    {/* Right Side - Table */}
                    <div className="w-2/3">

                        <Card className="shadow-sm">
                            <Table
                                columns={columns}
                                dataSource={filteredOrders}
                                rowKey="_id"
                                pagination={{ pageSize: 10 }}
                                scroll={{ x: true }}
                            />
                        </Card>
                    </div>

                </div>



            </div>
        </>

    );
};

export default UserOrdersPage;
