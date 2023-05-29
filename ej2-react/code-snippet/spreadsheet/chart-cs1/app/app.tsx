{% raw %}
import React, { useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective, CellStyleModel, ChartModel } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective, getFormatFromType } from '@syncfusion/ej2-react-spreadsheet';
import { chartData } from './datasource';

function App() {
    const spreadsheetRef = useRef<SpreadsheetComponent>(null);
    const style: CellStyleModel = { backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' };
    const chart: ChartModel[] = [{ type: 'Column', range: 'A3:F8' }];
    useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A3:F3');
            spreadsheet.numberFormat(getFormatFromType('Currency'), 'B4:F8');
            spreadsheet.merge('A1:F1');
        }
    }, []);

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef}>
                <SheetsDirective>
                    <SheetDirective name='Book Sales'>
                        <RowsDirective>
                            <RowDirective height={30}>
                                <CellsDirective>
                                    <CellDirective value='Book Sales 2016-2020' style={style}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective>
                                <CellsDirective>
                                    <CellDirective index={7} chart={chart}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={chartData} startCell='A3' ></RangeDirective>
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
            </SpreadsheetComponent>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endraw %}