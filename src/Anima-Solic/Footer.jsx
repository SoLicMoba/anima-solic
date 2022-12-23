import React from 'react'
import './footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className="line--footer"></div>

            <div className="links--footer">
                <div className="links--left">
                    <h3>Créditos</h3>
                    <a target={"_blank"} href="https://www.crunchyroll.com/pt-br/">Crunchyroll</a>
                    <a target={"_blank"} href="https://myanimelist.net/">MyAnimeList</a>
                </div>

                <div className="links--center" id='contact'>
                    <h3>Anima SoLic</h3>
                    <a href="#inicio">Início do Site</a>
                    <a href="#lista">Lista</a>
                </div>

                <div className="links--right">
                    <h3>Redes Sociais</h3>
                    <a target={"_blank"} href="https://www.tiktok.com/@solic_bycode"><i className='bx bxl-tiktok' style={{ color: '#AFAFAF' }} ></i> TikTok </a>
                    <a target={"_blank"} href="https://github.com/solicmoba"><i class='bx bxl-github' style={{ color: '#AFAFAF' }}  ></i> GitHub </a>
                    <a target={"_blank"} href="https://www.instagram.com/richard_recode/"><i class='bx bxl-instagram' style={{ color: '#AFAFAF' }} ></i> Instagram </a>
                    <a target={"_blank"} href="https://www.linkedin.com/in/richard-renato-26bb44247/"><i class='bx bxl-linkedin-square' style={{ color: '#AFAFAF' }} ></i> LinkedIn </a>
                </div>

                <div id="copyright">
                    <strong> © By: Richard Renato </strong>
                </div>

            </div>



        </footer>
    )
}
