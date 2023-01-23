{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

export default class App extends React.Component<{}, {}> {
    spreadsheet: SpreadsheetComponent;
    public created(args): void {
        fetch("https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx") // fetch the remote url
                .then((response) => {
                    response.blob().then((fileBlob) => { // convert the excel file to blob
                    var file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
                    this.spreadsheet.open({ file: file }); // open the file into Spreadsheet
                    })
                })
    }
     render() {
        return  (<SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj }}
                        openUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open' created={this.created.bind(this)}>
                    </SpreadsheetComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));


{% endraw %}