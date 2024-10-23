import './Footer.css'

export const Footer = () => {
  return (
    <section className='pieDePagina'>
      <div className='grupo1'>
        <div className="box">
          <figure>
            <a href="#" />
            <img src="https://i.ibb.co/3Fgkq5G/logo.png" alt="logo" />
            <a />
          </figure>
        </div>
        <div className="box">
          <h2>Sobre Nosotros</h2>
          <p>
            Somos una empresa dedicada a la venta de productos de limpieza y
            belleza.
          </p>
        </div>
        <div className="box">
          <h2>Siguenos</h2>
          <div className="red-social">
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/" target="_blank">

              <i className="fa-brands fa-x-twitter"></i>

            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>&copy; 2022 <b>FN</b> - Todos los Derechos Reservados.</small>
      </div>
    </section>

  )
}
