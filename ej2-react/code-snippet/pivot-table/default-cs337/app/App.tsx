import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent, ExcelExport, Inject, ExcelHeaderQueryCellInfoEventArgs, ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

function App() {
  let pivotObj: PivotViewComponent;
  const degree: number[] = [90, 135, 180, 270];
  let dropDownListObject: any;

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet[],
    columns: [{ name: 'Year' }],
    values: [{ name: 'Sold' }],
    rows: [{ name: 'Country' }, { name: 'Products' }]
  }

  let gridSettings: GridSettings = {
    excelHeaderQueryCellInfo: function (args: ExcelHeaderQueryCellInfoEventArgs): void {
      args.style = { rotation: dropDownListObject.value as number };
    },
    excelQueryCellInfo: function (args: ExcelQueryCellInfoEventArgs): void {
      args.style = { rotation: dropDownListObject.value as number };
    }
  } as GridSettings;

  function btnClick(): void {
    pivotObj.excelExport();
  }

  return (
    <div>
      <div className="col-md-9"> <PivotViewComponent ref={(d: PivotViewComponent) => pivotObj = d} id='PivotView' height={350}
        dataSourceSettings={dataSourceSettings} allowExcelExport={true} gridSettings={gridSettings}>
        <Inject services={[ExcelExport]} /></PivotViewComponent>
      </div>
      <div className='col-lg-3 property-section'>
        <div id="excel">
          <ButtonComponent cssClass='e-primary' onClick={btnClick}>Export</ButtonComponent>
        </div>
        <div id="dropdownlist" style={{ marginTop: '10px' }}>
          <label>Select a degree: </label>
          <DropDownListComponent style={{ marginLeft: "10px" }} placeholder="Select a degree" id="ddlelement"
            dataSource={degree} ref={(scope) => { dropDownListObject = scope; }} width={150}>
          </DropDownListComponent>
        </div>
      </div>
    </div>);
};

export default App;
