/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import  './styles.sobre.css';
import 'animate.css';



export const SobreMim = () =>{
    return(
        <section className="sobre" id="sobre">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h1>{`José Lopes Sobrinho Neto`}<span className="wrap"></span></h1>
                        <p>Curioso desde pequeno por jogos eletrônicos e tecnologia hardwares, agora Graduado em Ciências da Computação.</p>
                        <p>Durante o curso, me descobri como desenvolvedor web, desenvolvendo desde pequenos sites landing pages, até Sistemas de contabilidade com Spring no backend.</p>
                        <p>Sempre buscando novas tecnologias, visando alta performace independente do tamanho do projeto, seja um sistema de padaria comum, até sistemas mais complexos com regras de negócio a ser implementadas.</p>
                    </Col>
                </Row>
                <Col>
                    <a target="blank" href="https://docs.google.com/document/d/1f2mxPxCobAks2mUQhg_FAVvPgBq-iGgSpkiEdlGYa-U/edit?usp=sharing">
                            <button className = "MeuCv" id="bt" >Meu Curriculum</button> </a>
                    </Col>
            </Container>
        </section>
    )
}