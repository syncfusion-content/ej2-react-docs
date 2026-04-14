import * as React from 'react';
import { getValue } from '@syncfusion/ej2-base';
import { IOrders } from './orders';

export const Row: React.FC<Partial<IOrders> & { caption?: string }> = (props) => {
    const caption = getValue('caption', props);

    if (caption) {
        return (
        <tr>
            <td colSpan={3}>{caption}</td>
        </tr>
        );
    }

    const item = props as IOrders;

    return (
        <tr>
            <td>{item.OrderID}</td>
            <td>{item.CustomerID}</td>
            <td>{item.EmployeeID}</td>
        </tr>
    );
};