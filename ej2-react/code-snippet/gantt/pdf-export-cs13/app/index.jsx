import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport,DayMarkers, Selection,PdfBorders, PdfPaddings } from '@syncfusion/ej2-react-gantt';
import {  PdfColor, PdfDashStyle, PdfFontFamily, PdfFontStyle, PdfPen, PdfStringFormat, PdfTextAlignment, PdfVerticalAlignment} from '@syncfusion/ej2-pdf-export';
import { data } from './datasource';
function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    const eventMarkers = [
        {
            day: '04/10/2019',
            cssClass: 'e-custom-event-marker',
            label: 'Project approval and kick-off'
        }
    ];
    const holidays = [{
        from: "04/04/2019",
        to: "04/04/2019",
        label: " Public holidays",
        cssClass: "e-custom-holiday"

    },
    {
        from: "04/12/2019",
        to: "04/12/2019",
        label: " Public holiday",
        cssClass: "e-custom-holiday"

    }];
    const toolbarOptions = ['PdfExport'];
    let ganttChart;
    function toolbarClick(args) {
        if (args.item.text === 'PDF export') {
            const stringFormat = new PdfStringFormat();
            stringFormat.alignment = PdfTextAlignment.Center;

            const vertical = new PdfStringFormat();
            vertical.alignment = PdfTextAlignment.Center;

            const penColor = new PdfColor(105, 105, 105);
            const penWidth = 1;
            const pen = new PdfPen(penColor, penWidth);
            pen.dashStyle = PdfDashStyle.Dash;

            const borderWidth = 1;
            const borderColor = new PdfColor(192, 192, 192);
            let pdfpen = new PdfPen(borderColor, borderWidth);
            let pdfborders = new PdfBorders();
            pdfborders.all = pdfpen;
            let exportProperties = {
                ganttStyle: {
                    fontFamily: 1,
                    columnHeader: {
                        backgroundColor: new PdfColor(179, 219, 255)
                    },
                    taskbar: {
                        taskColor: new PdfColor(240, 128, 128),
                        taskBorderColor: new PdfColor(240, 128, 128),
                        progressColor: new PdfColor(205, 92, 92),
                    },
                    connectorLineColor: new PdfColor(128, 0, 0),
                    footer: {
                        backgroundColor: new PdfColor(205, 92, 92)
                    },
                    timeline: {
                        backgroundColor: new PdfColor(179, 219, 255),
                        padding: new PdfPaddings(5, 2, 0, 0),
                    },
                    label: {
                        fontColor: new PdfColor(128, 0, 0),
                    },
                    cell: {
                        backgroundColor: new PdfColor(240, 248, 255),
                        fontColor: new PdfColor(0, 0, 0),
                        borderColor: new PdfColor(179, 219, 255),
                    },
                    eventMarker: {
                        label: {
                          backgroundColor: new PdfColor(255, 239, 213), 
                          fontFamily: PdfFontFamily.TimesRoman,
                          fontColor: new PdfColor(139, 69, 19), 
                          fontSize: 9,
                          format: stringFormat,
                          fontStyle: PdfFontStyle.Bold,
                          borderColor: new PdfColor(160, 82, 45), 
                          borders: pdfborders,
                        },
                        lineStyle: pen,
                      },
                      holiday: {
                        fontFamily: PdfFontFamily.TimesRoman,
                        fontSize: 10,
                        fontStyle: PdfFontStyle.Bold,
                        borderColor: new PdfColor(211, 211, 211), 
                        backgroundColor: new PdfColor(255, 248, 220), 
                        fontColor: new PdfColor(105, 105, 105),
                        format: vertical,
                        borders: pdfborders,
                      },

                }

            };
            ganttChart.pdfExport(exportProperties);
        }
    };

    return <GanttComponent id='root' dataSource={data} taskFields={taskFields} toolbar={toolbarOptions} eventMarkers={eventMarkers}
    holidays={holidays} toolbarClick={toolbarClick} allowPdfExport={true} height='400px' ref={gantt => ganttChart = gantt}>
        <Inject services={[Toolbar, PdfExport, Selection, DayMarkers]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));