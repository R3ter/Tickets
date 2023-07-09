import {
  ChakraBaseProvider,
  baseTheme,
  extendBaseTheme,
  extendTheme,
} from "@chakra-ui/react";

import chakraTheme from "@chakra-ui/theme";
import MainPage from "./pages/MainPage";
import "./app.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <SignUpPage /> },
  {
    element: <Header />,
    children: [{ path: "/", element: <MainPage /> }],
  },
]);

function App() {
  return (
    <ChakraBaseProvider theme={chakraTheme}>
      <RouterProvider router={router} />
    </ChakraBaseProvider>
  );
}

export default App;
