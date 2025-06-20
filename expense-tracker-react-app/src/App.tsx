import './App.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import ExpenseListGroup from './ExpenseListGroup';
import ExpenseFilter from './ExpenseFilter';
import logo from './assets/miscellaneous-expenses-svgrepo-com.svg'


function App() {
  const [selectedCategory,setSelectedCategory]=useState<String>("")
  const [expenses,setExpenses]=useState([
    {id:0,title:'',amount:0,category:''},
  ])

  const visibleExpenses = selectedCategory
  ? expenses.filter(e => e.category == selectedCategory)
  : expenses;

  return (
    <>

    <img src={logo} alt="expense tracker logo" />

    <h3>EXPENSE TRACKER</h3>

    <div className="mb-3">
      <ExpenseForm onSubmit={(expense)=>setExpenses([...expenses,{...expense,id:expenses.length}])}/>
    </div>
    
    <div className="mb-3">
        <ExpenseFilter onSelectCategory={category=>setSelectedCategory(category)}/>
    </div>
      
    <ExpenseListGroup expenses={visibleExpenses} onDelete={(id)=>setExpenses(expenses.filter((e)=>e.id !== id,0))}/>
    

    </>
  )
}

export default App
