{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    let treeObj;
    // Local data source for TreeView component
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
    // Button click event handler to add a parent node
    const btnClick1 = () => {
        treeObj.addNodes([
          { id: 12, name: 'New Parent' },
          { id: 13, pid: 12, name: 'New Child1' },
        ]);
      };
    // Button click event handler to add a child node
      const btnClick2 = () => {
        treeObj.addNodes([{ id: 11, name: 'New Child2', pid: 1 }], '1', null);
      };

    return (<div className='control-pane'>
        <div className='control-section'>
        <div className='control_wrapper'>
            {/* Render TreeView */}
            <TreeViewComponent fields={fields} ref={(tree) => { treeObj = tree; }}/>
            <ButtonComponent id="addtree1" cssClass="e-primary inline-element right" onClick={btnClick1.bind(this)}> Add parent node </ButtonComponent>
            <ButtonComponent id="addtree2" cssClass="e-primary inline-element right" onClick={btnClick2.bind(this)}> Add child node </ButtonComponent>
        </div>
        <div id="display"></div>
        </div>
      </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}