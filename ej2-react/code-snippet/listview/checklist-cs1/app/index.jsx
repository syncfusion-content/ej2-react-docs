import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
function App() {
    //define the array of JSON
    let data = [
        { text: 'Do Meditation', id: '1' },
        { text: 'Go Jogging', id: '2' },
        { text: 'Buy Groceries', id: '3' },
        { text: 'Pay Phone bill', id: '4' },
        { text: 'Play Football with your friends', id: '5' },
    ];
    return (
    // specifies the tag to render the ListView component
    <ListViewComponent id='list' dataSource={data} showCheckBox={true} headerTitle='TO DO LIst' showHeader={true}></ListViewComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
