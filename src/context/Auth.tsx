import { useState, useEffect, createContext, ReactNode } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/init"
import { setJWT } from "../services/api";

type AuthContext = {
    user: User | null
    userLoading: boolean
}

export const AuthContext = createContext<AuthContext>({} as AuthContext)

function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [userLoading, setUserLoading] = useState(true)
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth,async (userFirebase) => {
            setUserLoading(true)
            setUser(userFirebase)
            const jwt= await userFirebase?.getIdToken() 
            setJWT(jwt)
            setUserLoading(false)
        })
        return unsuscribe
    }, [])

    return <AuthContext.Provider value={{ user, userLoading }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider