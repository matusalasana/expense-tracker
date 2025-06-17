import './App.css'
import { useState } from 'react';
import ExpenseListGroup from './ExpenseListGroup';
import ExpenseFilter from './ExpenseFilter';

function App() {
  const [selectedCategory,setSelectedCategory]=useState<String>("")
  const [expenses,setExpenses]=useState([
    {id:1,title:'Burger',amount:380,category:'Food'},
    {id:2,title:'Bajaj',amount:60,category:'Transportation'},
    {id:3,title:'Water',amount:35,category:'Food'},
    {id:4,title:'Tissue',amount:20,category:'Food'},
    {id:5,title:'Saussage',amount:40,category:'Food'}
  ])

  const visibleExpenses = selectedCategory
  ? expenses.filter(e => e.category == selectedCategory)
  : expenses;

  return (
    <>
    <h1>EXPENSE TRACKER</h1>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={category=>setSelectedCategory(category)}/>
      </div>
    <ExpenseListGroup expenses={visibleExpenses} onDelete={(id)=>setExpenses(expenses.filter((e)=>e.id !== id,0))}/>
    

    </>
  )
}

export default App
