import React from 'react';
import axios from 'axios';
import store from '../../store';
import * as types from '../../actions/action-types';
import {connect} from 'react-redux';
import ExhibitsList from '../views/exhibits-list';

const mainLayout = React.createClass({
    componentDidMount: function() {
        axios.get('/data/exhibits.json').then(response => {
            store.dispatch({
                type: types.GET_EXHIBITS_SUCCESS,
                exhibits: response.data
            });
        });
    },
    render() {
        return (<ExhibitsList exhibits={this.props.exhibits}></ExhibitsList>);
    }
});

const mapStateToProps = state => ({
    exhibits: state.exhibitsState
});

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         showOwnProps: () => {
//             console.log(ownProps);
//             console.log(dispatch);
//         }
//     }
// };

export default connect(mapStateToProps)(mainLayout);


