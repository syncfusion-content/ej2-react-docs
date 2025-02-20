/**
 * Rich Text Editor - Floating Toolbar Sample
 */
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  let checkboxObj: CheckBoxComponent;
  let rteObj: RichTextEditorComponent;

  let toolbarSettings: object = {
    enableFloating: false
  }

  function onChange(args: ChangeEventArgs): void {
    rteObj.toolbarSettings.enableFloating = args.checked;
    rteObj.dataBind();
  }
    return (
      <div>
        <CheckBoxComponent checked={false} label='Enable Floating' ref={(scope) => {checkboxObj = scope! }} change={onChange.bind(this) } />
        <br />
        <br />
        <br />
        <RichTextEditorComponent ref={(scope) => {rteObj = scope! }} height={450} toolbarSettings={toolbarSettings}>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
    );
}

export default App;
