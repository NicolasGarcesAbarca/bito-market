import {
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Index from './pages/Index';
import ProfilePage from "./pages/Profile";
import UploadBeat from "./pages/UploadBeat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "register",
    element: <RegisterPage />
  },
  {
    path: "profile",
    element: <ProfilePage />
  },
  {
    path: "upload",
    element: <UploadBeat />
  }
]);

export default router