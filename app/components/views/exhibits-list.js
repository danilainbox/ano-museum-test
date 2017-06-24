import React from 'react';

export default function(props) {
    return (
        <div className="exhibits-list">
            <table className="exhibits-table table table-striped">
                <thead>
                    <tr>
                        <th className="name">Название</th>
                        <th className="place">
                            <input type="text" className="form-control" placeholder="Место создания" value={props.filterString} onChange={props.handleFilterChange}/>
                        </th>
                        <th className="organization">Организация</th>
                        <th className="description">Описание</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="name">{item.name}</td>
                                <td className="place">{item.city}{item.country ? ', ' : ''}{item.country}</td>
                                <td className="organization">{item.organization}</td>
                                <td className="description">{item.description}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
