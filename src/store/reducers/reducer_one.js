import * as ACTION_TYPE from '../actions/action_types'

const initialState = {
    st_prop_one: false
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case ACTION_TYPE.SUCCESS:
            return {
                ...state,
                st_prop_one: true
            }
        case ACTION_TYPE.FAILURE:
            return {
                ...state,
                st_prop_one: false
            }
        default:
            return state
        

    }

}

export default rootReducer;

