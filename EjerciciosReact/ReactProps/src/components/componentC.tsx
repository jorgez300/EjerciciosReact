interface Parametros {
    min: number;
    max: number;
    textos: string[]
}

const ComponenteC = ({ min, max, textos }: Parametros) => {

    const retornaRandom = (min: number, max: number): number => {

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <table>
            <tr>
                <td>{textos[0]}</td>
                <td>{textos[1]}</td>
                <td>{textos[2]}</td>
            </tr>
            <tr>
                <td>{retornaRandom(min, max)}</td>
                <td>{retornaRandom(min, max)}</td>
                <td>{retornaRandom(min, max)}</td>
            </tr>
        </table>
    );
}

export default ComponenteC;
