{% raw %}



import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {TreeViewComponent, NodeKeyPressEventArgs, NodeClickEventArgs} from '@syncfusion/ej2-react-navigations';
import {enableRipple} from '@syncfusion/ej2-base';
enableRipple(true);

function App() {
// Hierarchical data source for TreeView component
let hierarchicalData: { [key: string]: Object }[] = [
    { id: '01', name: 'Local Disk (C:)', expanded: true,
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
        id: '02', name: 'Local Disk (D:)',
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
        id: '03', name: 'Local Disk (E:)', icon: 'folder',
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
                id: '03-03', name: 'Study tailwind3s',
                subChild: [
                    { id: '03-03-01', name: 'UI-Guide.pdf' },
                    { id: '03-03-02', name: 'Tutorials.zip' },
                    { id: '03-03-03', name: 'TypeScript.7z' },
                ]
            },
        ]
    }
];
let fields: object = { dataSource: hierarchicalData, id: 'id', text: 'name', child: 'subChild' };
let showCheckBox:boolean = true;
let treeObj: TreeViewComponent;
function nodeCheck(args: any){
    let checkedNode: any = [args.node];
    if (args.event.target.classList.contains('e-fullrow') || args.event.key == "Enter") {
       let getNodeDetails: any = treeObj.getNode(args.node);
        if (getNodeDetails.isChecked == 'true') {
            treeObj.uncheckAll(checkedNode);
        } else {
            treeObj.checkAll(checkedNode);
        }
    }
}

    return (
        <div className = 'control-pane'>
        <div className='control-section'>
        <div className='control_wrapper'>
            {/* Render TreeView */}
            <TreeViewComponent fields={fields} showCheckBox={showCheckBox} ref={(treeview) => { treeObj = treeview as TreeViewComponent; }} nodeClicked={nodeCheck.bind(this)} keyPress={nodeCheck.bind(this)} />
        </div>
        </div>
        </div>
    )
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



{% endraw %}