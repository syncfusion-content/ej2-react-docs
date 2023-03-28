{% raw %}



import { select } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
    public uploadObj: UploaderComponent;
    public path: object = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    }
    private dropAreaRef: HTMLElement;
    public onCreated(): void {
        this.uploadObj.dropArea = this.dropAreaRef;
        this.uploadObj.dataBind();
    }

    public browseClick(args: React.MouseEvent): void {
        const wrapperEle: HTMLElement = select('.e-file-select-wrap button', document) as HTMLElement;
        wrapperEle.click();
        args.preventDefault();
    }
    public render(): JSX.Element {
        return (
            <div id='container'>
                <div id='dropArea'>
                    <span id='drop'> Drop files here or <a href="" id='browse' onClick={this.browseClick=this.browseClick.bind(this)}><u>Browse</u></a> </span>
                    <UploaderComponent asyncSettings={this.path}  ref = {upload => {this.uploadObj = upload!}} created={this.onCreated = this.onCreated.bind(this)}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}