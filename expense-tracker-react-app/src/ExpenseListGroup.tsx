
interface Expense{
    id:number;
    title:String;
    amount:number;
    category:String
}

interface props{
    expenses:Expense[];
    onDelete:(id:number)=>void
}

function ExpenseListGroup({expenses,onDelete}:props) {
    if (expenses.length==0) return null
  return (
    <table className="table table-success table-striped">
        <thead>
            <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount (ETB)</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {expenses.map(expense=>
            <tr key={expense.id}>
            <td scope="col">{expense.title}</td>
            <td scope="col">{expense.amount}</td>
            <td scope="col">{expense.category}</td>
            <td scope="col"><button onClick={()=>onDelete(expense.id)} className="btn btn-outline-danger" type="button">Delete</button></td>
            </tr>)}
        </tbody>
        <tfoot>
            <tr>
                <th>Total</th>
                <th>{expenses.reduce((counter,expense)=>expense.amount+counter,0)}</th>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
  )
}

export default ExpenseListGroup