import React, { useRef } from 'react';
import {TabComponent,TabItemDirective,TabItemsDirective} from '@syncfusion/ej2-react-navigations';
import {HtmlEditor,Image,Inject,Link,QuickToolbar,RichTextEditorComponent,Toolbar,Table,PasteCleanup} from '@syncfusion/ej2-react-richtexteditor';

function App() {
    let editorRef1 = useRef<RichTextEditorComponent>(null);
    let editorRef2 = useRef<RichTextEditorComponent>(null);
    let editorRef3 = useRef<RichTextEditorComponent>(null);
    let headerText = [{ text: 'TAB 1' }, { text: 'TAB 2' }, { text: 'TAB 3' }];
    const tools = {
      items: [
        'Bold',
        'Italic',
        'Underline',
        'StrikeThrough',
        'FontName',
        'FontSize',
        'FontColor',
        'BackgroundColor',
        'LowerCase',
        'UpperCase',
        '|',
        'Formats',
        'Alignments',
        'OrderedList',
        'UnorderedList',
        'Outdent',
        'Indent',
        '|',
        'CreateLink',
        'Image',
        '|',
        'ClearFormat',
        'Print',
        'SourceCode',
        'FullScreen',
        '|',
        'Undo',
        'Redo',
      ],
    };
  
    const content1 = () => {
      return (
        <div>
          <RichTextEditorComponent ref={editorRef1} toolbarSettings={tools}>
            <Inject
              services={[
                Toolbar,
                Link,
                Image,
                HtmlEditor,
                QuickToolbar,
                Table,
                PasteCleanup,
              ]}
            />
          </RichTextEditorComponent>
        </div>
      );
    };
  
    const content2 = () => {
      return (
        <div>
          <RichTextEditorComponent ref={editorRef2} toolbarSettings={tools}>
            <Inject
              services={[
                Toolbar,
                Link,
                Image,
                HtmlEditor,
                QuickToolbar,
                Table,
                PasteCleanup,
              ]}
            />
          </RichTextEditorComponent>
        </div>
      );
    };
  
    const content3 = () => {
      return (
        <div>
          <RichTextEditorComponent ref={editorRef3} toolbarSettings={tools}>
            <Inject
              services={[
                Toolbar,
                Link,
                Image,
                HtmlEditor,
                QuickToolbar,
                Table,
                PasteCleanup,
              ]}
            />
          </RichTextEditorComponent>
        </div>
      );
    };
  
  return (
    <div>
      <TabComponent heightAdjustMode="Auto">
        <TabItemsDirective>
          <TabItemDirective header={headerText[0]} content={content1} />
          <TabItemDirective header={headerText[1]} content={content2} />
          <TabItemDirective header={headerText[2]} content={content3} />
        </TabItemsDirective>
      </TabComponent>
    </div>
  );
}
export default App;
