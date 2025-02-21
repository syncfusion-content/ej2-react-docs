import * as React from 'react';
import { HtmlEditor, Image, Audio, Video, Table, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, ToolbarSettingsModel, EmojiPicker, PasteCleanup, FormatPainter, SlashMenu, SlashMenuSettingsModel, SlashMenuItemSelectArgs } from '@syncfusion/ej2-react-richtexteditor';

function App() {
  let formatRTE: RichTextEditorComponent | null = null;
  const meetingNotes: string = '<p><strong>Meeting Notes</strong></p><table class="e-rte-table" style="width: 100%; min-width: 0px; height: 150px;"> <tbody> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Attendees</strong></td> <td style="width: 50%;" class=""><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Date &amp; Time</strong></td> <td style="width: 50%;"><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Agenda</strong></td> <td style="width: 50%;"><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Discussed Items</strong></td> <td style="width: 50%;"><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Action Items</strong></td> <td style="width: 50%;"><br></td> </tr> </tbody> </table>';

  const signature: string = '<p><br></p><p>Warm regards,</p><p>John Doe<br>Event Coordinator<br>ABC Company</p>';

  const toolbarSettings: ToolbarSettingsModel = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|',
      'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'Video', 'Audio', 'CreateTable', '|', 'FormatPainter', 'ClearFormat',
      '|', 'EmojiPicker', '|',
      'SourceCode', '|', 'Undo', 'Redo']
  };
  const slashMenuSettings: SlashMenuSettingsModel = {
    enable: true,
    items: ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'OrderedList', 'UnorderedList',
      'CodeBlock', 'Blockquote', 'Link', 'Image', 'Video', 'Audio', 'Table', 'Emojipicker',
      {
        text: 'Meeting notes',
        description: 'Insert a meeting note template.',
        iconCss: 'e-icons e-description',
        type: 'Custom',
        command: 'MeetingNotes'
      },
      {
        text: 'Signature',
        description: 'Insert a signature template.',
        iconCss: 'e-icons e-signature',
        type: 'Custom',
        command: 'Signature'
      }]
  };

  function slashMenuItemSelect(args: SlashMenuItemSelectArgs): void {
    if (formatRTE) { 
      if (args.itemData.command === 'MeetingNotes') {
        formatRTE.executeCommand('insertHTML', meetingNotes, { undo: true });
      }
      if (args.itemData.command === 'Signature') {
        formatRTE.executeCommand('insertHTML', signature, { undo: true });
      }
    }
  }

  return (
    <div className='control-pane'>
      <div className='control-section' id="mentionFormat">
        <RichTextEditorComponent id="MentionInlineFormat" ref={(scope) => { formatRTE = scope }} toolbarSettings={toolbarSettings} placeholder="Type '/' and choose format" slashMenuSettings={slashMenuSettings} slashMenuItemSelect={slashMenuItemSelect}>
          <Inject services={[HtmlEditor, Toolbar, Image, Audio, Table, Video, Link, QuickToolbar, EmojiPicker, PasteCleanup, FormatPainter, SlashMenu]} />
        </RichTextEditorComponent>
      </div>
    </div>
  );
}
export default App;