import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './index.css';
function App() {
    //Define an array of JSON data
    let data = [
        {
            text: "Jenifer",
            contact: "(206) 555-985774",
            id: "1",
            avatar: "",
            pic: "pic01"
        },
        { text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: "" },
        {
            text: "Isabella",
            contact: "(206) 555-8122",
            id: "4",
            avatar: "",
            pic: "pic02"
        },
        {
            text: "William ",
            contact: "(206) 555-9482",
            id: "5",
            avatar: "W",
            pic: ""
        },
        {
            text: "Jacob",
            contact: "(71) 555-4848",
            id: "6",
            avatar: "",
            pic: "pic04"
        },
        { text: "Matthew", contact: "(71) 555-7773", id: "7", avatar: "M", pic: "" },
        {
            text: "Oliver",
            contact: "(71) 555-5598",
            id: "8",
            avatar: "",
            pic: "pic03"
        },
        {
            text: "Charlotte",
            contact: "(206) 555-1189",
            id: "9",
            avatar: "C",
            pic: ""
        }
    ];
    let fields = { text: "Name" };
    function listTemplate(data) {
        let letterAvatar = <span className='e-avatar e-avatar-circle'>{data.avatar}</span>;
        let imageAvatar = <span className={`${data.pic} e-avatar e-avatar-circle`}></span>;
        return (<div className='e-list-wrapper e-list-multi-line e-list-avatar'>
            {data.avatar !== "" ? (letterAvatar) : (imageAvatar)}
            <span className="e-list-item-header">{data.text}</span>
            <span className="e-list-content">{data.contact}</span>
        </div>);
    }
    return (<div>
        <ListViewComponent id='list' dataSource={data} headerTitle='Contacts' showHeader={true} sortOrder="Ascending" width='350px' template={listTemplate} fields={fields} cssClass='e-list-template'></ListViewComponent>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
