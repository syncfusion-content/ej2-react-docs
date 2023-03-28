{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MessageComponent } from '@syncfusion/ej2-react-notifications';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
function App() {
    let msgTemplate;
    let showBtn;
    function showClick() {
        msgTemplate.visible = true;
        showBtn.element.classList.add('msg-hidden');
    }
    function dismissClick() {
        msgTemplate.visible = false;
    }
    function closed() {
        showBtn.element.classList.remove('msg-hidden');
    }
    function contentTemplate() {
        return (<div><h1>Merged pull request</h1>
                <p>Pull request #41 merged after a successful build</p>
                <ButtonComponent id='commitBtn' cssClass='e-link' content='View commit'></ButtonComponent>
                <ButtonComponent id='closeBtn' cssClass='e-link' content='Dismiss' onClick={dismissClick.bind(this)}></ButtonComponent>
            </div>);
    }
    return (<div className="msg-template-section">
        <div className="content-section">
            <ButtonComponent id='showBtn' ref={(scope) => { showBtn = scope; }} content='Show pull request' cssClass="e-outline e-primary e-success msg-hidden" onClick={showClick.bind(this)}></ButtonComponent>
            <MessageComponent id="msg_template" ref={(scope) => { msgTemplate = scope; }} content={contentTemplate.bind(this)} severity="Success" closed={closed.bind(this)}></MessageComponent>
        </div>
    </div>);
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}