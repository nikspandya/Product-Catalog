import { Col, Row, Card, Divider, Image, Button } from 'antd';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { getDiscountPrice } from '../../../components/utils';
import { productStore } from '../../../store/ProductStore';

const DIVIDER_MARGIN = 10;

const Product: NextPage = () => {
  return (
    <div>
      <Row justify='end' style={{ marginBottom: 10 }}>
        <Col>
          <Link href='/'> 
            <Button> Back To All Products</Button>
          </Link>
        </Col>
      </Row>
      <Card title="Product Info" style={{ width: 600 }}>
        <Row>
          <Col span={8}>
            Name:
          </Col>
          <Col span={15}>
            {productStore.productDetails.name}
          </Col>
        </Row>
        <Divider
          style={{ marginTop: DIVIDER_MARGIN }}
        />
        <Row>
          <Col span={8}>
            Description:
          </Col>
          <Col span={15}>
            {productStore.productDetails.description}
          </Col>
        </Row>
        <Divider
          style={{ marginTop: DIVIDER_MARGIN }}
        />
        <Row>
          <Col span={8}>
            Original Price:
          </Col>
          <Col span={15}>
            {productStore.productDetails.price}
          </Col>
        </Row>
        <Divider
          style={{ marginTop: DIVIDER_MARGIN }}
        />
        <Row>
          <Col span={8}>
            Current Price:
          </Col>
          <Col span={15}>
            {getDiscountPrice(productStore.productDetails.price)}
          </Col>
        </Row>
        <Divider
          style={{ marginTop: DIVIDER_MARGIN }}
        />
        <Row>
          <Col span={8}>
            Status:
          </Col>
          <Col span={15}>
            {productStore.productDetails.active ? <p>Active</p> : <p>Not Active</p>}
          </Col>
        </Row>
        <Divider
          style={{ marginTop: DIVIDER_MARGIN }}
        />
        <Row>
          <Col span={8}>
            Picture:
          </Col>
          <Col span={15}>
            {productStore.productDetails.picture === '' ? 
              <p style={{ color: 'gray' }}>No picture availabe</p> :  (
                <Image
                  width={200}
                  src={`${productStore.productDetails.picture}`}
                />
              )}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Product;