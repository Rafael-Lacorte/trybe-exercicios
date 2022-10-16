import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [cidade, setCidade] = useState('');
    const [module, setModule ]= useState('');

    const contextValue = {
      name,
      setName,
      age,
      setAge,
      cidade,
      setCidade,
      module,
      setModule,
    }

    return (
        <AppContext.Provider value={ contextValue }>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;