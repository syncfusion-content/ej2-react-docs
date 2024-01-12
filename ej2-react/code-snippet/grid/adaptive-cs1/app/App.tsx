import { ColumnDirective, ColumnsDirective, GridComponent, Inject, EditSettingsModel, ToolbarItems, FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, Sort, Edit, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const validationRule: Object = { required: true };
  const orderidRules: Object = { required: true, number: true };
  const filterOptions: FilterSettingsModel = { type: 'Excel' };
  let grid: GridComponent;
  const load = (): void => {
    grid = (document.getElementById('adaptivebrowser') as HTMLFormElement).ej2_instances[0];
    grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0] as HTMLElement;
  }
   let menuFilter = { type: 'Menu' };
   let checkboxFilter = { type: 'CheckBox' };
      return (<div className="e-adaptive-demo e-bigger">
              <div className="e-mobile-layout">
                <div className="e-mobile-content">
                    <GridComponent id="adaptivebrowser" dataSource={data} height='100%' ref={g => grid = g} enableAdaptiveUI={true} allowFiltering={true} allowSorting={true} allowPaging={true} filterSettings={filterOptions} toolbar={toolbarOptions} editSettings={editSettings} load={load}>
                      <ColumnsDirective>
                        <ColumnDirective field='SNO' headerText='S NO' width='150' isPrimaryKey={true} validationRules={orderidRules}></ColumnDirective>
                        <ColumnDirective field='Model' headerText='Model Name' width='200' editType='dropdownedit' validationRules={validationRule} />
                        <ColumnDirective field='Developer' headerText='Developer' width='200' filter={menuFilter} validationRules={validationRule}></ColumnDirective>
                        <ColumnDirective field='ReleaseDate' headerText='Released Date' editType='datepickeredit' type='date' format='yMMM' width='200'></ColumnDirective>
                        <ColumnDirective field='AndroidVersion' headerText='Android Version' width='200' filter={checkboxFilter} validationRules={validationRule}></ColumnDirective>
                      </ColumnsDirective>
                      <Inject services={[Filter, Sort, Edit, Toolbar, Page]} />
                    </GridComponent>
                </div>
              </div>
              <br></br>
                <div className="datalink">Source:
                  <a href="https://en.wikipedia.org/wiki/List_of_Android_smartphones"
                    target="_blank">Wikipedia: List of Android smartphones</a>
                </div>
              </div>
            )
}
export default App;