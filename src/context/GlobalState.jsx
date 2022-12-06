import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Shopping', amount: -450 },
	  { id: 2, text: 'Pocket Money', amount: 500 },
	  { id: 3, text: 'Bought a book', amount: -200 },
	  { id: 4, text: 'Gift Voucher', amount: 1000 }
  ]
}
// Create context
export const GlobalContext = createContext(initialState);


// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
   dispatch({
     type: 'ADD_TRANSACTION',
     payload: transaction
   });
 }


  return (
    <GlobalContext.Provider value = {{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}> 
      {children}
    </GlobalContext.Provider>
  )
}


