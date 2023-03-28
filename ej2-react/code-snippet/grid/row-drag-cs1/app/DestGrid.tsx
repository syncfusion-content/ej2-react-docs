import { GridComponent, Inject, RowDropSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import { ColumnDirective, ColumnsDirective, RowDD, Selection } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

export class Target extends React.Component<{}, {}>{
    public data: object[] = [];
    public rowDropSettings: RowDropSettingsModel = { targetID: 'Grid' };
    public selectionSettings: SelectionSettingsModel = { type: 'Multiple' };
    public render() {
        return <GridComponent id="DestGrid" dataSource={this.data} allowRowDragAndDrop={true} 
                rowDropSettings={this.rowDropSettings} selectionSettings={this.selectionSettings}>
                <Inject services={[RowDD, Selection]}/>
                <ColumnsDirective>
                 <ColumnDirective field='OrderID' width='120' textAlign="Right"/>
                 <ColumnDirective field='CustomerID' width='150'/>
                 <ColumnDirective field='ShipCity' width='100'/>
                 <ColumnDirective field='ShipName' width='150'/>
                </ColumnsDirective>
               </GridComponent>
    }
  }