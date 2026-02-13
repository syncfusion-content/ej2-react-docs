import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { addImage } from './add';
import { deleteImage } from './delete';
import { data } from './datasource';

function App() {
    let grid;
    const editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
    const deleteImageSource = `data:image/png;base64, ${deleteImage}`;
    const addImageSource = `data:image/png;base64, ${addImage}`;
    const toolbarTemplate = () => {
        return (
            <div>
                <img src={addImageSource} id='addImage'></img>
                <ButtonComponent id='addButton' cssClass='e-outline' onClick={clickHandler}>Add</ButtonComponent>
                <img src={deleteImageSource} id='deleteImage'></img>
                <ButtonComponent id='deleteButton' cssClass='e-outline' onClick={clickHandler}>Delete</ButtonComponent>
            </div>
        )
    }
    const clickHandler = (args) => {
        if (args.currentTarget.id === 'addButton') {
            grid.addRecord();
        } else {
            const selectedRecord = grid.getSelectedRecords()[0];
            grid.deleteRecord(selectedRecord);
        }
    }
    return (<GridComponent dataSource={data} editSettings={editSettings} toolbarTemplate={toolbarTemplate} ref={g => grid = g} height={240}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit]} />
    </GridComponent>)
}
export default App;