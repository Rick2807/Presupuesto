import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddSpendingIcon from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
import Expenses from './components/Expenses';
import {GenerateId} from './helpers'
import Filter from './components/Filter';


function App() {
  
  const [budget, setBudget] = useState(+localStorage.getItem('expenses') ?? 0); 
  const [validBudget, setValidBudget] = useState(false); 
  const [modal, setModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);
  const [addExpense, setAddExpense] = useState(
    JSON.parse(localStorage.getItem('budget')) ?? []
  )
  const [edit, setEdit] = useState({});
  const [filter, setFilter] = useState('')
  const [filters, setFilters] = useState([])

  useEffect(() => {
    if(Object.keys(edit).length > 0){
      setModal(true); 
     
      setTimeout(() => {
          setModalAnimation(true)
      }, 500);
    }
  },[edit])

  useEffect(() => {
    localStorage.setItem('expenses', budget ?? 0)
  },[budget])

  useEffect(() => {
    const budgetLS = +localStorage.getItem('expenses') ?? 0
    if(budgetLS > 0){
      setValidBudget(true);
    }

  },[])

  useEffect(()=> {
    if(filter){ 
      const filterExpense = addExpense.filter( expense => expense.category === filter); 
      // if(Object.keys(filterExpense).length > 0){
      // }
      setFilters(filterExpense);
    }
  }, [filter])

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(addExpense ?? []))    
  
  },[addExpense])

  const setNewExpense = (e) => { 
    if(e.id){
      const updatedExpenses = addExpense.map( expenseState => expenseState.id === e.id ? e : expenseState )
      setAddExpense(updatedExpenses)
      setEdit({})
    }else{
      e.date = Date.now()
      e.id = GenerateId();
      setAddExpense([...addExpense, e ])
    }
    
  }

  const openBtn = () => {
     setModal(true); 
     setEdit({});
     setTimeout(() => {
        setModalAnimation(true)
     }, 500);
  }

  const deleteItem = id => { 
    const deletedItem = addExpense.filter( (deleted) => deleted.id !== id ); 
    setAddExpense(deletedItem)

  }

  
  return (

    <div className={modal ? 'fijar' : ''}>
      <Header
        budget={budget} 
        setBudget={setBudget}
        validBudget = {validBudget}
        setValidBudget ={setValidBudget}
        addExpense={addExpense}
      />
      
      {validBudget &&
        <>
          <main>
            <Filter filter={filter} setFilter={setFilter}/>

            <Expenses 
                setEdit={setEdit}
                addExpense={addExpense}
                deleteItem={deleteItem}
                filter={filter}
                filters= {filters}
                />

          </main>

          <div className='nuevo-gasto' >
            <img 
              src={AddSpendingIcon} 
              alt="Add Icon"
              onClick={openBtn}
              />
            
          </div>
        </>
      }

      {modal && <Modal
                    modalAnimation={modalAnimation}
                    setModalAnimation={setModalAnimation}
                    setModal={setModal}
                    setNewExpense={setNewExpense}
                    edit={edit}
                    setEdit={setEdit}
                    />}
    </div>
  )
}

export default App
