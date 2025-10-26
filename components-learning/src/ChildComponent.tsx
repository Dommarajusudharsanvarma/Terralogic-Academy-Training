function ChildComponent(props: any){
    return(
        <button onClick={props.onButtonClick}>
            Click me to alert parent
        </button>
    )
}

export default ChildComponent