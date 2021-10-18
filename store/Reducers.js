import { GET_CHARACTERS } from './Actions';

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.data
            }
        default:
            return state;
    }
}