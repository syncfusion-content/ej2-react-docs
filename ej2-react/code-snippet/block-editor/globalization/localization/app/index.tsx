{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { BlockModel, ContentType } from '@syncfusion/ej2-blockeditor';
import { L10n } from '@syncfusion/ej2-base';

function App() {
  L10n.load({
    'de': {
        "blockeditor": {
	            "paragraph": "Schreiben Sie etwas oder ‚/‘ für Befehle.",
            "heading1": "Überschrift 1",
            "heading2": "Überschrift 2",
            "heading3": "Überschrift 3",
            "heading4": "Überschrift 4",
            "collapsibleParagraph": "Umschaltbarer Absatz",
            "collapsibleHeading1": "Umschaltbare Überschrift 1",
            "collapsibleHeading2": "Umschaltbare Überschrift 2",
            "collapsibleHeading3": "Umschaltbare Überschrift 3",
            "collapsibleHeading4": "Umschaltbare Überschrift 4",
            "bulletList": "Element hinzufügen",
            "numberedList": "Element hinzufügen",
            "checklist": "Zu erledigen",
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
// Initial blocks data
const blocksData: BlockModel[] = [
  {
    id: 'block-1',
    type: 'Heading',
    props: { level: 1 },
    content: [
      {
        type: ContentType.Text,
        content: 'Sample Heading'
      }
    ]
  },
  {
    id: 'block-2',
    type: 'Paragraph',
    content: [
      {
        type: ContentType.Text,
        content: 'This is a sample paragraph block.'
      }
    ]
  },
  {
    id: 'block-3',
    type: 'Paragraph'
  }
];
  return (
      <BlockEditorComponent id="blockeditor_locali"  locale="de" blocks={blocksData} ></BlockEditorComponent>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}