
import { L10n } from '@syncfusion/ej2-base';
import { GridComponent } from '@syncfusion/ej2-react-grids';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const path = {
    saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
    removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
  };
  const dropElement = document.getElementsByClassName('control-fluid')[0];
  const parseExcel = (file) => {
    var reader = new FileReader();
    reader.onload = (e) => {
      var data = (e.target).result;
      var workbook = XLSX.read(data, { type: 'array' });
      workbook.SheetNames.forEach((sheetName) => {
        var XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        grid.dataSource = XL_row_object;
      });
    };
    reader.readAsArrayBuffer(file.rawFile);
  };
  const onSuccess = (args) => {
    var files = args.file;
    if (files)
      parseExcel(files[0]);
  }
  const onRemove = () => {
    grid.dataSource = [];
  }
  return (<div>
    <UploaderComponent asyncSettings={path} removing={onRemove} dropArea={dropElement} change={onSuccess}></UploaderComponent>
    <GridComponent ref={g => grid = g}></GridComponent>
  </div>
  );
};
export default App;
