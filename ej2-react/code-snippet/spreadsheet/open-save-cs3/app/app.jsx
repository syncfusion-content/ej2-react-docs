import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
export default class App extends React.Component {
    spreadsheet;
    beforeOpen(args) {
        args.requestData['headers'] = {
            Authorization: 'YOUR TEXT',
        };
    }
    render() {
        return (<SpreadsheetComponent ref={(ssObj) => {
                this.spreadsheet = ssObj;
            }} openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open" beforeOpen={this.beforeOpen.bind(this)}></SpreadsheetComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
