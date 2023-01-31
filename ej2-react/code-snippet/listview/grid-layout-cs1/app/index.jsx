import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
function App() {
    //Define an array of number
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function listtemplate(data) {
        return (<img id="listImage" src="./apple.png" alt="apple"/>);
    }
    ;
    return (<ListViewComponent id='list' dataSource={data} template={listtemplate}>
            </ListViewComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
