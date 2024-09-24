import './index.scss';

export default function Cards(props) {
    return (
        <div className='cards'>
            <div className='card' style={{ backgroundColor: props.corSegundaria }}>
                <div className='card-cabecalho' style={{ backgroundColor: props.corPrimaria }}>
                    <h2>{props.titulo}</h2>
                </div>
                <div className='card-conteudo'>
                    <h3>Assuntos</h3>
                    <pre>{props.topicos}</pre>
                </div>
                <p className='tag'>{props.date}</p>
                {props.mostrarTrabalho && <p className='tag'>Entrega Trab.</p>}
            </div>
        </div>
    );
}
