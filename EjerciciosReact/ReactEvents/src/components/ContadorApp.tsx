import { useState } from "react";

const Button = ({ value }) => {

    const [contador, setContador] = useState(value);


    const handleClick = (ev, arg: string) => {

        setContador(contador + 1);
    }

    return (
        <>
            <div>{contador}</div>
            <button onClick={(event) => handleClick(event, 'texto')}>Soy un boton</button>
        </>

    );

}


const ContadorApp = () => {
    return (
        <>
            <Button value={0}></Button>
        </>

    );
}

export default ContadorApp