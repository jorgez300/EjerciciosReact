interface Productos {
    codigo: string,
    descripcion: string,
    existen: number
}

interface ListaProductos {
    LsProductos: Productos[],
}

const ListadoApp = () => {

    const MyList: string[] = ['a', 'b', 'c'];

    return (
        <>
            {
                MyList.forEach((item) => {
                    <><label>{item}</label></>
                })
            }
        </>
    );
}

export default ListadoApp;