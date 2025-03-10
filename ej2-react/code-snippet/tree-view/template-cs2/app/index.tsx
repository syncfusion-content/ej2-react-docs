import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';

function App() {
  const [selectedItem, setSelectedItem] = React.useState<any>(undefined);
  let templateData: { [key: string]: Object }[] = [
    { id: 1, name: "Favorites", hasChild: true },
    { id: 2, pid: 1, name: "Sales Reports", count: "4" },
    { id: 3, pid: 1, name: "Sent Items" },
    { id: 4, pid: 1, name: "Marketing Reports ", count: "6" },
    { id: 5, name: "My Folder", hasChild: true, "expanded": true },
    { id: 6, pid: 5, name: "Inbox", "selected": true, count: "20" },
    { id: 7, pid: 5, name: "Drafts", count: "5" },
    { id: 8, pid: 5, name: "Deleted Items" },
    { id: 9, pid: 5, name: "Sent Items" },
    { id: 10, pid: 5, name: "Sales Reports", count: "4" },
    { id: 11, pid: 5, name: "Marketing Reports", count: "6" },
    { id: 12, pid: 5, name: "Outbox" }
  ];
  let fields: Object = { dataSource: templateData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
  let cssClass:string = "custom";
  function nodeTemplate(data: any): JSX.Element {
    return (
      <div>
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
      </div>
    )
  }
  return (
    <div>
      <TreeViewComponent 
        cssClass={cssClass} 
        fields={fields} 
        nodeTemplate={nodeTemplate} 
        nodeSelected={(args: any) => setSelectedItem(args.nodeData)} 
        statelessTemplates={['nodeTemplate']} 
      />
      <pre>Node name: {selectedItem?.text}</pre>
    </div>

  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));