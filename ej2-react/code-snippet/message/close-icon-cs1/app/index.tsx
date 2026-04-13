{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { MessageComponent } from '@syncfusion/ej2-react-notifications';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { useState } from 'react';

function App() {
    const [defaultVisible, setDefaultVisible] = useState<boolean>(true);
    const [defaultCssClass, setDefaultCssClass] = useState<string>('e-outline e-primary msg-hidden');
    const [infoVisible, setInfoVisible] = useState<boolean>(true);
    const [infoCssClass, setinfoCssClass] = useState<string>('e-outline e-primary e-info msg-hidden');
    const [successVisible, setSuccessVisible] = useState<boolean>(true);
    const [successCssClass, setSuccessCssClass] = useState<string>('e-outline e-primary e-success msg-hidden');
    const [warningVisible, setWarningVisible] = useState<boolean>(true);
    const [warningCssClass, setWarningCssClass] = useState<string>('e-outline e-primary e-warning msg-hidden');
    const [errorVisible, setErrorVisible] = useState<boolean>(true);
    const [errorCssClass, setErrorCssClass] = useState<string>('e-outline e-primary e-error msg-hidden');
    const [showIcon, setShowIcon] = useState<boolean>(true);
    const [showCloseIcon, setShowCloseIcon] = useState<boolean>(true);

    const defaultClick = () => {
        setDefaultVisible(true);
        setDefaultCssClass('e-outline e-primary msg-hidden');
    };
    const defaultClosed = () => {
        setDefaultVisible(false);
        setDefaultCssClass('e-outline e-primary');
    };
    const infoClick = () => {
        setInfoVisible(true);
        setinfoCssClass('e-outline e-primary e-info msg-hidden');
    };
    const infoClosed = () => {
        setInfoVisible(false);
        setinfoCssClass('e-outline e-primary e-info');
    };
    const successClick = () => {
        setSuccessVisible(true);
        setSuccessCssClass('e-outline e-primary e-success msg-hidden');
    };
    const successClosed = () => {
        setSuccessVisible(false);
        setSuccessCssClass('e-outline e-primary e-success');
    };
    const warningClick = () => {
        setWarningVisible(true);
        setWarningCssClass('e-outline e-primary e-warning msg-hidden');
    };
    const warningClosed = () => {
        setWarningVisible(false);
        setWarningCssClass('e-outline e-primary e-warning');
    };
    const errorClick = () => {
        setErrorVisible(true);
        setErrorCssClass('e-outline e-primary e-error msg-hidden');
    };
    const errorClosed = () => {
        setErrorVisible(false);
        setErrorCssClass('e-outline e-primary e-warning');
    };

  return (
      <div className="msg-icon-section">
        <div className="content-section">
            <ButtonComponent id="btn1" content="Show Default Message" cssClass={defaultCssClass} onClick={defaultClick.bind(this)} />
            <MessageComponent id="msg_default_icon" visible={defaultVisible} showCloseIcon={showCloseIcon} closed={defaultClosed.bind(this)} showIcon={showIcon}>Editing is restricted</MessageComponent>
            <ButtonComponent id="btn2" content="Show Info Message" cssClass={infoCssClass} onClick={infoClick.bind(this)} />
            <MessageComponent id="msg_info_icon" severity="Info" showCloseIcon={showCloseIcon} visible={infoVisible} closed={infoClosed.bind(this)} showIcon={showIcon}>Please read the comments carefully</MessageComponent>
            <ButtonComponent id="btn3" content="Show Success Message" cssClass={successCssClass} onClick={successClick.bind(this)} />
            <MessageComponent id="msg_success_icon" severity="Success" showCloseIcon={showCloseIcon} closed={successClosed.bind(this)} visible={successVisible} showIcon={showIcon}>Your message has been sent successfully</MessageComponent>
            <ButtonComponent id="btn4" content="Show Warning Message" cssClass={warningCssClass} onClick={warningClick.bind(this)} />
            <MessageComponent id="msg_warning_icon" severity="Warning" showCloseIcon={showCloseIcon} closed={warningClosed.bind(this)} visible={warningVisible} showIcon={showIcon}>There was a problem with your network connection</MessageComponent>
            <ButtonComponent id="btn5" content="Show Error Message" cssClass={errorCssClass} onClick={errorClick.bind(this)} />
            <MessageComponent id="msg_error_icon" severity="Error" showCloseIcon={showCloseIcon} closed={errorClosed.bind(this)} visible={errorVisible} showIcon={showIcon}>A problem occurred while submitting your data</MessageComponent>
        </div>
    </div>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);


{% endraw %}