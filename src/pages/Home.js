import React from 'react'
import {useHistory} from 'react-router-dom';

const Home = () => {

    const history = useHistory();

    return (
        <div className="container home">
            <h1 className="home-title">Politik Test</h1>
            <button className="btn btn-b" onClick={() => history.push('/test')}>Testi Başlat !</button>
        </div>
    )
}

export default Home
