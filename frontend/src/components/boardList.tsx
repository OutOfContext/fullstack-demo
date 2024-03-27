import {useEffect, useState} from "react";
import axios from "axios";
import BoardComponent from "./board.tsx";
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

    return (
        boards.length > 0 ? (
            boards.map(board => (
                <BoardComponent key={board.id} board={board}/>
            ))
        ) : (
            <p>Keine Boards gefunden.</p>
        )
    );
}