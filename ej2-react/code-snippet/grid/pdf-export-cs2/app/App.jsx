import { Aggregate, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ExcelExport, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const toolbar = ['ExcelExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_excelexport') {
            grid.excelExport();
        }
    }
    const customAggregate = (customData) => {
        const brazilCount = customData.result ? customData.result.filter((item) => item['ShipCountry'] === 'Brazil').length : customData.filter((item) => item['ShipCountry'] === 'Brazil').length;
        return `Brazil Count::${brazilCount}`;
    };
    const footerTemplate = (props) => {
        return (<span>{props.Custom}</span>)
    }
    return (
        <div>
            <GridComponent id='Grid' dataSource={data} height={270} toolbar={toolbar}
                allowExcelExport={true} toolbarClick={toolbarClick} ref={g => grid = g}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                    <ColumnDirective field='Freight' headerText='Freight' width='100' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' width='150' format='yMd' type='date' />
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                </ColumnsDirective>
                <AggregatesDirective>
                    <AggregateDirective>
                        <AggregateColumnsDirective>
                            <AggregateColumnDirective columnName='ShipCountry' type='Custom' customAggregate={customAggregate} footerTemplate={footerTemplate}></AggregateColumnDirective>
                        </AggregateColumnsDirective>
                    </AggregateDirective>
                </AggregatesDirective>
                <Inject services={[Toolbar, ExcelExport, Aggregate]} />
            </GridComponent>
        </div>
    );
}
export default App;