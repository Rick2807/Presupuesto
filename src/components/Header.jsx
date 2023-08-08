import React from 'react'
import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'
import Avatar from './Avatar'


const Header = ({budget, setBudget, validBudget, setValidBudget, addExpense}) => {
    return (
        <header>

            <h1>Budget Administration</h1>

            {validBudget ?
                <>
    
        
                    <Avatar validBudget = {validBudget}/>
                    <BudgetControl budget = {budget} addExpense={addExpense}/>
                    
                </>  :
                    
                <NewBudget
                    budget = {budget} 
                    setBudget = {setBudget}
                    setValidBudget = {setValidBudget}
                    />

                    
                
            }

        </header>
    )
}

export default Header
