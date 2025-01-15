"use client";
import React, { Suspense } from "react";
import { SnackbarProvider } from "notistack";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import client from "./client";
import LoadingCard from "../LoadingCard/LoadingCard";
const Providers = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<LoadingCard />}>{children}</Suspense>
      <SnackbarProvider />
    </ApolloProvider>
  );
};

export default Providers;
