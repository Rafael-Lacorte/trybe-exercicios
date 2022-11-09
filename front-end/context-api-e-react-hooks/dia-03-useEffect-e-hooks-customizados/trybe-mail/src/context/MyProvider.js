import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [emailInfo, setEmailInfo] = useState(
    [{
      id: 1,
      title: "Título do email",
      status: 0
    },
    {
      id: 2,
      title: "Título do email 2",
      status: 1
    }],
  );

  const contextValue = {
    emailInfo,
    setEmailInfo,
  }

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

export default MyProvider;
