{% raw %}



import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
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
        { Id: 'Game8', Game: 'Snooker' },
        { Id: 'Game9', Game: 'Tennis' }
    ];

    // maps the appropriate column to fields property
    private fields: object = { text: 'Game', value: 'Id' };

    // instance of DropDownList component
    private dropDownListObj: any;

    public componentDidMount() {
        const proxy = this;
        document.onkeyup = (e) => {
            if (e.altKey && e.keyCode === 84 /* t */) {
                // press alt+t to focus the control.
                proxy.dropDownListObj.inputElement.focus();
            }
        };
    }

    public render() {
        return (
            // specifies the tag for render the DropDownList component
            <DropDownListComponent id="ddlelement" ref={(scope) => { this.dropDownListObj = scope; }} popupHeight='200px' fields={this.fields} dataSource={this.gameList} placeholder="Select a game" />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


{% endraw %}