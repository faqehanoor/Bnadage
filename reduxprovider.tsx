"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from '@/app/redux/store';

// Define the Provider wrapper
const ReduxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
