import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
function App() {
    //Define an array of JSON data
    let fruitsData = [
        { text: 'Date', id: '1', imgUrl: './dates.jpg' },
        { text: 'Fig', id: '2', imgUrl: './fig.jpg' },
        { text: 'Apple', id: '3', imgUrl: './apple.png' },
        { text: 'Apricot', id: '4', imgUrl: './apricot.jpg' },
        { text: 'Grape', id: '5', imgUrl: './grape.jpg' },
        { text: 'Strawberry', id: '6', imgUrl: './strawberry.jpg' },
        { text: 'Pineapple', id: '7', imgUrl: './pineapple.jpg' },
        { text: 'Melon', id: '8', imgUrl: './melon.jpg' },
        { text: 'Lemon', id: '9', imgUrl: './lemon.jpg' },
        { text: 'Cherry', id: '10', imgUrl: './cherry.jpg' },
    ];
    function headerTemplate(data) {
        return (<div className="headerContainer">
                <span className="fruitHeader">Fruits</span>
                <ButtonComponent id="search" cssClass="e-small e-round" isPrimary={true} iconCss="e-icons e-search-icon"/>
                <ButtonComponent id="add" cssClass="e-small e-round" isPrimary={true} iconCss="e-icons e-add-icon"/>
                <ButtonComponent id="sort" cssClass="e-small e-round" isPrimary={true} iconCss="e-icons e-sort-icon"/>
            </div>);
    }
    return (<ListViewComponent id="list" dataSource={fruitsData} showHeader={true} headerTemplate={headerTemplate}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
