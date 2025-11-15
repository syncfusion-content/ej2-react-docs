



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection, PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-react-gantt';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
        resourceInfo: 'resources'
    };
    const toolbarOptions = ['PdfExport'];
    let ganttChart;
    function toolbarClick(args) {
        if (args.item.text === 'PDF export') {
            let exportProperties = {
                enableFooter: false
            };
            ganttChart.pdfExport(exportProperties);
        }
    };
    function pdfQueryTaskbarInfo(args) {
        args.labelSettings.leftLabel.value = args.data.ganttProperties.taskName + '[' + args.data.ganttProperties.progress + ']';
        if (args.data.ganttProperties.resourceNames) {
            args.labelSettings.rightLabel.value = args.data.ganttProperties.resourceNames;
            args.labelSettings.rightLabel.image = [{
                base64: (args).data.taskData.resourcesImage, width: 20, height: 20
            }]

        }
        args.labelSettings.taskLabel.value = args.data.ganttProperties.progress + '%'
    }
    const LeftLabelTemplate = (props) => {
        return (<span>{props.TaskName} [ {props.Progress}% ]</span>);
    };
    const templateLeft = LeftLabelTemplate;
    const RightLabelTemplate = (props) => {
        if (props.ganttProperties.resourceInfo) {
            let resources = props.ganttProperties.resourceInfo;
            let out = [];
            for (let index = 0; index < resources.length; index++) {
                let src = 'https://ej2.syncfusion.com/react/demos/src/gantt/images/' + resources[index].resourceName + '.png';
                let img = <img src={src} height='40px' />;
                let span = <span style={{ marginLeft: '5px', marginRight: '5px' }}>{resources[index].resourceName}</span>;
                out.push(img, span);
            }
            return (<div>{out}</div>);
        } else {
            return <div></div>
        }
    };
    const templateRight = RightLabelTemplate;
    const labelSettings = {
        leftLabel: templateLeft.bind(this),
        rightLabel: templateRight.bind(this),
        taskLabel: '${Progress}%'
    };
    const splitterSettings = {
        columnIndex: 2
    };
    const resourceFields = {
        id: 'resourceId',
        name: 'resourceName',
    };
    const projectStartDate = new Date('03/24/2019');
    const projectEndDate = new Date('04/30/2019');
    return <GanttComponent dataSource={base64Data} rowHeight={60} taskFields={taskFields} toolbar={toolbarOptions} pdfQueryTaskbarInfo={pdfQueryTaskbarInfo} toolbarClick={toolbarClick} allowPdfExport={true} ref={gantt => ganttChart = gantt}
        splitterSettings={splitterSettings} labelSettings={labelSettings} resourceFields={resourceFields} resources={editingResources} projectStartDate={projectStartDate} projectEndDate={projectEndDate} height='450px'>
        <ColumnsDirective>
            <ColumnDirective field='TaskID'></ColumnDirective>
            <ColumnDirective field='TaskName'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport, Selection]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));