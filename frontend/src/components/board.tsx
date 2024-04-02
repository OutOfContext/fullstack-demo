import {Board} from "../types.ts";
import './board.css'
import {useNavigate} from "react-router";

interface BoardProps {
    board: Board | undefined;
}
export default function BoardComponent({ board }: BoardProps) {
    const navigate = useNavigate();
    function calculateTickets(board: Board) {
        return board.lanes.map((lane) => (
            lane.taskList.length
        )).reduceRight((previousValue, currentValue) => previousValue + currentValue);
    }

    function moveToBoard(id: number) {
        navigate("/dashboards/"+id);
    }

    if (board) {
        return (
            <div className="board-card">
                <div className="board-content board-card-title" onClick={() => moveToBoard(board.id)}>{board.displayName}</div>
                <div className="board-content board-card-stats">
                    <div className="board-card-text"> Tickets: {calculateTickets(board)} </div>
                    <div className="board-card-text"> Lanes: {board.lanes?.length} </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                No such Board.
            </div>
        )
    }

}