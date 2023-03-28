{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  getRangeAddress,
  ProtectSettingsModel,
  SheetModel,
  SpreadsheetComponent,
} from '@syncfusion/ej2-react-spreadsheet';

export default class App extends React.Component<{}, {}> {
  spreadsheet: SpreadsheetComponent;

  public openComplete() {
    let sheets: SheetModel[] = this.spreadsheet.sheets;
    for (let index: number = 0; index < sheets.length; index++) {
      let name: string = this.spreadsheet.sheets[index].name;
      let protectSetting: ProtectSettingsModel = {
        selectCells: true,
        formatCells: false,
      };

      //To protect the sheet using sheet name
      this.spreadsheet.protectSheet(name, protectSetting);
      let address: string = getRangeAddress([
        0,
        0,
        sheets[index].usedRange.rowIndex,
        sheets[index].usedRange.colIndex,
      ]);
      //To lock the used range cells
      this.spreadsheet.lockCells(name + '!' + address, true);
    }
  }
  render() {
    return (
      <SpreadsheetComponent
        ref={(ssObj) => {
          this.spreadsheet = ssObj;
        }}
        openUrl="https://services.syncfusion.com/react/production/api/spreadsheet/open"
        openComplete={this.openComplete.bind(this)}
      ></SpreadsheetComponent>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));


{% endraw %}