



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellsDirective, CellDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel, getRangeIndexes } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
import { addClass, removeClass } from '@syncfusion/ej2-base';

export default class App extends React.Component<{}, {}> {
       public spreadsheet: SpreadsheetComponent;
    public boldRight: CellStyleModel = { fontWeight: 'bold', textAlign: 'right' };
    public bold: CellStyleModel = { fontWeight: 'bold' };
     public updateCollection(): void {
        let cell = this.spreadsheet.getActiveSheet().activeCell;
        let cellIdx = getRangeIndexes(cell);
        let Element= this.spreadsheet.getCell(cellIdx[0], cellIdx[1]);
        if (!Element.classList.contains("customClass")) {
            Element.classList.add('customClass'); // To add the custom class in active cell element
            this.spreadsheet.updateUndoRedoCollection({ eventArgs: { class: 'customClass', rowIdx: cellIdx[0], colIdx: cellIdx[1], action: 'customCSS' } }); // To update the undo redo collection
        }
    }

    public oncreated(): void{
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:S1');
        this.spreadsheet.numberFormat('h:mm AM/PM', 'C1:S1');
        this.spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:S11');
        // Merging the `K4:M4` cells using method
        this.spreadsheet.merge('K4:M4');
        // Merging the 5th and 6th row cells across 11th, 12th and 13th column
        this.spreadsheet.merge('K5:M6', 'Vertically');
        // Merging the 18th and 19th column cells across 2nd, 3rd and 4th row
        this.spreadsheet.merge('N4:O6', 'Horizontally');
    }
     render() {
        return  ( <div>
             <SpreadsheetComponent
                        ref={(ssObj) => { this.spreadsheet = ssObj }} created={this.oncreated.bind(this)} showFormulaBar={false}>
                        <SheetsDirective>
                            <SheetDirective name={"Merge Cells"}>
                            <RowsDirective>
                                <RowDirective height={35}></RowDirective>
                                <RowDirective height={35}>
                                    <CellsDirective>
                                        <CellDirective index={1} rowSpan={2}></CellDirective>
                                        <CellDirective colSpan={2}></CellDirective>
                                        <CellDirective index={6} colSpan={3}></CellDirective>
                                        <CellDirective index={10} rowSpan={2} colSpan={3}></CellDirective>
                                        <CellDirective index={13} colSpan={2}></CellDirective>
                                        <CellDirective index={17} colSpan={2}></CellDirective>
                                    </CellsDirective>
                                </RowDirective>
                                <RowDirective height={35}>
                                    <CellsDirective>
                                        <CellDirective index={3} colSpan={3}></CellDirective>
                                        <CellDirective index={6} colSpan={4}></CellDirective>
                                        <CellDirective index={13} colSpan={3}></CellDirective>
                                        <CellDirective index={17} colSpan={2}></CellDirective>
                                    </CellsDirective>
                                </RowDirective>
                                <RowDirective height={35}>
                                    <CellsDirective>
                                        <CellDirective index={2} colSpan={3}></CellDirective>
                                        <CellDirective index={5} colSpan={2}></CellDirective>
                                        <CellDirective index={7} colSpan={3}></CellDirective>
                                        <CellDirective index={15} colSpan={2}></CellDirective>
                                        <CellDirective index={17} colSpan={2}></CellDirective>
                                    </CellsDirective>
                                </RowDirective>
                                <RowDirective height={35}>
                                    <CellsDirective>
                                        <CellDirective index={2} colSpan={3}></CellDirective>
                                        <CellDirective index={6} colSpan={4}></CellDirective>
                                        <CellDirective index={16} colSpan={2}></CellDirective>
                                    </CellsDirective>
                                </RowDirective>
                                <RowDirective height={35}>
                                    <CellsDirective>
                                        <CellDirective index={2} colSpan={4}></CellDirective>
                                        <CellDirective index={7} colSpan={3}></CellDirective>
                                        <CellDirective index={15} colSpan={2}></CellDirective>
                                        <CellDirective index={17} colSpan={2}></CellDirective>
                                    </CellsDirective>
                                </RowDirective>
                            </RowsDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={data}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={90}></ColumnDirective>
                                    <ColumnDirective width={150}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
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



