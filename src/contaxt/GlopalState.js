import React, { createContext, useReducer } from 'react';
import AppUser from './AppUser';


let arrayTest;
if (localStorage.pro != null) {
    arrayTest = JSON.parse(localStorage.pro)
}else {
    arrayTest = []
}

console.log(arrayTest)
console.log(arrayTest)

// Initial state
const initialState = {
  transactions: arrayTest
}


// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppUser, initialState);
//   useEffect(() => {
//     return localStorage.setItem("pro", JSON.stringify(arrayTest))
// }, [state])

  function deleteTransactions (id)  {
    dispatch({
        type: "delete",
        by: id
    })
    // return localStorage.setItem("pro", JSON.stringify(state.transactions))
  }

//   function AddTransactions (transaction)  {
//     dispatch({
//         type: "Add",
//         by: transaction
//     })
//     console.log(arrayTest)
//     // return localStorage.setItem("pro", JSON.stringify(state.transactions))
//   }


  function test (tr) {
    arrayTest.push(tr)
    localStorage.setItem("pro", JSON.stringify(arrayTest));
    window.location.reload()
  }

  function test2 (tr) {
    arrayTest = arrayTest.filter(transactions => transactions.id !== tr)
    localStorage.setItem("pro", JSON.stringify(arrayTest))
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransactions,
    // AddTransactions,
    test,
    test2
  }}>
    {children}
  </GlobalContext.Provider>);
}