

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

function App() {

    //Define an array of JSON data
    let data: { [key: string]: Object }[] = [
        { Name: 'Nancy', contact: '(206) 555-985774', id: '1', image: 'https://ej2.syncfusion.com/demos/src/grid/images/1.png', category: 'Experience' },
        { Name: 'Janet', contact: '(206) 555-3412', id: '2', image: 'https://ej2.syncfusion.com/demos/src/grid/images/3.png', category: 'Fresher' },
        { Name: 'Margaret', contact: '(206) 555-8122', id: '4', image: 'https://ej2.syncfusion.com/demos/src/grid/images/4.png', category: 'Experience' },
        { Name: 'Andrew ', contact: '(206) 555-9482', id: '5', image: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', category: 'Experience' },
        { Name: 'Steven', contact: '(71) 555-4848', id: '6', image: 'https://ej2.syncfusion.com/demos/src/grid/images/5.png', category: 'Fresher' },
        { Name: 'Michael', contact: '(71) 555-7773', id: '7', image: 'https://ej2.syncfusion.com/demos/src/grid/images/6.png', category: 'Experience' },
        { Name: 'Robert', contact: '(71) 555-5598', id: '8', image: 'https://ej2.syncfusion.com/demos/src/grid/images/7.png', category: 'Fresher' },
        { Name: 'Laura', contact: '(206) 555-1189', id: '9', image: 'https://ej2.syncfusion.com/demos/src/grid/images/8.png', category: 'Experience' },
    ];

    let fields: object = { text: 'Name', groupBy: 'category' };
    //Set customized list template
    function listTemplate(data: any): JSX.Element {
        return (
            <div className="e-list-wrapper e-list-multi-line e-list-avatar">
                <img className="e-avatar e-avatar-circle" src={data.image} />
                <span className="e-list-item-header">{data.Name}</span>
                <span className="e-list-content">{data.contact}</span>
            </div>
        );
    }
    //Set customized group-header template
    function groupTemplate(data: any): JSX.Element {
        return (
            <div><span className='category'>{data.items[0].category}</span><span className="count"> {data.items.length} Item(s)</span></div>
        );
    }
    return (
        <div>
            <ListViewComponent id='list' dataSource={data} fields={fields} template={listTemplate as any} groupTemplate={groupTemplate as any} cssClass='e-list-template'></ListViewComponent>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


