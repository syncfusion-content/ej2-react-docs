import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Filter, Inject, Page } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const clickHandler = () => {
        let savedProperties = JSON.parse(grid.getPersistData());
        let gridColumnsState = Object.assign([], grid.getColumns());
        savedProperties.columns.forEach((col) => {
            let headerText = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerText'];
            let colTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['template'];
            let headerTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerTemplate'];
            col.headerText = 'Text Changed';
            col.template = colTemplate;
            col.headerTemplate = headerTemplate; //likewise you can restore required column properties as per your wants.
        });
        console.log(savedProperties);
        grid.setProperties(savedProperties);
    };
    const headerTemplate = customerTemplate;
    const customerTemplate = (props) => {
        return (<div>
          <span className="e-icons e-header"></span>Customer ID
       </div>);
    };
    const columnTemplate = gridTemplate;
    const gridTemplate = (props) => {
        return (<div>
          <a rel='nofollow' href="https://en.wikipedia.org/wiki/${ShipCountry}"><span className="e-icons e-column"></span></a>
        </div>);
    };
    return (<div> <ButtonComponent onClick={clickHandler}>Restore</ButtonComponent> <GridComponent id="Grid" dataSource={data} allowFiltering={true} allowPaging={true} enablePersistence={true} height={230} ref={g => grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100' headerTemplate={headerTemplate}/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100' template={columnTemplate}/>
        </ColumnsDirective>
        <Inject services={[Filter, Page]}/>
    </GridComponent></div>);
}
;
export default App;
