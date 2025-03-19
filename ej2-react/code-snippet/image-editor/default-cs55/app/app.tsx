import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { FileManagerComponent, FileData } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    let imgObj: ImageEditorComponent;
    const resultData: FileData[] = [
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
            imageUrl: "https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png"
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
            imageUrl: "https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png"
        }
    ];
    const fileOpen = (args: { fileDetails: FileData, cancel: boolean }) => {
        const file = args.fileDetails;
        if (file.isFile && file.imageUrl) {
            args.cancel = true;
            imgObj.open(file.imageUrl);
        }
    };

    return (
        <div className="e-img-editor-sample">
            <FileManagerComponent id="overview_file" fileSystemData={resultData} fileOpen={fileOpen} height="200px"/>
            <ImageEditorComponent ref={(img) => { imgObj = img }} />
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));