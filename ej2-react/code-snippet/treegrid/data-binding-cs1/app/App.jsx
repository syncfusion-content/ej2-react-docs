import { Ajax } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Inject, Page } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
function App() {
    const pageOptions = { pageSize: 7 };
    let treegridInstance;
    const handleClick = () => {
        if (treegridInstance) {
            const ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData", "GET");
            treegridInstance.showSpinner();
            const treegrid = treegridInstance;
            ajax.send();
            ajax.onSuccess = (data) => {
                treegrid.hideSpinner();
                treegrid.dataSource = JSON.parse(data);
            };
        }
    };
    return (<div className='control-pane'>
        <div className='control-section'>
        <button onClick={handleClick}>Bind Data</button>
        <TreeGridComponent treeColumnIndex={1} idMapping='TaskID' parentIdMapping='ParentItem' height='210' allowPaging={true} pageSettings={pageOptions} ref={treegrid => treegridInstance = treegrid}>
            <ColumnsDirective>
                <ColumnDirective field='TaskID' headerText='Task ID' width='90' textAlign='Right'/>
                <ColumnDirective field='TaskName' headerText='Task Name' width='180'/>
                <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
                <ColumnDirective field='Duration' headerText='Duration' width='80' textAlign='Right'/>
            </ColumnsDirective>
            <Inject services={[Page]}/>
        </TreeGridComponent>
        </div>
    </div>);
}
;
export default App;
