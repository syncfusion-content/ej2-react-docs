{% raw %}



import { DialogComponent } from "@syncfusion/ej2-react-popups";
import {
  RichTextEditorComponent,
  HtmlEditor,
  Toolbar,
  Image,
  Inject,
  Link,
  QuickToolbar
} from "@syncfusion/ej2-react-richtexteditor";
import * as React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onOverlayClick = () => {
      this.setState({ hideDialog: false });
    };
    this.dlgopen = () => {
this.rteObj.refreshUI();
    };
    this.dialogClose = () => {
      this.setState({ hideDialog: false });
    };
    this.state = {
      hideDialog: true
    };
  }
  handleClick() {
    this.setState({ hideDialog: true });
  }
   public render() {
    return (
      <div className="App" id="dialog-target">
        <button className="e-control e-btn" id="targetButton1" role="button" onClick={(this.handleClick= this.handleClick.bind(this))}> Open </button>
        <DialogComponent width="350px" isModal={true} visible={this.state.hideDialog}
          close={this.dialogClose} overlayClick={this.onOverlayClick} open={this.dlgopen}>
          <RichTextEditorComponent id="defaultRTE" ref={richtexteditor => {this.rteObj = richtexteditor;}}>
            <p>
              The rich text editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
            <p>
              <b>Key features:</b>
            </p>
            <ul>
              <li>
                <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
              </li>
              <li>
                <p>Capable of handling markdown editing.</p>
              </li>
              <li>
                <p>
                  Contains a modular library to load the necessary functionality
                  on demand.
                </p>
              </li>
              <li>
                <p>Provides a fully customizable toolbar.</p>
              </li>
              <li>
                <p>
                  Provides HTML view to edit the source directly for developers.
                </p>
              </li>
              <li>
                <p>Supports third-party library integration.</p>
              </li>
              <li>
                <p>Allows preview of modified content before saving it.</p>
              </li>
              <li>
                <p>
                  Handles images, hyperlinks, video, hyperlinks, uploads, etc.
                </p>
              </li>
              <li>
                <p>Contains undo/redo manager.</p>
              </li>
              <li>
                <p>Creates bulleted and numbered lists.</p>
              </li>
            </ul>
            <Inject
              services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}
            />
          </RichTextEditorComponent>
        </DialogComponent>
      </div>
    );
  }
}

export default App;



{% endraw %}