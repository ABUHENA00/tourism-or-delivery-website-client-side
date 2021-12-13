import React, {createContext} from 'react';
import useFirebase from '../Pages/Hooks/useFirebase';

export const AuthContext= createContext()

const AuthProvider = ({children}) => {
    const allContext = useFirebase()
    return (
        <div>
            <AuthContext.Provider value={allContext}>
          {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;