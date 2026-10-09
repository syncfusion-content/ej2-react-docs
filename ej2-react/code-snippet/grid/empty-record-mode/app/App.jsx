import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
    const data = [];
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const orderIdRules = { required: true, number: true };
    const validationRule = { required: true };
    const mode = [
        { Id: 'Sticky', Mode: 'Sticky' },
        { Id: 'Normal', Mode: 'Normal' }
    ];
    let grid;

    const changeMode = (args) => {
        grid.emptyRecordMode = args.value;
    };

    return (
        <div className='control-pane'>
            <div className='control-section'>
                <label style={{ margin: '0 30px 0 0' }}>Empty Record Mode :</label>
                <DropDownListComponent dataSource={mode} fields={{ text: 'Mode', value: 'Id' }} value='Sticky' width={100} change={changeMode}></DropDownListComponent>
                <GridComponent ref={g => grid = g} dataSource={data} toolbar={toolbarOptions} editSettings={editSettings} emptyRecordMode='Sticky'>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' isPrimaryKey={true} headerText='Order ID' textAlign='Right' validationRules={orderIdRules} width='140' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' validationRules={validationRule} width='140' />
                        <ColumnDirective field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width='140' format='C2' validationRules={validationRule} />
                        <ColumnDirective field='OrderDate' headerText='Order Date' editType='datepickeredit' width='160' format='ymd' />
                        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                        <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
                    </ColumnsDirective>
                    <Inject services={[Edit, Toolbar]} />
                </GridComponent>
            </div>
        </div>
    );
}

export default App;
