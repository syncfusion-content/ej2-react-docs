/**
 * Rich Text Editor import-word sample
 */
import * as React from 'react';
import { RichTextEditorComponent, Toolbar, Inject, Image, Link, HtmlEditor, QuickToolbar, Table, PasteCleanup, ImportExport } from '@syncfusion/ej2-react-richtexteditor';
import { ToolbarSettingsModel, ImportWordModel } from '@syncfusion/ej2-react-richtexteditor';
import { UploaderComponent, SuccessEventArgs } from '@syncfusion/ej2-react-inputs';
import { useEffect, useRef } from 'react';

function App() {

    let rteObj: RichTextEditorComponent;
    let uploadObj : UploaderComponent;

    const hostUrl: string = 'https://services.syncfusion.com/react/production/';

    const importContentFromWord =()=> {
        this.uploaderObj.element.click();
    }

    const items: any = [
        {
          template:
            "<button class='e-tbar-btn e-control e-btn e-lib e-icon-btn' tabindex='-1' id='custom_tbarbtn_1' style='width:100%'><span class='e-icons e-rte-import-doc e-btn-icon'></span></button>",
          undo: true,
          click: importContentFromWord.bind(this),
        },
    ];

    const rteValue: string = `<h2 style="text-align: center;">Invitation to Microsoft Webinar Meet-Up</h2><p>
                    Dear Guest,
                </p><p>
                    We're thrilled to extend a special invitation to you for an exclusive Microsoft webinar meet-up, where we'll explore the latest innovations and insights driving the future of technology. As a valued member of our community, we believe this event will offer invaluable knowledge and networking opportunities.
                </p><h2>Event Details:</h2><table class="e-rte-table" style="width: 100%; height: 125px;">
                    <tbody>
                    <tr style="height: 20%;">
                        <th class="">Time:</th>
                        <td>10:00 AM - 12:00 PM</td>
                    </tr>
                    <tr style="height: 20%;">
                        <th>Duration:</th>
                        <td>2 hours</td>
                    </tr>
                    <tr style="height: 20%;">
                        <th>Platform:</th>
                        <td>Microsoft Teams</td>
                    </tr>
                </tbody></table><p><br></p><h2>Agenda:</h2><ul>
                    <li>Introduction to Cutting-Edge Microsoft Technologies</li>
                    <li>Deep Dive into AI in Business: Leveraging Microsoft Azure Solutions</li>
                    <li>Live Q&amp;A Session with Industry Experts</li>
                    <li>Networking Opportunities with Peers and Professionals</li>
                </ul><h2>Why Attend?</h2><ul>
                    <li>Gain insights into the latest trends and advancements in technology.</li>
                    <li>Interact with industry experts and expand your professional network.</li>
                    <li>Get your questions answered in real-time during the live Q&amp;A session.</li>
                    <li>Access exclusive resources and offers available only to webinar attendees.</li>
                </ul><p>
                    Feel free to invite your colleagues and peers who might benefit from this enriching experience. Simply forward this email to them or share the event details.
                </p><p>
                    We're looking forward to your participation and to exploring the exciting world of Microsoft technology together. Should you have any questions or require further information, please don't hesitate to contact us at <a href="mailto:webinar@company.com">webinar@company.com</a>.</p><p>
                <br></p><p>Warm regards,</p><p>John Doe<br>Event Coordinator<br>ABC Company</p>`;
    const toolbarSettings: ToolbarSettingsModel = {
        items: items
    };

    const asyncSettings: object = {
        saveUrl: hostUrl + 'api/RichTextEditor/ImportFromWord',
    };

    const onUploadSuccess = (args: SuccessEventArgs) => {
        rteObj.executeCommand('insertHTML', args.e.currentTarget.response, {
            undo: true,
        });
    };
    
    // Hide the uploader component after mount
    useEffect(() => {
        if (uploadObj) {
        uploadObj.dropAreaWrapper.style.display = 'none';
        }
    }, []);

    return (
        <div className='control-pane'>
            <div className='control-section' id="rteTools">
                <div className='rte-control-section'>
                   <RichTextEditorComponent id="importDocument" toolbarSettings={toolbarSettings} value={rteValue} ref={(richtexteditor) => {rteObj = richtexteditor;}}>
                        <Inject services={[Toolbar,Image,Link,HtmlEditor,QuickToolbar,Table,PasteCleanup,ImportExport]}/>
                    </RichTextEditorComponent>
                    <UploaderComponent asyncSettings={asyncSettings} ref={(upload) => {uploadObj = upload;}} success={onUploadSuccess}/>
                </div>
            </div>
        </div>
    );
}
export default App;