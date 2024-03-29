import {useEffect, useState} from "react";
import axios from "axios";
import BoardComponent from "./board.tsx";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {Board} from "../types.ts";

export default function BoardList() {

    const [boards, setBoards] = useState<Board[]>([])

    useEffect(() => {
        axios.get("/api/kanban/boards")
            .then(res => {
                setBoards(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const onDragEnd = (result: any) => {
        //console.log("DragEnd activated.")
        if (!result.destination) return;

        const newBoards = Array.from(boards);
        const [reorderedBoard] = newBoards.splice(result.source.index, 1);
        newBoards.splice(result.destination.index, 0, reorderedBoard);

        setBoards(newBoards);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="boardlist" direction="vertical" type="ROW">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {boards.map((board, index) => (
                            <Draggable
                                key={board.id.toString()}
                                index={index}
                                draggableId={board.id.toString()}
                            >
                                {(provided) => (
                                    <div
                                        key={board.id.toString()}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <BoardComponent board={board}/>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}