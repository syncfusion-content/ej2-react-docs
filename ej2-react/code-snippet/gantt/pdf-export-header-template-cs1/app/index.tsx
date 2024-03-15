import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, PdfQueryCellInfoEventArgs, pdfColumnHeaderQueryCellInfo, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { base64Data, editingResources } from './datasource';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

const SAMPLE_CSS = `
.material img.resource, .fabric img.resource, .bootstrap img.resource,
.tailwind img.resource, .bootstrap5 img.resource, .bootstrap4 img.resource,
.fluent img.resource,.material3 img.resource{
    content: url("src/gantt/images/Resources.png");
}
.material-dark img.resource, .fabric-dark img.resource, .bootstrap-dark img.resource,
.tailwind-dark img.resource, .bootstrap5-dark img.resource, .highcontrast img.resource,
.fluent-dark img.resource,.material3-dark img.resource{
    content: url("src/gantt/images/ResourcesDark.png");
}
.material img.taskName, .fabric img.taskName, .bootstrap img.taskName,
.tailwind img.taskName, .bootstrap5 img.taskName, .bootstrap4 img.taskName,
.fluent img.taskName,.material3 img.taskName,.material3 img.taskName{
    content: url("src/gantt/images/Task name.png");
}
.material-dark img.taskName, .fabric-dark img.taskName, .bootstrap-dark img.taskName,
.tailwind-dark img.taskName, .bootstrap5-dark img.taskName, .highcontrast img.taskName,
.fluent-dark img.taskName,.material3-dark img.taskName{
    content: url("src/gantt/images/TaskNameDark.png");
}
.material img.startDate, .fabric img.startDate, .bootstrap img.startDate,
.tailwind img.startDate, .bootstrap5 img.startDate, .bootstrap4 img.startDate,
.fluent img.startDate,.material3 img.startDate{
    content: url("src/gantt/images/Start date.png");
}
.material-dark img.startDate, .fabric-dark img.startDate, .bootstrap-dark img.startDate,
.tailwind-dark img.startDate, .bootstrap5-dark img.startDate, .highcontrast img.startDate,
.fluent-dark img.startDate,.material3-dark img.startDate{
    content: url("src/gantt/images/StartDateDark.png");
}
.material img.duration, .fabric img.duration, .bootstrap img.duration,
.tailwind img.duration, .bootstrap5 img.duration, .bootstrap4 img.duration,
.fluent img.duration,.material3 img.duration{
    content: url("src/gantt/images/Duration.png");
}
.material-dark img.duration, .fabric-dark img.duration, .bootstrap-dark img.duration,
.tailwind-dark img.duration, .bootstrap5-dark img.duration, .highcontrast img.duration,
.fluent-dark img.duration, .material3-dark img.duration{
    content: url("src/gantt/images/DurationDark.png");
}
.material img.progressTemplate, .fabric img.progressTemplate, .bootstrap img.progressTemplate,
.tailwind img.progressTemplate, .bootstrap5 img.progressTemplate, .bootstrap4 img.progressTemplate,
.fluent img.progressTemplate,.material3 img.progressTemplate{
    content: url("src/gantt/images/Progress.png");
}
.material-dark img.progressTemplate, .fabric-dark img.progressTemplate, .bootstrap-dark img.progressTemplate,
.tailwind-dark img.progressTemplate, .bootstrap5-dark img.progressTemplate, .highcontrast img.progressTemplate,
.fluent-dark img.progressTemplate,.material3-dark img.progressTemplate{
    content: url("src/gantt/images/ProgressDark.png");
}
img.resource, img.taskName, img.startDate, img.duration, img.progressTemplate{
    margin-right: 8px;
}`;

function App() {
    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
        resourceInfo: 'resources'
    };
    const toolbarOptions = ['PdfExport'];
    let ganttChart: any;
    function toolbarClick(args: ClickEventArgs) {
        if (args.item.text === 'Pdf export') {
            let exportProperties: PdfExportProperties = {
                enableFooter: false
            };
            ganttChart.pdfExport(exportProperties);
        }
    };
    let i: number = 0;
    function pdfColumnHeaderQueryCellInfo(args: pdfColumnHeaderQueryCellInfo) {
        let base64Array: Object[] = [
            { 'TaskName': '/9j/4AAQSkZJRgABAQIAHAAcAAD/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAMAAAITAAMAAAABAAEAAAAAAAAAAAAcAAAAAQAAABwAAAAB/9sAQwADAgICAgIDAgICAwMDAwQGBAQEBAQIBgYFBgkICgoJCAkJCgwPDAoLDgsJCQ0RDQ4PEBAREAoMEhMSEBMPEBAQ/9sAQwEDAwMEAwQIBAQIEAsJCxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/8AAEQgAIAAgAwERAAIRAQMRAf/EABgAAQEBAQEAAAAAAAAAAAAAAAYIAAcF/8QALBAAAQQCAgEDAwIHAAAAAAAAAQIDBAUGBxESAAgTIRQVQRYxFzhXdpa01f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwB7gessOlaiw2zpdS4Ld2cqngOyl2rLbHcqjpLiy6IzylL7/gp/J+RxwQQt68w6mewu7XrfEKC+azXGuiqiO2r2ybqKnhD3stLVy2TyOg/cj5A5IXr4G8Cf9+aD0XT6K2Nb1GlsEgz4OJW8mLKjY5DaeYdRDdUhxC0thSVJUAQoEEEAjwNW2XoFprGLb1E/QEGdBeRJiyoztK08w6hQUhxC0kFKkqAIUCCCAR4CDD9sbV2RWSso19r3BrDGza2NfWWEnOH21T2Yst2MJKUs1ryAhwslSeHFfBHyRwSHnW26tv12qpO5Ier8GtMdYoVZI2qJm01L0iCGPfC0IeqEcKLfyErKT+DwfjwFvqO/l62h/Zl3/oveB0TwJTe2FRYxX5RqrLrj065HUuZRdzXIOQ7GRHc6yLV+YlmVDcgPJS6044AQVHhTY/I58Ao3lmJUeibfRWBZH6bKCFbUL1K7PTtRpTrzjsQRlzJCWqxoPyFISkqWepUQOfj48Ctdj4j/ABA15lGB/cPoP1JSzaj6v2vd+n+oYW17nTsnv1789ew5445H7+Ad+x+oX+qGu/8AA53/AGPA5drHb+D4rru/xSy3nrPG86i5hkwnOXDjbTIkG9lrU4qCqY271W0R0BfJSFI5UvqQQKWW5cOT6NMhxTZO+9d5Fl72ByIYjQrmM9LMo1oQll0iXIMuSH+3Z9BSlaiFBCeOSH//2Q==' },
            { 'StartDate': '/9j/4AAQSkZJRgABAQIAHAAcAAD/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAMAAAITAAMAAAABAAEAAAAAAAAAAAAcAAAAAQAAABwAAAAB/9sAQwADAgICAgIDAgICAwMDAwQGBAQEBAQIBgYFBgkICgoJCAkJCgwPDAoLDgsJCQ0RDQ4PEBAREAoMEhMSEBMPEBAQ/9sAQwEDAwMEAwQIBAQIEAsJCxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/8AAEQgAIAAgAwERAAIRAQMRAf/EABcAAQEBAQAAAAAAAAAAAAAAAAcABgX/xAAzEAAABAQDBwEGBwAAAAAAAAABAgMEBQYHEQgSEwAUFRYYITI0IiQxMzVCN0NRVWaCg//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGBEBAQEBAQAAAAAAAAAAAAAAABEBIUH/2gAMAwEAAhEDEQA/AG2t2PafKP4qHFI3sLlRGR4bE4QlEIi4Yu1XqLJdBsq5UAU1spjEKqoJQBIfEoZTD8QCJcxxTdhwp3JlI6RxCQ5yYQmGOVYjEVYbE8oPVoi8VFNMVRanEoInbjcUvIxwAw27BTHjim7EfTuc6R1ciEhyawi0MbKw6IpQ2J5ReoxFmqCagpC6OBRRI4G4JeRSAJgv3B3ojj2nysGKhvSNlC5UWkeJROLpQ+It2LtJ6syQQcqtlBFRbKUxypJiYBSDyMGUo/AOtP7GoFVcRtTZRkWjGHiLcm8F3qKTvLi68Qd72wIoTMslm1MmmcgXAtigmAXsO1lSwYwJKqEwV0mLD8yw54TiTFLMNJFXblWUHAMjpHK2MAJnC5xNZ2n2EgB2N37BdCqOpVQl+uku4fnuHPCceYpmhp4q0cpSg4FkRIhXJhBQ42OBrNFOwEEO5e/cbIUnSAxqBSrEbTKUZ6oxh4hPOXGt1ikkS4uhEGm6MDqHyrK5dPPqEINgNcoqANrhskLWameB0/jWL2uPPWIuYaV6PLO68Jm5CB8SvCy58+qA62nYlreOqN/INmGiCT5cpetjBnmEvcV00w2XUIAio0ndKem6L2Jq5GN2ykQEMixQEygaYBcN3KH5Y7PTxThLlL0cYMjQlliummJS6vAFlHc7qz03WewxXI+s2TiABkRKIlTDTELjvBg/MDZ6eF+WIHT+C4vaHci4i5hqprczb1xabkI5w20LNkyaQBo6lz3v5aQW8R2aYz1VOkrq9rP1Sfx3gX1P9rJvPof8PP8Ar92zDQxLHQ71NzbzJ+EHBkuAfV/X5Gefw968t8+Z7P6fZs4dUz9DvU3KXLf4QcGV4/8AV/X5HmTz968tz+X7P6/fs4dM9K+krq9ox0t/yLjv1P8Aaz7t67/fw/t9uzTH/9k=' },
        ]
        while (i < base64Array.length) {
            const key = Object.keys(base64Array[i])[0];
            const value = base64Array[i][key];
            if (key === args.column.field) {
                args.headerTemplate.image = [{
                    base64: value, width: 20, height: 20
                }];
                args.headerTemplate.value = args.column.field;
                break;
            }
            i++;
        }
    }

    const splitterSettings: any = {
        columnIndex: 2
    };
    const resourceFields: any = {
        id: 'resourceId',
        name: 'resourceName',
    };
    const projectStartDate = new Date('03/24/2019');
    const projectEndDate = new Date('04/30/2019');

    return (
        <div className='control-pane'>
            <style>
                {SAMPLE_CSS}
            </style>
            <div className='control-section'>
                <GanttComponent dataSource={base64Data} rowHeight={60} taskFields={taskFields} pdfColumnHeaderQueryCellInfo={pdfColumnHeaderQueryCellInfo} toolbar={toolbarOptions} toolbarClick={toolbarClick} allowPdfExport={true} ref={gantt => ganttChart = gantt}
                    splitterSettings={splitterSettings} resourceFields={resourceFields} resources={editingResources} projectStartDate={projectStartDate} projectEndDate={projectEndDate} height='450px'>
                    <ColumnsDirective>
                        <ColumnDirective field='TaskName' headerText='TaskName' headerTemplate={() => {
                            return (<div><img className="taskName" width="20" height="20" />
                                <b className='e-header'>Task Name</b></div>);
                        }}  ></ColumnDirective>
                        <ColumnDirective field='StartDate' headerText='Start Date' headerTemplate={() => {
                            return (<div><img className="startDate" width="20" height="20" />
                                <b className='e-header'>Start Date</b></div>);
                        }}></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Toolbar, PdfExport, Selection]} />
                </GanttComponent>
            </div>

        </div>
    )

};
ReactDOM.render(<App />, document.getElementById('root'));