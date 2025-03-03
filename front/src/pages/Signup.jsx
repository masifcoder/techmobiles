import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Button, Card, message } from "antd";
import { useSelector, useDispatch } from "react-redux"
import { signupUser } from '../redux/authSlice';

const Signup = () => {

    const navigate = useNavigate();
    const { loading, errors, isLogin } = useSelector((state) => state.authSlice);
    const dispatcher = useDispatch();

    // runs on form submit  
    const onFinish = async (values) => {
        try {
            const result = await dispatcher(signupUser(values)).unwrap();
            if (result) {
                message.success('Signup successful! Please login.');
                navigate('/login');
            }
        } catch (error) {
            message.error(error.message || 'Signup failed');
        }
    };


    return (
        <Card title="Sign Up" style={{ width: 560, margin: "auto", marginTop: 100 }}>

            {
                errors && <div className='bg-red-100 p-5 rounded-sm mb-4'>
                    <h4 className='text-red-400 text-xl font-bold mt-4'>Errors occured</h4>
                    <ul className="list-disc ps-10">

                        {
                            Array.isArray(errors) ? (
                                errors.map(er => {
                                    return (<>
                                        <li className=''>{er.message}</li>
                                    </>)
                                })
                            ) : <li className="">{errors}</li>

                        }

                    </ul>
                </div>
            }

            <Form onFinish={onFinish}>
                <Form.Item name="name" rules={[{ required: true, message: "Please enter your name!", type: "text" }]}>
                    <Input size="large" placeholder="Name" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: "Please enter your email!", type: "email" }]}>
                    <Input size="large" placeholder="Email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: "Please enter your password!" }]}>
                    <Input.Password size="large" placeholder="Password" />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                        { required: true, message: "Please confirm your password!" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error("Passwords do not match!"));
                            },
                        }),
                    ]}
                >
                    <Input.Password size='large' placeholder="Confirm Password" />
                </Form.Item>
                <Form.Item>
                    <Button loading={loading} size='large' type="primary" htmlType="submit" block>Sign Up</Button>
                </Form.Item>
            </Form>
            <Link to="/login">Already have an account? Login</Link>
        </Card>
    )
}

export default Signup