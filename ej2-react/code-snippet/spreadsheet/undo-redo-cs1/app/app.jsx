import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { getRangeIndexes } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';
import { addClass, removeClass } from '@syncfusion/ej2-base';
export default class App extends React.Component {
    spreadsheet;
    boldRight = { fontWeight: 'bold', textAlign: 'right' };
    bold = { fontWeight: 'bold' };
    updateCollection() {
        let cell = this.spreadsheet.getActiveSheet().activeCell;
        let cellIdx = getRangeIndexes(cell);
        let Element = this.spreadsheet.getCell(cellIdx[0], cellIdx[1]);
        if (!Element.classList.contains("customClass")) {
            Element.classList.add('customClass'); // To add the custom class in active cell element
            this.spreadsheet.updateUndoRedoCollection({ eventArgs: { class: 'customClass', rowIdx: cellIdx[0], colIdx: cellIdx[1], action: 'customCSS' } }); // To update the undo redo collection
        }
    }
    onActionComplete(args) {
        let actionEvents = args;
        if (actionEvents.eventArgs.action == "customCSS") {
            let Element = this.spreadsheet.getCell(actionEvents.eventArgs.rowIdx, actionEvents.eventArgs.colIdx);
            if (actionEvents.eventArgs.requestType == "undo") {
                removeClass([Element], 'customClass'); // To remove the custom class in undo action
            }
            else {
                addClass([Element], 'customClass'); // To add the custom class in redo action
            }
        }
    }
    render() {
        return (<div> <button className='e-btn' onClick={this.updateCollection.bind(this)}>add/remove Class</button>
             <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} actionComplete={this.onActionComplete.bind(this)}>
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
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
