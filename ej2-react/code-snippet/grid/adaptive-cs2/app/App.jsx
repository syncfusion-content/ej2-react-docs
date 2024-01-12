import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateColumnDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { Filter, Sort, Edit, Toolbar, Aggregate, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const validationRule = { required: true };
  const orderidRules = { required: true, number: true };
  const filterOptions = { type: 'Excel' };
  const renderingMode = 'Vertical';
  const dropDownData = [
    { text: 'Vertical', value: 'Vertical' },
    { text: 'Horizontal', value: 'Horizontal' },
  ];
  let grid;
  const created = () => {
    grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
  }
  const changeAlignment = (args) => {
    grid.rowRenderingMode = args.value
  }
  const footerSum = (props) => {
    return (<span>Total Models: {props.Count}</span>);
  };
  let menuFilter = { type: 'Menu' };
  let checkboxFilter = { type: 'CheckBox' };
  return (<div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}> Select row rendering mode :</label>
      <DropDownListComponent index={0} width={150} dataSource={dropDownData} change={changeAlignment}></DropDownListComponent>
    </div>
    <div className="e-adaptive-demo e-bigger">
      <div className="e-mobile-layout">
        <div className="e-mobile-content">
          <GridComponent id="adaptivebrowser" dataSource={data} height='100%' ref={g => grid = g} enableAdaptiveUI={true} rowRenderingMode={renderingMode} allowFiltering={true} allowSorting={true} allowPaging={true} filterSettings={filterOptions} toolbar={toolbarOptions} editSettings={editSettings} created={created}>
            <ColumnsDirective>
              <ColumnDirective field='SNO' headerText='S NO' width='150' isPrimaryKey={true} validationRules={orderidRules}></ColumnDirective>
              <ColumnDirective field='Model' headerText='Model Name' width='200' editType='dropdownedit' validationRules={validationRule} />
              <ColumnDirective field='Developer' headerText='Developer' width='200' filter={menuFilter} validationRules={validationRule}></ColumnDirective>
              <ColumnDirective field='ReleaseDate' headerText='Released Date' editType='datepickeredit' type='date' format='yMMM' width='200'></ColumnDirective>
              <ColumnDirective field='AndroidVersion' headerText='Android Version' width='200' filter={checkboxFilter} validationRules={validationRule}></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Filter, Sort, Edit, Toolbar, Aggregate, Page]} />
            <AggregatesDirective>
              <AggregateDirective>
                <AggregateColumnsDirective>
                  <AggregateColumnDirective field='Model' type='Count' footerTemplate={footerSum}> </AggregateColumnDirective>
                </AggregateColumnsDirective>
              </AggregateDirective>
            </AggregatesDirective>
          </GridComponent>
        </div>
      </div>
      <br></br>
      <div className="datalink">Source:
        <a href="https://en.wikipedia.org/wiki/List_of_Android_smartphones"
          target="_blank">Wikipedia: List of Android smartphones</a>
      </div>
    </div></div>
  )
}
export default App;