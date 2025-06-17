import { useRef, useState, type ReactNode } from "react"

interface props{
    title:String,
    amount:number,
    category:ReactNode,
    date:ReactNode
}

function ExpenseTracker() {

    const titileRef=useRef<HTMLInputElement>(null)
    const amountRef=useRef<HTMLInputElement>(null)
    const categoryRef=useRef<HTMLSelectElement>(null)
    const dateRef=useRef<HTMLInputElement>(null)
    const [visibility,setVisibility]=useState(false)

    
    
    const catagoryHandler=()=> {if (categoryRef.current!==null){ 
        const selectedOption=[...categoryRef.current.value]
        selectedOption.map(item=><h1>{item}</h1>)
        categoryRef.current!.value=""}}
    

  return (
    <div>
        <h1></h1>
    <form>

        <div className="form-floating mb-3">
            <input ref={titileRef} type="text" className="form-control" id="text" placeholder="name@example.com"/>
            <label>Title</label>
        </div>

        <div className="form-floating mb-3">
            <input ref={amountRef} type="number" className="form-control" id="amount" placeholder="name@nexample.com"/>
            <label>Amount (ETB)</label>
        </div>

        <select onChange={(e)=>categoryRef.current?.value==e.target.value} ref={categoryRef} className="form-select" aria-label="Default select example">
            <option selected>Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="School">School</option>
            <option value="Entertiment">Entertiment</option>
            <option value="Others">Others</option>
        </select>

        <div className="form-floating mb-3">
            <input ref={dateRef} type="date" className="form-control" id="date" placeholder="name@nexample.com"/>
            <label>Date (M/D/Y)</label>
        </div>

        <button onClick={()=>
            (catagoryHandler(),setVisibility(true),amountRef.current!.value="")} type="button" className="btn btn-primary">Add</button>

    </form>


    <div className="cata-selection">
        <i className="bi bi-filter"></i>
        <select className="form-select" aria-label="Default select example">
            <option selected> All Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="School">School</option>
            <option value="Entertiment">Entertiment</option>
            <option value="Others">Others</option>
        </select>
    </div>


    
    {visibility && <table className="table table-success table-striped">
        <thead>
            <tr>
            <th scope="col">Title</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Date</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{titileRef.current?.value}</td>
            <td>{amountRef.current?.value}ETB</td>
            <td>{categoryRef.current?.value}</td>
            <td>{dateRef.current?.value.toString()}</td>
            <td><button type="button" className="btn btn-outline-danger">Delete</button></td>
            </tr>
        </tbody>
    </table>}


</div>
  )
}

export default ExpenseTracker