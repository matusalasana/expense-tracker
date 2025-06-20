import { useForm } from "react-hook-form"
import categories from "./Catagories"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import './index.css'

    interface props{
        onSubmit:(data:FormData)=>void
    }

    const schema=z.object({
        title:z.string().min(3,{message:"title should be at least 3 character"}).max(50),
        amount:z.number({invalid_type_error:"amount required"}).min(5,'amount is too low').max(1_000_000,'amount is too high'),
        category:z.enum(categories,{
            errorMap:()=>({message:"select one category"})
        })
    });

    type FormData = z.infer<typeof schema>;

function ExpenseForm({onSubmit}:props) {
    
    const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({resolver: zodResolver(schema)});

    return (
        <form onSubmit={handleSubmit(data=>{
            onSubmit(data),
            reset();
        })}>

            <div className="form-floating mb-3">
                <input {...register('title')} type="text" className="form-control" id="title" placeholder="name@example.com"/>
                {errors.title && <p className="text-danger">{errors.title.message}</p>}
                <label htmlFor="title">Title</label>
            </div>

            <div className="form-floating mb-3">
                <input {...register('amount',{valueAsNumber:true})} type="number" className="form-control" id="amount" placeholder="name@example.com"/>
                {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
                <label htmlFor="amount">Amount (ETB)</label>
            </div>

            <div className="mb-3">
                <select {...register('category')} className="form-select" id="category">
                    <option value="" selected>Categories</option>
                {categories.map(category=><option key={category} value={category}>{category}</option>)}

                </select>
                {errors.category && <p className="text-danger">{errors.category.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary">ADD</button>

        </form>
    )
}

export default ExpenseForm