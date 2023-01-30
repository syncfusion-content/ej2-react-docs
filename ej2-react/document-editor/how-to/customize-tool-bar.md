---
layout: post
title: Customize tool bar in React Document editor component | Syncfusion
description: Learn here all about Customize tool bar in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Customize tool bar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize tool bar in React Document editor component

## How to customize existing toolbar in DocumentEditorContainer

Document Editor Container allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by [`CustomToolbarItemModel`](https://ej2.syncfusion.com/react/documentation/api/document-editor/customToolbarItemModel/) and with existing items in [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/#toolbaritems) property. Newly added item click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/react/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - Existing items can be shown or hidden using the [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/#toolbaritems) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/react/documentation/api/document-editor/toolbarItem/).

* Enable, Disable -  Toolbar items can be enabled or disable using [`enableItems`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/toolbar/#enableItems)

```ts
  import "./App.css";
  import * as React from "react";
  import { DocumentEditorContainerComponent, Toolbar, CustomToolbarItemModel } from "@syncfusion/ej2-react-documenteditor";
  DocumentEditorContainerComponent.Inject(Toolbar);
  export default class App extends React.Component {
      public container: DocumentEditorContainerComponent;
      render() {
          //Custom toolbar item.
          let toolItem: CustomToolbarItemModel = {
              prefixIcon: "e-de-ctnr-lock",
              tooltipText: "Disable Image",
              text: "Disable Image",
              id: "Custom"
          };
          let items = [
              toolItem,
              "Undo",
              "Redo",
              "Separator",
              "Image",
              "Table",
              "Hyperlink",
              "Bookmark",
              "Comments",
              "TableOfContents",
              "Separator",
              "Header",
              "Footer",
              "PageSetup",
              "PageNumber",
              "Break",
              "Separator",
              "Find",
              "Separator",
              "LocalClipboard",
              "RestrictEditing"
          ];
          return (
              <DocumentEditorContainerComponent
                  ref={scope => {
                      this.container = scope;
                  }}
                  id="container"
                  style={{ height: "590px" }}
                  toolbarItems={items}
                  toolbarClick={this.onToolbarClick.bind(this)}
                  enableToolbar={true}
              />
          );
      }
      onToolbarClick = (args: ClickEventArgs): void => {
          switch (args.item.id) {
              case "Custom":
                  //Disable image toolbar item.
                  this.container.toolbar.enableItems(4, false);
                  break;
              default:
                  break;
          }
      };
  }
```

>Note: Default value of `toolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields']`.