{% raw %}
import * as React from 'react';
import { projectData } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { projectData as orderData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar, Page } from '@syncfusion/ej2-react-treegrid';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
/* tslint:disable */
function App() {
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: dialogTemplate };
    const toolbarOptions = ['Add', 'Edit', 'Delete'];
    let treegrid;
    function dialogTemplate(props) {
        const a = [props, treegrid];
        return (<DialogFormTemplate {...a}/>);
    }
    function actionComplete(args) {
        // Set initial Focus
        if (args.requestType === 'beginEdit') {
            args.form.elements.namedItem('TaskName').focus();
        }
        else if (args.requestType === 'add') {
            args.form.elements.namedItem('TaskID').focus();
        }
    }
    return (<TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping='TaskID' parentIdMapping='parentID' height={265} toolbar={toolbarOptions} editSettings={editOptions} ref={g => treegrid = g} actionComplete={actionComplete}>
      <ColumnsDirective>
        <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
        <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
        <ColumnDirective field='StartDate' headerText='Start Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
        <ColumnDirective field='EndDate' headerText='End Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
        <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right'/>
        <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right'/>
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar, Page]}/>
    </TreeGridComponent>);
}
;
function DialogFormTemplate(props) {
    const [currentTab, setCurrentTab] = React.useState(1);
    const priorityData = DataUtil.distinct(orderData, 'Priority', true);
    let treegrid = props[1];
    const [data, setData] = React.useState(props[0]);
    const onChange = (args) => {
        setData({ [args.target.name]: args.target.value });
    };
    const next = (args) => {
        let valid = true;
        [].slice.call(document.getElementById('tab' + currentTab)
            .querySelectorAll('[name]')).forEach((element) => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true') {
                valid = false;
            }
        });
        if (!valid) {
            return;
        }
        if (args.target.innerHTML !== 'SUBMIT') {
            setCurrentTab(2);
        }
        else {
            if (treegrid) {
                treegrid.endEdit();
            }
        }
    };
    const previous = () => {
        let valid = true;
        [].slice.call(document.getElementById('tab' + currentTab)
            .querySelectorAll('[name]')).forEach((element) => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true') {
                valid = false;
            }
        });
        if (!valid) {
            return;
        }
        setCurrentTab(1);
    };
    const styTab1 = {
        'display': currentTab === 1 ? 'block' : 'none'
    };
    const styTab2 = {
        'display': currentTab === 2 ? 'block' : 'none'
    };
    return (<div>
      <div id='tab1' style={styTab1}>
          <div className="form-row">
              <div className="form-group col-md-6">
                  <div className="e-float-input e-control-wrapper">
                      <input id="TaskID" name="TaskID" type="text" disabled={!data.isAdd} value={data.TaskID} onChange={onChange}/>
                      <span className="e-float-line"/>
                      <label className="e-float-text e-label-top"> Task ID</label>
                  </div>
              </div>
          </div>
          <div className="form-row">
              <div className="form-group col-md-6">
                  <div className="e-float-input e-control-wrapper">
                      <input value={data.TaskName} id="TaskName" name="TaskName" type="text" onChange={onChange}/>
                      <span className="e-float-line"/>
                      <label className="e-float-text e-label-top">Task Name</label>
                  </div>
              </div>
          </div>
      </div>
      <div id='tab2' style={styTab2}>
          <div className="form-row">
              <div className="form-group col-md-6">
                  <NumericTextBoxComponent id="Duration" value={data.Duration} placeholder="Duration" floatLabelType='Always'/>
              </div>
          </div>
          <div className="form-row">
              <div className="form-group col-md-6">
                  <DropDownListComponent id="Priority" value={data.Priority} dataSource={priorityData} fields={{ text: 'Priority', value: 'Priority' }} placeholder="Priority" popupHeight='300px' floatLabelType='Always'/>
              </div>
          </div>
      </div>
      <div id='footer'>
          <button id="prevBtn" className={currentTab === 1 ? 'e-info e-btn e-hide' : 'e-info e-btn'} type="button" style={{ float: "left" }} onClick={previous}>Previous</button>

          <button id="nextBtn" className="e-info e-btn" type="button" style={{ float: "right" }} onClick={next}>{currentTab === 1 ? 'Next' : 'SUBMIT'}</button>
      </div>
  </div>);
}
;
export default App;
{% endraw %}