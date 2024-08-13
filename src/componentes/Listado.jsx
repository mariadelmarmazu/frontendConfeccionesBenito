import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

//Componente Listado

const Listado = () =>{

    const [articulos, setArticulos] = useState([])

    useEffect(()=>{
        const fetchArticulos = async ()=>{
            try{
            const response = await fetch(`${process.env.REACT_APP_URL}/tienda`)
                if(!response.ok){
                    throw new Error('¡Error al mostrar los productos!')
                }
            const data = await response.json()
            setArticulos(data)
            }catch(error){
                console.log(error)
                //Mostrar un mensaje de error
                console.log('¡Error al obtener los productos!')
            }
        }
        fetchArticulos()
        
    }, [])
    
    return(
        <div className='container m-3'>
            <h1>Listado de Productos</h1>
            {articulos.map(articulo => (
                <div key={articulo.id_articulo} className='card'>
                    <img src={articulo.imagen} alt={articulo.nombre} className='card-img-top' />
                    <div className='card-body'>
                        <h2 className='card-title'>{articulo.nombre}</h2>
                        <p className='card-text'>{articulo.marca}</p>
                        <p className='card-text'>{articulo.precio}</p>
                        <Link to={`/tienda/${articulo.id_articulo}`} className='btn btn-primary'>Ver Articulo</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Listado