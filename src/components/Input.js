
function Input(props){
    return(
        <input style={{
            with: '100%',
            minHeight: 40,
            borderRadius: 5
        }} type={props.type} />
    )
}

export default Input;