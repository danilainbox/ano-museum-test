import React from 'react';
import AddExhibit from '../views/add-exhibit';
import * as types from '../../actions/action-types';
import store from '../../store';

export default class AddExhibitContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: '',
            country: '',
            organization: '',
            description: ''
        }
    }
    addExhibit (e) {
        e.preventDefault();
        store.dispatch({
            type: types.ADD_EXHIBIT,
            exhibit: this.state
        });

        $('#myModal').modal('hide');

        this.setState({
            name: '',
            city: '',
            country: '',
            organization: '',
            description: ''
        })
    }
    handleFormChange (e) {
        let type = e.target.getAttribute('data-type'),
            value = e.target.value;

        switch (type) {
            case 'name':
                this.setState({name: value});
                break;
            case 'city':
                this.setState({city: value});
                break;
            case 'country':
                this.setState({country: value});
                break;
            case 'organization':
                this.setState({organization: value});
                break;
            case 'description':
                this.setState({description: value});
                break;
        }
    }
    render () {
        return (
            <AddExhibit addExhibit = {this.addExhibit.bind(this)} handleFormChange={this.handleFormChange.bind(this)} data={this.state} />
        );
    }
}