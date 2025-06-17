
interface props{
    onSelectCategory:(category:String)=>void
}

function ExpenseFilter({onSelectCategory}:props) {
  return (
    <div>
        <select aria-label="Default select example" onChange={(event)=>onSelectCategory(event.target.value)} className="form-select">
            <option value="">All Categories</option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            <option value="School">School</option>
            <option value="Other">Other</option>
        </select>
    </div>
  )
}

export default ExpenseFilter