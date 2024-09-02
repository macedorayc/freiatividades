import Cab from '../components/cabecalho';
import './index.scss';

export default function Principal() {

    let corPrimaria = '#A3E5BA'
    let corSegundaria = '#EFFBE2'
    let trabalho = true

    return(
        <div className='app-container'>
        <Cab />

        <div className='cards'>
            <div className='card' style={{ backgroundColor: corSegundaria }}>
                <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
                    <h2>Componentes</h2>
                </div>
                <div className='card-conteudo'>
                    <h3>Assuntos</h3>
                    <pre>
                        - Objetos e Listas de Objetos<br />
                        - Componentes
                    </pre>
                </div>
                <p className='tag'>26/agosto</p>
{
    trabalho && <p className='tag'>Entrega Trab.</p>
}
                
            </div>
        </div>
    </div>
    )


}

