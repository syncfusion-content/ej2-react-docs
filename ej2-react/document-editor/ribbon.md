---
layout: post
title: Ribbon in React Document editor control | Syncfusion
description: Learn here all about the Ribbon UI in Syncfusion React Document editor control, how to switch between Ribbon and Toolbar modes.
platform: ej2-react
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon in React Document Editor Control

The Document Editor provides a modern Ribbon interface similar to Microsoft Word's interface. This Ribbon UI provides an efficient and intuitive way to access editing features, organizing commands within well-structured tabs and groups to enhance your document editing experience. Additionally, the Ribbon interface supports contextual tabs. Contextual tabs appear only when certain elements, such as tables, images, or headers/footers, are selected in the document.

You can switch between the classic **Toolbar** and the new **Ribbon** UI, and you can also choose between **Classic** and **Simplified** ribbon layouts.

## Enable Ribbon Mode

To enable Ribbon in React Document Editor, use the [`toolbarMode`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/#toolbarmode) property of `DocumentEditorContainer`. The available toolbar modes are:

- **'Toolbar'** - The traditional toolbar UI.
- **'Ribbon'** - The Ribbon UI, which provides a tabbed interface with grouped commands.

By default, `toolbarMode` is `Toolbar`.

The following code shows the how to enable the `Ribbon` in Document Editor.

```ts

import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { DocumentEditorContainerComponent, Ribbon, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar, Ribbon);
const Default = () => {
    let hostUrl = "https://services.syncfusion.com/react/production/api/documenteditor/";
    let container;
    // Initialize the Document Editor Container with Ribbon mode enabled
    return (<div className="control-pane">
    <div className="control-section">
      <div id="documenteditor_container_body">
        <DocumentEditorContainerComponent
          id="container"
          ref={container}
          style={{ display: 'block' }}
          height={'590px'}
          toolbarMode={'Ribbon'} // Options: 'Ribbon' or 'Toolbar'
          serviceUrl={hostUrl}
          enableToolbar={true}
          locale="en-US"
        />
      </div>
    </div>
  </div>);
};
export default Default;
const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```

## Ribbon Layouts

Document Editor provides two different Ribbon layouts:

- **Classic**: A traditional Office-like ribbon with detailed grouping and larger icons
- **Simplified**: A more compact ribbon design with streamlined controls

By default, `ribbonLayout` is set to `Simplified`. 

The following code shows the how to configure the ribbon layout in Document Editor:

```ts

import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { DocumentEditorContainerComponent, Ribbon, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar, Ribbon);
const Default = () => {
    let hostUrl = "https://services.syncfusion.com/react/production/api/documenteditor/";
    let container;
    // Initialize the Document Editor Container with Ribbon mode enabled
    return (<div className="control-pane">
    <div className="control-section">
      <div id="documenteditor_container_body">
        <DocumentEditorContainerComponent
          id="container"
          ref={container}
          style={{ display: 'block' }}
          height={'590px'}
          toolbarMode={'Ribbon'} // Options: 'Ribbon' or 'Toolbar'
          ribbonLayout= {'Classic'}
          serviceUrl={hostUrl}
          enableToolbar={true}
          locale="en-US"
        />
      </div>
    </div>
  </div>);
};
export default Default;
const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```

## See Also

* [How to customize the ribbon](../document-editor/how-to/customize-ribbon)