import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
function App() {
    let checkboxObj;
    let rteObj;
    let toolbarSettings = {
        enableFloating: false
    };
    function onChange(args) {
        rteObj.toolbarSettings.enableFloating = args.checked;
        rteObj.dataBind();
    }
    return (<div>
        <CheckBoxComponent checked={false} label='Enable Floating' ref={(scope) => { checkboxObj = scope; }} change={onChange.bind(this)}/>
        <br />
        <br />
        <br />
        <RichTextEditorComponent ref={(scope) => { rteObj = scope; }} height={450} toolbarSettings={toolbarSettings}>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
        </RichTextEditorComponent>
      </div>);
}
export default App;