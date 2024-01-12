import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection,ExcelExport,ExcelExportCompleteArgs, PdfExportCompleteArgs } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App () {
  let excelExpComplete = (args: ExcelExportCompleteArgs) => {
    //This event will be triggered when excel exporting.
    if (args.promise) {
        args.promise.then((e: { blobData: Blob }) => {
    //In this `then` function, we can get blob data through the arguments after promise resolved.
            exportBlob(e.blobData);
});
}
};
let pdfExpComplete= (args: PdfExportCompleteArgs) => {
//This event will be triggered when pdf exporting.
if (args.promise) {
    args.promise.then((e: { blobData: Blob }) => {
    //In this `then` function, we can get blob data through the arguments after promise resolved.
    exportBlob(e.blobData);
});
}
};


let exportBlob: Function = (blob: Blob) => {
    let a: HTMLAnchorElement = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    let url: string = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'Export';
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
        const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        const toolbarOptions = ['PdfExport','ExcelExport'];
    let ganttChart:any;
   function toolbarClick(args:any) {
    if (args.item.text === "Pdf export") {
      ganttChart.pdfExport(null,null,null,true);
      }
      if (args.item.text === 'Excel export') {
        ganttChart.excelExport(null,null,null,true);
     }
        
    };
        return <GanttComponent id='root' dataSource={data} taskFields={taskFields}   pdfExportComplete={pdfExpComplete} excelExportComplete={excelExpComplete}  toolbar={toolbarOptions} toolbarClick={toolbarClick} allowPdfExport={true}  allowExcelExport={true} height='400px' ref={gantt =>ganttChart = gantt}>
            <Inject services={[Toolbar, PdfExport, Selection,ExcelExport]}/>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));