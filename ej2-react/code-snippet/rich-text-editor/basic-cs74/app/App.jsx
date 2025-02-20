import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
class App extends React.Component {
    checkboxObj;
    rteObj;
    toolbarSettings = {
        enableFloating: false
    };
    onChange(args) {
        this.rteObj.toolbarSettings.enableFloating = args.checked;
        this.rteObj.dataBind();
    }
    render() {
        return (<div>
        <CheckBoxComponent checked={false} label='Enable Floating' ref={(scope) => { this.checkboxObj = scope; }} change={this.onChange = this.onChange.bind(this)}/>
        <br />
        <br />
        <br />
        <RichTextEditorComponent ref={(scope) => { this.rteObj = scope; }} height={450} toolbarSettings={this.toolbarSettings}>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
        </RichTextEditorComponent>
      </div>);
    }
}
export default App;