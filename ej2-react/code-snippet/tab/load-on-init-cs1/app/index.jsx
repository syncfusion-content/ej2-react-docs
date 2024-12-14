import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useState } from 'react';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const ReactApp = () => {

  const userNameObj = useRef<TextBoxComponent>(null);
  const passWordObj = useRef<TextBoxComponent>(null);
  const [headerText] = useState([{ text: "Login" }, { text: "Syncfusion EJ2" }, { text: 'FeedBack' }]);;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleSignIn = () => {
    const userName = userNameObj.current.value;
    const password = passWordObj.current.value;
    if (!userName && !password) {
      window.alert('Enter both username and password');
    } else if (!userName) {
      window.alert('Enter the username');
    } else if (!password) {
      window.alert('Enter the password');
    } else if (userName.length < 4) {
      window.alert('Username must be at least 4 characters long');
    }
    setUserName(userName);
    setSelectedTabIndex(1);
  };

  const handleSkip = () => {
    setSelectedTabIndex(1);
  }

  const handleSubmit = () => {
    setUserName('');
    setPassword('');
    setSelectedTabIndex(0);
  }

  const loginContent = () => {
    return (
      <div className="login-form">
        <div className="wrap">
          <div id="input-container">
            <TextBoxComponent placeholder="User Name" value={userName} floatLabelType="Auto" ref={userNameObj} />
            <br /><br />
            <TextBoxComponent placeholder="Password" value={password} floatLabelType="Auto"/>
          </div>
        </div>
        <br />
        <div className="button-contain"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <ButtonComponent cssClass="e-primary" onClick={handleSignIn}> SignIn </ButtonComponent>
          <ButtonComponent cssClass="e-primary" onClick={handleSkip}> Skip </ButtonComponent>
        </div>
      </div>
    );
  };

  const overViewContent = () => {
    return (
      <div className="over-view">
        <p>
          You can check out our Syncfusion Ej2 demo{' '}
          <a href="https://ej2.syncfusion.com/demos/" target="_blank" rel="noopener noreferrer">
            here
          </a>.
        </p>
        <br />
        <p>
          The user guide is available{' '}
          <a href="https://ej2.syncfusion.com/documentation/introduction" target="_blank" rel="noopener noreferrer">
            here
          </a>.
        </p>
      </div>
    );
  }

  const feedBckContent = () => {
    return (
      <div className="feed-back">
        <div className="wrap">
          <div id="input-container">
            <TextBoxComponent placeholder="Name" value={userName} floatLabelType="Auto" />
            <br /><br />
            <TextBoxComponent placeholder="Email" floatLabelType="Auto" />
            <br /><br />
            <TextBoxComponent placeholder="Comment" floatLabelType="Auto" />
          </div>
        </div>
        <br />
        <div
          className="button-contain"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
        >
          <ButtonComponent cssClass="e-primary" onClick={handleSubmit}> submit </ButtonComponent>
        </div>
      </div>
    );
  };


  return (
    <TabComponent loadOn='Init' selectedItem={selectedTabIndex}>
      <TabItemsDirective>
        <TabItemDirective header={headerText[0]} content={loginContent} />
        <TabItemDirective header={headerText[1]} content={overViewContent} />
        <TabItemDirective header={headerText[2]} content={feedBckContent} />
      </TabItemsDirective>
    </TabComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);
