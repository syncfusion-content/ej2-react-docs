import * as React from "react";
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
function ReactApp() {
    //Define an array of JSON data
    let data = [
        { id: 's_01', text: 'Robert', avatar: '', pic: 'pic04' },
        { id: 's_02', text: 'Nancy', avatar: 'N', pic: '' },
        { id: 's_05', text: 'John', pic: 'pic01', avatar: '' },
        { id: 's_03', text: 'Andrew', avatar: 'A', pic: '' },
        { id: 's_06', text: 'Margaret', avatar: 'M', pic: 'pic02' },
        { id: 's_07', text: 'Steven', pic: 'pic03', avatar: '' },
        { id: 's_08', text: 'Michael', pic: 'pic02', avatar: '' }
    ];
    function template(data) {
        let letterAvatar = <span className='e-avatar e-avatar-small e-avatar-circle'>{data.avatar}</span>;
        let imageAvatar = <span className={`${data.pic} e-avatar e-avatar-small e-avatar-circle`}></span>;
        return (<div className='listWrapper'>
                {data.avatar !== "" ? (letterAvatar) : (imageAvatar)}
                <span className='text'>{data.text}</span>
            </div>);
    }
    return (<div>
        <div className="sample_container listview">
            {/* ListView element */}
            <ListViewComponent cssClass='letterAvatarList' dataSource={data} headerTitle='Contacts' showHeader={true} sortOrder="Ascending" template={template}></ListViewComponent>
        </div>
    </div>);
}
export default ReactApp;
ReactDOM.render(<ReactApp />, document.getElementById("element"));
