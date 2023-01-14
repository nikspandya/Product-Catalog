import { Row, Table, message, Button, Popconfirm } from 'antd';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { ColumnsType } from 'antd/lib/table';
import { EditOutlined, DeleteOutlined, EuroOutlined } from '@ant-design/icons';
import { productStore } from '../store/ProductStore';
import { fetchData } from './utils';
import { ProductType } from '../types/type';

export const ProductComponent = observer(() => {
  
  useEffect(() => {
    // Featch data from backend on initial page load
    fetchData();
  }, []);

  const handleDelete = (record: ProductType): void => {
    axios.delete(`http://localhost:8000/api/product/${record.id}/`)
      .then(function (response) {
        console.log(response);
        message.success(`Product '${record.name}' deleted successfully`);
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
        message.error('falied to delete product');
      });
  };

  const handleEdit = (record: ProductType): void => {
    productStore.setProductDetails(record);
  };

  const tableColumns: ColumnsType<ProductType> = [
    {
      title: 'Product Name',
      dataIndex: 'name',
    },
    {
      title: 'Product Price',
      dataIndex: 'price',
      render: (_, record) => (
        <div>
          <p>
            {record.price}
            {' '}
            <EuroOutlined />
          </p>
        
        </div>
      ),
    },
    {
      title: 'Product Status',
      render: (_, record) => (
        <div>
          {record.active ? <p>Active</p> : <p>Not Active</p>}
        </div>
      ),
    },
    {
      title: 'Action',
      render: (_, record) => (
        <>
          <Button
            type='text'
            icon={<EditOutlined />}
            onClick={(): void => handleEdit(record)}
          />

          <Popconfirm
            placement='topRight'
            title={(
              <p>
                Are you sure you want to delete product: &quot;
                <strong>{record.name}</strong>
                &quot;
              </p>
          )}
            onConfirm={(): void => handleDelete(record)}
            okText='Yes'
            cancelText='No'
          >
            <Button
              type='text'
              title='Delete Entry'
              icon={<DeleteOutlined style={{ color: 'red' }} />}
            />
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div>
      <Row align='middle'>
        <Table
          columns={tableColumns}
          dataSource={productStore.products}
          pagination={false}
          locale={{
            emptyText: <p> There is No Products to show</p>,
          }}
        />
      </Row>
    </div>
  );
});