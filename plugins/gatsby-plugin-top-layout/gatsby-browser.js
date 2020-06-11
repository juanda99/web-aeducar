/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import TopLayout from './TopLayout';
import Layout from "../../src/components/Layout";


export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};


export const wrapPageElement = ({ element, ...restProps }, ...args) => {
  return (
    // <Layout name="wrapPageElement" props={{}} args={args} mode="browser">
    // <Layout
    //   name="wrapPageElement"
    //   props={restProps}
    //   args={args}
    //   mode="browser"
    // >
    <Layout>
      {element}
    </Layout>
  );
};
