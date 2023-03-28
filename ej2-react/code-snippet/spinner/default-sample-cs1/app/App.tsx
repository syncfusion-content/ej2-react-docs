


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { setSpinner } from '@syncfusion/ej2-react-popups';
import { data } from './datasource';

// By default, Spinner is rendered with specified theme inside the Grid component.
export default class App extends React.Component<{}, {}> {
    private gridData: Object[] = data.slice(0, 7);

    public onGridCreated(): void {
        this.hideSpinner = () => true;

        // Specify the type of the Spinner to be displayed in the Grid.
        setSpinner({ type: 'Bootstrap' });
    }
    render() {
        return (
            <div>
                <GridComponent id='grid' dataSource={this.gridData} created={this.onGridCreated}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='right' type='number'></ColumnDirective>
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' type='string'></ColumnDirective>
                        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C' textAlign='right'></ColumnDirective>
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='right'></ColumnDirective>
                    </ColumnsDirective>
                </GridComponent>
            </div>
        );
    }
}



