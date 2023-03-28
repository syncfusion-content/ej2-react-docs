


import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // define the array of data
    private sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Hockey', 'Rugby','Snooker', 'Tennis'];

    public render() {
        return (
              // specifies the tag for render the DropDownList component
            <DropDownListComponent id="ddlelement" dataSource={this.sportsData} popupHeight="200px" popupWidth="250px" placeholder="select a game" />
            );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


