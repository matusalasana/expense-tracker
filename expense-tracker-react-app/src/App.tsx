import './App.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import ExpenseListGroup from './ExpenseListGroup';
import ExpenseFilter from './ExpenseFilter';


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
    <img src="/home/sana/my-projects/react+vite projects/expense-tracker/expense-tracker-react-app/src/expensify-svgrepo-com.svg" className="img-fluid" alt="..."></img>
    <h3>EXPENSE TRACKER</h3>
    <div className="mb-3"><ExpenseForm onSubmit={(expense)=>setExpenses([...expenses,{...expense,id:expenses.length}])}/></div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={category=>setSelectedCategory(category)}/>
      </div>
      
    <ExpenseListGroup expenses={visibleExpenses} onDelete={(id)=>setExpenses(expenses.filter((e)=>e.id !== id,0))}/>
    

    </>
  )
}

export default App
