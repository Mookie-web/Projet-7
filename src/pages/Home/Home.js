import './Home.css'

import {Link} from 'react-router-dom'
import logementData from '../../data/logement_data.json'

function Home() {

    return (
        <>
            <section>
                <div>
                    <div>
                        <p>Chez vous ..</p>
                    </div>
                </div>
                <div id="rectangle">
                    {logementData.map((l) => (
                        <Link key={l.id} to={`/logement/${l.id}`}>
                            <div style={{
                                backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
                        url(${(l.cover)}`
                            }}>
                                <p>{l.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home