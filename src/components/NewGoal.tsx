import {type FormEvent } from "react";
import { useRef } from "react";
type newGoalProps = {
    onAddGoal:(goal:string,summary:string)=>void
}
export default function NewGoal({onAddGoal}:newGoalProps){
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    function handleGoal(event:FormEvent<HTMLFormElement>){
        event?.preventDefault();
        const enteredgoal = goal.current!.value;
        const enteredsummary = summary.current!.value;
        event.currentTarget.reset();
        onAddGoal(enteredgoal,enteredsummary);
    }
    return (
        <form onSubmit={handleGoal}>
            <p> 
                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" ref={goal}/>
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input id="summary" type="text" ref={summary}/>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}