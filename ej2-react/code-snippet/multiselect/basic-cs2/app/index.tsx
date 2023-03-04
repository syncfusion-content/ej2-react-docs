{% raw %}


import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    // instance of MultiSelect component
    let multiSelectObj: MultiSelectComponent | null;
    // defined the array of data
    const gameList: { [key: string]: Object }[] = [
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
    const fields: object = { text: 'game', value: 'id' };
    React.useEffect(() => {
        document.onkeyup = (e) => {
            if (e.altKey && e.keyCode === 84 /* t */) {
                // press alt+t to focus the control.
                (multiSelectObj as any).inputElement.focus()
            }
        };
    }, []);
    return (
    // specifies the tag for render the MultiSelect component
        <MultiSelectComponent id="mtselement" ref={(scope) => {multiSelectObj  = scope; }} popupHeight='200px' fields={fields} dataSource={gameList} placeholder="Select a game" />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


{% endraw %}