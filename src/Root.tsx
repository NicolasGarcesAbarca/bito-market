import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { Toaster } from 'react-hot-toast';
import router from './routes';
import AuthProvider from './context/Auth';
import DialogProvider from './context/Dialog';

const queryClient = new QueryClient()
function Root() {
  return <>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DialogProvider>
          <RouterProvider router={router} />
        </DialogProvider>
      </AuthProvider>
      <Toaster />
    </QueryClientProvider>
  </>
}

export default Root