/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import TopLayout from './TopLayout';
import Layout from "../../src/components/Layout";

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>
