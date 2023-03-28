{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
function App() {
    let listObj = null;
    let textboxEle;
    //Define an array of JSON data
    let data = [
        {
            text: "Jenifer",
            contact: "Hi",
            id: "1",
            avatar: "",
            pic: "pic01",
            chat: "sender"
        },
        { text: "Amenda", contact: "Hello", id: "2", avatar: "A", pic: "", chat: "receiver" },
        {
            text: "Jenifer",
            contact: "What Knid of application going to launch",
            id: "4",
            avatar: "",
            pic: "pic01",
            chat: "sender"
        },
        {
            text: "Amenda ",
            contact: "A knid of Emergency broadcast App",
            id: "5",
            avatar: "A",
            pic: "",
            chat: "receiver"
        },
        {
            text: "Jacob",
            contact: "Can you please elaborate",
            id: "6",
            avatar: "",
            pic: "pic04",
            chat: "sender"
        }
    ];
    function listTemplate(data) {
        const sendertemplate = (<div className="settings">
        <div id="content">
          <div className="name">{data.text}</div>
          <div id="info">{data.contact}</div>
        </div>
        {data.avatar !== "" ? (<div id="image">
            <span className="e-avatar img1 e-avatar-circle">{data.avatar}</span>
          </div>) : (<div id="image">
            <span className={`${data.pic} img1 e-avatar e-avatar-circle`}/>
          </div>)}
      </div>);
        const receivertemplate = (<div className="settings">
        {data.avatar !== "" ? (<div id="image2">
            <span className="e-avatar img2 e-avatar-circle">{data.avatar}</span>
          </div>) : (<div id="image2">
            <span className={`${data.pic} img2 e-avatar e-avatar-circle`}/>
          </div>)}
        <div id="content1">
          <div className="name1">{data.text}</div>
          <div id="info1">{data.contact}</div>
        </div>
      </div>);
        return <div>{data.chat !== "receiver" ? sendertemplate : receivertemplate}</div>;
    }
    function btnClick() {
        const value = textboxEle.value;
        listObj.addItem([
            { text: "Amenda", contact: value, id: "2", avatar: "A", pic: "", chat: "receiver" }
        ]);
        textboxEle.value = "";
    }
    return (<div>
      {/* ListView element */}
      <ListViewComponent id="List" dataSource={data} headerTitle="Chat" showHeader={true} template={listTemplate} ref={scope => {
            listObj = scope;
        }}/>

      <input id="inputname" className="e-input" ref={textbox => {
            textboxEle = textbox;
        }} type="text" placeholder="Type your message"/>

      <ButtonComponent id="btn" onClick={btnClick.bind(this)}>
        Send
      </ButtonComponent>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}