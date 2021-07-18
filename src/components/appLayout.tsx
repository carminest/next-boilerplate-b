import { Router, useRouter } from 'next/router';
import React, { useState, useCallback } from 'react';
import Body from './body';
import Footer from './footer';
import Header from './header';
import styled from '@src/commons/style/themes/styled';
import Color from '@src/commons/style/themes/colors';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <AppLayoutContainer>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </AppLayoutContainer>
  );
};

const AppLayoutContainer = styled.div`
  position: relative;
`;

const Content = styled.div`
  min-height: 85vh;
  border: 1px solid ${Color.White};
  background-color: ${Color.White};
  max-width: 1920px;
  min-width: 1080px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
`;

export default AppLayout;
