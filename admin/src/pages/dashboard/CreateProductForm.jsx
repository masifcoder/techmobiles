import React, { useState } from "react";
import { Form, Input, InputNumber, Upload, Button, Select, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const { Option } = Select;

const RAM_OPTIONS = ["2GB", "4GB", "6GB", "8GB", "12GB", "16GB", "32GB"];
const STORAGE_OPTIONS = ["16GB", "32GB", "64GB", "128GB", "256GB", "512GB", "1TB"];
const SCREEN_SIZE_OPTIONS = ["5.0 inches", "5.5 inches", "6.0 inches", "6.5 inches", "7.0 inches"];
const CAMERA_PIXEL_OPTIONS = ["8MP", "12MP", "16MP", "32MP", "48MP", "64MP", "108MP"];

const CreateProductForm = () => {
    const [form] = Form.useForm();
    const [description, setDescription] = useState("");

    const onFinish = async (values) => {
        try {
            const productData = {
                ...values,
                description
            };

            const response = await axios.post('http://localhost:3000/api/product/create', productData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            message.success('Product created successfully!');
            form.resetFields();
            setDescription("");
        } catch (error) {
            message.error(error.response?.data?.message || 'Failed to create product');
            console.error('Error creating product:', error);
        }
    };

    return (
        <>
            <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{}}>
                <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter the product name" }]}>
                    <Input size="large" placeholder="Enter product name" />
                </Form.Item>
                
                <div style={{ display: 'flex', gap: '16px' }}>
                    <Form.Item 
                        name="price" 
                        label="Price" 
                        rules={[{ required: true, message: "Please enter the price" }]}
                        style={{ flex: 1 }}
                    >
                        <InputNumber size="large" placeholder="Enter price" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        name="discounted_price"
                        label="Discounted Price"
                        dependencies={['price']}
                        style={{ flex: 1 }}
                        rules={[{
                            validator: async (_, value) => {
                                const price = form.getFieldValue('price');
                                if (value && price && value >= price) {
                                    throw new Error('Discounted price must be less than regular price');
                                }
                            },
                        }]}>
                        <InputNumber size="large" placeholder="Enter discounted price" style={{ width: "100%" }} />
                    </Form.Item>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <Form.Item 
                        name="ram" 
                        label="RAM" 
                        rules={[{ required: true, message: "Please select RAM" }]}
                        style={{ flex: 1 }}
                    >
                        <Select size="large" placeholder="Select RAM">
                            {RAM_OPTIONS.map((ram) => (
                                <Option key={ram} value={ram}>{ram}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item 
                        name="storage" 
                        label="Storage" 
                        rules={[{ required: true, message: "Please select storage capacity" }]}
                        style={{ flex: 1 }}
                    >
                        <Select size="large" placeholder="Select Storage">
                            {STORAGE_OPTIONS.map((storage) => (
                                <Option key={storage} value={storage}>{storage}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <Form.Item 
                        name="screensize" 
                        label="Screen Size" 
                        rules={[{ required: true, message: "Please select screen size" }]}
                        style={{ flex: 1 }}
                    >
                        <Select size="large" placeholder="Select Screen Size">
                            {SCREEN_SIZE_OPTIONS.map((size) => (
                                <Option key={size} value={size}>{size}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item 
                        name="cameraPixels" 
                        label="Camera Pixel" 
                        rules={[{ required: true, message: "Please select camera pixel" }]}
                        style={{ flex: 1 }}
                    >
                        <Select size="large" placeholder="Select Camera Pixel">
                            {CAMERA_PIXEL_OPTIONS.map((pixel) => (
                                <Option key={pixel} value={pixel}>{pixel}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <Form.Item 
                        name="brand" 
                        label="Brand" 
                        rules={[{ required: true, message: "Please select a brand" }]}
                        style={{ flex: 1 }}
                    >
                        <Select size="large" placeholder="Select brand">
                            <Option value="Apple">Apple</Option>
                            <Option value="Samsung">Samsung</Option>
                            <Option value="OnePlus">OnePlus</Option>
                            <Option value="Xiaomi">Xiaomi</Option>
                            <Option value="Realme">Realme</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item 
                        name="model" 
                        label="Model" 
                        rules={[{ required: true, message: "Please enter model" }]}
                        style={{ flex: 1 }}
                    >
                        <Input size="large" placeholder="Enter model" />
                    </Form.Item>
                </div>

                <Form.Item name="images" label="Upload Images">
                    <Upload multiple listType="picture-card" beforeUpload={() => false}>
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>

                <Form.Item label="Description" name="description" rules={[{ required: true, message: "Please enter product description" }]}>
                    <ReactQuill 
                        value={description} 
                        onChange={setDescription} 
                        style={{ height: '300px', marginBottom: '50px' }}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form >
        </>
    );
};

export default CreateProductForm;
