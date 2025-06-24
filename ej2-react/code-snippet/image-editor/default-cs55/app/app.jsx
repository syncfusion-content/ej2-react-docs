import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { FileManagerComponent, FileData } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    resultData = [
        {
            dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
            dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
            filterPath: "\\",
            hasChild: true,
            id: "0",
            isFile: false,
            name: "Pictures",
            parentId: "0",
            size: 228465,
            type: "folder"
        },
        {
            dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
            dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
            filterPath: "\\Pictures\\",
            hasChild: false,
            id: '1',
            isFile: true,
            name: "Flower",
            parentId: '0',
            size: 69632,
            type: ".png",
            imageUrl: "https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg"
        },
        {
            dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
            dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
            filterPath: "\\Pictures\\",
            hasChild: false,
            id: '2',
            isFile: true,
            name: "Bridge",
            parentId: '0',
            size: 48951,
            type: ".png",
            imageUrl: "https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg"
        }
    ];
    fileOpen(args) {
        const file = args.fileDetails;
        if (file.isFile && file.imageUrl) {
            args.cancel = true;
            this.imgObj?.open(file.imageUrl);
        }
    }

    render() {
        return (
            <div className="e-img-editor-sample">
                <FileManagerComponent id="overview_file" fileSystemData={this.resultData} fileOpen={this.fileOpen.bind(this)} height="200px"/>
                <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('image-editor'));