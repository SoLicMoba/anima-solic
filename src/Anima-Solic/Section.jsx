import React from 'react'
import './section.css'
import MyAnimeList from './assets/MyAnimeList.png'
import Crunchyroll from './assets/Crunchyroll.png'
import Jikan from './assets/Jikan.png'

export const Section = () => {
    return (
        <section>

            <div className="section--content">
                <div className="sobre-o-site">
                    <h2>SOBRE O SITE</h2>
                    <p>Fiz este site com intuito exclusivo de colocá-lo no portfólio
                    </p>
                    <h3>TECNOLOGIAS USADAS</h3>

                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React.JS</li>
                    </ul>

                </div>

                <div className="objetivos-do-site" id='creditos'>
                    <h2>OBJETIVOS DO SITE</h2>
                    <p>Manipular API Externa do <a target={'_blank'} href='https://jikan.moe/'>jikan.moe</a> para amplificar o site com informações reais e atualizadas dos meus animes/mangás favoritos</p>
                    <p></p>
                </div>
                <div className="creditos" >
                    <h2>CRÉDITOS</h2> <br />

                    <div className='links'>
                        <div>
                            <a target={'_blank'} href="https://myanimelist.net/"><img src={MyAnimeList} /></a>
                            <span>MyAnimeList</span>
                        </div>
                        <div>
                            <a target={'_blank'} href="https://www.crunchyroll.com/pt-br/" ><img src={Crunchyroll} /></a>
                            <span>Crunchyroll</span>
                        </div>
                        <div>
                            <a target={'_blank'} href="https://jikan.moe/" ><img src={Jikan} /></a>
                            <span>Jikan.moe</span>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}
