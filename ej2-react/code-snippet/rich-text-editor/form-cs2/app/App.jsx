/**
 * Rich Text Editor - Form Sample
 */
import { FormValidator } from '@syncfusion/ej2-inputs';
import { Count, HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
// import * as Marked from 'marked';
import * as React from 'react';
function App() {
    let formObject;
    function componentCreated() {
        const option = {
            rules: {
                defaultRTE: {
                    maxLength: [108, 'Maximum 100 character only'],
                    minLength: [15, 'Need atleast 8 character length'],
                    required: true,
                }
            }
        };
        formObject = new FormValidator('#myForm', option);
        document.getElementById('validateSubmit').addEventListener('click', (e) => {
            const form = document.forms.myForm;
            const formData = new FormData(form);
            const rteValue = formData.get('defaultRTE');
            // Use this value to the data base.
            alert(rteValue);
            e.preventDefault();
        });
    }
    return (<form id="myForm" className="form-vertical">
        <div className="form-group">
          <RichTextEditorComponent id="defaultRTE" name="defaultRTE" created={componentCreated} className="form-control" height={200} showCharCount={true} maxLength={100} placeholder={'Type something'} value={''}>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Count]}/>
          </RichTextEditorComponent>
        </div>
        <div className="form-btn-section">
          <button id="validateSubmit" className="sample-btn e-control e-btn" type="submit" data-ripple="true">Submit</button>
          <button id="reset-btn" className="sample-btn e-control e-btn" type="reset" data-ripple="true">Reset</button>
        </div>
      </form>);
}
export default App;
