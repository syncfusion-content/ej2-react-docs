import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent, ExcelExport, Inject, BeforeExportEventArgs } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {
  let pivotObj: PivotViewComponent;

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet[],
    enableSorting: true,
    columns: [{ name: 'Year' }],
    values: [
      { name: 'Sold', caption: 'Units Sold' },
      { name: 'Amount', caption: 'Sold Amount' },
    ],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    expandAll: false,
    filters: []
  }

  function beforeExport(args: BeforeExportEventArgs): void {
    // Store the drilledMembers here(row/column headers that has been expanded).
    let member = pivotObj.dataSourceSettings.drilledMembers;
    // Then apply expandAll to the pivot table settings to get all the data including child members.
    pivotObj.setProperties(
      { dataSourceSettings: { expandAll: true, drilledMembers: [] } },
      true
    );
    pivotObj.engineModule.generateGridData(pivotObj.dataSourceSettings, true);
    // Assign that retrieved data to the exporting here.
    args.dataCollections = [pivotObj.engineModule.pivotValues];
    // Then set false to expandAll and the stored members to the drilledMembers  to the pivot table settings to get back to the normal state.
    pivotObj.setProperties(
      { dataSourceSettings: { expandAll: false, drilledMembers: member } },
      true
    );
  }

  function btnClick(): void {
    pivotObj.excelExport();
  }

  return (
    <div>
      <div className="col-md-9"> <PivotViewComponent ref={(d: PivotViewComponent) => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowExcelExport={true} beforeExport={beforeExport.bind(this)}>
        <Inject services={[ExcelExport]} /></PivotViewComponent>
      </div>
      <div className='col-lg-3 property-section'>
        <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent>
      </div>
    </div>);

};

export default App;
