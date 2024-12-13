import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useRef, useState} from 'react';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page } from '@syncfusion/ej2-react-grids';

const ReactApp = () => {
  
  const tabObj = useRef(null);  
  const userNameObj = useRef(null);
  const passWordObj = useRef(null);
  const [headerText] = useState([{ text: "Login" }, { text: "Grid" }]);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginDisabled, setLoginDisabled] = useState(false);
  const [gridDisabled, setGridDisabled] = useState(true);

  const handleSubmit = () => {
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
    } else {
      setUserName('');
      setPassword('');
      setLoginDisabled(true);
      setGridDisabled(false);
    }
  };

  const loginContent = () => {
    return (
      <div className="login-form">
        <div className="wrap">
          <div id="heading">Sign in to view the Grid</div>
          <br />
          <div id="input-container">
            <TextBoxComponent placeholder="User Name" value={userName} floatLabelType="Auto" ref={userNameObj} />
            <br /><br />
            <TextBoxComponent placeholder="Password" value={password} floatLabelType="Auto" ref={passWordObj}/>
          </div>
        </div>
        <br />
        <div className="button-contain" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonComponent cssClass='e-primary' onClick={handleSubmit}>Submit</ButtonComponent>
        </div>
      </div>
    );
  };

  const gridContent = () => {
    const data = [
      { OrderID: 10248, CustomerID: 'ALFKI', OrderDate: '2024-12-01', Freight: 32.38 },
      { OrderID: 10249, CustomerID: 'ANATR', OrderDate: '2024-12-02', Freight: 11.61 },
      { OrderID: 10250, CustomerID: 'ANTON', OrderDate: '2024-12-03', Freight: 65.83 },
      { OrderID: 10251, CustomerID: 'AROUT', OrderDate: '2024-12-04', Freight: 41.34 }
    ];

    return (
      <GridComponent dataSource={data} allowPaging={true}>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText="Order ID" width="120" />
          <ColumnDirective field="CustomerID" headerText="Customer Name" width="130" />
          <ColumnDirective field="OrderDate" headerText="Order Date" width="120" format="yMd"/>
          <ColumnDirective field="Freight" headerText="Freight" width="120" format="C2"/>
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    );
  };


  return (
    <TabComponent ref={tabObj} loadOn='Dynamic'>
      <TabItemsDirective>
        <TabItemDirective header={headerText[0]} content={loginContent} disabled={loginDisabled}/>
        <TabItemDirective header={headerText[1]} content={gridContent} disabled={gridDisabled}/>
      </TabItemsDirective>
    </TabComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);
