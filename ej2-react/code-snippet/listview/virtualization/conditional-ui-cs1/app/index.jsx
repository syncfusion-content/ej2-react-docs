import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent, Inject, Virtualization } from '@syncfusion/ej2-react-lists';
function App() {
    // define the array of Json
    let listData;
    listData = [
        { text: "Nancy", id: "0" },
        { text: "Andrew", id: "1" },
        { text: "Janet", id: "2" },
        { text: "Margaret", id: "3" },
        { text: "Steven", id: "4" },
        { text: "Laura", id: "5" },
        { text: "Robert", id: "6" },
        { text: "Michael", id: "7" },
        { text: "Albert", id: "8" },
        { text: "Nolan", id: "9" }
    ];
    for (let i = 10; i <= 1010; i++) {
        let index = parseInt((Math.random() * 10).toString());
        listData.push({ text: listData[index].text, id: i.toString() });
    }
    let template = "<div id=\"list-container\" class=\"${ $id % 2 === 0 ? 'even-list' : 'odd-list' }\" > ${text} </div>";
    return (
    // specifies the tag to render the ListView component
    <ListViewComponent id="ui-list" dataSource={listData} enableVirtualization={true} template={template} height={500}>
      <Inject services={[Virtualization]}/>
    </ListViewComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
