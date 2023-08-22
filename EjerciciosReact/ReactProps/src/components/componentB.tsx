const ComponenteB = () => {

    const texto = 'b';

    const retornaRandom = (min: number, max: number): number => {

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <table>
            <tr>
                <td>{texto}</td>
                <td>a</td>
                <td>a</td>
            </tr>
            <tr>
                <td>{retornaRandom(4, 500)}</td>
                <td>{retornaRandom(1000, 2000)}</td>
                <td>{retornaRandom(0, 20000)}</td>
            </tr>
        </table>
    );
}

export default ComponenteB;