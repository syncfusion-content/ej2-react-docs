{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  RangesDirective,
} from '@syncfusion/ej2-react-spreadsheet';
import {
  RangeDirective,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';
import { createElement } from '@syncfusion/ej2-base';
export default class App extends React.Component<{}, {}> {
  spreadsheet: SpreadsheetComponent;
  public fileMenuItemSelect(args): void {
    if (args.item.text === 'Microsoft Excel') {
      args.cancel = true;
      this.spreadsheet.saveAsJson().then((response) => {
        var formData = new FormData();
        formData.append(
          'JSONData',
          JSON.stringify(response.jsonObject.Workbook)
        );
        formData.append('fileName', 'Sample');
        formData.append('saveType', 'Xlsx');
        fetch(
          'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save',
          {
            method: 'POST',
            headers: { Authorization: 'YOUR TEXT' },
            body: formData,
          }
        ).then((response) => {
          response.blob().then((data) => {
            var anchor = createElement('a', {
              attrs: { download: 'Sample.xlsx' },
            });
            var url = URL.createObjectURL(data);
            anchor.href = url;
            document.body.appendChild(anchor);
            anchor.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(anchor);
          });
        });
      });
    }
  }
  render() {
    return (
      <SpreadsheetComponent
        ref={(ssObj) => {
          this.spreadsheet = ssObj;
        }}
        allowSave={true}
        saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
        fileMenuItemSelect={this.fileMenuItemSelect.bind(this)}
      >
        <SheetsDirective>
          <SheetDirective>
            <RangesDirective>
              <RangeDirective dataSource={defaultData}></RangeDirective>
            </RangesDirective>
            <ColumnsDirective>
              <ColumnDirective width={180}></ColumnDirective>
              <ColumnDirective width={130}></ColumnDirective>
              <ColumnDirective width={130}></ColumnDirective>
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));


{% endraw %}