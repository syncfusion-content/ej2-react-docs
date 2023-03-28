{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
export default class App extends React.Component {
    spreadsheet;
    created(args) {
        fetch("https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx") // fetch the remote url
            .then((response) => {
            response.blob().then((fileBlob) => {
                var file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
                this.spreadsheet.open({ file: file }); // open the file into Spreadsheet
            });
        });
    }
    render() {
        return (<SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open' created={this.created.bind(this)}>
                    </SpreadsheetComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}