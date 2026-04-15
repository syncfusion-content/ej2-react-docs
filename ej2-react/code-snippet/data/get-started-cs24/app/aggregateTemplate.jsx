import React from 'react';

export const AggregateRow = (props) => {
    const { min } = props;

    return (
        <tr>
            <td />
            <td />
            <td>{`Min: ${min}`}</td>
        </tr>
    );
};