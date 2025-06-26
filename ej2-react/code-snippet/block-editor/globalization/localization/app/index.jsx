// Import React and ReactDOM
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { L10n } from '@syncfusion/ej2-base';
import { ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
  L10n.load({
    'de': {
        "blockeditor": {
	            "paragraph": "Schreiben Sie etwas oder ‚/‘ für Befehle.",
            "heading1": "Überschrift 1",
            "heading2": "Überschrift 2",
            "heading3": "Überschrift 3",
            "heading4": "Überschrift 4",
            "toggleParagraph": "Umschaltbarer Absatz",
            "toggleHeading1": "Umschaltbare Überschrift 1",
            "toggleHeading2": "Umschaltbare Überschrift 2",
            "toggleHeading3": "Umschaltbare Überschrift 3",
            "toggleHeading4": "Umschaltbare Überschrift 4",
            "bulletList": "Element hinzufügen",
            "numberedList": "Element hinzufügen",
            "checkList": "Zu erledigen",
            "callout": "Schreiben Sie einen Hinweis",
            "addIconTooltip": "Klicken Sie, um unten einzufügen",
            "dragIconTooltipActionMenu": "Klicken Sie, um zu öffnen",
            "dragIconTooltip": "(Halten zum Ziehen)",
            "insertLink": "Link einfügen",
            "linkText": "Text",
            "linkTextPlaceholder": "Linktext",
            "linkUrl": "URL",
            "linkUrlPlaceholder": "https://example.com",
            "linkTitle": "Titel",
            "linkTitlePlaceholder": "Linktitel",
            "linkOpenInNewWindow": "In neuem Fenster öffnen",
            "linkInsert": "Einfügen",
            "linkRemove": "Entfernen",
            "linkCancel": "Abbrechen",
            "codeCopyTooltip": "Code kopieren"
        }
    }
})
  const blocksData = [
    {
      id: 'block-1',
      type: 'Heading1',
      content: [{ type: ContentType.Text, content: 'Sample Heading' }]
    },
    {
      id: 'block-2',
      type: 'Paragraph',
      content: [{ type: ContentType.Text, content: 'This is a sample paragraph block.' }]
    },
    {
      id: 'block-3',
      type: 'Paragraph'
    }
  ];

  return (
      <BlockEditorComponent id="blockeditor_locali" blocks={blocksData}  locale="de"></BlockEditorComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('container'));
