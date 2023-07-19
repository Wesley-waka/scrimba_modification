import redux, {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

export function increment() {
    return (dispatch, getState) => {
        const number = getState()
        const baseUrl = "https://swapi.co/api/people"
        fetch(`${baseUrl}/${number}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch({
                    type: "INCREMENT",
                    payload: res
                })
            })
    }
}

/**

{name: "C-3PO", height: "167", mass: "75", hair_color: "n/a", skin_color: "gold", eye_color: "yellow", birth_year: "112BBY", gender: "n/a", homeworld: "https://swapi.co/api/planets/1/", films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/5/", "https://swapi.co/api/films/4/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/"], species: ["https://swapi.co/api/species/2/"], vehicles: [], starships: [], created: "2014-12-10T15:10:51.357000Z", edited: "2014-12-20T21:17:50.309000Z", url: "https://swapi.co/api/people/2/"}

 */

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

function reducer(count = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store
