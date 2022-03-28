import { useState } from 'react'
import Script from 'next/script'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'
import Swal from "sweetalert2"

const Producto = ({guitarra, agregarCarrito}) => {

  const [cantidad, setCantidad] = useState(1)
  const { nombre, precio, imagen, descripcion, _id } = guitarra[0]

  const handleSubmit = e => {
    e.preventDefault()

    if(cantidad < 1){
      alert('Cantidad no válida')
      return
    }

    const guitarraSeleccionada = {
      _id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada)
    newAlertSuccess('Success', 'Se ha agregado a tu carrito correctamente')
  }

  const newAlertSuccess = (title, text) => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title,
      text,
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <Layout
      pagina={`Guitarra ${nombre}`}
    >
      <div className={styles.guitarra}>
        <Image layout='responsive' width={180} height={350} src={imagen.url} alt={`Imagen guitarra ${nombre}`} />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="">Cantidad</label>
            <select value={cantidad} onChange={ e => setCantidad(parseInt(e.target.value))}>
              <option value="">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>

            <input type="submit" value="Agregar al Carrito" />
          </form>
        </div>
      </div>
      <Script src='https://cdn.jsdelivr.net/npm/sweetalert2@11.4.7/dist/sweetalert2.all.min.js' id="script-sweetalert2" />
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {

  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
  const respuesta = await fetch(urlGuitarra)
  const guitarra = await respuesta.json()

  return{
    props: {
      guitarra
    }
  }
}

export default Producto