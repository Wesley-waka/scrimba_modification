// APP.js
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App() {
    const planets = useSelector(state => state.planets)
    const dispatch = useDispatch()
    const [planetId, setPlanetId] = useState(5);
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        // build out handleSubmit function:
        // 1 - prevent the page from refreshing when we receive input
        // 2 - give the new planet from our user a unique id
        // 3 - dispatch our ADD_PLANET action with the appropriate payload
        event.preventDefault()
        setPlanetId({ planetId: planetId + 1 })
        dispatch({
            type: 'ADD_PLANET',
            payload: { id: planetId, name: name }
        })
    }

    return (
        <>
            <div className="planet-image"></div>
            <h1>Let's learn about the planets!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <input type="submit" value="Add a planet" />
            </form>
            <ul>
                {planets.map(planet => (
                    <li key={planet.id}>{planet.name}</li>
                ))}
            </ul>
        </>
    )
}

export default App

// INDEX.JS

import { createStore } from 'redux'

const solarSystem = {
    star: 'sun',
    planets: [
        { id: 1, name: 'Mercury' },
        { id: 2, name: 'Venus' },
        { id: 3, name: 'Earth' },
        { id: 4, name: 'Mars' }
    ],
    constellationsVisible: {
        orion: false,
        pegasus: true
    }
}

const reducer = (state = solarSystem, action) => {
    if (action.type === 'ADD_PLANET') {
        return Object.assign({}, state, {
            planets: state.planets.concat(action.payload)
        })
    }
    return state
}

const store = createStore(reducer)

export default store