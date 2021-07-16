import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import CreateUser from "./Components/CreateUser";
import ListOfUsers from "./Components/ListOfUsers";
import UpdatePassword from "./Components/UpdatePassword";

function App() {

  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
            <ApolloProvider client={client}>
               <CreateUser />
              <ListOfUsers />
              <UpdatePassword />
            </ApolloProvider>
    </>
  );
}

export default App;
