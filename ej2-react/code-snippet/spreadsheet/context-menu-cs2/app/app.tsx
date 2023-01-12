

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

export default class App extends React.Component<{}, {}> {
    public spreadsheet: SpreadsheetComponent;
    public oncreated(): void{
        // To remove existing context menu items.
        this.spreadsheet.removeContextMenuItems(["Insert Column"], false);
    }
     render() {
        return  ( <div>
             <SpreadsheetComponent
                        ref={(ssObj) => { this.spreadsheet = ssObj }} contextMenuBeforeOpen={this.oncreated.bind(this)}>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));


