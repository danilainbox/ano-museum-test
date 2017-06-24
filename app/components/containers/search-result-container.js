import React from 'react';
import ReactDOM from 'react-dom';
import ExhibitsList from '../views/exhibits-list';
import {connect} from 'react-redux';
import ReactPaginate from 'react-paginate';


class SearchResultsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            perPage: 1,
            pos: 0,
            paginationKey: 0,
            filterString: ''
        }
    }

    componentWillReceiveProps() {
        this.setState({
            pos: 0,
            paginationKey: ++this.state.paginationKey,
            filterString: ''
        });
    }

    handlePageClick(data) {
        this.setState({
            pos: data.selected
        });
    }

    handleFilterChange(e) {
        this.setState({
            pos: 0,
            paginationKey: ++this.state.paginationKey,
            filterString: e.target.value.toLowerCase(),
        });
    }

    filter() {
        let filterString = this.state.filterString,
            isEmptyQuery = filterString.trim() === '' ? true : false,
            items;

        if (!isEmptyQuery) {
            items = this.props.searchResult.items.filter(item => ~(`${item.city.toLowerCase()}, ${item.country.toLowerCase()}`).indexOf(filterString));
        } else {
            items = this.props.searchResult.items
        }

        return items;
    }

    paginate(filtered) {
        let pos = this.state.pos,
            perPage = this.state.perPage,
            lastPos = Math.round(filtered.length/perPage),
            res;

        if ((pos * perPage) > (filtered.length - 1)) {
            pos = lastPos;
        }

        res = filtered.slice(pos * perPage, pos * perPage + perPage);

        return res;
    }

    render() {
        let filtered, paginated, result;

        if (this.props.searchResult.items) {
            if (this.props.searchResult.items.length) {
                filtered = this.filter();
                paginated = this.paginate(filtered);
                result = (
                    <div className="search-container__result">
                        <ExhibitsList data={paginated} handleFilterChange = {this.handleFilterChange.bind(this)} filterString = {this.state.filterString}/>
                        <div className="pagination-container" key={this.state.paginationKey}>
                            <ReactPaginate
                                pageCount={Math.ceil(filtered.length/this.state.perPage)}
                                pageRangeDisplayed={10}
                                onPageChange={this.handlePageClick.bind(this)}
                                containerClassName={"pagination"}
                                activeClassName={"active"}
                                initialPage = {0}
                            />
                        </div>
                    </div>
                )
            } else {
                result = <div className="search-container__result">Ничего не найдено</div>;
            }
        } else {
            if (this.props.searchResult.isEmptyQuery) {
                result = <div className="search-container__result">Задан пустой запрос</div>;
            } else {
                // Запроса еще не было, result = null
                result = null;
            }
        }

        return result;
    }
}

const mapStateToProps = state => ({
    searchResult: state.searchResultState
});

export default connect(mapStateToProps)(SearchResultsContainer)
