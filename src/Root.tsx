import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import router from './routes';

function Root() {
  return <>
    <RouterProvider router={router} />
    <Toaster />
  </>
}

export default Root