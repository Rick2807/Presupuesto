import {useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({budget, addExpense}) => {
    const [available, setAvailable] = useState(0); 
    const [spendings, setSpendings] = useState(0);
    const [percentage, setPercentage] = useState(0)
    

    useEffect(()=>{
        const totalSpent = addExpense.reduce((accumulador, addExpens ) => accumulador + addExpens.amount, 0)
        const totalAvailable = budget - totalSpent; 
        const newPercentage = (((budget - totalSpent) / budget) * 100).toFixed(2)
        
        setSpendings(totalSpent)

        setAvailable(totalAvailable)
        setTimeout(() => {
        setPercentage(newPercentage)
        }, 1500);
        
        

    }, [addExpense])

    const deleteItems = (e) => { 
        localStorage.clear()
        history.go(0)
    }

    const formatCurrency = (budget) => { 
        return budget.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }


    
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>

        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: percentage > 100 ? '#DC2626' : '#3b82f6', 
                    trailColor: '#f5f5f5',
                    textColor: percentage > 100 ? '#DC2626' : '#3b82f6'
                })}
                text={`${percentage}%`}
                value={percentage}/>
        </div>

        <div className="contenido-presupuesto">
            <button 
                className="reset-app"
                onClick={deleteItems}
                >
                Reset App
            </button>
            <p>
                <span>Budget: </span> {formatCurrency(budget)}
            </p>
            <p className={`${available < 0 ? "negativo" : ""}`}>
                <span>Available: </span> {formatCurrency(available)}
            </p>
            <p>
                <span>Spendings: </span> {formatCurrency(spendings)}
            </p>
        </div>
    </div>
  )
}

export default BudgetControl
