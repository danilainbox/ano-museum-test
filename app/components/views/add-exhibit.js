import React from 'react';

export default function(props) {
    return (
        <div className="add-exhibit">
            <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target="#myModal">
                Добавить экспонат
            </button>
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form onSubmit={props.addExhibit}>
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">Новый экспонат</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="exhibit-name">Название</label>
                                    <input data-type="name" type="text" onChange={props.handleFormChange} className="form-control" id="exhibit-name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exhibit-city">Город</label>
                                    <input data-type="city" type="text" onChange={props.handleFormChange} className="form-control" id="exhibit-city"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exhibit-country">Страна</label>
                                    <input data-type="country" type="text" onChange={props.handleFormChange} className="form-control" id="exhibit-country"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exhibit-organization">Организация</label>
                                    <input data-type="organization" type="text" onChange={props.handleFormChange} className="form-control" id="exhibit-organization"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exhibit-description">Описание</label>
                                    <input data-type="description" type="text" onChange={props.handleFormChange} className="form-control" id="exhibit-description"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button className="btn btn-primary" type="submit">Add exhibit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
