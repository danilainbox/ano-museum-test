import React from 'react';

export default function(props) {
    return (
        <div className="exhibits-list">
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Место создания</th>
                        <th>Организация</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    {props.exhibits.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.city},&nbsp;{item.country}</td>
                                <td>{item.organization}</td>
                                <td>{item.description}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
