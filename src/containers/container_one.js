import React, { Component } from 'react'
import * as ACTION_TYPES from '../store/actions/action_types'
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

class Container_one extends Component {
    render() {
        return (
            <div>
                {console.log(this)}
                <button onClick={() => console.log(`stpropone = ${this.props.st_prop_one}`)}>Get State</button>
                <button onClick={() => this.props.actionToSucccess()}>Dispatch Action SUCCESS</button>
                <button onClick={() => this.props.actionToFailure()}>Dispatch Action FAILURE</button>
                <button onClick={() => this.props.actionCreatorSuccess()}>Dispatch actionCreatorSuccess</button>
                <button onClick={() => this.props.actionCreatorFailure()}>Dispatch actionCreatorFailure</button>
            </div>
        )
    }


}

//get state from redux
function mapStateToProps(state) {
    console.log("state below")
    console.log(state)
    return {    
        st_prop_one: state.st_prop_one
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionToSucccess: () => dispatch(ACTIONS.SUCCESS),
        actionToFailure: () => dispatch(ACTIONS.FAILURE),
        actionCreatorSuccess: () => dispatch(ACTIONS.success()),
        actionCreatorFailure: () => dispatch(ACTIONS.failure()),
    }

}

export default Container_one
