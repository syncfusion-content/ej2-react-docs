/**
 * Rich Text Editor - Form Validation Sample
 */
import { FormValidator } from '@syncfusion/ej2-inputs';
import { HtmlEditor, Image, Count, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
class App extends React.Component {
    formObject;
    button;
    componentDidMount() {
        const option = {
            rules: {
                'defaultRTE-value': {
                    maxLength: [108, 'Maximum 100 character only'],
                    minLength: [15, 'Need atleast 8 character length'],
                    required: true
                }
            }
        };
        this.formObject = new FormValidator('#myForm', option);
        document.getElementById('validateSubmit').addEventListener('click', (e) => {
            const form = document.forms.myForm;
            const formData = new FormData(form);
            const rteValue = formData.get('defaultRTE-value');
            // Use this value to the data base.
            alert(rteValue);
            e.preventDefault();
        });
    }
    onChange() {
        this.button.disabled = false;
    }
    render() {
        return (<form id="myForm" className="form-vertical">
        <div className="form-group">
          <RichTextEditorComponent id="defaultRTE" htmlAttributes={{ name: "defaultRTE-value" }} className="form-control" height={200} showCharCount={true} maxLength={100} placeholder={'Type something'} change={this.onChange.bind(this)} value={''}>
            <Inject services={[Toolbar, Image, Link, Count, HtmlEditor, QuickToolbar]}/>
          </RichTextEditorComponent>
        </div>
        <div className="form-btn-section">
          <ButtonComponent id="validateSubmit" ref={(scope) => { this.button = scope; }} disabled={true}>Submit</ButtonComponent>
          <button id="reset-btn" className="sample-btn e-control e-btn" type="reset" data-ripple="true">Reset</button>
        </div>
      </form>);
    }
}
export default App;