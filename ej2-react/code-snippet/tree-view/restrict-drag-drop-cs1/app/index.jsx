import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
function App() {
    // Hierarchical data source for TreeView component
    let hierarchicalData = [
        {
            nodeId: '01', nodeText: 'Music', icon: 'folder',
            nodeChild: [
                { nodeId: '01-01', nodeText: 'Gouttes.mp3', icon: 'audio' }
            ]
        },
        {
            nodeId: '02', nodeText: 'Videos', icon: 'folder',
            nodeChild: [
                { nodeId: '02-01', nodeText: 'Naturals.mp4', icon: 'video' },
                { nodeId: '02-02', nodeText: 'Wild.mpeg', icon: 'video' },
            ]
        },
        {
            nodeId: '03', nodeText: 'Documents', icon: 'folder',
            nodeChild: [
                { nodeId: '03-01', nodeText: 'Environment Pollution.docx', icon: 'docx' },
                { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx', icon: 'docx' },
                { nodeId: '03-03', nodeText: 'Global Warming.ppt', icon: 'ppt' },
                { nodeId: '03-04', nodeText: 'Social Network.pdf', icon: 'pdf' },
                { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf', icon: 'pdf' },
            ]
        },
        {
            nodeId: '04', nodeText: 'Pictures', icon: 'folder', expanded: true,
            nodeChild: [
                {
                    nodeId: '04-01', nodeText: 'Camera Roll', icon: 'folder', expanded: true,
                    nodeChild: [
                        { nodeId: '04-01-01', nodeText: 'WIN_20160726_094117.JPG', image: 'https://ej2.syncfusion.com/demos/src/treeview/images/employees/9.png' },
                        { nodeId: '04-01-02', nodeText: 'WIN_20160726_094118.JPG', image: 'https://ej2.syncfusion.com/demos/src/treeview/images/employees/3.png' },
                    ]
                },
                { nodeId: '04-02', nodeText: 'Wind.jpg', icon: 'images' },
                { nodeId: '04-03', nodeText: 'Stone.jpg', icon: 'images' },
            ]
        },
        {
            nodeId: '05', nodeText: 'Downloads', icon: 'folder',
            nodeChild: [
                { nodeId: '05-01', nodeText: 'UI-Guide.pdf', icon: 'pdf' },
                { nodeId: '05-02', nodeText: 'Tutorials.zip', icon: 'zip' },
                { nodeId: '05-03', nodeText: 'Game.exe', icon: 'exe' },
                { nodeId: '05-04', nodeText: 'TypeScript.7z', icon: 'zip' },
            ]
        }
    ];
    let fields = { dataSource: hierarchicalData, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' };
    let allowDragAndDrop = true;
    let sortOrder = 'Ascending';
    function nodeDrag(args) {
        if (args.droppedNode != null && args.droppedNode.getElementsByClassName('folder') && args.droppedNode.getElementsByClassName('folder').length === 0) {
            args.dropIndicator = 'e-no-drop';
        }
    }
    function dragStop(args) {
        if (args.droppedNode != null && args.droppedNode.getElementsByClassName('folder') && args.droppedNode.getElementsByClassName('folder').length === 0) {
            args.cancel = true;
        }
    }
    return (<div className='control-pane'>
        <div className='control-section'>
        <div className='control_wrapper'>
            {/* Render TreeView */}
            <TreeViewComponent fields={fields} allowDragAndDrop={allowDragAndDrop} nodeDragStop={dragStop.bind(this)} nodeDragging={nodeDrag.bind(this)}/>
        </div>
        </div>
      </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
