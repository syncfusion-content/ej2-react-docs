import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Resize } from '@syncfusion/ej2-react-grids';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs'
import * as React from 'react';
import { data } from './datasource';

function App() {
    let widthTextBox: NumericTextBoxComponent | null;
    let heightTextBox: NumericTextBoxComponent | null;
    const onExternalResize = () => {
        const parentDiv = document.getElementById('parent');
        (parentDiv as HTMLElement).style.width = (widthTextBox as NumericTextBoxComponent).element.value + 'px';
        (parentDiv as HTMLElement).style.height = (heightTextBox as NumericTextBoxComponent).element.value + 'px';
    }
    return (<div>
        <div>
            <label style={{ padding: "30px 17px 0 0" }}>Enter the width:</label>
            <NumericTextBoxComponent ref={widthText => widthTextBox = widthText} min={400} max={650} placeholder='400' step={5} width={120}></NumericTextBoxComponent>
        </div>
        <div>
            <label style={{ padding: "30px 17px 0 0" }}>Enter the height:</label>
            <NumericTextBoxComponent ref={heightText => heightTextBox = heightText} min={200} max={600} placeholder='200' step={5} width={120}></NumericTextBoxComponent>
        </div>
        <ButtonComponent style={{ margin: "5px 0 5px 5px" }} cssClass="e-outline" onClick={onExternalResize}>Resize</ButtonComponent>
        <div id='parent'>
            <GridComponent dataSource={data} height='100%' >
                <Inject services={[Resize]} />
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='150' maxWidth='200' textAlign='Right'></ColumnDirective>
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
                    <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' />
                </ColumnsDirective>
            </GridComponent>
        </div>
    </div>)
};
export default App;