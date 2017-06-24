import React from 'react';
import axios from 'axios';
import store from '../../store';
import * as types from '../../actions/action-types';
import {connect} from 'react-redux';
import SearchResultContainer from '../containers/search-result-container';
import AddExhibitContainer from '../containers/add-exhibit-container';
import Bootstrap from 'bootstrap';


class MainLayout extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            searchString: ''
        };

        this.handleSearchStringChange = this.handleSearchStringChange.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        axios.get('/data/exhibits.json').then(response => {
            store.dispatch({
                type: types.GET_EXHIBITS_SUCCESS,
                exhibits: response.data
            });
        });
    }

    handleSearchStringChange(e) {
        this.setState({
            searchString: e.target.value.toLowerCase()
        })
    }

    search() {
        let searchString = this.state.searchString,
            isEmptyQuery = searchString.trim() === '' ? true : false,
            items;

        if (!isEmptyQuery) {
            items = this.props.exhibits.filter(item => ~item.name.toLowerCase().indexOf(searchString));
        }

        store.dispatch({
            type: types.SAVE_SEARCH_RESULT,
            items: items,
            isEmptyQuery: isEmptyQuery
        });
    }

    render() {
        let result;

        if(this.props.exhibits.length) {
            result = (
                <div className="top-container">
                    <div className="input-group input-group-lg search-container">
                        <input className="form-control" placeholder="Введите название экспоната" onChange={this.handleSearchStringChange} />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={this.search}>Найти</button>
                        </span>
                    </div>
                    <AddExhibitContainer/>
                </div>

            )
        } else {
            result = (
                <div className="loader">
                    <span>Загрузка...</span>
                </div>
            )
        }

        return (
            <div className="pt-20 container">
                {result}
                <SearchResultContainer/>
            </div>
        )

    }
}

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

export default connect(mapStateToProps)(MainLayout);