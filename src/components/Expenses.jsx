import React from 'react'
import Expense from './Expense'

const Expenses = ({addExpense, setEdit, deleteItem,filter, filters}) => {
  return (
    <div className="listado-gastos contenedor">

        { filter ? 
          <>
          <h2>{filters.length ? 'Expenses' : 'No Expenses on this category'}</h2>

            { filters.map(e =>  (
                    <Expense 
                        setEdit={setEdit}
                        deleteItem={deleteItem}
                        key={e.id}
                        e={e}
                    />
                )
            )}
          </>  : <>
        <h2>{addExpense.length ? 'Expenses' : 'No Expenses'}</h2>
          { addExpense.map(e => {
                return (
                    <Expense 
                        setEdit={setEdit}
                        deleteItem={deleteItem}
                        key={e.id}
                        e={e}
                    />
                )
            }) }
                </>
       
        }
        </div>
        
        
        
        
        )
    }

export default Expenses