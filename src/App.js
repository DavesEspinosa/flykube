import React, { useContext } from 'react'
import { GlobalContext } from './context/Store'
import { Form, Input, Divider, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from './logo.svg';
import './App.css';

function App() {
  const { getRandomUser, switchDisabled, isActive } = useContext(GlobalContext);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    getRandomUser(values.name)
    form.resetFields()
  };

  return (
    <>
    <div className="App">
        <div className='test'>
          <Button type="primary" shape="round" size="large" onClick={() => switchDisabled(false)}>
            Active
          </Button>
          <Divider style={{height:"2.9rem", margin:"0 2rem"}} type="vertical" />
          <Button type="secondary" shape="round" size="large" onClick={() => switchDisabled(true)} >
            Inactive
          </Button>
        </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form
          form={form}
          size="large"
          onFinish={onFinish}
          autoComplete="off"
        >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input a name!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
        </Form.Item>

        <Form.Item>
        <Button type="primary" shape='round' htmlType="submit" disabled={isActive} >
          ENVIAR
        </Button>
      </Form.Item>
        </Form>
      </div>
    </div>
    </>
    )
}

export default App;
