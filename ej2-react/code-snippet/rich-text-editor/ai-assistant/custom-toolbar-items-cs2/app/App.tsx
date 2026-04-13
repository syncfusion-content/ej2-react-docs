import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import type { AIAssitantToolbarClickEventArgs, BeforePopupOpenCloseEventArgs } from '@syncfusion/ej2-react-richtexteditor';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
import * as React from 'react';

function App() {

    const editor = React.createRef<RichTextEditorComponent>();
    let userDropDown: DropDownButton;
    const toolbarSettings: object = { items: ['AICommands', 'AIQuery'] };
    const aiAssistantSettings: object = {
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
    const onAIAssistantToolbarClick = (args: AIAssitantToolbarClickEventArgs): void => {
        if (args.item.iconCss === 'e-icons e-open-link') {
            const target: HTMLElement = args.originalEvent.target as HTMLElement;
            const promptContainer: HTMLElement = target.closest('.e-prompt-container') as HTMLElement;
            const prompt = (promptContainer.querySelector('.e-prompt-text') as HTMLElement).textContent;
            window.open(`https://www.google.com/search?q=${prompt}`, '_blank')
        } else if (args.item.iconCss === 'e-icons e-save') {
            const response = (args as any).event.currentTarget.closest('.e-output-container').querySelector('.e-content-body').innerHTML;
            console.log(response); // Handle Saving response here.
        }
    };
    const beforePopupOpen = (event: BeforePopupOpenCloseEventArgs): void => {
        if (event.type === 'AIAssistant') {
            userDropDown = new DropDownButton({
                items: [
                    { text: 'Usage', iconCss: 'e-icons e-chart' },
                    { text: 'Saved Response', iconCss: 'e-icons e-save' },
                    { separator: true },
                    { text: 'Log out', iconCss: 'e-icons e-view-side' }
                ],
                iconCss: 'e-icons e-user',
                cssClass: 'e-caret-hide',
            }, event.element.querySelector('#profileDropDown') as HTMLButtonElement);
        }
    }
    const beforePopupClose = (event: BeforePopupOpenCloseEventArgs): void => {
        if (event.type === 'AIAssistant') {
            userDropDown.destroy();
        }
    }
    return (
        <div>
            <RichTextEditorComponent ref={editor} toolbarSettings={toolbarSettings} aiAssistantSettings={aiAssistantSettings} aiAssistantToolbarClick={onAIAssistantToolbarClick} beforePopupOpen={beforePopupOpen} beforePopupClose={beforePopupClose}>
                <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, AIAssistant]} />
            </RichTextEditorComponent>
        </div>
    );
}

export default App;