import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import router from './routes';
import AuthProvider from './context/Auth';
import DialogProvider from './context/Dialog';
function Root() {
  return <>
    <AuthProvider>
      <DialogProvider>
        <RouterProvider router={router} />
      </DialogProvider>
    </AuthProvider>
    <Toaster />
  </>
}

export default Root