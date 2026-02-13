import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
function App() {
    let grid;
    let textbox;
    const click = () => {
        (grid.pagerModule).goToPage(textbox.value);
    }
    return (<div>
        <label style={{ padding: "30px 17px 0 0" }}>Select page index:</label>
        <TextBoxComponent ref={t => textbox = t} width={120}></TextBoxComponent>
        <ButtonComponent id="button" onClick={click}>Click button</ButtonComponent>
        <GridComponent id="grid" dataSource={data} height={265} ref={g => grid = g} allowPaging={true} >
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
                <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
            </ColumnsDirective>
            <Inject services={[Page]} />
        </GridComponent></div>)
};
export default App;

