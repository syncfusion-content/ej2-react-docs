import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Inject, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    return (
        <GridComponent dataSource={data} height={272} allowFiltering={true} allowSorting={true}>
            <ColumnsDirective>
                <ColumnDirective type='RowNumber' textAlign='Center' />
                <ColumnDirective field='ProductID' headerText='Product ID' width='120' visible={false} textAlign='Right' isPrimaryKey={true} type='number' />
                <ColumnDirective field='ProductName' headerText='Products' width='160' allowEditing={false} />
                <ColumnDirective field='Category' headerText='Category' width='140' allowEditing={false} />
                <ColumnDirective field='SellingPrice' headerText='Price' width='130' format='C' textAlign='Right' />
                <ColumnDirective field='AvailableStock' headerText='In-Stock' width='120' textAlign='Right' template='#availableStockTemplate' />
                <ColumnDirective field='SoldStock' headerText='Sold' width='120' textAlign='Right' template='#soldStockTemplate' />
            </ColumnsDirective>
            <Inject services={[Filter, Sort]} />
        </GridComponent>
    );
}

export default App;