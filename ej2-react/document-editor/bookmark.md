---
layout: post
title: Bookmark in React Document editor component | Syncfusion
description: Learn here all about Bookmark in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Bookmark 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Bookmark in React Document editor component

Bookmark is a powerful tool that helps you to mark a place in the document to find again easily. You can enter many bookmarks in the document and give each one a unique name to identify easily.

Document Editor provides built-in dialog to add, delete, and navigate bookmarks within the document. To add a bookmark, select a portion of text in the document. After that, jump to the location or add links to it within the document using built-in hyperlink dialog. You can also delete bookmarks from a document.

>Bookmark names need to begin with a letter. They can include both numbers and letters, but not spaces. To separate the words, use an underscore.
>Bookmark names starting with an underscore are called hidden bookmarks. For example, bookmarks generated for table of contents.

## Add bookmark

Using [`insertBookmark`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor/#insertbookmark) method, Bookmark can be added to the selected text.

```csharp
this.container.documentEditor.editor.insertBookmark("Bookmark1");
```

## Select Bookmark

You can select the bookmark in the document using [`selectBookmark`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection/#selectbookmark) method by providing Bookmark name to select as shown in the following code snippet.

```csharp
this.container.documentEditor.selection.selectBookmark("Bookmark1");
```

## Delete Bookmark

You can delete bookmark in the document using [`deleteBookmark`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor/#deletebookmark) method as shown in the following code snippet.

```csharp
this.container.documentEditor.editor.deleteBookmark("Bookmark1");
```

## Get Bookmark

You can get all the bookmarks in the document using [`getBookmarks`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection/#getbookmarks) method as shown in the following code snippet.

```csharp
this.container.documentEditor.selection.getBookmarks(false);
```

>Note: Parameter denotes is include hidden bookmarks. If false, ignore hidden bookmark.

## Bookmark Dialog

The following example shows how to open bookmark dialog in document editor.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, SfdtExport, Selection, Editor, BookmarkDialog } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, BookmarkDialog);

function Default() {
let documenteditor: DocumentEditorComponent = new DocumentEditorComponent(undefined);
function showBookmarkDialog() {
    //Open bookmark dialog.
    documenteditor.showDialog('Bookmark');
}

    return (
        <div>
             <button onClick={showBookmarkDialog}>Dialog</button>
            <DocumentEditorComponent id="container" height={'330px'} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableBookmarkDialog={true} />
        </div>
    );
}
export default Default
ReactDOM.render(<Default />, document.getElementById('sample'));

```


## See Also

* [Feature modules](../document-editor/feature-module/)
* [Bookmark dialog](../document-editor/dialog#bookmark-dialog)
