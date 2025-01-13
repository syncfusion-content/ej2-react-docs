import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent, Inject, Virtualization } from '@syncfusion/ej2-react-lists';
import './index.css';
function App() {
  // define the array of Json
  let listData;
  listData = [
    { name: 'Nancy', icon: 'N', id: '0', },
    { name: 'Andrew', icon: 'A', id: '1' },
    { name: 'Janet', icon: 'J', id: '2' },
    { name: 'Margaret', imgUrl: 'https://ej2.syncfusion.com/react/demos/src/listview/images/margaret.png', id: '3' },
    { name: 'Steven', icon: 'S', id: '4' },
    { name: 'Laura', imgUrl: 'https://ej2.syncfusion.com/react/demos/src/listview/images/laura.png', id: '5' },
    { name: 'Robert', icon: 'R', id: '6' },
    { name: 'Michael', icon: 'M', id: '7' },
    { name: 'Albert', imgUrl: 'https://ej2.syncfusion.com/react/demos/src/listview/images/albert.png', id: '8' },
    { name: 'Nolan', icon: 'N', id: '9' }
  ];
  for (let i = 10; i <= 1010; i++) {
    let index = parseInt((Math.random() * 10).toString());
    listData.push({ name: listData[index].name, icon: listData[index].icon, imgUrl: listData[index].imgUrl, id: i.toString() });
  }
  function template(data) {
    return (
      <div className="e-list-wrapper e-list-avatar">
        <span className={`e-avatar e-avatar-small e-avatar-circle ${data.icon} ${data.imgUrl ? 'hideUI' : 'showUI'}`}>{data.icon}</span>
        <img className={`e-avatar e-avatar-circle ${data.imgUrl ? 'showUI' : 'hideUI'}`} src={data.imgUrl ? data.imgUrl : ' '} alt="" />
        <span className="e-list-content">{data.name}</span>
      </div>
    );
  } return (
    // specifies the tag to render the ListView component
    <ListViewComponent id='ui-list' dataSource={listData} enableVirtualization={true} template={template} cssClass='e-list-template' height={500} headerTitle="Contacts" showHeader={true}>
      <Inject services={[Virtualization]} />
    </ListViewComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
