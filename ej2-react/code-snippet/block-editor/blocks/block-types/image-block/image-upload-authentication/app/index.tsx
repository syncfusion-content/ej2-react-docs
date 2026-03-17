import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType, UploadingEventArgs } from '@syncfusion/ej2-react-blockeditor';

function App() {
    const blocksData: BlockModel[] = [
    {
      blockType: 'Image',
      properties: {
        src: 'https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png',
        altText: 'Sample image'
      }
    },
    {
      blockType: 'Paragraph',
      content: [
        {
          contentType: ContentType.Text,
          content:
            'You can customize images further by configuring properties like allowedTypes for file upload restrictions, saveFormat for storage preferences, and cssClass for custom styling.'
        }
      ]
    }
  ];

  function fileUploading(args: UploadingEventArgs) {
    args.currentRequest.setRequestHeader('Authorization', 'Syncfusion');
  }

  return <BlockEditorComponent id="block-editor" blocks={blocksData} imageBlockSettings={{
    saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
    path: "[SERVICE_HOSTED_PATH]/Files/"
  }} fileUploading={fileUploading}></BlockEditorComponent>;
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));