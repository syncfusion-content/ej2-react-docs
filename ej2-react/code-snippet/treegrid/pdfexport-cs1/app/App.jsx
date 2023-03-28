import { ColumnDirective, ColumnsDirective, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Inject, PdfExport, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
import { image } from './image';
function App() {
    const toolbarOptions = ['PdfExport'];
    const pageSettings = { pageSize: 7 };
    let treegrid;
    const toolbarClick = (args) => {
        if (treegrid) {
            const pdfExportProperties = {
                footer: {
                    contents: [
                        {
                            format: 'Page {$current} of {$total}',
                            pageNumberType: 'Arabic',
                            position: { x: 0, y: 25 },
                            style: { textBrushColor: '#ffff80', fontSize: 15 },
                            type: 'PageNumber'
                        }
                    ],
                    fromBottom: 160,
                    height: 150
                },
                header: {
                    contents: [
                        {
                            position: { x: 40, y: 10 },
                            size: { height: 100, width: 250 },
                            src: image,
                            type: 'Image'
                        }
                    ],
                    fromTop: 0,
                    height: 130
                }
            };
            treegrid.pdfExport(pdfExportProperties);
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} pageSettings={pageSettings} allowPdfExport={true} height='220' toolbarClick={toolbarClick} ref={g => treegrid = g} toolbar={toolbarOptions}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, PdfExport]}/>
    </TreeGridComponent>;
}
;
export default App;
