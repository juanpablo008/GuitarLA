import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    const carritoLocal = JSON.parse( localStorage.getItem('carrito') ) ?? []
    setCarrito(carritoLocal)
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  

  const agregarCarrito = producto => {
    console.log(carrito)
    if(carrito.some( articulo => articulo._id === producto._id)){
      console.log('if')
      const carritoActualizado = carrito.map( articulo => {
        if(articulo._id === producto._id){
          articulo.cantidad = producto.cantidad
        }
        return articulo
      })
      setCarrito(carritoActualizado)
    }else{
      console.log('else')
      setCarrito([...carrito, producto])
    }
  }

  const actualizarCantidad = producto => {
    const carritoActualizado = carrito.map( articulo => {
      if(articulo._id === producto._id){
        articulo.cantidad = producto.cantidad
      }
      return articulo
    })

    setCarrito(carritoActualizado)
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( articulo => articulo._id !== id)
    setCarrito(carritoActualizado)
  }

  return <Component 
    {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
    eliminarProducto={eliminarProducto}
  />
}

export default MyApp
