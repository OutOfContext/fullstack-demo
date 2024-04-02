
interface HeaderProps {
    title: string | undefined
}
export default function HeaderSection({title}: HeaderProps) {
    return (
        <div className="header">
            {title}
        </div>
    )
}