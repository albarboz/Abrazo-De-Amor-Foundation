import React from "react";
import '../components/hero.css'


const Hero = () => (
    
    <section className="text-center text-dark py-4" style={{ backgroundColor: '#006D77' }}>
        <div className="container ">
            <h1 className="display-2" style={{ color: '#E29578' }}>Nuestra Misión</h1>
            <p className="lead" style={{color: 'white'}}> En Abrazo De Amor,
                estamos enfocados en marcar la diferencia ayudando a las personas a través del apoyo comunitario y
                dándoles acceso a recursos. Nuestro objetivo es encontrar y apoyar a quienes lo necesitan, nominados por familiares o amigos,
                brindándoles oportunidades de crecimiento personal y sanación.</p>
            <p className="lead" style={{color: 'white'}}>Con fondos cuidadosamente asignados, ofrecemos talleres, sesiones de terapia y programas diseñados
                para fortalecer el bienestar emocional, la resiliencia y el autodescubrimiento. Al crear un sentido de esperanza y conexión,
                estamos construyendo una comunidad solidaria que celebra el camino de cada persona hacia un futuro mejor.
                Juntos, estamos trabajando para crear un mundo donde la sanación y el crecimiento sean accesibles para todos, una historia a la vez.</p>
            <button
                onClick={() => window.location.href = '#services'}
                className="btn btn-outline-light btn-lg "
                type="button" class="btn btn-outline-light"
                style={{
                    border: '2px solid white',
                    '--bs-btn-padding-y': '.55rem',
                    '--bs-btn-padding-x': '.85rem',
                    '--bs-btn-font-size': '1.3rem',
                }}
            >
                Aprende más
            </button>
        </div>
    </section >
);

export default Hero;
