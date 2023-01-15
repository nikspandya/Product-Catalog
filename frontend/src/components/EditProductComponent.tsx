import { Modal, Form, Input, Button, message, Checkbox } from 'antd';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { productStore } from '../store/ProductStore';
import { fetchData, SERVER_URL } from './utils';

export const EditProductComponent = observer(() => {
  const [form] = Form.useForm();

  const handleCancel = (): void => {
    productStore.setIsProductBeingEdited(false);
  };

  const onFinish = (productInfo: any): void => {
    const productId = productStore.productDetails.id;
    console.log(productId);
    axios
      .put(`${SERVER_URL}${productId}/`, {
        name: productInfo.productName,
        description: productInfo.description,
        price: productInfo.price,
        picture: productInfo.picture,
        active: productInfo.active,
      })
      .then(function (response) {
        console.log(response);
        message.success(
          `Product '${productInfo.productName}' updated successfully`,
        );
        form.resetFields();
        productStore.setIsProductBeingEdited(false);
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
        message.error('falied to update product');
      });
  };

  const onFinishFailed = (errorInfo: any): void => {
    message.error('falied to edit product');
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Modal
        title='Edit product'
        open={productStore.isProductBeingEdited}
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
            initialValue={productStore.productDetails.name}
            rules={[{ required: true, message: 'Please input product name!' }]}
          >
            <Input maxLength={50} />
          </Form.Item>

          <Form.Item
            label='Description'
            name='description'
            initialValue={productStore.productDetails.description}
            rules={[
              { required: true, message: 'Please input product description!' },
            ]}
          >
            <Input maxLength={300} />
          </Form.Item>

          <Form.Item
            label='Price'
            name='price'
            initialValue={productStore.productDetails.price}
            rules={[{ required: true, message: 'Please input product price!' }]}
          >
            <Input maxLength={25} />
          </Form.Item>

          <Form.Item
            label='Picture Url'
            name='picture'
            initialValue={productStore.productDetails.picture}
          >
            <Input maxLength={100} />
          </Form.Item>

          <Form.Item
            name='active'
            initialValue={productStore.productDetails.active}
            valuePropName='checked'
            wrapperCol={{ offset: 6, span: 10 }}
          >
            <Checkbox>Active</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6 }}>
            <Button type='primary' htmlType='submit'>
              Update Product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
});