import {Lane} from "../types.ts";
import TaskComponent from "./task.tsx";
import './lane.css'
import {Draggable, Droppable} from "react-beautiful-dnd";

interface LaneProps {
    lane: Lane;
    index: number
}
export default function LaneComponent({ lane, index }: LaneProps){

    return (
        <Droppable droppableId={"lane-"+index} direction="horizontal" type="COLUMN">
            {(provided) => (
                <div className="lane-box" ref={provided.innerRef} {...provided.droppableProps}>
                    <div className="lane-name">{lane.displayName}</div>
                    {lane.taskList?.map((task, taskIndex) => (
                        <Draggable
                            key={task.id.toString()}
                            index={index}
                            draggableId={task.id.toString()}
                        >
                            {(provided) => (
                                <div
                                    key={task.id.toString()}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <TaskComponent key={task.id} task={task} />
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}