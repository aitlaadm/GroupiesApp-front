import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Home.css'
import HomeService from './HomeService'
function Home() {

    const [username, setUsername] = useState('')
    const history = useHistory();
    const Auth = (e) => {
        e.preventDefault()
        if (username === "admin") {
            history.push('/admin')
        } else if (username !== "admin") {
            //     history.push('/users')
            HomeService.addUser(username).catch(err => alert(err))
        } else {
            alert('Veuillez un psuedo !')
        }
    }
    return (
        <div className='home'>
            <form onSubmit={(e) => Auth(e)}>
                <h2>Psuedo :</h2>
                <input type="text" placeholder="Ex: toto" onChange={e => setUsername(e.target.value)} />
                <button type="submit">Joindre</button>
            </form>
        </div>
    )
}

export default Home
