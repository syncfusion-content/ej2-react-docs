import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let grid: Grid | null;
    let dropDown: DropDownListComponent |null;
    let textBox:any;
    const field: Object = { text: 'text', value: 'value' };
    const alignmentData: Object[] = [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
        { text: 'ShipCountry', value: 'ShipCountry' },
    ];

    const onExternalResize = (() => {
        const colsWidth:any = (grid as any).getColumnByField((dropDown as any).value);
        colsWidth.width = textBox.value;
        (grid as any).refreshColumns();
    })
    return (
        <div>
        <label style={{ padding: '5px 5px 5px 0', display: 'inline-block' }}>
          Change the resize mode:
        </label>
        <DropDownListComponent
          style={{ padding: '5px 0 0 0', display: 'inline-block' }}
          dataSource={alignmentData}
          ref={(d) => (dropDown = d)}
          index={0}
          width="100"
          fields={field}
        ></DropDownListComponent>

        <label style={{ padding: '5px 5px 0 5px', display: 'inline-block' }}>
          Enter the width:
        </label>
        <TextBoxComponent
          ref={(t) => (textBox = t)}
          placeholder="Enter the width"
          width="200"
          style={{ display: 'inline-block' }}
        />

        <label style={{ padding: '5px 5px 0 5px', display: 'inline-block' }}>
          Click the change button:
        </label>
        <ButtonComponent
          id="button"
          cssClass="e-outline"
          onClick={onExternalResize}
          style={{ display: 'inline-block' }}
        >
          Resize
        </ButtonComponent>
      </div>
      <div style={{ padding: '10px 0 0 0' }}>
                <GridComponent dataSource={data} height={268} ref={g => grid = g} allowResizing={true}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                    </ColumnsDirective>
                </GridComponent></div></div>)
}
export default App;