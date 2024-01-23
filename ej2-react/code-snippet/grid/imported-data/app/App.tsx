
import { L10n } from '@syncfusion/ej2-base';
import { GridComponent } from '@syncfusion/ej2-react-grids';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data } from './datasource';
// import * as XLSX from 'xlsx';


function App() {
  let grid: GridComponent | null;
  const path: Object = {
    saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
  };
  const dropElement: HTMLElement = document.getElementsByClassName('control-fluid')[0] as HTMLElement;
  const parseExcel = (file: any) => {
    var reader = new FileReader();
    reader.onload = (e) => {
      var data = ((e as any).target).result;
      var workbook = XLSX.read(data, { type: 'array' });
      workbook.SheetNames.forEach((sheetName: any) => {
        var XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        (grid as GridComponent).dataSource = XL_row_object;
      });
    };
    reader.readAsArrayBuffer(file.rawFile);
  };
  const onSuccess = (args: any) => {
    var files = args.file;
    if (files)
      parseExcel(files[0]);
  }
  const onRemove = (args: any) => {
    (grid as GridComponent).dataSource = [];
  }
  return (<div>
    <UploaderComponent asyncSettings={path} removing={onRemove} dropArea={dropElement} change={onSuccess}></UploaderComponent>
    <GridComponent ref={g => grid = g}></GridComponent>
  </div>
  );
};
export default App;
