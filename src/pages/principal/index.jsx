
import React from 'react';
import axios from 'axios';
import Cab from '../../components/cabecalho';
import Cards from '../../components/cards';
import './index.scss';

export default function Principal() {
    const corPrimaria = '#A3E5BA';
    const corSegundaria = '#EFFBE2';

    const cards = [
        {
            titulo: "Componentes 1",
            topicos: "- Objetos e Listas de Objetos\n- Componentes",
            entregaTrab: true,
            date: "26/agosto",
        },
        {
            titulo: "Componentes Test 2",
            topicos: "- Objetos e Listas de Objetos\n- Componentes",
            entregaTrab: false,
            date: "26/agosto",
        }
    ];

    async function listarCards() {
        try {
            const dados = await axios.get('http://localhost:8080/cards');
            console.log(dados.data); // Supondo que a resposta tenha a propriedade `data`
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className='app-container'>
            <Cab />
            <section className='section-cards'>
                <h1>Conteúdos</h1>
                <section className='cards-container'>
                    {cards.map((card, index) => (
                        <Cards
                            key={index}
                            corPrimaria={corPrimaria}
                            corSegundaria={corSegundaria}
                            titulo={card.titulo}
                            topicos={card.topicos}
                            date={card.date}
                            mostrarTrabalho={card.entregaTrab}
                        />
                    ))}
                </section>
                <button onClick={listarCards}>Listar Cards</button>
            </section>
        </div>
    );
}
