import { Group } from '@syncfusion/ej2-data';
import * as React from 'react';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

export class GroupRow extends React.Component<{}, {}>{
    public getRows(data: object[]) {
        return data.map((row: IOrders) => (<Row {...row}/>));
    }
    public render() {
        const item: Group = this.props as Group; 
        const ag: { caption: string } = { caption: item.field + ' - '
            + (item.items && item.items[0][item.field as string]) };
        return (<tbody> <Row {...ag}/> { this.getRows(item.items as object[]) }</tbody>)
    }
}