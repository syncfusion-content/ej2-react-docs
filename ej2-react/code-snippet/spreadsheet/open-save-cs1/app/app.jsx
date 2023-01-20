import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
export default class App extends React.Component {
    beforeOpen(args) {
        // your code snippets here
    }
    render() {
        return (<SpreadsheetComponent allowOpen={true} openUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open' beforeOpen={this.beforeOpen.bind(this)}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
