{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective, getFormatFromType } from '@syncfusion/ej2-react-spreadsheet';
import { chartData } from './datasource';
export default class App extends React.Component {
    spreadsheet;
    style = { backgroundColor: '#357cd2', color: '#fff',
        fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' };
    chart = [{ type: 'Column', range: 'A3:F8' }];
    oncreated(args) {
        this.spreadsheet.cellFormat({ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A3:F3');
        this.spreadsheet.numberFormat(getFormatFromType('Currency'), 'B4:F8');
        this.spreadsheet.merge('A1:F1');
    }
    render() {
        return (<div> <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} created={this.oncreated.bind(this)}>
                        <SheetsDirective>
                            <SheetDirective name='Book Sales'>
                                <RowsDirective>
                                    <RowDirective height={30}>
                                        <CellsDirective>
                                            <CellDirective value='Book Sales 2016-2020' style={this.style}></CellDirective>
                                        </CellsDirective>
                                    </RowDirective>
                                    <RowDirective>
                                        <CellsDirective>
                                            <CellDirective index={7} chart={this.chart}></CellDirective>
                                        </CellsDirective>
                                    </RowDirective>
                                </RowsDirective>
                            <RangesDirective>
                                <RangeDirective dataSource={chartData} startCell='A3'></RangeDirective>
                            </RangesDirective>
                            <ColumnsDirective>
                                <ColumnDirective width={110}></ColumnDirective>
                                <ColumnDirective width={100}></ColumnDirective>
                                <ColumnDirective width={100}></ColumnDirective>
                                <ColumnDirective width={100}></ColumnDirective>
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