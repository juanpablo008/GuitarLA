import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>

        <div className={styles.contenido}>

          <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre Nosotros' />
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero fugit incidunt quidem ullam alias nulla, nobis vel magni ex mollitia dignissimos repudiandae soluta. Ea porro fuga veniam. Quis, aut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quia, aperiam quod ipsam, ratione neque, temporibus fugit rem eaque sit molestias nemo doloribus nobis explicabo sint inventore voluptates culpa possimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero fugit incidunt quidem ullam alias nulla, nobis vel magni ex mollitia dignissimos repudiandae soluta. Ea porro fuga veniam. Quis, aut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quia, aperiam quod ipsam, ratione neque, temporibus fugit rem eaque sit molestias nemo doloribus nobis explicabo sint inventore voluptates culpa possimus.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros