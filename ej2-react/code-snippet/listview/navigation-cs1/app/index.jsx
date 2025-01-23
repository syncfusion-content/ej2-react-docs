import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
function App() {
    //Define an array of JSON data
    let dataSource = [
        { name: 'Google', url: 'https://www.google.com' },
        { name: 'Bing', url: 'https://www.bing.com' },
        { name: 'Yahoo', url: 'https://www.yahoo.com' },
        { name: 'Ask.com', url: 'https://www.ask.com' },
        { name: 'AOL.com', url: 'https://www.aol.com' }
    ];
    function anchor_template(data) {
        return (<a target='_blank' href={data.url}>{data.name}</a>);
    }
    ;
    return (<ListViewComponent id='list' dataSource={dataSource} headerTitle='Search engines' showHeader={true} template={anchor_template}>
    </ListViewComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
