


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { setSpinner } from '@syncfusion/ej2-react-popups';
import { data } from './datasource';

function App() {
    let gridData: Object[] = data.slice(0, 7);
    const [status, setStatus] = React.useState({ hideSpinner: true });
    function onFirstGridCreated(): void {
        setStatus({ hideSpinner: true });

        // Specify the template content to be displayed in the Spinner
        setSpinner({ template: '<div style="width:100%;height:100%" class="custom-rolling"><div></div></div>' });
    }
    function onSecondGridCreated(): void {
        setStatus({ hideSpinner: true });
    }
        return (
            <div>
                <GridComponent id='grid1' dataSource={gridData} created={onFirstGridCreated}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='right' type='number'></ColumnDirective>
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' type='string'></ColumnDirective>
                        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C' textAlign='right' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='right' />
                    </ColumnsDirective>
                </GridComponent>
                <br/><br/><br/>
                <GridComponent id='grid2' dataSource={gridData} created={onSecondGridCreated}>
                    <ColumnsDirective id='grid2' dataSource={gridData}>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='right' type='number'></ColumnDirective>
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' type='string'></ColumnDirective>
                        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C' textAlign='right' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='right' />
                    </ColumnsDirective>
                </GridComponent>
            </div>
        );
}



