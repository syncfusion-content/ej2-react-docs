{% raw %}



import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {TreeViewComponent, NodeSelectEventArgs } from '@syncfusion/ej2-react-navigations';

function App() {
  
  // Self-referential list data source for TreeView component
  let localData: { [key: string]: Object }[]= [
    { id: 1, name: 'Parent 1', hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'Child 1' },
    { id: 3, pid: 1, name: 'Child 2' },
    { id: 4, pid: 1, name: 'Child 3' },
    { id: 7, name: 'Parent 2', hasChild: true, expanded: true },
    { id: 8, pid: 7, name: 'Child 1' },
    { id: 9, pid: 7, name: 'Child 2' },
    { id: 10, pid: 7, name: 'Child 3' },
  ];
  let field: Object = { dataSource: localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
  let allowMultiSelection: boolean = true;
  let loadOnDemand: boolean = false;
  let parent: any; let child: any;
  let count: boolean = false;
  let childCount: boolean = false;
  let treeObj: TreeViewComponent;
  // Triggers when you select any node
  function onNodeSelecting(args: NodeSelectEventArgs): void {
    let id: any = args.nodeData.parentID;
    if (!count) {
       parent = id;
       count = true;
    }
    if (!childCount){
       child = args.nodeData.id;
       childCount = true
    }
    if (id != null && id === parent) {
      let element: HTMLElement = treeObj.element.querySelector('[data-uid="' + id + '"]');
      let liElements: any = element.querySelectorAll('ul li');
      for (let i: number = 0; i < liElements.length; i++) {
        let nodeData: any = treeObj.getNode(liElements[i]);
        if (nodeData.selected && args.action === "select" && child !== args.nodeData.id) {
          args.cancel = true;
        }
        // For unselect the selectedNodes
        else  if (args.action === "un-select" && child === args.nodeData.id) {
          childCount = false;
          child = null;
          parent = null;
          count = false;
        }
      }
    } else if (id !== parent && id !== null) {
        if(args.action == "select"){
          args.cancel = true
        }
    } else if (id === null){
       childCount = false;
          child = null;
          parent = null;
          count = false
    }
  }
    return (
      <div className = 'control-pane'>
          <div className='control-section'>
            <div className='control_wrapper'>
              {/* Render TreeView */}
              <TreeViewComponent fields={field} loadOnDemand={loadOnDemand} nodeSelecting={onNodeSelecting.bind(this)} allowMultiSelection={allowMultiSelection}  ref={(treeview) => { treeObj = treeview as TreeViewComponent; }}/>
            </div>
          </div>
        </div>
      )
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



{% endraw %}