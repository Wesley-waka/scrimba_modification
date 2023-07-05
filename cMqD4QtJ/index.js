import store from "./redux"
import {changeCount} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle, incrementViewCount, upvoteVideo, downvoteVideo} from "./redux/youTubeVideo"
import {setUserDetails, removeUserDetails} from "./redux/user"

store.dispatch(setUserDetails({
    firstName: "Joe",
    lastName: "Schmoe",
    id: 1,
    email: "joe@schmoe.com"
}))
store.dispatch(setUserDetails({
    email: "joe.schmoe@gmail.com"
}))
store.dispatch(removeUserDetails())


/**
 * Challenge:
 * 
 * Create a new state property to hold the currently-logged-in user info. I.e. if our app wanted to allow a user to log in, we would likely want to keep track of some info from the logged in user. For this challenge, you'll save a user with these properties:
 * {
 *      firstName: ___,
 *      lastName: ___,
 *      id: ___,
 *      email: ___
 * }
 * 
 * This will require 
 *      (1) Creating a new file to hold our new Redux stuff re: the user (e.g. user.js),
 *      (2) Creating a new action creator (e.g. "setUserDetails"),
 *      (3) Creating a new reducer, and 
 *      (4) Adding that reducer to our rootReducer with combineReducers
 */
