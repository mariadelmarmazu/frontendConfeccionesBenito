import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

//Componente Listado

const Listado = () =>{

    const [articulos, setArticulos] = useState([])
    useEffect(()=>{
        const fetchArticulos = async ()=>{
            try{
            const response = await fetch(process.env.REACT_URL + '/tienda')
            const data = await response.json()
            setArticulos(data)
            }catch(error){
                console.log(error.message)
            }
        }
        fetchArticulos()
    }, [])
    
    return(
        <div>
            <h1>Listado de Productos</h1>
            {articulos.map(articulo => (
                <div key={articulo.id_articulo}>
                    <img src={articulo.imagen} alt={articulo.nombre} />
                    <h2>{articulo.nombre}</h2>
                    <p>{articulo.marca}</p>
                    <p>{articulo.precio}</p>
                    <Link to={`/tienda/${articulo.id_articulo}`}>Ver Articulo</Link>
                </div>
            ))}
        </div>
    )
}
export default Listado