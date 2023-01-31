{% raw %}


import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
    toolbar = ['Annotate', "Line", "Rectangle", "Text", 'ZoomIn', 'ZoomOut', {text: 'Custom'}];
    public imageEditorCreated(): void {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            this.imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    }

    public toolbarItemClicked(args): void {
         if(args.item.text == "Custom") {
            this.imgObj.rotate(90);
        }
    }

  public render() {
    return (
        <div id="wrapperDiv">
            <ImageEditorComponent toolbar={this.toolbar} ref={(img) => { this.imgObj = img }} created={this.imageEditorCreated.bind(this)} toolbarItemClicked={this.toolbarItemClicked.bind(this)}/>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}