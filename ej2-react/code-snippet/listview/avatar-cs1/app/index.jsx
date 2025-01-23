import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './index.css';

function App() {
    //Define an array of JSON data
    let data = [
        { id: 's_01', text: 'Robert', avatar: '', pic: 'pic04' },
        { id: 's_02', text: 'Nancy', avatar: 'N', pic: '' },
        { id: 's_05', text: 'Jenifer', pic: 'pic01', avatar: '' },
        { id: 's_03', text: 'Andrew', avatar: 'A', pic: '' },
        { id: 's_06', text: 'Margaret', pic: 'pic02', avatar: '' },
        { id: 's_07', text: 'Steven', pic: 'pic03', avatar: '' },
        { id: 's_08', text: 'Michael', avatar: 'M', pic: '' }
    ];
    let fields = { text: "Name" };
    function listTemplate(data) {
        let letterAvatar = <span className='e-avatar e-avatar-circle'>{data.avatar}</span>;
        let imageAvatar = <span className={`${data.pic} e-avatar e-avatar-circle`}></span>;
        return (<div className='e-list-wrapper e-list-avatar'>
            {data.avatar !== "" ? (letterAvatar) : (imageAvatar)}
            <span className="e-list-content">{data.text}</span>
        </div>);
    }
    return (<div>
        {/* ListView element */}
        <ListViewComponent id='list' dataSource={data} headerTitle='Contacts' showHeader={true} sortOrder="Ascending" width='350px' template={listTemplate} fields={fields} cssClass='e-list-template'></ListViewComponent>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
