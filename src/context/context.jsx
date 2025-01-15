
import React from 'react'
const ResumeContext = useContext();



export const MyResumeContext = ({ children }) => {
    // const [state, setState] = useState({
    //   user: null,
    //   isAuthenticated: false,
    });
  
    // Example method to update state
    const login = (user) => {
      setState({ user, isAuthenticated: true });
    };
  
    const logout = () => {
      setState({ user: null, isAuthenticated: false });
    };
  
    return (
      <ResumeContext.Provider value={{ state, login, logout }}>
        {children}
      </ResumeContext.Provider>
    );
  };
  


// const context = () => {
//   return (
//     <div>context</div>
//   )
// }

// export default context


import React, { createContext, useState, useContext } from 'react';

// Create a Context for the application state
const MyContext = createContext();

// Create a custom hook to access the context
export const useMyContext = () => {
  return useContext(MyContext);
};

// Context provider component
export const MyContextProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    isAuthenticated: false,
  });

  // Example method to update state
  const login = (user) => {
    setState({ user, isAuthenticated: true });
  };

  const logout = () => {
    setState({ user: null, isAuthenticated: false });
  };

  return (
    <MyContext.Provider value={{ state, login, logout }}>
      {children}
    </MyContext.Provider>
  );
};
