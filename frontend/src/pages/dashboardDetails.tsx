import HeaderSection from "../sections/header.tsx";
import ContentSection from "../sections/content.tsx";
import FooterSection from "../sections/footer.tsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import {Board} from "../types.ts";
import LaneList from "../components/laneList.tsx";

export default function DashboardDetails() {
    const params = useParams();
    const id = params.id ? params.id : "";

    const [board, setBoard] = useState<Board>();

    useEffect(() => {
        axios.get("/api/kanban/boards/"+id)
            .then(resp => {
                setBoard(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[id])

    if (board) {
        return (
            <div>
                <HeaderSection title={board.displayName}/>
                <ContentSection Content={() => (
                    <LaneList lanes={board?.lanes}/>
                )}/>
                <FooterSection/>
            </div>
        )
    } else {
        return (
            <div>
                <HeaderSection title="Error"/>
                <ContentSection Content={() => (
                    <div>No Such Board</div>
                )}/>
                <FooterSection/>
            </div>
        )
    }


}