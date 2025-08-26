import React from 'react'
import styles from './card.module.css'

 export default function Card({
    titulo="sin nombre", 
    descripcion = "Sin descripcion" ,
    imagen ="https://www.italfren.com.ar/images/catalogo/imagen-no-disponible.jpeg",
    ataque="0",
    ps="0",
    defensa="0",
    ataqueEspecial="0",
    defensaEspecial="0",
    velocidad="0",
    altura="0",
    categoria="0",
    peso="0",
    habilidad="0",
    tipo="0",
    debilidad="0"

})
    {
     return(
    <>

    <div className={styles.carta}>
    <h1>
        {titulo}
    </h1>
    <img className={styles.imagen} src={imagen} alt="" />

        <h2>{descripcion}</h2>
        <div className={styles.info}>
            <div className={styles.estadisticas}>
                <h5 >
                    Ataque: {ataque}
                </h5>                
                <h5>
                    defensa: {defensa}
                </h5>    
                <h5>
                    vida: {ps}
                </h5>
                <h5>
                    Ataque Especial: {ataqueEspecial}

                </h5>
                <h5>
                    defensa Especial: {defensaEspecial}

                </h5>
                <h5>
                    velocidad: {velocidad}
                </h5>
            </div>
            <div className={styles.caractericsticas}>
                <h5 >
                Altura: {altura}
                </h5>
                <h5 >
                Categoria: {categoria}
                </h5>
                <h5 >
                Peso: {peso}
                </h5>
                <h5 >
                Habilidad: {habilidad}
                </h5>
                <h5 >
                Tipo: {tipo}
                </h5>
                <h5 >
                Debilidad: {debilidad}
                </h5>

            </div>
        </div>


    </div>
    </>
 )
 }
