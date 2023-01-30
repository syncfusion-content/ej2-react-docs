---
layout: post
title: Set default format in document editor in React Document editor component | Syncfusion
description: Learn here all about Set default format in document editor in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Set default format in document editor 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set default format in document editor in React Document editor component

You can set the default character format, paragraph format and section format in Document editor.

## Set the default character format

You can use [`setDefaultCharacterFormat`](https://ej2.syncfusion.com/react/documentation/api/document-editor/#setdefaultcharacterformat) method to set the default character format. For example, Document editor default font size is 11 and you can change it as any valid value.

The following example code illustrates how to change the default font size in Document editor.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorContainerComponent,
    Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    let container: DocumentEditorContainerComponent;
    function onCreate() {
        container.documentEditor.setDefaultCharacterFormat({ fontSize: 20 });
    }
    return (
        <DocumentEditorContainerComponent
            id="container"
            ref={(scope) => {
                container = scope;
            }}
            height={'590px'}
            serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
            enableToolbar={true}
            created={onCreate}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));

```

Similarly, you can change the required [`CharacterFormatProperties`](https://ej2.syncfusion.com/react/documentation/api/document-editor/characterFormatProperties) default value.

The following example code illustrates how to change other character format default value in Document editor.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,CharacterFormatProperties
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container: DocumentEditorContainerComponent;
 function onCreate() {
    let defaultCharacterFormat:CharacterFormatProperties = {
      bold: false,
      italic: false,
      baselineAlignment: 'Normal',
      underline: 'None',
      fontColor: "#000000",
      fontFamily: 'Algerian',
      fontSize: 12
   };
    container.documentEditor.setDefaultCharacterFormat(defaultCharacterFormat);
  }
    return (
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
         container = scope;
        }}
        height={'590px'}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
        enableToolbar={true}
        created={onCreate}
      />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));

```

## Set the default paragraph format

You can use [`setDefaultParagraphFormat`](https://ej2.syncfusion.com/react/documentation/api/document-editor/#setdefaultparagraphformat) API to set the default paragraph format. You can change the required [`ParagraphFormatProperties`](https://ej2.syncfusion.com/react/documentation/api/document-editor/paragraphFormatProperties) default value.

The following example code illustrates how to change the paragraph format(before spacing, line spacing etc.,) default value in Document editor.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorContainerComponent,
    Toolbar, ParagraphFormatProperties
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    let container: DocumentEditorContainerComponent;
    function onCreate() {
        let defaultParagraphFormat: ParagraphFormatProperties = {
            beforeSpacing: 8,
            lineSpacing: 1.5,
            leftIndent: 24,
            textAlignment: "Center"
        };
        container.documentEditor.setDefaultParagraphFormat(defaultParagraphFormat);
    }
    return (
        <DocumentEditorContainerComponent
            id="container"
            ref={(scope) => {
                container = scope;
            }}
            height={'590px'}
            serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
            enableToolbar={true}
            created={onCreate}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));

```

## Set the default section format

You can use [`setDefaultSectionFormat`](https://ej2.syncfusion.com/react/documentation/api/document-editor/#setdefaultsectionformat) API to set the default section format. You can change the required [`SectionFormatProperties`](https://ej2.syncfusion.com/react/documentation/api/document-editor/sectionFormatProperties) default value.

The following example code illustrates how to change the section format(header and footer distance, page width and height, etc.,) default value in Document editor.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorContainerComponent,
    Toolbar, SectionFormatProperties
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    let container: DocumentEditorContainerComponent;
    function onCreate() {
        let defaultSectionFormat: SectionFormatProperties = {
            pageWidth: 500,
            pageHeight: 800,
            headerDistance: 56,
            footerDistance: 48,
            leftMargin: 12,
            rightMargin: 12,
            topMargin: 0,
            bottomMargin: 0
        };
        container.documentEditor.setDefaultSectionFormat(defaultSectionFormat);
    }
    return (
        <DocumentEditorContainerComponent
            id="container"
            ref={(scope) => {
                container = scope;
            }}
            height={'590px'}
            serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
            enableToolbar={true}
            created={onCreate}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));

```
