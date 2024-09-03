import Cab from '../../components/cabecalho';
import Cards from '../../components/cards'
import './index.scss';

export default function Principal() {

    let corPrimaria = '#A3E5BA'
    let corSegundaria = '#EFFBE2'


    return (
        <div className='app-container'>
            <Cab />
 <section className='section-cards'>
       <h1>Conteúdos</h1>

            <section className='cards-container'>

             

                <Cards
                    corPrimaria={corPrimaria}
                    corSegundaria={corSegundaria}
                    titulo="Componentes"
                    topicos="
                    - Objetos e Listas de Objetos
                    - Componentes"
                    date="26/agosto"
                    mostrarTrabalho={false}
                />


                <Cards
                    corPrimaria="#DCA3E5"
                    corSegundaria="#EDE2FB"
                    titulo="Renderização e Efeito"
                    topicos="
                    - Componentes na renderização."
                    date="02/setembro"
                    mostrarTrabalho={false}
                />


                <Cards
                    corPrimaria="#C3C3C3"
                    corSegundaria="#F2F2F2"
                    titulo="Consumindo APIs - Parte 1"
                    topicos="
                    - Componentes na renderização."
                    date="09/setembro"
                    mostrarTrabalho={true}
                />
                <Cards
                    corPrimaria="#F6E448"
                    corSegundaria="#FAF4C1"
                    titulo="Prova Prática e Teorica"
                    topicos="
                    - Criando um projeto React
                    - Estilização com SCSS
                    - Navegação entre telas
                    - Variáveis de estado
                    - Renderização de lista
                    - Componentes"
                    date="16/setembro"
                    mostrarTrabalho={false}
                />




            </section>
</section>
        </div>
    )


}

