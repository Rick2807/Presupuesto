import { useState, useEffect } from 'react'
import CloseBtn from '../img/cerrar.svg'
import Alerta from './Alerta'

const Modal = ({setModal, modalAnimation, setModalAnimation, setNewExpense,edit, setEdit}) => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [error, setError] = useState(''); 
    const [id, setId] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        if(Object.keys(edit).length > 0){
          setName(edit.name)
          setAmount(edit.amount)
          setCategory(edit.category)
          setId(edit.id)
          setDate(edit.date)
        }
      },[])

    const closeModal = ( ) => { 
        setModalAnimation(false)
        setEdit({})
        setTimeout(() => {
            setModal(false) 
    
         }, 500);
    }

    const handleSubmit = (e) => { 
        e.preventDefault(); 

        if([name, amount, category].includes('')){
            setError('All fields are mandatory')
            setTimeout(() => {
                setError('')
            }, 3000);

            return; 
            }
            setNewExpense({
                name, 
                amount, 
                category,
                id,
                date
            })


            // reset modal 
            setModalAnimation(false)
            setTimeout(() => {
                setModal(false) 
        
             }, 500);

    }

  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img 
                src={CloseBtn} 
                alt="close button"
                onClick={ closeModal }
                />
        </div>
        <form 
            onSubmit={handleSubmit}
            className={`formulario ${modalAnimation ? "animar" : ''}`}>

            <legend>Add a new</legend>

            {error && <Alerta message={error} type='alerta-error'/>}
            
            <div className="campo">
                <label htmlFor="name">Name of expense</label>
                <input
                id="name"
                placeholder='Name of expense' 
                type="text"
                value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div className="campo">
                <label htmlFor="amount">Add amount to spend</label>
                <input
                id="amount"
                placeholder='Add amount to spend ' 
                type="number"
                value={amount}  onChange={e => setAmount(+e.target.value)}/>
            </div>

            <div className="campo">
                <label htmlFor="name">Category</label>
                <select value={category} onChange={e => setCategory(e.target.value)} >
                    <option value="">Choose an option</option>
                    <option value="savings">Savings</option>
                    <option value="food">Food</option>
                    <option value="home">Home</option>
                    <option value="expenses">Expenses</option>
                    <option value="leisure">Leisure</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                </select>
            </div>
            <input type="submit" value="Add Expenses" />

        </form>
    </div>
  )
}

export default Modal
