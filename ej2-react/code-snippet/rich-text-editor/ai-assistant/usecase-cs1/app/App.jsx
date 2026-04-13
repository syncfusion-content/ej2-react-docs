import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component {
    editor = React.createRef();
    toolbarSettings = { items: ['AICommands', 'AIQuery'] };
    aiAssistantSettings = {
        promptToolbarSettings: ['Edit', 'Copy', { command: 'Prompt', subCommand: 'Search', iconCss: 'e-icons e-open-link', tooltip: 'Search in Google' }],
        responseToolbarSettings: [{ command: 'Response', subCommand: 'Save', iconCss: 'e-icons e-save', tooltip: 'Save Response' }, 'Regenerate', 'Copy', '|', 'Insert'],
        headerToolbarSettings: ['AIcommands',
            { command: 'Header', subCommand: 'Profile', template: '<button id="profileDropDown" class="e-rte-dropdown-menu"></button>', align: 'Right' }, 'Close',],
        prompts: [
            {
                prompt: 'What is Essential Studio ?',
                response:
                    'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.',
            },
        ],
    };
    onPromptRequest = () => {
        setTimeout(() => {
            const aiResponse = `Dear Valued Customer,
We are writing to inform you that there has been a recent change to our policies that may affect your account. Please take a moment to review the details below carefully.
Starting next Monday, all users must update their personal information before accessing the system. Failure to do so may result in the temporary suspension of your account and loss of access to certain features.
If you have any questions or concerns, please feel free to contact our support team at [support@companyname.com](mailto:support@companyname.com). They are available 24/7 and happy to help.
Thank you for your time and cooperation. We apologize for any inconvenience this may cause.
Best regards,
Customer Support Team
Company Name
`;
            this.editor.current?.addAIPromptResponse(aiResponse, false);
            this.editor.current?.addAIPromptResponse(aiResponse, true);
        }, 300); // For demonstration purpose.
    };
    reviewContent = () => {
        this.editor.current?.showAIAssistantPopup();
        this.editor.current?.executeAIPrompt('Proof read the editor content.');
    };
    render() {
        return (
            <div>
                <RichTextEditorComponent ref={this.editor} toolbarSettings={this.toolbarSettings} aiAssistantSettings={this.aiAssistantSettings} aiAssistantPromptRequest={this.onPromptRequest}>
                    <p>Dear valued costumer,</p>
                    <p>We are writting to inform you that there has been a recent change to our policy’s which may effect your account. Please take a moment to review the detials below carefuly.</p>
                    <p>Starting from next monday, all user must update there personal information before accessing the system. Failure to do so may result in temporary suspension of you’re account, and loss of acces to certain feature.</p>
                    <p>If you have any question or concern, feel free to contact our support team at <a href="mailto:support&#64;companyname.com">support&#64;companyname.com</a> they are avalible 24/7 and happy help.</p>
                    <p>Thank you for you’re time and coorperation. We appologize for any inconvenient this may cause.</p>
                    <p>Best Regard,</p>
                    <p>Customer Support Team</p>
                    <p>Company Name</p>
                    <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, AIAssistant]} />
                </RichTextEditorComponent>
                <br />
                <button className="e-btn e-primary" onClick={this.reviewContent}><span className="e-icons e-btn-icon e-check-large"></span>Proof read</button>
            </div>
        );
    }
}
export default App;