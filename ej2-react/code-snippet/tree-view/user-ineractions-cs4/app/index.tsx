{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {TreeViewComponent} from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
function App() {

let treeObj: TreeViewComponent;

// Hierarchical data source for TreeView component
let localData: { [key: string]: Object }[] = [
    { id: 1, name: 'Parent 1', value: 10, hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'Child 1', value: 10 },
    { id: 3, pid: 1, name: 'Child 2', value: 10 },
    { id: 4, pid: 1, name: 'Child 3', value: 10 },
    { id: 7, name: 'Parent 2',value: 10, hasChild: true, expanded: true },
    { id: 8, pid: 7, name: 'Child 1', value: 10 },
    { id: 9, pid: 7, name: 'Child 2', value: 10 },
    { id: 10, pid: 7, name: 'Child 3',value:10 },
];
let fields: object = { dataSource: localData, id: 'id', text: 'name', child: 'subChild' };

function nodeTemplate(data:any): JSX.Element {
    return (
      <div>
         <span className="treeName">{ data.name } : {data.value}</span>
      </div>
        )
    }
    function btnClick1(): void {
        var nodeData = treeObj.getTreeData('4');
        //Update the value from backend.
        nodeData[0].value = 400;
        nodeData[0].name = 'Node refreshed';
        // Refresh the updated data.
        treeObj.refreshNode('4', nodeData);
    }
    return (
      <div className = 'control-pane'>
        <div className='control-section'>
        <div className='control_wrapper'>
            {/* Render TreeView */}
            <TreeViewComponent fields={fields} ref={(tree) => { treeObj = tree}} nodeTemplate={nodeTemplate}/>
            <ButtonComponent id="addtree1" cssClass="e-primary inline-element right" onClick={btnClick1.bind(this)}> Refresh node </ButtonComponent>

        </div>
        <div id="display"></div>
        </div>
      </div>
    )
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}