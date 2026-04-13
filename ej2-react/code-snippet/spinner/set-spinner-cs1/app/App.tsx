


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { setSpinner } from '@syncfusion/ej2-react-popups';
import { data } from './datasource';

export default class App extends React.Component<{}, {}> {
    private gridData: Object[] = data.slice(0, 7);

    public onFirstGridCreated(): void {
        this.hideSpinner = () => true;

        // Specify the template content to be displayed in the Spinner
        setSpinner({ template: '<div style="width:100%;height:100%" class="custom-rolling"><div></div></div>' });
    }
    public onSecondGridCreated(): void {
        this.hideSpinner = () => true;
    }
    render() {
        return (
            <div>
                <GridComponent id='grid1' dataSource={this.gridData} created={this.onFirstGridCreated}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='right' type='number'></ColumnDirective>
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' type='string'></ColumnDirective>
                        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C' textAlign='right' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='right' />
                    </ColumnsDirective>
                </GridComponent>
                <br/><br/><br/>
                <GridComponent id='grid2' dataSource={this.gridData} created={this.onSecondGridCreated}>
                    <ColumnsDirective id='grid2' dataSource={this.gridData}>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='right' type='number'></ColumnDirective>
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' type='string'></ColumnDirective>
                        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C' textAlign='right' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='right' />
                    </ColumnsDirective>
                </GridComponent>
            </div>
        );
    }
}



