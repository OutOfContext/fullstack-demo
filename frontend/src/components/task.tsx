import {Task} from "../types.ts";
import './task.css';
interface TaskProps {
    task: Task
}
export default function TaskComponent({ task }: TaskProps) {
    return (
        <div className="task-card">
            <div className="task-title">{task.title}</div>
            <div className="task-subtitle">{task.subTitle}</div>
            <div className="task-assignee">{task.assignee?.displayName}</div>
        </div>
    )
}