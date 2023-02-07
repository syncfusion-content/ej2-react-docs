import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Page } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    let treegrid;
    const pageTemplate = (props) => {
        return (<div className="e-pagertemplate">
           <div className="col-lg-12 control-section">
              <div className="content-wrapper">
                <NumericTextBoxComponent max={3} min={1} step={1} value={props.currentPage} width={75} format='###.##' change={onChange}/>
               </div>
           </div>

           <div id="totalPages" className="e-pagertemplatemessage">
              <span className="e-pagenomsg">{props.currentPage} of {props.totalPages} pages ({props.totalRecordsCount} items)</span>
           </div>
        </div>);
    };
    const pageSettings = {
        pageSize: 6,
        template: pageTemplate
    };
    const onChange = (args) => {
        const value = args.value;
        if (treegrid) {
            treegrid.goToPage(value);
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} pageSettings={pageSettings} ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='160'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page]}/>
    </TreeGridComponent>;
}
;
export default App;
