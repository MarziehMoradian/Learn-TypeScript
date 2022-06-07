interface ChildProps {
    color:string,
    onClick:()=> void
}

//we can destructure props

export const Child = ({color,onClick}:ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>ClickMe</button>
    </div>;
}
// export const Child = (props:ChildProps) => {
//     return <div>Hi there!</div>;
// }

export const ChildAsFc:React.FC<ChildProps> = ({color,onClick}) => {
    return <div>
    {color}
    {/* {children} */}
    <button onClick={onClick}>ClickMe</button>
</div>;
}