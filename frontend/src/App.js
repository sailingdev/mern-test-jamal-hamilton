import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import { store } from "store";

import Layout from "components/layout";
import Products from "pages/Products";
import ProductDetail from "pages/ProductDetail";
import ProductForm from "pages/ProductForm";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="tenant1/products" replace />}
            />
            <Route path=":tenantId">
              <Route path="products" element={<Layout />}>
                <Route index element={<Products />} />
                <Route path="add" element={<ProductForm />} />
                <Route path=":productId/edit" element={<ProductForm />} />
                <Route path=":productId" element={<ProductDetail />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
