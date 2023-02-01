import '../Home/Home.css'
import {Link} from 'react-router-dom'
import logementData from '../../data/logement_data.json'
import homeKasa from '../../assets/homeKasa.png'


function Home() {
    return (
        <section className="container_section">
            <div className='container-Body'>
                <div className="pPicture">
                    <p style={{
                        backgroundImage: `url(${(homeKasa)})`
                    }}>Chez vous, partout et ailleurs</p>
                </div>
            </div>
            <div className='loader_wrapper'>
                {logementData.map((l) => (
                    <Link key={l.id} to={`/Fiche/${l.id}`}>
                        <div className="rectangle"
                             style={{
                                 backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), 
                            url(${(l.cover)})`
                             }}>
                            <p className="container_title">{l.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
export default Home