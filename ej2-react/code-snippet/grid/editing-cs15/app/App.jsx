import { UploaderComponent } from '@syncfusion/ej2-react-inputs'
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
    let orderData;
    let strm;
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const path = {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    };
    const editTemplate = () => {
        return (
            <div>
                <UploaderComponent id='deffaultUpload' success={uploadSuccess} asyncSettings={path} multiple={false}></UploaderComponent>
            </div>
        )
    }
    const template = (props) => {
        const src = !props.Image ? 'https://ej2.syncfusion.com/angular/demos/assets/grid/images/' + props.EmployeeID + '.png' : props.Image;
        return (
            <div className='image'>
                <img src={src} alt={props.EmployeeID} />
            </div>
        )
    }

    const actionBegin = (args) => {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            args.data['Image'] = strm;
        }
    }
    const uploadSuccess = (args) => {
        if (args.operation === 'upload') {
            const fileBlob = args.file.rawFile;
            console.log(fileBlob)
            const file = new File([fileBlob], args.file.name);
            strm = getBase64(file);
        }
    }

    const getBase64 = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            strm = reader.result;
        };
        return strm;
    }

    return <GridComponent dataSource={employeeData} editSettings={editOptions} allowPaging={true} toolbar={toolbarOptions} height={265} actionBegin={actionBegin}>
        <ColumnsDirective>
            <ColumnDirective field='EmployeeID' headerText='EmployeeID' width='100' textAlign="Right" isPrimaryKey={true} />
            <ColumnDirective field='FirstName' headerText='First Name' width='120' />
            <ColumnDirective field='LastName' headerText='LastName' width='120' textAlign="Right" />
            <ColumnDirective field='Title' headerText='Title' width='150' />
            <ColumnDirective headerText='Employee Imagee' width='150' textAlign='Center' editTemplate={editTemplate} template={template} />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, Page]} />
    </GridComponent>
};
export default App;