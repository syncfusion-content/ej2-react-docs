{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { TreeViewComponent, ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
function App() {
    let menuObj;
    let treeObj;
    let hierarchicalData = [
        { id: '01', name: 'Local Disk (C:)', expanded: true, hasAttribute: { class: 'remove rename' },
            subChild: [
                {
                    id: '01-01', name: 'Program Files',
                    subChild: [
                        { id: '01-01-01', name: 'Windows NT' },
                        { id: '01-01-02', name: 'Windows Mail' },
                        { id: '01-01-03', name: 'Windows Photo Viewer' },
                    ]
                },
                {
                    id: '01-02', name: 'Users', expanded: true,
                    subChild: [
                        { id: '01-02-01', name: 'Smith' },
                        { id: '01-02-02', name: 'Public' },
                        { id: '01-02-03', name: 'Admin' },
                    ]
                },
                {
                    id: '01-03', name: 'Windows',
                    subChild: [
                        { id: '01-03-01', name: 'Boot' },
                        { id: '01-03-02', name: 'FileManager' },
                        { id: '01-03-03', name: 'System32' },
                    ]
                },
            ]
        },
        {
            id: '02', name: 'Local Disk (D:)', hasAttribute: { class: 'rename' },
            subChild: [
                {
                    id: '02-01', name: 'Personals',
                    subChild: [
                        { id: '02-01-01', name: 'My photo.png' },
                        { id: '02-01-02', name: 'Rental document.docx' },
                        { id: '02-01-03', name: 'Pay slip.pdf' },
                    ]
                },
                {
                    id: '02-02', name: 'Projects',
                    subChild: [
                        { id: '02-02-01', name: 'ASP Application' },
                        { id: '02-02-02', name: 'TypeScript Application' },
                        { id: '02-02-03', name: 'React Application' },
                    ]
                },
                {
                    id: '02-03', name: 'Office',
                    subChild: [
                        { id: '02-03-01', name: 'Work details.docx' },
                        { id: '02-03-02', name: 'Weekly report.docx' },
                        { id: '02-03-03', name: 'Wish list.csv' },
                    ]
                },
            ]
        },
        {
            id: '03', name: 'Local Disk (E:)', icon: 'folder', hasAttribute: { class: 'remove' },
            subChild: [
                {
                    id: '03-01', name: 'Pictures',
                    subChild: [
                        { id: '03-01-01', name: 'Wind.jpg' },
                        { id: '03-01-02', name: 'Stone.jpg' },
                        { id: '03-01-03', name: 'Home.jpg' },
                    ]
                },
                {
                    id: '03-02', name: 'Documents',
                    subChild: [
                        { id: '03-02-01', name: 'Environment Pollution.docx' },
                        { id: '03-02-02', name: 'Global Warming.ppt' },
                        { id: '03-02-03', name: 'Social Network.pdf' },
                    ]
                },
                {
                    id: '03-03', name: 'Study Materials',
                    subChild: [
                        { id: '03-03-01', name: 'UI-Guide.pdf' },
                        { id: '03-03-02', name: 'Tutorials.zip' },
                        { id: '03-03-03', name: 'TypeScript.7z' },
                    ]
                },
            ]
        }
    ];
    // Mapping TreeView fields property with data source properties
    let fields = { dataSource: hierarchicalData, id: 'id', text: 'name', child: 'subChild', htmlAttributes: 'hasAttribute' };
    function nodeclicked(args) {
        if (args.event.which === 3) {
            treeObj.selectedNodes = [args.node.getAttribute('data-uid')];
        }
    }
    //Render the context menu with target as Treeview
    let menuItems = [
        { text: 'Add New Item' },
        { text: 'Rename Item' },
        { text: 'Remove Item' }
    ];
    let index = 1;
    function menuclick(args) {
        let targetNodeId = treeObj.selectedNodes[0];
        if (args.item.text == "Add New Item") {
            let nodeId = "tree_" + index;
            let item = { id: nodeId, name: "New Folder" };
            treeObj.addNodes([item], targetNodeId, null);
            index++;
            hierarchicalData.push(item);
            treeObj.beginEdit(nodeId);
        }
        else if (args.item.text == "Remove Item") {
            treeObj.removeNodes([targetNodeId]);
        }
        else if (args.item.text == "Rename Item") {
            treeObj.beginEdit(targetNodeId);
        }
    }
    function beforeopen(args) {
        let targetNodeId = treeObj.selectedNodes[0];
        let targetNode = document.querySelector('[data-uid="' + targetNodeId + '"]');
        if (targetNode.classList.contains('remove')) {
            menuObj.enableItems(['Remove Item'], false);
        }
        else {
            menuObj.enableItems(['Remove Item'], true);
        }
        if (targetNode.classList.contains('rename')) {
            menuObj.enableItems(['Rename Item'], false);
        }
        else {
            menuObj.enableItems(['Rename Item'], true);
        }
    }
    return (<div className='control-pane'>
        <div className='control-section'>
        <div className='control_wrapper'>
        <div id='tree'> {/* Render TreeView */}
            <TreeViewComponent fields={fields} ref={(treeview) => { treeObj = treeview; }} nodeClicked={nodeclicked.bind(this)}/>
            <ContextMenuComponent id="contentmenutree" target='#tree' items={menuItems} beforeOpen={beforeopen.bind(this)} select={menuclick.bind(this)} ref={(contextmenu) => { menuObj = contextmenu; }}/>
        </div>
        </div>
        </div>
      </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}