import {Lane} from "../types.ts";
import LaneComponent from "./lane.tsx";
import './laneList.css'

interface LaneListProps {
    lanes: Lane[]
}
export default function LaneList({ lanes }: LaneListProps) {

    return (
        <div className="lane-list">
            {lanes.length > 0 ? (
                lanes.map(lane => (
                    <LaneComponent key={lane.id} lane={lane} />
                ))
            ) : (
                <p>Keine Lanes gefunden.</p>
            )}
        </div>
    )
}