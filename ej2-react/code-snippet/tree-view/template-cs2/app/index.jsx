import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import {TreeViewComponent} from '@syncfusion/ej2-react-navigations';

function App() {
  const [stateValue, setStateValue] = useState(false);
  let templateData = [
     { id: 1, name: "Favorites", hasChild: true},
     { id: 2,pid: 1, name: "Sales Reports", count: "4" },
     { id: 3,pid: 1, name: "Sent Items"},
     { id: 4,pid: 1, name: "Marketing Reports ", count: "6"},
     { id: 5, name: "My Folder", hasChild: true, "expanded": true },
     { id: 6,pid: 5, name: "Inbox",  "selected": true , count: "20"},
     { id: 7,pid: 5,  name: "Drafts", count: "5"},
     { id: 8,pid: 5,  name: "Deleted Items"},
     { id: 9,pid: 5, name: "Sent Items"},
     { id: 10,pid: 5, name: "Sales Reports" , count: "4"},
     { id: 11,pid: 5, name: "Marketing Reports", count: "6" },
     { id: 12,pid: 5, name: "Outbox"}
  ];
  let fields = { dataSource: templateData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
  function nodeTemplate(data) {
      return (<div>
        <div className="treeviewdiv">
          <div className="textcontent">
            <span className="treeName">{data.name}</span>
          </div>
          {data.count && (
            <div className="countcontainer">
              <span className="treeCount e-badge e-badge-primary">
                {data.count}
              </span>
            </div>
          )}
        </div>
      </div>);
  }
  function doClick(e) {
    setStateValue(!stateValue);
  }
  return (
    <div>
      // specifies the tag for render the TreeView component
      <TreeViewComponent fields={fields} nodeTemplate={nodeTemplate} statelessTemplates={['nodeTemplate']}/>
      <button onClick={doClick}>Click Me</button>
      <pre>State: {stateValue.toString()}</pre>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));