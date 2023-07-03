{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MessageComponent } from '@syncfusion/ej2-react-notifications';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { useState } from 'react';

function App() {
    const [visible, setVisible] = useState(true);
    const [cssClass, setCssClass] = useState('e-outline e-primary e-success msg-hidden');
    const showClick = () => {
        setVisible(true);
        setCssClass('e-outline e-primary e-success msg-hidden');
    };
    const dismissClick = () => {
        setVisible(false);
    };
    const closed = () => {
        setCssClass('e-outline e-primary e-success');
    };
    const contentTemplate = () => {
        return (
            <div>
                <h1>Merged pull request</h1>
                <p>Pull request #41 merged after a successful build</p>
                <ButtonComponent id="commitBtn" cssClass="e-link" content="View commit" />
                <ButtonComponent id="closeBtn" cssClass="e-link" content="Dismiss" onClick={dismissClick.bind(this)} />
            </div>
        );
    };

    return (<div className="msg-template-section">
        <div className="content-section">
        <ButtonComponent id="showBtn" content="Show pull request" cssClass={cssClass} onClick={showClick.bind(this)} />
        <MessageComponent id="msg_template" visible={visible} content={contentTemplate.bind(this)} severity="Success" closed={closed.bind(this)} />
        </div>
    </div>);
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}