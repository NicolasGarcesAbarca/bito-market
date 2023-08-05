import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import router from './routes';
import AuthProvider from './context/Auth';
function Root() {
  return <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </>
}

export default Root