import { Aggregate, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const gridTemplate = (props: any) => {
        const src = 'https://ej2.syncfusion.com/demos/src/grid/images/' + props.EmployeeID + '.png';
        return (
            <div className='image'>
                <img src={src} alt='Employee' width='40' height='40' />
            </div>
        );
    };

    const footerSum = (props: any) => {
        return <span>Total Freight: {props.Sum}</span>;
    };

    return (
        <GridComponent
            dataSource={data}
            headerRowHeight={50}
            footerRowHeight={50}
            rowHeight={100}
        >
            <ColumnsDirective>
                <ColumnDirective headerText='Image' textAlign='Center' width='120' template={gridTemplate} />
                <ColumnDirective field='OrderID' headerText='Order ID' textAlign='Right' width='120' />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='130' />
            </ColumnsDirective>
            <AggregatesDirective>
                <AggregateDirective>
                    <AggregateColumnsDirective>
                        <AggregateColumnDirective field='Freight' type='Sum' footerTemplate={footerSum} />
                    </AggregateColumnsDirective>
                </AggregateDirective>
            </AggregatesDirective>
            <Inject services={[Aggregate]} />
        </GridComponent>
    );
}

export default App;
