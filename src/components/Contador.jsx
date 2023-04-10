import {useState} from 'react';

const Contador = ({inicial,factor}) => {

    const [contador, setContador] = useState(inicial);

    const Aumentar = ()=>{
        setContador((actual)=>actual+factor)
    }

    const Disminuir = ()=>{
        setContador((actual)=>actual-factor)
    }

    return (
        <div>
            <h1>contador:{contador}</h1>
            <hr/>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Disminuir}>Disminuir</button>
        </div>
    );
}

export default Contador;
