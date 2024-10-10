{% raw %}

/**
 * Rich Text Editor Smart Suggestion sample
 */
import * as React from 'react';
import { HtmlEditor, Image, Audio, Video, Table, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, ToolbarSettingsModel, EmojiPicker, PasteCleanup, FormatPainter, SlashMenu, SlashMenuSettingsModel, SlashMenuItemSelectArgs } from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component<{},{}> {
  private formatRTE: RichTextEditorComponent | null = null;
  private meetingNotes: string = '<p><strong>Meeting Notes</strong></p><table class="e-rte-table" style="width: 100%; min-width: 0px; height: 150px;"> <tbody> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Attendees</strong></td> <td style="width: 50%;" class=""><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Date &amp; Time</strong></td> <td style="width: 50%;"><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Agenda</strong></td> <td style="width: 50%;"><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Discussed Items</strong></td> <td style="width: 50%;"><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Action Items</strong></td> <td style="width: 50%;"><br></td> </tr> </tbody> </table>';

  private signature: string = '<p><br></p><p>Warm regards,</p><p>John Doe<br>Event Coordinator<br>ABC Company</p>';

  private toolbarSettings: ToolbarSettingsModel = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|',
      'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'Video', 'Audio', 'CreateTable', '|', 'FormatPainter', 'ClearFormat',
      '|', 'EmojiPicker', '|',
      'SourceCode', '|', 'Undo', 'Redo']
  };
  private slashMenuSettings: SlashMenuSettingsModel = {
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

  private slashMenuItemSelect(args: SlashMenuItemSelectArgs): void {
    if (this.formatRTE) { 
      if (args.itemData.command === 'MeetingNotes') {
        this.formatRTE.executeCommand('insertHTML', this.meetingNotes, { undo: true });
      }
      if (args.itemData.command === 'Signature') {
        this.formatRTE.executeCommand('insertHTML', this.signature, { undo: true });
      }
    }
  }

  render() {
    return (
      <div className='control-pane'>
        <div className='control-section' id="mentionFormat">
          <RichTextEditorComponent id="MentionInlineFormat" ref={(scope) => { this.formatRTE = scope }} toolbarSettings={this.toolbarSettings} placeholder="Type '/' and choose format" slashMenuSettings={this.slashMenuSettings} slashMenuItemSelect={this.slashMenuItemSelect.bind(this)}>
            <Inject services={[HtmlEditor, Toolbar, Image, Audio, Table, Video, Link, QuickToolbar, EmojiPicker, PasteCleanup, FormatPainter, SlashMenu]} />
          </RichTextEditorComponent>
        </div>
      </div>
    );
  }
}
export default App;


{% endraw %}