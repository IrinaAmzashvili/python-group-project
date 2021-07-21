//action creators
const GET_CLUBS = 'clubs/GET_CLUBS';
const POST_CLUB = "clubs/POST_CLUB";
const GET_ONE_CLUB = 'clubs/GET_ONE_CLUB';
const EDIT_CLUB = 'clubs/EDIT_CLUB';


const loadClubs = (clubs) => ({
    type: GET_CLUBS,
    clubs
})

const createClub = (club) => ({
    type: POST_CLUB,
    club
})

const getOneClub = (club) => ({
    type: GET_ONE_CLUB,
    club
})

const editOneClub = (club) => ({
    type: EDIT_CLUB,
    club
})

//thunks
export const getClubs = () => async (dispatch) => {
    const allClubs = await fetch('/clubs');
    const clubs = await allClubs.json()
    if (allClubs.ok) {
        dispatch(loadClubs(clubs))
    }
}

export const postClub = (club) => async (dispatch) => {
    console.log("=======================> made it to thunk")
    const res = await fetch("/clubs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(club)
    })
    if (res.ok) {
        const newClub = await res.json()
        dispatch(createClub(newClub))
        return newClub
    }
}

export const editClub = (id, club) => async (dispatch) => {
    const response = await fetch(`/clubs/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(club)
    })
    console.log(club)
    if(response.ok) {
        const editedClub = await response.json()
        dispatch(editOneClub(editedClub))
    }
}

export const getSingleClub = (id) => async (dispatch) => {
    const oneClub = await fetch(`/clubs/${id}`)
    const club = await oneClub.json()
    if (oneClub.ok) {
        dispatch(getOneClub(club))
    }
}

//reducer

const initialState = { singleClub: null };
// const initialState = { singleClub: null };

const clubsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLUBS:
            const allClubs = { ...state }
            action.clubs.clubs.forEach((club) => {
                allClubs[club.id] = club
            })
            return allClubs;
        case EDIT_CLUB:
        case POST_CLUB:
            return {
                ...state,
                [action.club.id]: action.club
            }
        case GET_ONE_CLUB:
            const oneClub = Object.assign({}, state);
            oneClub.singleClub = action.club;
            return oneClub;
        // return {
        //     ...action.payload
        // }
            // return {
            //     ...state,
            //     [action.club.id]: action.club,
            // }
        default:
            return state;
    }
}

export default clubsReducer;
