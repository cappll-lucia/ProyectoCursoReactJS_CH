import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container w-100">
            <div className="row">
                <div className="social col-lg-3 col-md-4 col-sm-4">
                    <span>Seguinos!</span> <br/> <hr/>
                    <div className="container__social">                            <a href="https://api.whatsapp.com/send?phone=5493416120058" target="_blank" className="social__a"><i className="fa-brands fa-whatsapp" id="wpp"></i></a>
                        <a href="http://www.facebook.com/optica.criado.9" target="_blank" className="social__a"><i className="fa-brands fa-facebook" id="fb"></i></a>
                        <a href="http://instagram.com/opticacriado" target="_blank" className="social__a"><i className="fa-brands fa-instagram" id="ig"></i></a>
                    </div>
                </div>
                <div className="menu col-lg-5 col-md-8 col-sm-8">
                    <span className="menu-span">Segí navegando</span> <br/> <hr/>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="../pages/sol.html">Anteojos de Sol</a></li>
                    <li><a href="../pages/recetados.html">Anteojos Recetados</a></li>
                    <li><a href="../pages/lcontacto.html">Lentes de Contacto</a></li>
                    <li><a href="../pages/industriales.html">Anteojos de Seguridad Industrial</a></li>
                    <li><a href="../pages/audifonos.html">Audífonos</a></li>
                    <li><a href="../pages/fotografia.html">Fotografía</a></li>
            </div>
                <div className="maps col-lg-4 col-md-12 col-sm-12">
                    <span>Visitá nuestro local</span> <br/> <hr/>
                    <iframe className="maps__iframe--map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6692.107716796221!2d-60.7790316985703!3d-33.00235550916214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7b287706444db%3A0x4424e1756415092d!2s%C3%93ptica%20Criado!5e0!3m2!1ses-419!2sar!4v1649375481181!5m2!1ses-419!2sar" width="" height="" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <span className="copyR"> Lucía Cappellini - <i className="fa-regular fa-copyright"></i> 2022</span>
        
    </div>
  )
}

export default Footer