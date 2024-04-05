import {useNavigate} from 'react-router-dom';

function Button(props){
    const navigation = useNavigate();
    const callUrl = ()=>{
        navigation.call(null,props.url);
    }
    return(
        <button
        onClick={callUrl}
        style={{
            border: '1px solid #F2C18D',
            backgroundColor: '#A5DD9B',
            minHeight: 80,
            borderRadius: 5,
            width: '100%',
            fontSize: 20
        }}
        >{props.text}</button>
    )
}
export default Button;