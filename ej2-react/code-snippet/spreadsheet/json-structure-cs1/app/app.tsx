


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { jsonData } from './datasource';

export default class App extends React.Component<{}, {}> {
    spreadsheet: SpreadsheetComponent;
    public onCreated(): void {
         this.spreadsheet.openFromJson({ file: jsonData });
    }

     render() {
        return  (<SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj }} created={this.onCreated.bind(this)}>
                </SpreadsheetComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));



