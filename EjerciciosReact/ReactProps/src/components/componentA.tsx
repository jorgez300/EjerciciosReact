import ComponenteB from "./componentB";
import '../assets/componenteA.css';
import ComponenteC from "./componentC";

const ComponenteA = () => {
    return (
        <>
            <h1>Hola Mundo</h1>
            <ComponenteB></ComponenteB>
            <ComponenteC min={0} max={1000} textos={['textA', 'textB', 'textC']}></ComponenteC >
        </>

    );
}

export default ComponenteA;