{% raw %}


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorComponent,
    DocumentEditor,
} from '@syncfusion/ej2-react-documenteditor';

function App() {
    let documenteditor: DocumentEditorComponent;

    function onImportClick() {
        //Open file picker.
        document.getElementById('file_upload').click();
    }
    function onFileChange(e: any) {
        if (e.target.files[0]) {
            //Get selected file.
            let file = e.target.files[0];
            //Open sfdt document.
            if (file.name.substr(file.name.lastIndexOf('.')) === '.sfdt') {
                let fileReader: FileReader = new FileReader();
                fileReader.onload = (e: any) => {
                    let contents: string = e.target.result;
                    let proxy: any = documenteditor;
                    //Open the document in Document Editor.
                    proxy.open(contents);
                };
                //Read the file as text.
                fileReader.readAsText(file);
                documenteditor.documentName = file.name.substr(0, file.name.lastIndexOf('.'));
            }
        }
    }
    return (
        <div>
            <input type='file' id='file_upload' accept='.sfdt' onChange={onFileChange} />
            <button onClick={onImportClick}>Import</button>
            <DocumentEditorComponent
                id="container"
                ref={scope => {
                    documenteditor = scope;
                }}
                height={'330px'}
            />
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



{% endraw %}