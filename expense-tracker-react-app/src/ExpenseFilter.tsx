
import categories from "./Catagories"
interface props{
    onSelectCategory:(category:String)=>void
}

function ExpenseFilter({onSelectCategory}:props) {
  return (
    <div>
        <select aria-label="Default select example" onChange={(event)=>onSelectCategory(event.target.value)} className="form-select">
            <option value="">All Catagories</option>
            {categories.map(category=><option key={category} value={category}>{category}</option>)}
        </select>
    </div>
  )
}

export default ExpenseFilter