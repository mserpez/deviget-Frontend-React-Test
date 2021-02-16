export interface TitleProps {
    label: string
}

export function Title({ label }: TitleProps) {
    return <h1>{label}</h1>
}