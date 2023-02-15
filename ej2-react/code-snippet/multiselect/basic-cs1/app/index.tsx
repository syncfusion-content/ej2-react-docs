{% raw %}



import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // instance of MultiSelect component
    public multiSelectObj: MultiSelectComponent | null;
    // defined the array of data
    private gameList: { [key: string]: Object }[] = [
        { id: 'Game1', game: 'Badminton' },
        { id: 'Game2', game: 'Basketball' },
        { id: 'Game3', game: 'Cricket' },
        { id: 'Game4', game: 'Football' },
        { id: 'Game5', game: 'Golf' },
        { id: 'Game6', game: 'Hockey' },
        { id: 'Game7', game: 'Rugby' },
        { id: 'Game8', game: 'Snooker' },
        { id: 'Game9', game: 'Tennis' }
    ];

    // maps the appropriate column to fields property
    private fields: object = { text: 'game', value: 'id' };


    public componentDidMount() {
        const proxy = this;
        document.onkeyup = (e) => {
            if (e.altKey && e.keyCode === 84 /* t */) {
                // press alt+t to focus the control.
                (proxy.multiSelectObj as any).inputElement.focus()
            }
        };
    }

    public render() {
        return (
            // specifies the tag for render the MultiSelect component
            <MultiSelectComponent id="mtselement" ref={(scope) => { this.multiSelectObj  = scope; }} popupHeight='200px' fields={this.fields} dataSource={this.gameList} placeholder="Select a game" />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


{% endraw %}