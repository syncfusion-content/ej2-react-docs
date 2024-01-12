import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, RowSelectEventArgs, Selection, Inject, Toolbar, PrintEventArgs, Print } from '@syncfusion/ej2-react-grids';
import { customerData, data } from './datasource';

function MasterDetail() {
    let detailGrid;
    const names = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
    const master = customerData.filter((e) => names.indexOf(e.CustomerID) !== -1);;

    const rowselect = (args) => {
        let selRecord = args.data;
        let selecteMessage = document.getElementsByClassName('e-statustext')[0];
        let message = selecteMessage.querySelector('b')
        message.textContent = selRecord.ContactName;
        detailGrid.dataSource = data.filter((record) => record.CustomerName === selRecord.ContactName).slice(0, 5);
    }

    const beforePrint = (args) => {
        let customElement = document.createElement('div');
        customElement.innerHTML = document.getElementsByClassName('e-statustext')[0].innerHTML + (detailGrid).element.innerHTML;
        customElement.appendChild(document.createElement('br'));
        args.element.append(customElement);
    }

    return (
        <div className='control-pane'>
            <div className='control-section'>
                <GridComponent dataSource={master} selectedRowIndex={2} rowSelected={rowselect} toolbar={['Print']} beforePrint={beforePrint}>
                    <ColumnsDirective>
                        <ColumnDirective field='ContactName' headerText='Customer Name' width='150'></ColumnDirective>
                        <ColumnDirective field='CompanyName' headerText='Company Name' width='150'></ColumnDirective>
                        <ColumnDirective field='Address' headerText='Address' width='150' />
                        <ColumnDirective field='Country' headerText='Country' width='130' />
                    </ColumnsDirective>
                    <Inject services={[Selection, Toolbar, Print]} />
                </GridComponent>

                <div className='e-statustext'> Showing orders of Customer:  <b></b></div>

                <GridComponent allowSelection={false} ref={grid => detailGrid = grid}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='100' ></ColumnDirective>
                        <ColumnDirective field='Freight' headerText='Freight' width='100' format='C2' type='number' />
                        <ColumnDirective field='ShipName' headerText='Ship Name' width='150'></ColumnDirective>
                        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
                        <ColumnDirective field='ShipAddress' headerText='Ship Address' width='150'></ColumnDirective>
                    </ColumnsDirective>
                </GridComponent>
            </div>
        </div>
    )
}
export default MasterDetail;