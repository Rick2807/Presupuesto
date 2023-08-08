import React from 'react'

const Filter = ({filter, setFilter}) => {
  return (

    <div className="filtros contenedor sombra">
        <form>
            <div className="campo">
                <label htmlFor="">Filter</label>
                <select
                  value={filter}
                  onChange={e => setFilter(e.target.value)}
                >
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
        </form>
    </div>
  )
}

export default Filter