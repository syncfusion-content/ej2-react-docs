import { ColumnDirective, ColumnsDirective, CommandColumn, GridComponent, Edit, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { data } from './datasource';
import { useState } from 'react';

function App() {
    let grid;
    const editOptions = { allowEditing: true, allowDeleting: true };
    let rowData;
    const [dialogVisible, setDialogVisible] = useState(false);
    const [dialogContent, setDialogContent] = useState('');
    const commands = [
        {
            buttonOption: {
                content: 'Details', cssClass: 'e-flat'
            }
        }
    ];
    const commandClick = (args) => {
        if (grid) {
            rowData = args.rowData;
            if (rowData) {
                setDialogVisible(true);
                setDialogContent(`<p><b>ShipName:</b> ${rowData.ShipName}</p>
        <p><b>ShipPostalCode:</b> ${rowData.ShipPostalCode}</p>
        <p><b>ShipAddress:</b> ${rowData.ShipAddress}</p>`)
            }
        }
    }
    const dialogClose = () => {
        setDialogVisible(false);
    }

    return (<div><div>
        <GridComponent dataSource={data} editSettings={editOptions} commandClick={commandClick} height={265} ref={g => grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
                <ColumnDirective headerText='Commands' width='120' commands={commands} />
            </ColumnsDirective>
            <Inject services={[Edit, CommandColumn]} />
        </GridComponent></div>
        <div>
            <DialogComponent header='Row information' width={400} close={dialogClose} visible={dialogVisible} content={dialogContent} showCloseIcon={true} ></DialogComponent>
        </div>
    </div>)
};
export default App;