import {Lane} from "../types.ts";
import TaskComponent from "./task.tsx";
import './lane.css'
interface LaneProps {
    lane: Lane
}
export default function LaneComponent({ lane }: LaneProps){

    return (
        <div className="lane-box">
            <div className="lane-name">{lane.displayName}</div>
            {lane.taskList?.map(task =>(
                <TaskComponent key={task.id} task={task}/>
            ))}
        </div>
    )
}