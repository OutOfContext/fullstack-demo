import {ComponentType} from "react";

interface ContentProps {
    Content: ComponentType
}
export default function ContentSection({Content}: ContentProps){
    return (
        <div className="content">
            <Content />
        </div>
    )
}