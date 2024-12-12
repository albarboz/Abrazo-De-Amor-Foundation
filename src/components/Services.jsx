import React from "react";

const Services = () => (
  <section
    id="services"
    className="py-5"
    style={{ backgroundColor: "#FFDDD2" }}
  >
    <div className="container text-center  ">
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fvoicetacomaradiouniversal%2Fvideos%2F589897527046536%2F&show_text=false&width=560&t=0"
          style={{
            border: "none",
          }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  </section>
);

export default Services;
