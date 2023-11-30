import { Group } from '@syncfusion/ej2-data';
import * as React from 'react';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

export class GroupRow extends React.Component<{}, {}> {
    public getRows(data: IOrders[]) {
        return data.map((row: IOrders, index:number) => (
            <Row key={index} {...row} />
        ));
    }

    public render() {
        const item: Group = this.props as Group;
        const ag: { caption: string } = {
            caption: item.field + ' - ' + (item.items && (item.items[0] as Object[])[item.field as any]),
        };
        return (
            <tbody>
                <Row key={ag.caption} {...ag} />
                {this.getRows(item.items as IOrders[])}
            </tbody>
        );
    }
}