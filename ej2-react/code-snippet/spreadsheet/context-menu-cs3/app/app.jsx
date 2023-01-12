import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
export default class App extends React.Component {
    spreadsheet;
    oncreated() {
        //To enable / disable context menu items.
        this.spreadsheet.enableContextMenuItems(['Rename'], false, false); // Contextmenu Items that needs to be enabled / disabled, Set true / false to enable / disable the menu items, Set true if the given text is a unique id.
    }
    render() {
        return (<div>
             <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} contextMenuBeforeOpen={this.oncreated.bind(this)}>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
