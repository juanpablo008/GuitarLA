import Image from 'next/image'
import Link from 'next/link'
import {formatearFecha} from '../helpers'
import styles from '../styles/Entrada.module.css'

function Entrada({entrada}) {
  const { titulo, resumen, imagen, published_at, _id, url} = entrada
  return (
    <article>
      <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen blog ${titulo}`} />

      <div className={styles.contenido}>
        <h3>{titulo}</h3> 
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.enlace}>
            Leer Entrada
          </a>
        </Link>
      </div>
      
    </article>
  )
}

export default Entrada