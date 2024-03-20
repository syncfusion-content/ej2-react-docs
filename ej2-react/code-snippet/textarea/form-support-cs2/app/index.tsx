// Import the TextArea.
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { useEffect } from 'react';
import * as React from 'react';
import * as ReactDom from 'react-dom';

let formObject;
// To render TextArea.
function App() {

    useEffect(() => {
        const options = {
        // validation rules
        rules: {
            email: {
            required: [true, '* Please enter valid email'],
            },
            comments: {
            required: [true, '* Please enter your comments']
            }
        },
        };
        // Initialize the form validator
        formObject = new FormValidator('#form1', options);
    }, []);
  
    return (
        <div>
            <div className="control_wrapper" id="control_wrapper">
                <h3 className="form-title">Feedback</h3>
                <div className="control_wrapper textarea-form">
                    <form id="form1" method="post">
                        <div className="form-group">
                            <div className="e-float-input">
                                <label>Email</label>
                                <input type="email" id="email" name="email" data-email-message="Please enter valid email address."
                                data-required-message="Required field" required data-msg-containerid="emailError"/>
                                <span className="e-float-line"></span>
                            </div>
                            <div id="emailError"></div>
                        </div>
                        <div className="form-group">
                            <div>
                                <label>Comments</label>
                                <TextAreaComponent id='default' name="comments" data-msg-containerid="commentError" placeholder='Enter your comments' floatLabelType='Auto' required = {true}></TextAreaComponent>
                            </div>
                            <div id="commentError"></div>
                        </div>
                        <div className="row">
                            <div style={{ float: 'left' }}>
                                <button className="btn" type="submit">Submit</button>
                            </div>
                            <div style={{ float: 'left' }}>
                                <button className="btn" type="reset">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
