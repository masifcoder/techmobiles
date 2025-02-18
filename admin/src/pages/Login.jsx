import React, { useContext, useState } from 'react'
import { Form, Input, Button, Card } from "antd";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const onFinish = (values) => {
    console.log("Login Success:", values);


    axios.post("http://localhost:3003/user/login", values).then((res) => {

      if (res.data.status === "Ok") {
        navigate("/dashboard")
      }

    }).catch((err) => {

      console.log(err.response.data)
      setErrors(err.response.data.errors);

    }).finally(() => setLoading(false))

  };


  return (
    <Card title="Login" bordered={false} style={{ width: 500, margin: "auto", marginTop: 100 }}>
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
        <Form.Item name="email" rules={[{ required: true, message: "Please enter your email!", type: "email" }]}>
          <Input size="large" placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Please enter your password!" }]}>
          <Input.Password size="large" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button loading={loading} size="large" type="primary" htmlType="submit" block>Login</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
export default Login