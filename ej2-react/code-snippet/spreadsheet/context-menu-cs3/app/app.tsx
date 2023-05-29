{% raw %}
import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-react-splitbuttons';

function App() {
    const spreadsheetRef = useRef<SpreadsheetComponent>(null);
    const onContextMenuBeforeOpen = (args: BeforeOpenCloseMenuEventArgs) => {
        let spreadsheet = spreadsheetRef.current;
        //To enable / disable context menu items.
        if (args.element.id === spreadsheet.element.id + '_contextmenu') {
            spreadsheet?.enableContextMenuItems(['Rename'], false, false); // Contextmenu Items that needs to be enabled / disabled, Set true / false to enable / disable the menu items, Set true if the given text is a unique id.
        }
    };

    return (<SpreadsheetComponent ref={spreadsheetRef} contextMenuBeforeOpen={onContextMenuBeforeOpen} />);
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endraw %}