
import * as React from 'react';
import { DataUtil } from '@syncfusion/ej2-data';
import { projectData } from './datasource';
import { projectData as orderData } from './datasource';
import { SelectingEventArgs } from '@syncfusion/ej2-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar, ToolbarItems, EditSettingsModel, Page, TreeGrid } from '@syncfusion/ej2-react-treegrid';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';

/* tslint:disable */

function App() {

  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: dialogTemplate };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];
  let treegrid: TreeGridComponent | null;

  function dialogTemplate(props: IProjectModel): any {
    const a = [props, treegrid]
    return (<DialogFormTemplate {...a} />);
  }

  return (
    <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID' height={265}
      editSettings={editOptions} toolbar={toolbarOptions}
      ref={g => treegrid = g}>
      <ColumnsDirective>
        <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
        <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
        <ColumnDirective field='StartDate' headerText='Start Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
        <ColumnDirective field='EndDate' headerText='End Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
        <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
        <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar, Page]} />
    </TreeGridComponent>
  );
};

function DialogFormTemplate(props:any) {
  const value = props[0];
  let treegrid = props[1];
  let tab: TabComponent | null;

  function tabOne() {
      const tabOneProp = [value, tab, treegrid];
      return (<TabOneComponent {...tabOneProp} />);
  }

  function tabTwo() {
      const tabTwoprop = [value, tab, treegrid];
      return (<TabTwoComponent {...tabTwoprop} />);
  }

  function next() {
      let valid: boolean = true;
      [].slice.call((document.getElementById('tab1') as HTMLElement)
          .querySelectorAll('[name]')).forEach((element: any) => {
          element.form.ej2_instances[0].validate(element.name);
          if (element.getAttribute('aria-invalid') === 'true'){
              valid = false;
          }
      });
      if (!valid) {
      return false;
      }
      return true;
  }

  function selecting(e: SelectingEventArgs) {
      {
          if(e.isSwiped) {e.cancel = true;}
          if(e.selectingIndex === 1) {e.cancel = !next();}
      }
  }

  return (<div>
        <TabComponent id='defaultTab' ref={(t: any) => tab = t} selecting={selecting}>
          <TabItemsDirective>
              <TabItemDirective header= { { 'text': 'Details' } } content={tabOne} />
              <TabItemDirective header= { { 'text': 'Verify' } } content={tabTwo}/>
          </TabItemsDirective>
      </TabComponent>
  </div>);
}

function TabOneComponent(props:any) {
  const [tabdata, setTabData] = React.useState(props[0]);
  let tab =  props[1];

  function onChange(args: React.ChangeEvent) {
    setTabData({[(args.target as HTMLInputElement).name]: (args.target as HTMLInputElement).value});
  }

  function next() {
      let valid: boolean = true;
      [].slice.call((document.getElementById('tab1') as HTMLElement).querySelectorAll('[name]'))
          .forEach((element: any) => {
              element.form.ej2_instances[0].validate(element.name);
              if (element.getAttribute('aria-invalid') === 'true'){
                  valid = false;
              }
      });
      if (!valid) {
      return
      }
      if (tab) {
          tab.select(1);
      }
  }

  const data: IProjectModel = tabdata;
  return (<div id='tab1'>
  <div className="form-row">
      <div className="form-group col-md-6">
          <div className="e-float-input e-control-wrapper">
              <input id="TaskID" name="TaskID" type="text" disabled={!data.isAdd} value={data.TaskID} onChange={onChange} />
              <span className="e-float-line"/>
              <label className="e-float-text e-label-top"> Task ID</label>
          </div>
      </div>
  </div>
  <div className="form-row">
      <div className="form-group col-md-6">
          <div className="e-float-input e-control-wrapper" >
              <input value={data.TaskName} id="TaskName" name="TaskName" type="text" onChange={onChange} />
              <span className="e-float-line"/>
              <label className="e-float-text e-label-top">Task Name</label>
          </div>
      </div>
  </div>
  <div id='footer'>
      <button id="nextBtn" className='e-info e-btn' type="button" style={{float: "right"}} onClick={next}>Next</button>
  </div>
</div>);
}

function TabTwoComponent(props:any) {
  const priorityData: any = DataUtil.distinct(orderData, 'Priority', true );
  const [tabdata, setTabData] = React.useState(props[0]);
  let treegrid = props[2]

  function onChange(args: React.ChangeEvent) {
    setTabData({[(args.target as HTMLInputElement).name]: (args.target as HTMLInputElement).value});
  }

  function submit() {
      let valid: boolean = true;
      [].slice.call((document.getElementById('tab1') as HTMLElement).querySelectorAll('[name]'))
          .forEach((element: any) => {
          element.form.ej2_instances[0].validate(element.name);
          if (element.getAttribute('aria-invalid') === 'true'){
              valid = false;
          }
      });
      if (!valid) {
      return
      }
      if (treegrid) {
          treegrid.endEdit();
      }
  }

  const data: IProjectModel = tabdata;
  return (<div id='tab2'>
  <div className="form-row">
      <div className="form-group col-md-6">
          <NumericTextBoxComponent id="Duration" format='C2' value={data.Duration} placeholder="Duration" floatLabelType='Always'/>
      </div>
  </div>
  <div className="form-row">
      <div className="form-group col-md-6">
          <DropDownListComponent id="Priority" value={data.Priority} dataSource={priorityData}
          fields={{text: 'Priority', value: 'Priority' }} placeholder="Priority"
          popupHeight='300px' floatLabelType='Always'/>
      </div>
  </div>
  <div id='footer'>
      <button id="submitBtn" className="e-info e-btn" type="button" style={{float: "right"}} onClick={submit}>SUBMIT</button>
  </div>
</div>);
}

export interface IProjectModel {
  TaskID?: number;
  TaskName?: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Priority?: string;
  isAdd?: boolean;
  currentTab?: number;
}
export default App;
