


import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    // define the JSON of data
    private sportsData: { [key: string]: Object }[] = [
       { Id: 'Game1', Game: 'Badminton' },
       { Id: 'Game2', Game: 'Basketball' },
       { Id: 'Game3', Game: 'Cricket' },
       { Id: 'Game4', Game: 'Football' },
       { Id: 'Game5', Game: 'Golf' },
       { Id: 'Game6', Game: 'Hockey' },
       { Id: 'Game7', Game: 'Rugby' },
       { Id: 'Game8', Game: 'Snooker' }
    ];

    // maps the appropriate column to fields property
    private fields: object = { value: 'Game' };

    public render() {
        return (
             // specifies the tag for render the AutoComplete component
            <AutoCompleteComponent id="atcelement" dataSource={this.sportsData} fields={this.fields} placeholder="Find a game" highlight={true} />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));



