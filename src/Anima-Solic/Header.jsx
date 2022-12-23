import React, { useState, useEffect } from 'react'
import '../Anima-Solic/header-al.css'
import Arrow_Down from './assets/Arrow_Down.png'


function ac() {
    const btn = document.querySelector('.btn');
    const navegation = document.querySelector('.navegation');

    btn.classList.toggle("active");
    navegation.classList.toggle("active");
}



function list(handler) {
    function handler() {
        const content = document.querySelector('.content-hiddenn')
        content.classList.toggle('content-hidden')
    }

    const lista = document.querySelector('#lista');
    const listaActive = document.querySelector('.content');
    const opZero = document.querySelector('.opp');
    const opUm = document.querySelector('.oppp')


    lista.classList.toggle("active--list");
    listaActive.classList.toggle("active---list");
    opZero.classList.toggle("opz");
    opUm.classList.toggle("opz");

    handler()
}



export const Header = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const blackHandler = () => {
            if (window.scrollY > 10) {
                setScroll(true);
            } else {
                setScroll(false);
            }

        }
        window.addEventListener('scroll', blackHandler);


        return () => {
            window.removeEventListener('scroll', blackHandler);
        }
    }, [])



    return (
        <header id='inicio'>
            <div id='toggle' className='toggle'   >

                <button className="btn" onClick={ac}>
                    <i id='menu' class='bx bx-menu'></i>
                </button>

            </div>
            <div className={scroll === true ? 'navegation black' : 'navegation'}>

                <div className="content"  >
                    <div className='content-hiddenn ' >
                        <a href="https://www.github.com/solicmoba"> Blue Lock </a>
                    </div>
                    <div className='logo opp '  >
                        <a href="#inicio">Anima SoLic</a>
                    </div>

                    <div className='links' >
                        <a href="#" id='lista' onClick={list} >LISTA</a>
                        <a href="#contact"
                            className='oppp ' id='contato' >CONTATO</a>
                    </div>
                </div>
            </div>

            <div className="header">


                <div className="center--content">

                    <h1>Lista dos meus <br />
                        animes e mangás <br />
                        favoritos
                    </h1>
                    <br />
                    <a href="#creditos" id='credits'>CRÉDITOS</a>
                </div>


            </div>

            <div className="container">
                <div className="center--container">

                    <div className="title">
                        <img src={Arrow_Down} alt="seta-para-baixo" />
                        <h2>Mais informações sobre o site abaixo</h2>
                        <img src={Arrow_Down} alt="seta-para-baixo" />
                    </div>

                    <div className="container--content">
                        <p>Responsivo para todas as telas</p>
                        <p>Com requisição de API de <a target={'_blank'} href='https://jikan.moe/'>jikan.moe</a></p>
                    </div>

                </div>
            </div>

        </header >
    )

}

