import { Button, Checkbox, Form, Input, message, Modal } from 'antd';
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { fetchData } from './utils';

export const AddProductComponent = observer(() => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  const onFinish = (productInfo: any): void => {

    axios.post('http://localhost:8000/api/product/', {
      name: productInfo.productName,
      description: productInfo.description,
      price: productInfo.price,
      picture: productInfo.picture,
      active: productInfo.active,
    })
      .then(function (response) {
        console.log(response);
        message.success(`New product '${productInfo.productName}' added successfully`);
        form.resetFields();
        setIsModalOpen(false);
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
        message.error('falied to add New product');
      });
  };

  const onFinishFailed = (errorInfo: any): void => {
    message.error('falied to add New product');
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Button onClick={showModal} style={{ color: 'blue' }}>
        Add New Product
      </Button>
      <Modal
        title='Add New product'
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        destroyOnClose
      >
        <Form
          form={form}
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          labelAlign='left'
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='Product Name'
            name='productName'
            rules={[{ required: true, message: 'Please input product name!' }]}
          >
            <Input maxLength={50} />
          </Form.Item>

          <Form.Item
            label='Description'
            name='description'
            rules={[
              { required: true, message: 'Please input product description!' },
            ]}
          >
            <Input maxLength={300} />
          </Form.Item>

          <Form.Item
            label='Price'
            name='price'
            rules={[{ required: true, message: 'Please input product price!' }]}
          >
            <Input type='number' maxLength={25} />
          </Form.Item>

          <Form.Item
            label='Picture Url'
            name='picture'
          >
            <Input maxLength={100} />
          </Form.Item>

          <Form.Item name="active" initialValue={false} valuePropName="checked" wrapperCol={{ offset: 6, span: 10 }}>
            <Checkbox>Active</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6 }}>
            <Button type='primary' htmlType='submit'>
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
});