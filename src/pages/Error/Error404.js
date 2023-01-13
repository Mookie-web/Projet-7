import {Link} from 'react-router-dom'

function Error404() {

    return (
        <>
            <div>
                <h1>404</h1>
                <div>Oups! La page que vous demandez n'existe pas.<p></p></div>
                <Link to="/">Retourner sur la home page</Link>
            </div>
        </>
    )
}

export default Error404