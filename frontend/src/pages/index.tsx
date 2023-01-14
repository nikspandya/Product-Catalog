import type { NextPage } from 'next';
import React from 'react';
import { ProductComponent } from '../components/ProductComponent';

const Home: NextPage = () => {
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default Home;