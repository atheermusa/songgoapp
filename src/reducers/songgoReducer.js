const initState = { allSonggos: [], loading: false }

function songgoReducer(state=initState, action){
    let idx;
    switch(action.type){
        case "LOADING":
            return { ...state, loading: true }
        case "LOAD_SONGGOS":
            return { allSonggos: action.payload, loading: false }
        case "LIKE_SONGGO":
            console.log(action)
            const songgoToLike = state.allSonggos.find(d => d.id === action.payload);
            idx = state.allSonggos.indexOf(songgoToLike)
            console.log(songgoToLike, idx)
            const updatedSonggos = [ 
                ...state.allSonggos.slice(0, idx), 
                { ...songgoToLike, liked: !songgoToLike.liked},
                ...state.allSonggos.slice(idx + 1)
            ]
            return { ...state, allSonggos: updatedSonggos }
        case "DELETE_SONGGO":
            console.log(action)
            const lessSonggos = state.allSonggos.filter(d => d.id !== action.payload);
            return { ...state, allSonggos: lessSonggos}
        default:
            return state
    }
}

export default songgoReducer;