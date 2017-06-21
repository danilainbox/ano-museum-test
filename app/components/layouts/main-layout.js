import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import store from '../../store';
import * as types from '../../actions/action-types';
import {connect} from 'react-redux';
import ExhibitsList from '../views/exhibits-list';
import AddExhibitContainer from '../containers/add-exhibit-container';
import bootstrap from 'bootstrap';

class MainLayout extends React.Component {
    constructor () {
        super();
        this.state = {
            perPage: 3,
            pos: 0
        }
    }
    componentDidMount() {
        axios.get('/data/exhibits.json').then(response => {
            store.dispatch({
                type: types.GET_EXHIBITS_SUCCESS,
                exhibits: response.data
            });
        });
    }
    handlePageClick(data) {
        this.setState({pos: data.selected});
    }

    paginate() {
        let pos = this.state.pos,
            perPage = this.state.perPage,
            lastPos = Math.round(this.props.exhibits.length/perPage),
            res;

        if ((pos * perPage) > (this.props.exhibits.length - 1)) {
            pos = lastPos;
        }

        res = this.props.exhibits.slice(pos * perPage, pos * perPage + perPage);

        return res;
    }

    render() {
        let items = this.paginate();
        return (
            <div className="pt-20 container">
                <ExhibitsList data={items} />
                <div className="pagination-container">
                    <ReactPaginate
                        pageCount={Math.ceil(this.props.exhibits.length/this.state.perPage)}
                        pageRangeDisplayed={10}
                        onPageChange={this.handlePageClick.bind(this)}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                    />
                </div>
                <AddExhibitContainer />
            </div>
        );
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