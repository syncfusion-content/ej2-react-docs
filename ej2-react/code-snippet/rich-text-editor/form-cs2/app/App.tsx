


/**
 * Rich Text Editor - Form Sample
 */
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { Count, HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
// import * as Marked from 'marked';
import * as React from 'react';

function App() {
  let formObject: FormValidatorModel;
  function componentDidMount(): void {
    const option: FormValidatorModel = {
      rules: {
        defaultRTE: {
          maxLength:[108, 'Maximum 100 character only'],
          minLength: [15, 'Need atleast 8 character length'],
          required: true,
        }
      }
    };
    formObject = new FormValidator('#myForm', option);
    (document as any).getElementById('validateSubmit').addEventListener('click', (e: any) => {
      const form = (document.forms as any).myForm;
      const formData = new FormData(form);
      const rteValue = formData.get('defaultRTE');
      // Use this value to the data base.
      alert(rteValue);
      e.preventDefault();
    });
  }

    return (
      <form id="myForm" className="form-vertical">
        <div className="form-group">
          <RichTextEditorComponent id="defaultRTE" name="defaultRTE" className="form-control" height={200} showCharCount={true} maxLength={100} placeholder={'Type something'} value={''}>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Count]} />
          </RichTextEditorComponent>
        </div>
        <div className="form-btn-section">
          <button id="validateSubmit" className="sample-btn e-control e-btn" type="submit" data-ripple="true">Submit</button>
          <button id="reset-btn" className="sample-btn e-control e-btn" type="reset" data-ripple="true">Reset</button>
        </div>
      </form>
    );
}

export default App;



