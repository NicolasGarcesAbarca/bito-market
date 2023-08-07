import { useContext,ReactNode } from 'react'

import { AuthContext } from '../context/Auth'
import { Navigate } from 'react-router-dom'
import { Spinner } from 'flowbite-react'

export default function BlockNonAuth({children}:{children:ReactNode}) {
  const {  user, userLoading } = useContext(AuthContext)
  if (userLoading) {
    return <div className='h-screen flex justify-center items-center'>
        <Spinner size="xl" color="purple"/>
    </div>
  }
  
  if(!user) {
    return <Navigate to="/login" replace={true}/>
  }

  return <>{children}</>
    
}
