

import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    // define the array of string
    private sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Hockey', 'Snooker', 'Tennis'];

    public render() {
        return (
              // specifies the tag for render the AutoComplete component
            <AutoCompleteComponent id="atcelement" dataSource={this.sportsData} placeholder="Find a game" debounceDelay={300} />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


