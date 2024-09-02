import './index.scss';

export default function Cards(props) {

   


    return(
        <div className='app-container'>
        <Cab />

        <div className='cards'>
            <div className='card' style={{ backgroundColor: props.corSegundaria }}>
                <div className='card-cabecalho' style={{ backgroundColor: props.corPrimaria }}>
                    <h2>{props.titulo}</h2>
                </div>
                <div className='card-conteudo'>
                    <h3>{props.titulo2}</h3>
                    <pre>
                        - Objetos e Listas de Objetos<br />
                        - Componentes

                        
                    </pre>
                </div>
                <p className='tag'>{props.date}</p>
{
    trabalho && <p className='tag'>Entrega Trab.</p>
}
                
            </div>

        </div>
    </div>
    )


}