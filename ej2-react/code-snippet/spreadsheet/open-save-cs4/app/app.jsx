{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getRangeAddress, SpreadsheetComponent, } from '@syncfusion/ej2-react-spreadsheet';
export default class App extends React.Component {
    spreadsheet;
    openComplete() {
        let sheets = this.spreadsheet.sheets;
        for (let index = 0; index < sheets.length; index++) {
            let name = this.spreadsheet.sheets[index].name;
            let protectSetting = {
                selectCells: true,
                formatCells: false,
            };
            //To protect the sheet using sheet name
            this.spreadsheet.protectSheet(name, protectSetting);
            let address = getRangeAddress([
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
        return (<SpreadsheetComponent ref={(ssObj) => {
                this.spreadsheet = ssObj;
            }} openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open" openComplete={this.openComplete.bind(this)}></SpreadsheetComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}