{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
export default class App extends React.Component {
    spreadsheet;
    rowsModel = [{
            index: 9,
            cells: [{ value: '' }, { value: '8' }, { value: 'Northwoods Cranberry Sauce' }, { value: '3' }, { value: '12 - 12 oz jars' },
                { value: '40.00' }, { value: '6' }, { value: 'false' }]
        },
        {
            cells: [{ value: '' }, { value: '9' }, { value: 'Mishi Kobe Niku' }, { value: '4' }, { value: '18 - 500 g pkgs.' }, { value: '97.00' }, { value: '29' }, { value: 'true' }]
        }];
    created() {
        // Applies style formatting before inserting the rows
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'B1:H1');
        // inserting a empty row at 0th index
        this.spreadsheet.insertRow();
        // inserting 2 rows at the 9th index with data
        this.spreadsheet.insertRow(this.rowsModel);
        // Applies style formatting after the rows are inserted
        this.spreadsheet.cellFormat({ textAlign: 'center' }, 'B3:B12');
        this.spreadsheet.cellFormat({ textAlign: 'center' }, 'D3:D12');
        this.spreadsheet.cellFormat({ textAlign: 'center' }, 'F3:H12');
    }
    ;
    render() {
        return (<div> <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} created={this.created.bind(this)} showSheetTabs={false} showRibbon={false} showFormulaBar={false}>
                        <SheetsDirective>
                            <SheetDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={data} startCell={"B1"}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={20}></ColumnDirective>
                                    <ColumnDirective width={90}></ColumnDirective>
                                    <ColumnDirective width={220}></ColumnDirective>
                                    <ColumnDirective width={90}></ColumnDirective>
                                    <ColumnDirective width={140}></ColumnDirective>
                                    <ColumnDirective width={90}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}