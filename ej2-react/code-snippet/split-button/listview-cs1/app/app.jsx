import { enableRipple } from '@syncfusion/ej2-base';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render SplitButton.
function App() {
    // Datasource for listview.
    let listItems = [
        {
            'category': 'Basic',
            'text': 'Cut'
        },
        {
            'category': 'Basic',
            'text': 'Copy',
        },
        {
            'category': 'Basic',
            'text': 'Paste'
        },
        {
            'category': 'Advanced',
            'text': 'Paste as Formula'
        },
        {
            'category': 'Advanced',
            'text': 'Paste as Hyperlink'
        },
    ];
    let field = { groupBy: 'category' };
    return (<div>
       <ListViewComponent id="listview" dataSource={listItems} fields={field} sortOrder="Descending"/>
       <SplitButtonComponent target="#listview">ClipBoard</SplitButtonComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
