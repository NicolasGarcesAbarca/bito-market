import {
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Index from './pages/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "register",
    element: <RegisterPage />
  }
]);

export default router