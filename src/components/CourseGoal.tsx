import { type ReactNode } from "react"
interface CourseGoalProps{
    title:string
    children:ReactNode
    onDelete:(id:number)=>void
    id:number
}
export default function({title,id,children,onDelete}:CourseGoalProps){
    return (
        <article>
            <div className="titleContainer">
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={()=>onDelete(id)}>Delete</button>
        </article>
    )
}