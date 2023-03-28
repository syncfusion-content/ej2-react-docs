{% raw %}



import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // defined the array of data
    private gameList: { [key: string]: Object }[] = [
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

    // instance of AutoComplete component
    private AutoCompleteObj: AutoCompleteComponent;

    public componentDidMount() {
        const proxy = this;
        document.onkeyup = (e) => {
            if (e.altKey && e.keyCode === 84 /* t */) {
                // press alt+t to focus the control.
                (proxy.AutoCompleteObj as any).inputElement.focus();
            }
        };
    }

    public render() {
        return (
            // specifies the tag for render the AutoComplete component
            <AutoCompleteComponent id="atcelement" ref={(scope) => { (this.AutoCompleteObj as AutoCompleteComponent | null) = scope; }} fields={this.fields} dataSource={this.gameList} placeholder="Find a game" />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


{% endraw %}