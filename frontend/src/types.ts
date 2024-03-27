export type State = "OPEN" | "IN_PROGRESS" | "CLOSED"

export type Account = {
    id: number
    displayName: string
}

export type Task = {
    id: number
    title: string
    subTitle: string
    description: string
    assignee: Account
    participants: Account[]
    state: State

}

export type Lane = {
    id: number
    displayName: string
    state: State
    taskList: Task[]
}

export type Board = {
    id: number
    displayName: string
    lanes: Lane[]
}