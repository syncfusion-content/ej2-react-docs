{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    let treeObj;
    // local data source for TreeView component
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
    let fields = { dataSource: localData, id: 'id', text: 'name', parentID: 'pid', hasChildren: 'hasChild' };
    let allowEditing = true;
    const btnClick1 = () => {
        treeObj.updateNode('4', 'Node updated'); // Update node having id 4 in TreeView
    };
    return (<div className='control-pane'>
        <div className='control-section'>
            <div id='treeparent'>
                {/* Render TreeView */}
                <TreeViewComponent fields={fields} allowEditing={allowEditing} ref={(tree) => { treeObj = tree }} /></div>
            <div id="btn">
                <ButtonComponent id="addtree1" cssClass="e-primary inline-element right" onClick={btnClick1.bind(this)}> Update node </ButtonComponent>
            </div>
        </div>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}