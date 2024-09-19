{% raw %}


import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { Browser, getComponent } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let treeView: TreeViewComponent;
    let data = [
        {
            "nodeId": "01", "nodeText": "Videos", "icon": "folder",
            "nodeChild": [
                { "nodeId": "01-01", "nodeText": "Naturals.mp4", "icon": "video" },
                { "nodeId": "01-02", "nodeText": "Wild.mpeg", "icon": "video" }
            ]
        },
        {
            "nodeId": "02", "nodeText": "Documents", "icon": "folder",
            "nodeChild": [
                { "nodeId": "02-01", "nodeText": "Environment Pollution.docx", "icon": "docx" },
                { "nodeId": "02-02", "nodeText": "Global Water, Sanitation, & Hygiene.docx", "icon": "docx" },
                { "nodeId": "02-03", "nodeText": "Global Warming.ppt", "icon": "ppt" },
                { "nodeId": "02-04", "nodeText": "Social Network.pdf", "icon": "pdf" },
                { "nodeId": "02-05", "nodeText": "Youth Empowerment.pdf", "icon": "pdf" }
            ]
        },
        { 
            "nodeId": "03", "nodeText": "Pictures", "icon": "folder", "expanded": true,
            "nodeChild": [
            {
                "nodeId": "03-01", "nodeText": "Camera Roll", "icon": "folder", "expanded": true,
                "nodeChild": [
                    { "nodeId": "03-01-01", "nodeText": "WIN_20160726_094117.JPG", "image": "https://cdn.syncfusion.com/content/images/Contact-us/primary_logo.svg" },
                    { "nodeId": "03-01-02", "nodeText": "WIN_20160726_094118.JPG", "image": "https://cdn.syncfusion.com/content/images/home-v1/what-we-need/1800-components-onhover.svg" }
                ]
            },
        ]}
    ];
    const fields = { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' };
    function clicked(args: any) {
        let nodeId = args.node.getAttribute('data-uid');
        let nodeData = treeView.getTreeData(nodeId)[0];
        if (nodeData && nodeData.image) {
            imgObj.open(nodeData.image);
        }
    }

    return (
        <div className='e-img-editor-sample'>
            <TreeViewComponent ref={(tree) => { treeView = tree }} fields={fields} nodeClicked={clicked} />
            <ImageEditorComponent ref={(img) => { imgObj = img }} toolbar = {[]}>
            </ImageEditorComponent>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}