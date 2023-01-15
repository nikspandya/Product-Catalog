import 'antd/dist/antd.css';
import { Affix, Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';

export const LayoutComponent = ({
  children,
}: Record<string, JSX.Element>): JSX.Element => {
  return (
    <Layout>
      <Affix offsetTop={1}>
        <Header
          style={{
            background: '#20B2AA',
            textAlign: 'center',
            fontSize: '30px',
          }}
        >
          Products Catalog
        </Header>
      </Affix>
      <Content>
        <div className='body'>{children}</div>
      </Content>
    </Layout>
  );
};