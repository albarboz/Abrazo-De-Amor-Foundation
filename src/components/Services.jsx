import React from "react";

const Services = () => (
  <section
    id="services"
    className="py-5"
    style={{ backgroundColor: '#FFDDD2' }}
  >
    <div
      className="d-flex justify-content-center"
      style={{
        position: "relative",
        width: "70%",
        paddingTop: "40%", // 16:9 aspect ratio (height/width * 100)
        overflow: "hidden",
        margin: "0 auto", // Center the div horizontally

      }}
    >
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fvoicetacomaradiouniversal%2Fvideos%2F589897527046536%2F&show_text=false&width=560&t=0"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          border: "none",
        }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  </section>
);

export default Services;


