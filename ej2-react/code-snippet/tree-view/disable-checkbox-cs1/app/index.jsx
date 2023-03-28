import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
function App() {
    // Data source for TreeView component
    let Countries = [
        { id: 1, name: 'India', hasChild: true, expanded: true },
        { id: 2, pid: 1, name: 'Assam' },
        { id: 3, pid: 1, name: 'Bihar' },
        { id: 4, pid: 1, name: 'Tamil Nadu' },
        { id: 6, pid: 1, name: 'Punjab' },
        { id: 7, name: 'Brazil', hasChild: true },
        { id: 8, pid: 7, name: 'Paraná' },
        { id: 9, pid: 7, name: 'Ceará' },
        { id: 10, pid: 7, name: 'Acre' },
        { id: 11, name: 'France', hasChild: true },
        { id: 12, pid: 11, name: 'Pays de la Loire' },
        { id: 13, pid: 11, name: 'Aquitaine' },
        { id: 14, pid: 11, name: 'Brittany' },
        { id: 15, pid: 11, name: 'Lorraine' },
        { id: 16, name: 'Australia', hasChild: true },
        { id: 17, pid: 16, name: 'New South Wales' },
        { id: 18, pid: 16, name: 'Victoria' },
        { id: 19, pid: 16, name: 'South Australia' },
        { id: 20, pid: 16, name: 'Western Australia' },
        { id: 21, name: 'China', hasChild: true },
        { id: 22, pid: 21, name: 'Guangzhou' },
        { id: 23, pid: 21, name: 'Shanghai' },
        { id: 24, pid: 21, name: 'Beijing' },
        { id: 25, pid: 21, name: 'Shantou' }
    ];
    let field = { dataSource: Countries, id: 'id', text: 'name', parentID: 'pid', hasChildren: 'hasChild' };
    let showCheckBox = true;
    function drawNode(args) {
        let ele = args.node.querySelector('.e-checkbox-wrapper');
        ele.classList.add('e-checkbox-disabled');
    }
    return (<div className='control-pane'>
          <div className='control-section'>
            <div className='control_wrapper'>
              {/* Render TreeView */}
              <TreeViewComponent fields={field} showCheckBox={showCheckBox} drawNode={drawNode.bind(this)}/>
            </div>
          </div>
        </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
