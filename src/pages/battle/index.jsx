import { Outlet, useNavigate } from 'react-router-dom';

import React from 'react';
import { Content, Header, Layout, PopularLink } from '@/components';

function Index() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header>
        <PopularLink
          onClick={() => {
            navigate('/home');
          }}
        />
        <h1 className="flex" style={{ fontSize: 24 }}>
          BATTLE
        </h1>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default Index;
