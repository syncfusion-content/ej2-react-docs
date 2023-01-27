

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttComponent, Inject, Toolbar, ToolbarItem, ExcelExport, ColumnsDirective,ColumnDirective, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    private ganttInstance: any;
    public taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
  };
  public toolbarOptions: ToolbarItem[] = ['ExcelExport', 'CsvExport'];
  public toolbarClick(args: ClickEventArgs): void {
       if (args.item.id === 'GanttExport_excelexport') {
           this.ganttInstance.treeGrid.grid.columns[0].visible = true;
           this.ganttInstance.treeGrid.grid.columns[3].visible = false;
           this.ganttInstance.excelExport();
        } else if (args.item.id === 'GanttExport_csvexport') {
            this.ganttInstance.treeGrid.grid.columns[0].visible = true;
            this.ganttInstance.treeGrid.grid.columns[3].visible = false;
            this.ganttInstance.csvExport();
        }
    };
    public excelExportComplete(): void {
      this.ganttInstance.treeGrid.grid.columns[0].visible = false;
      this.ganttInstance.treeGrid.grid.columns[3].visible = true;
  }
    render() {
        return <GanttComponent id='GanttExport' dataSource={data} taskFields={this.taskFields} toolbar={this.toolbarOptions}
        toolbarClick={this.toolbarClick.bind(this)} excelExportComplete={this.excelExportComplete.bind(this)} allowExcelExport={true} height='400px' ref={gantt => this.ganttInstance = gantt} treeColumnIndex={1}>
            <ColumnsDirective>
                <ColumnDirective field='TaskID' headerText='Task ID' textAlign='Left' width='100' ></ColumnDirective>
                <ColumnDirective field='TaskName' headerText='Task Name' width='150'></ColumnDirective>
                <ColumnDirective field='StartDate' headerText='StartDate' width='150' visible={false}></ColumnDirective>
                <ColumnDirective field='Duration' headerText='Duration' width='150' ></ColumnDirective>
                <ColumnDirective field='Progress' headerText='Progress' width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Toolbar, ExcelExport, Selection]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


