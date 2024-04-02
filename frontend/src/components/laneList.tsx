import {Lane} from "../types.ts";
import LaneComponent from "./lane.tsx";
import './laneList.css'
import {DragDropContext} from "react-beautiful-dnd";

interface LaneListProps {
    lanes: Lane[]
}

export default function LaneList({lanes}: LaneListProps) {

    function onDragEnd(result: any) {
        if (!result.destination) return;

        if (result.destination.index == result.source.index) return;

        console.log(result);
        console.log(result.draggableId);

        const sourceLane = lanes[result.source.index];
        console.log("Source Lane: " + sourceLane.displayName)
        const task = sourceLane.taskList.find(obj => obj["id"] === parseInt(result.draggableId));

        if (task) {
            const taskIndex = sourceLane.taskList.findIndex(obj => obj["id"] === parseInt(result.draggableId));
            console.log(task.title);
            const destinationLane = lanes[result.destination.index];
            console.log("Destination Lane: " + destinationLane.displayName)

            const tasksSource = Array.from(sourceLane.taskList);
            const tasksDest = Array.from(destinationLane.taskList);
            tasksSource.splice(taskIndex,1);
            tasksDest.push(task);
            console.log(tasksSource);
            console.log(tasksDest);
            sourceLane.taskList = tasksSource;
            destinationLane.taskList = tasksDest;
        }

    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <div className="lane-list">
            {lanes.map((lane, index) => (
                <LaneComponent lane={lane} key={lane.id.toString()} index={index}/>
            ))}
        </div>
        </DragDropContext>
    )
}