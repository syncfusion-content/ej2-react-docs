import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, Page } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
    const template = () => {
        return (
            <ButtonComponent>Custom Action</ButtonComponent>
        )
    }

    const filterTemplate = () => {
        return (
            <span></span>
        )
    }
    return (<div>
        <GridComponent dataSource={data} allowFiltering={true} allowPaging={true} height={315} >
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective headerText='Action' width='100' template={template} filterTemplate={filterTemplate} />
            </ColumnsDirective>
            <Inject services={[Filter, Page]} />
        </GridComponent></div>)
};
export default App;