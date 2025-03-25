import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    
    function selected(args: any): void {
        if (args.filesData.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
               imgObj.open(reader.result);
            };
            reader.readAsDataURL(args.filesData[0].rawFile);
        }
    }

    return (
        <div className='e-img-editor-sample'>
            <UploaderComponent selected={selected} showFileList={false}></UploaderComponent>
            <ImageEditorComponent height='350px' ref={(img) => { imgObj = img }}>
            </ImageEditorComponent>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));