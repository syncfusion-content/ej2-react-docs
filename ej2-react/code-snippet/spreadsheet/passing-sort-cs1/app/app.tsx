{% raw %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, SortDescriptor, SortEventArgs } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { tradeData } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const onDataBound = (): void => {
        let spreadsheet = spreadsheetRef.current;
        let sortDescriptors: SortDescriptor[] = [
            { field: 'F', order: 'Ascending' },
            { field: 'E', order: 'Ascending' },
            { field: 'C', order: 'Descending' }
        ];
        if (spreadsheet && spreadsheet.activeSheetIndex === 0) {
            spreadsheet.sort({ sortDescriptors: sortDescriptors, containsHeader: true }, 'A1:H30');
        }
    };
    const onSortComplete = (args: SortEventArgs) => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.selectRange(args.range as string);
        }      
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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endraw %}