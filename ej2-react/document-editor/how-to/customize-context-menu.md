---
layout: post
title: Customize context menu in React Document editor component | Syncfusion
description: Learn here all about Customize context menu in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Customize context menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize context menu in React Document editor component

## How to customize context menu in Document Editor

Document Editor allows you to add custom option in context menu. It can be achieved by using the [`addCustomMenu()`](../../api/document-editor/contextMenu/#addcustommenu) method and custom action is defined using the [`customContextMenuSelect`](https://ej2.syncfusion.com/react/documentation/api/document-editor/customContentMenuEventArgs/)

### Add Custom Option

The following code shows how to add custom option in context menu.

```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import {
  DocumentEditorContainerComponent,
  CustomToolbarItemModel,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
let container = DocumentEditorContainerComponent;
function App() {
  function onCreate() {
    // creating Custom Options
    let menuItems = [
      {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find',
      },
    ];
    // adding Custom Options
    container.documentEditor.contextMenu.addCustomMenu(menuItems, false);
    // custom Options Select Event
    container.documentEditor.customContextMenuSelect = (args) => {
      // custom Options Functionality
      let id = container.documentEditor.element.id;
      switch (args.id) {
        case id + 'search_in_google':
          // To get the selected content as plain text
          let searchContent = container.documentEditor.selection.text;
          if (
            !container.documentEditor.selection.isEmpty &&
            /\S/.test(searchContent)
          ) {
            window.open('http://google.com/search?q=' + searchContent);
          }
          break;
      }
    };
  }
  return (
    <div>
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
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);

```

### Customize custom option in context menu

Document Editor allows you to customize the added custom option and also to hide/show default context menu.

#### Hide default context menu items

Using [`addCustomMenu()`](../../api/document-editor/contextMenu/#addcustommenu) method, you can hide the default context menu. By setting second parameter as true.

The following code shows how to hide default context menu and add custom option in context menu.

```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import {
  DocumentEditorContainerComponent,
  CustomToolbarItemModel,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
let container = DocumentEditorContainerComponent;
function App() {
  function onCreate() {
  
      // creating Custom Options
      let menuItems = [
        {
          text: 'Search In Google',
          id: 'search_in_google',
          iconCss: 'e-icons e-de-ctnr-find',
        },
      ];
      // adding Custom Options
      container.documentEditor.contextMenu.addCustomMenu(menuItems, true);
  
  }
  return (
    <div>
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
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);


```

#### Customize added context menu items

The following code shows how to hide/show added custom option in context menu using the [`customContextMenuBeforeOpen`](https://ej2.syncfusion.com/react/documentation/api/document-editor/beforeOpenCloseCustomContentMenuEventArgs/).

```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import {
  DocumentEditorContainerComponent,
  CustomToolbarItemModel,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
let container = DocumentEditorContainerComponent;
function App() {
  function onCreate() {
  
     // creating Custom Options
    let menuItems = [
      {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find',
      },
    ];
    // adding Custom Options
    container.documentEditor.contextMenu.addCustomMenu(menuItems, false);
    // custom Options Select Event
    container.documentEditor.customContextMenuSelect = (args) => {
      // custom Options Functionality
      let id = container.documentEditor.element.id;
      switch (args.id) {
        case id + 'search_in_google':
          let searchContent = container.documentEditor.selection.text;
          if (!container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
            window.open('http://google.com/search?q=' + searchContent);
          }
          break;
      }
    };
    //  custom options hide/show functionality
    container.documentEditor.customContextMenuBeforeOpen = (args) => {
      let search = document.getElementById(args.ids[0]);
      search.style.display = 'none';
      let searchContent = container.documentEditor.selection.text;
      if (!container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
        search.style.display = 'block';
      }
    };
  
  }
  return (
    <div>
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
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);


```

The following is the output of custom context menu with customization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/customize-context-menu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/customize-context-menu-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/customize-context-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/customize-context-menu-cs1" %}
