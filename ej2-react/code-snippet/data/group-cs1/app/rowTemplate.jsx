import React from 'react';
import { getValue } from '@syncfusion/ej2-base';

export const Row = (props) => {
    const caption = getValue('caption', props);

    if (caption) {
        return (
        <tr>
            <td colSpan={3}>{caption}</td>
        </tr>
        );
    }

    return (
        <tr>
            <td>{props.OrderID}</td>
            <td>{props.CustomerID}</td>
            <td>{props.EmployeeID}</td>
        </tr>
    );
};