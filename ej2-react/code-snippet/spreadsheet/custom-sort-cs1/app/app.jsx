{% raw %}
import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { DataUtil } from '@syncfusion/ej2-data';
import { tradeData } from './datasource';

function App() {
    const spreadsheetRef = useRef(null);
    const mySortComparer = (x, y) => {
        // custom sort comparer to sort based on the custom list.
        let customList = ['Perfect', 'Sufficient', 'Insufficient'];
        let comparer = DataUtil.fnSort('Ascending');
        return comparer(x ? customList.indexOf(x.value) : x, y ? customList.indexOf(y.value) : y);
    };
    const onDataBound = () => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet && spreadsheet.activeSheetIndex === 0) {
            spreadsheet.sort({ sortDescriptors: { field: 'F', sortComparer: mySortComparer }, containsHeader: true }, 'A1:H20');
        }
    };
    const onSortComplete = (args) => {
        let spreadsheet = spreadsheetRef.current;
        spreadsheet?.selectRange(args.range);
    };

    return (
        <SpreadsheetComponent ref={spreadsheetRef} dataBound={onDataBound} sortComplete={onSortComplete}>
            <SheetsDirective>
                <SheetDirective>
                    <RangesDirective>
                        <RangeDirective dataSource={tradeData}></RangeDirective>
                    </RangesDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={90}></ColumnDirective>
                        <ColumnDirective width={130}></ColumnDirective>
                        <ColumnDirective width={130}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
{% endraw %}