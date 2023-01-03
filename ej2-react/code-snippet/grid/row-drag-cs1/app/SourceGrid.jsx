import { GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { ColumnDirective, ColumnsDirective, RowDD, Selection } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
export class Source extends React.Component {
    data = data.slice(0, 5);
    rowDropSettings = { targetID: 'DestGrid' };
    selectionSettings = { type: 'Multiple' };
    style = { marginBottom: '20px' };
    render() {
        return <GridComponent id="Grid" dataSource={this.data} allowRowDragAndDrop={true} rowDropSettings={this.rowDropSettings} selectionSettings={this.selectionSettings} style={this.style}>
                <Inject services={[RowDD, Selection]}/>
                <ColumnsDirective>
                 <ColumnDirective field='OrderID' width='120' textAlign="Right"/>
                 <ColumnDirective field='CustomerID' width='150'/>
                 <ColumnDirective field='ShipCity' width='100'/>
                 <ColumnDirective field='ShipName' width='150'/>
                </ColumnsDirective>
               </GridComponent>;
    }
}
