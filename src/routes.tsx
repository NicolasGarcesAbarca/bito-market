import {
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Index from './pages/Index';
import ProfilePage from "./pages/Profile";
import UploadBeat from "./pages/UploadBeat";
import BlockNonAuth from "./components/BlockNonAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlockNonAuth><Index /></BlockNonAuth>,
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
    element: <BlockNonAuth><ProfilePage /></BlockNonAuth>
  },
  {
    path: "upload",
    element: <BlockNonAuth><UploadBeat /></BlockNonAuth>
  }
]);

export default router