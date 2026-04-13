{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
function App() {
    // Data source for TreeView component
    let treeData = [
        {
            "nodeId": "01", "nodeText": "Music", "icon": "folder", "expanded": true, "nodeChild": [
                { "nodeId": "01-01", "nodeText": "Gouttes.mp3", "icon": "audio" }
            ]
        },
        {
            "nodeId": "02", "nodeText": "Videos", "icon": "folder", "expanded": true, "nodeChild": [
                { "nodeId": "02-01", "nodeText": "Naturals.mp4", "icon": "video" },
                { "nodeId": "02-02", "nodeText": "Wild.mpeg", "icon": "video" }
            ]
        }
    ];
    let field = { dataSource: treeData, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', expanded: 'expanded' };
    let showCheckBox = true;
    let autoCheck = false;
    let treeObj;
    function onNodeCheck(args) {
        let nodeId = args.data[0].id.toString();
        // To get the iconCss
        let iconClass = treeObj.getTreeData(nodeId)[0].icon;
        alert('Icon class is ' + iconClass);
    }
    return (<div className='control-pane'>
        <div className='control-section'>
          <div className='control_wrapper'>
            {/* Render TreeView */}
            <TreeViewComponent fields={field} nodeChecking={onNodeCheck.bind(this)} showCheckBox={showCheckBox} autoCheck={autoCheck} ref={(treeview) => { treeObj = treeview; }}/>
          </div>
        </div>
      </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}