


/**
 * Rich Text Editor - Custom Placement of Validation Message Sample
 */
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { HtmlEditor, Image, Inject, Count , Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const option: FormValidatorModel = {
      customPlacement: (inputElement: HTMLElement, error: HTMLElement)=> {
        // Initialize the CustomPlacement.
        (document as any).getElementById('data-error').appendChild(error);
      },
      rules: {
        'defaultRTE-value': {
          maxLength:[108, 'RTE: Maximum 100 character only'],
          minLength: [15, 'RTE: Need atleast 8 character length'],
          required: [true, 'RTE: value is required']
        }
      }
    };
    formObject = new FormValidator('#myForm', option);

    (document as any).getElementById('validateSubmit').addEventListener('click', (e: any) => {
      const form = (document as any).forms.myForm;
      const formData = new FormData(form);
      const rteValue = formData.get('defaultRTE-value');
      // Use this value to the data base.
      alert(rteValue);
      e.preventDefault();
    });
  });
  let formObject: FormValidator;
  let button: ButtonComponent;

  function onChange(): void {
     button.disabled = false;
  }

  return (
    <form id="myForm" className="form-vertical">
      <div className="form-group">
        <RichTextEditorComponent id="defaultRTE" htmlAttributes= {{ name: "defaultRTE-value" }} className="form-control" height={200} showCharCount={true} maxLength={100} placeholder={'Type something'} change={onChange.bind(this)} value={''}>
          <Inject services={[Toolbar, Image, Link, Count, HtmlEditor, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
      <div className="form-group">
        <div className="col-sm-3 control-label"/>
        <div className="col-sm-6">
          <div id='data-error'/>
        </div>
      </div>
      <div className="form-btn-section">
          <ButtonComponent id="validateSubmit" ref={(scope) => { button = scope; }}  disabled={true}>Submit</ButtonComponent>
        <button id="reset-btn" className="sample-btn e-control e-btn" type="reset" data-ripple="true">Reset</button>
      </div>
    </form>
  );
}

export default App;



