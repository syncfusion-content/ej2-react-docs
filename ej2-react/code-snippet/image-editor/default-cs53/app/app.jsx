import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    treeView;
    data = [
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
                    { "nodeId": "03-01-01", "nodeText": "Flower", "image": "https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg" },
                    { "nodeId": "03-01-02", "nodeText": "Bridge", "image": "https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg" }
                ]
            },
        ]}
    ];
    fields = { dataSource: this.data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' };
    clicked(args) {
        let nodeId = args.node.getAttribute('data-uid');
        let nodeData = this.treeView.getTreeData(nodeId)[0];
        if (nodeData && nodeData.image) {
            this.imgObj.open(nodeData.image);
        }
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <TreeViewComponent ref={(tree) => { this.treeView = tree }} fields={this.fields} nodeClicked={this.clicked.bind(this)} />
            <ImageEditorComponent ref={(img) => { this.imgObj = img }} height="350px">
            </ImageEditorComponent>
                </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));