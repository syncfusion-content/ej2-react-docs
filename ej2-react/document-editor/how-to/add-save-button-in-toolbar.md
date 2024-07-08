---
layout: post
title: Add save button in React Document editor component | Syncfusion
description: Learn here to add save button in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Add save button tool bar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add save button in React Document editor toolbar

## To add a save button to the existing toolbar in DocumentEditorContainer

DocumentEditorContainer allows you to add a new button to the existing items in a toolbar using [`CustomToolbarItemModel`](https://ej2.syncfusion.com/react/documentation/api/document-editor/customToolbarItemModel/) and with existing items in [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/#toolbaritems) property. Newly added item click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/react/documentation/api/toolbar/clickEventArgs/).

{% raw %}
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
            prefixIcon: "e-save icon",
            tooltipText: "Save the Document",
            text: "Save",
            id: "save"
          };
          let items = [
              "New",
              "Open",
              toolItem,
              "Separator",
              "Undo",
              "Redo",
              "Separator",
              "Image",
              "Table",
              "Hyperlink",
              "Bookmark",
              "TableOfContents",
              "Separator",
              "Header",
              "Footer",
              "PageSetup",
              "PageNumber",
              "Break",
              "InsertFootnote",
              "InsertEndnote",
              "Separator",
              "Find",
              "Separator",
              "Comments",
              "TrackChanges",
              "Separator",
              "LocalClipboard",
              "RestrictEditing",
              "Separator",
              "FormFields",
              "UpdateFields",
              "ContentControl"
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
              case 'save':
                //Save the document(Download the document)
                this.container.documentEditor.save('sample', 'Docx');
                break;
              default:
                  break;
          }
      };
    }
```
{% endraw %}

>Note: Default value of `toolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.