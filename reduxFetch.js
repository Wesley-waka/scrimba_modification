// REDUX STATE
// INDEX.JS
import { createStore } from 'redux'

const house = {
    type: 'condo',
    rooms: [
        { id: 1, type: 'Living Room' },
        { id: 2, type: 'Dining Room' },
        { id: 3, type: 'Bathroom' }
    ],
    doorsOpen: {
        backDoor: false,
        frontDoor: true
    },
    temp: 'Calculating...'
}

const reducer = (state = house, action) => {
    if (action.type === 'ADD_ROOM') {
        return Object.assign({}, state, {
            rooms: state.rooms.concat(action.payload)
        })
    }

    if (action.type === 'GET_TEMP') {
        return Object.assign({}, state, {
            temp: action.payload
        })
    }
    return state
}

const store = createStore(reducer)

export default store


// APP.JS
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App() {
    const dispatch = useDispatch()
    const { rooms, temp } = useSelector(
        state => ({
            rooms: state.rooms,
            temp: state.temp
        })
    )

    useEffect(() => {
        fetch('https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/cnarenal/?period=latestdata')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                dispatch({
                    type: 'GET_TEMP',
                    payload: json.TEMPERATURE
                })
            })
    }, [])

    return (
        <>
            <div className="home-image"></div>
            <h1>Let's learn about homes!</h1>
            <ul>
                {rooms.map(room => (
                    <li key={room.id}>{room.type}</li>
                ))}
            </ul>
            <p>The temperature outside is: {temp}</p>
        </>
    )
}

export default App










// REDUX ASYNC FETCH