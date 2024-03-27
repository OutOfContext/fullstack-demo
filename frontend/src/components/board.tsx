import {Board} from "../types.ts";
import LaneList from "./laneList.tsx";
import './board.css'
interface BoardProps {
    board: Board;
}
export default function BoardComponent({ board }: BoardProps) {
    return (
        <div className="board-card">
            <div>{board.displayName}</div>
            <LaneList lanes={board.lanes}/>
        </div>
    )
}