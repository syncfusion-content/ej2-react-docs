{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
export default class App extends React.Component {
    spreadsheet;
    oncreated(args) {
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        this.spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:H5');
        this.spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:B5');
        this.spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:D5');
        // To wrap the cells from E2 to E5 range
        this.spreadsheet.wrap('E2:E5');
        // To unwrap the H3 cell
        this.spreadsheet.wrap('H3', false);
    }
    render() {
        return (<div> <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} created={this.oncreated.bind(this)} showFormulaBar={false}>
                        <SheetsDirective>
                            <SheetDirective name={"Movie List"}>
                             <RowsDirective>
                                 <RowDirective height={30}>
                                 </RowDirective>
                                 <RowDirective>
                                     <CellsDirective>
                                     <CellDirective index={7} wrap={true}></CellDirective>
                                     </CellsDirective>
                                     </RowDirective>
                                     <RowDirective>
                                     <CellsDirective>
                                     <CellDirective index={7} wrap={true}></CellDirective>
                                     </CellsDirective>
                                     </RowDirective>
                                     <RowDirective>
                                     <CellsDirective>
                                     <CellDirective index={7} wrap={true}></CellDirective>
                                     </CellsDirective>
                                     </RowDirective>
                                     <RowDirective>
                                     <CellsDirective>
                                     <CellDirective index={7} wrap={true}></CellDirective>
                                     </CellsDirective>
                                     </RowDirective>
                                     </RowsDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={data}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={100} index={1}></ColumnDirective>
                                    <ColumnDirective width={140}></ColumnDirective>
                                    <ColumnDirective width={90}></ColumnDirective>
                                    <ColumnDirective width={150}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                    <ColumnDirective width={90}></ColumnDirective>
                                    <ColumnDirective width={180}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}