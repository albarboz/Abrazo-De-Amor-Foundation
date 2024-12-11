import React from "react";

const About = () => (
  <section id="about" className="bg-light py-5" style={{ backgroundColor: '#F7F7F8' }} >
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-5 col-md-12">
          <div id="paypal-container-RYMZ5BBSU2J6Y"
            className="py-5 px-5 border rounded  shadow-none d-flex"
            style={{ justifyContent: 'center', backgroundColor: 'white' }}
          ></div>
        </div>
        <div className="col-lg-7 col-md-12 mb-1">
          <h2>Acerca De Nosotros</h2>
          <p class="lead"><strong>Somos una organización exenta de impuestos bajo la sección 501(c)(3)</strong></p>
          <p className="lead"><strong>Patrocinado por <b>Salon Nadia</b>, un negocio propiedad de una mujer en Monroe, WA</strong></p>
          <div className="mt-2">
            <h3>Encuéntranos aquí:</h3>
            <iframe
              title="Salon Nadia Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2335.489169879675!2d-121.97390447359277!3d47.857064621213894!3m2!
              1i1024!2i768!4f13.1!3m3!1m2!1s0x549aa6f7a5013277%3A0x4aa113302f0b890f!2sSalón Nadia Barber shop!5e1!3m2!1sen!2sus!4v1733440345646!5m2!1sen!2sus"
              width="100%"
              height="313px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="eager"
              className="rounded d-flex"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
