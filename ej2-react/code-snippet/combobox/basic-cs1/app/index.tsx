{% raw %}



import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // defined the array of data
    private gameList: { [key: string]: Object }[] = [
        { Id: 'Game2', Game: 'Badminton' },
        { Id: 'Game3', Game: 'Basketball' },
        { Id: 'Game4', Game: 'Cricket' },
        { Id: 'Game5', Game: 'Football' },
        { Id: 'Game6', Game: 'Golf' },
        { Id: 'Game7', Game: 'Hockey' },
        { Id: 'Game8', Game: 'Rugby' },
        { Id: 'Game9', Game: 'Snooker' },
        { Id: 'Game10', Game: 'Tennis' },
    ];

    // maps the appropriate column to fields property
    private fields: object = { text: 'Game', value: 'Id' };

    // instance of ComboBox component
    private comboBoxObj: ComboBoxComponent;

    public componentDidMount() {
        const proxy = this;
        document.onkeyup = (e) => {
            if (e.altKey && e.keyCode === 84 /* t */) {
                // press alt+t to focus the control.
                (proxy.comboBoxObj as any).inputElement.focus();
            }
        };
    }

    public render() {
        return (
            // specifies the tag for render the ComboBox component
            <ComboBoxComponent id="comboelement" ref={(scope) => { (this.comboBoxObj as ComboBoxComponent | null) = scope; }} popupHeight='200px' fields={this.fields} dataSource={this.gameList} placeholder="Select a game" />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


{% endraw %}