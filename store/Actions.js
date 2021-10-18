export const GET_CHARACTERS = 'GET_CHARACTERS';

export const getCharactersAction = () => {
    return async dispatch => {
        const charactersRespone = await fetch('https://www.breakingbadapi.com/api/characters', {
            method: "GET"
        });
        const charactersData = await charactersRespone.json();
        if(charactersData == null) {
            const message = 'Data does not exist';
            throw new Error(message);
        } else {
            dispatch(getCharactersDispatch(charactersData));
        }
    }
}

export const getCharactersDispatch = (data) => {
    return dispatch => {
        dispatch({ type: GET_CHARACTERS, data });
    }
}