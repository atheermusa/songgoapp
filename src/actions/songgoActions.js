const loading = { type: "LOADING" };

const loadSonggos = songgoData => { 
    const songgos = songgoData.map((url, idx) => ({ id: idx, img: url, liked: false }))
    return { type: "LOAD_SONGGOS", payload: songgos }
};

const handleError = err => {
    console.warn(err);
    return { type: "SET_ERROR", payload: err.message }
}

export const toggleLikeSonggo = id => ({ type: "LIKE_SONGGO", payload: id });

export const deleteSonggo = id => ({ type: "DELETE_SONGGO", payload: id });

// export const fetchSonggos = () => {
//     return dispatch => {
//         dispatch(loading);
//         fetch('https://dog.ceo/api/breeds/image/random/9')
//             .then(r => r.json())
//             .then(data => dispatch(loadDoggos(data.message)))
//             .catch(err => dispatch(handleError(err)))
//     };
// };