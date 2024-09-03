import './index.scss';
import Cab from '../../components/cabecalho';

export default function NotFound() {

    return (
        <div className='page-not-found'>
            <Cab/>

            <div>
                <h1 className='titulo'>Conteúdos</h1>
            <img className='icone-not-found' src='/assets/images/error-removebg-preview.png' alt=''/>
            </div>

        </div>
    )
}