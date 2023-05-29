{% raw %}
import React, { useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, ColumnsDirective, ColumnDirective, RangeDirective } from '@syncfusion/ej2-react-spreadsheet';
import { ButtonPropsModel, DialogComponent } from '@syncfusion/ej2-react-popups';
import { budgetData, salaryData } from './datasource';

function App() {
    const spreadsheetRef = useRef<SpreadsheetComponent>(null);
    const dialogRef = useRef<DialogComponent>(null);
    useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
            spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
        }
    }, []);
    const lockCells = (): void => {
        let spreadsheet = spreadsheetRef.current;
        let dialog = dialogRef.current;
        spreadsheet?.lockCells('A1:F3', false);
        dialog?.hide();
    };
    const showDlg = (): void => {
        let dialog = dialogRef.current;
        dialog?.show();
    };
    const protectSettings = { selectCells: true };
    const btn: ButtonPropsModel[] = [{ click: lockCells, buttonModel: { content: 'Ok', isPrimary: true } }];

    return (
        <div>
            <button onClick={showDlg}>Unlock cells</button>
            <SpreadsheetComponent ref={spreadsheetRef}>
                <SheetsDirective>
                    <SheetDirective name={"Budget"} isProtected={true} protectSettings={protectSettings}>
                        <RangesDirective>
                            <RangeDirective dataSource={budgetData}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                    <SheetDirective name={"Salary"}>
                        <RangesDirective>
                            <RangeDirective dataSource={salaryData}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
            <DialogComponent ref={dialogRef} header={'Spreadsheet'} target={document.getElementById('spreadsheet') as HTMLElement} content={'"A1:F3" range of cells has been unlocked.'}
                showCloseIcon={true} isModal={true} visible={false} width={'500px'} buttons={btn}>
            </DialogComponent>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endraw %}