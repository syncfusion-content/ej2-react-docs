{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    let treeObj;
    // Hierarchical data source for TreeView component
    let localData = [
        { id: 1, name: 'Parent 1', hasChild: true, expanded: true },
        { id: 2, pid: 1, name: 'Child 1' },
        { id: 3, pid: 1, name: 'Child 2' },
        { id: 4, pid: 1, name: 'Child 3' },
        { id: 7, name: 'Parent 2', hasChild: true },
        { id: 8, pid: 7, name: 'Child 1' },
        { id: 9, pid: 7, name: 'Child 2' },
        { id: 10, pid: 7, name: 'Child 3' },
    ];
    let fields = { dataSource: localData, id: 'id', text: 'name', child: 'subChild' };
    const btnClick1 = () => {
        treeObj.moveNodes(['2'], '3', 1); // Move the node with id 2 to the target node with id 3 to the index of 1.
      };
    return (<div className='control-pane'>
        <div className='control-section'>
        <div className='control_wrapper'>
            {/* Render TreeView */}
            <TreeViewComponent fields={fields} ref={(tree) => { treeObj = tree; }} />
            <ButtonComponent id="addtree1" cssClass="e-primary inline-element right" onClick={btnClick1.bind(this)}> Move node </ButtonComponent>
        </div>
        <div id="display"></div>
        </div>
      </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}