interface IProps {
    label: string
}

export function Title({ label }: IProps) {
    return <h1>{label}</h1>
}