import { useState } from 'react'
import Alerta from './Alerta';


const NewBudget = ({budget, setBudget, setValidBudget}) => {
    const [error, setError] = useState(false)
    
    const handleChange = (e) => { 
        // sera igual al valor que escriba en ese input 
            setBudget(+e.target.value);
    }

    const handleSubmit = (e) =>{
         e.preventDefault(); 
         
         if(!budget || budget < 0 ){ 
            setError(true)
            return; 
         }
            setError(false)
            setValidBudget(true)
            
        // console.log(typeof budget)
    }


    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form
                onSubmit={handleSubmit} 
                className='formulario'>
                <div className="campo">
                    <label htmlFor="">Define a budget</label>
                    <input 
                        type="number"
                        value={budget}
                        className='nuevo-presupuesto'
                        placeholder='Add a budget'
                        onChange={handleChange}
                        />
                    <input 
                        type="submit" 
                        value="Add" 
                    />
                    {error && <Alerta message={"This is not a valid Budget"} type="alerta-error"/>}
                </div>

            </form>
        </div>
    )
}

export default NewBudget
