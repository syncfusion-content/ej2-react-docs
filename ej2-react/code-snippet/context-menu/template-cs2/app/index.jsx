import { enableRipple, Browser } from '@syncfusion/ej2-base';
import { ContextMenuComponent, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
    const template = "<div class='menu-wrapper'><span class='${iconCss} icon-right'></span><div class='text-content'><span class='text'>${answerType}</span><span class='description'>${description}</span></div></div>";
    let content = Browser.isDevice ? 'Right-click or touch and hold to open the Context Menu and select the answer type' : 'Right click/Touch hold to open the Context Menu and select the answer type';

    // ContextMenu items definition
    const menuItems = [
        {
            answerType: 'Selection',
            description: "Choose from options",
            iconCss: 'e-icons e-list-unordered'
        },
        {
            answerType: 'Yes / No',
            description: "Select Yes or No",
            iconCss: 'e-icons e-check-box',
        },
        {
            answerType: 'Text',
            description: "Type own answer",
            iconCss: 'e-icons e-caption',
            items: [
                {
                    answerType: 'Single line',
                    description: "Type answer in a single line",
                    iconCss: 'e-icons e-text-form'
                },
                {
                    answerType: 'Multiple line',
                    description: "Type answer in multiple line",
                    iconCss: 'e-icons e-text-wrap'
                }
            ]
        },
        {
            answerType: 'None',
            iconCss: 'e-icons e-mouse-pointer',
            description: "No answer required"
        },
    ];

    const addTemplateClass = (args) => {
        if (args.element.classList.contains('e-ul')) {
            args.element.classList.add('e-contextMenu-template');
        }
    };

    return (
        <div className='control-pane'>
            <div className='control-section'>
                <div className='contextmenu-section'>
                    <div id='contextmenu-control'>
                        <div id="contextmenutarget">{content}</div>
                        <ContextMenuComponent
                            className="e-contextMenu-template"
                            target='#contextmenutarget'
                            items={menuItems}
                            itemTemplate={template}
                            beforeOpen={addTemplateClass}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));