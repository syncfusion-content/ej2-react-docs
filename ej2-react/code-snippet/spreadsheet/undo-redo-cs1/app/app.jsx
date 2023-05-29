{% raw %}
import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { getRangeIndexes } from '@syncfusion/ej2-react-spreadsheet';
import { addClass, removeClass } from '@syncfusion/ej2-base';
import { defaultData } from './datasource';

function App() {
    const spreadsheetRef = useRef(null);
    const updateCollection = () => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            let cell = spreadsheet.getActiveSheet().activeCell;
            let cellIdx = getRangeIndexes(cell);
            let Element = spreadsheet.getCell(cellIdx[0], cellIdx[1]);
            if (!Element.classList.contains("customClass")) {
                Element.classList.add('customClass'); // To add the custom class in active cell element
                spreadsheet.updateUndoRedoCollection({ eventArgs: { class: 'customClass', rowIdx: cellIdx[0], colIdx: cellIdx[1], action: 'customCSS' } }); // To update the undo redo collection
            }
        }
    };
    const onActionComplete = (args) => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            let actionEvents = args;
            if (actionEvents.eventArgs.action === "customCSS") {
                let Element = spreadsheet.getCell(actionEvents.eventArgs.rowIdx, actionEvents.eventArgs.colIdx);
                if (actionEvents.isUndoRedo && actionEvents.isUndo) {
                    removeClass([Element], 'customClass'); // To remove the custom class in undo action
                } else {
                    addClass([Element], 'customClass');// To add the custom class in redo action
                }
            }
        }
    };

    return (
        <div>
            <button onClick={updateCollection}>add/remove Class</button>
            <SpreadsheetComponent
                ref={spreadsheetRef} actionComplete={onActionComplete} >
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
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
{% endraw %}