---
layout: post
title: Comments in React Document editor component | Syncfusion
description: Learn here all about Comments in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Comments 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Comments in React Document editor component

Document Editor allows you to add comments to documents. You can add, navigate and remove comments in code and from the UI.

To know more about the comments in DocumentEditor component, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=Q8BYxr6OYHo" %}

## Add a new comment

Comments can be inserted to the selected text.

```ts
documentEditor.editor.insertComment('Test comment');
```
## Add a New Comment with Date, Author, and Status

Comments can be inserted into the selected text with a specified date, author, and status [`insertComment`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor/#insertcomment).

```ts
// In this example, a comment with the text "Hello world"
// is added by the author Nancy Davolio on July 23, 2024, at 2:30 PM. 
// The isResolved status is set to false.

// Create a specific date: July 23, 2024, at 2:30:00 PM.
// Note: July is represented by 6 (0-based index).
let specificDate = new Date(2024, 6, 23, 14, 30, 0); 

// Define the properties of the comment including author, date, and resolution status.
let commentProperties: CommentProperties = { 
    author: 'Nancy Davolio',          // The author of the comment.
    dateTime: specificDate,           // The date and time when the comment is created.
    isResolved: false                 // The status of the comment; false indicates it is unresolved.
};

// Insert the comment with the specified properties into the document editor.
documentEditor.editor.insertComment('Hello world', commentProperties);
```

## Add a Reply Comment with Date, Author, and Status

Reply comments can be inserted into the parent comment with a specified date, author using [`insertReplyComment`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor/#insertreplycomment).

```ts
// In this example, a comment with the text "Hello world"
// is added by the author Nancy Davolio on July 23, 2024, at 2:30 PM. 
// The isResolved status is set to false.

// Create a specific date: July 23, 2024, at 2:30:00 PM.
// Note: July is represented by 6 (0-based index).
let specificDate = new Date(2024, 6, 23, 14, 30, 0); 

// Define the properties of the comment including author, date, and resolution status.
let commentProperties: CommentProperties = { 
    author: 'Nancy Davolio',          // The author of the comment.
    dateTime: specificDate,           // The date and time when the comment is created.
    isResolved: false                 // The status of the comment; false indicates it is unresolved.
};

// Insert the comment with the specified properties into the Document Editor.
let comment: Comment = documentEditor.editor.insertComment('Hello world', commentProperties);
// Insert a reply comment with specified properties into the Document Editor
documentEditor.editor.insertReplyComment(comment.id, 'Hello world', commentProperties);
```

## Get Comments

Document Editor allows to get the comments along with its reply and comment properties using [`getComments`](https://ej2.syncfusion.com/react/documentation/api/document-editor/#getcomments).

```ts
//Get Comments in the document along with the properties author, date, status.
let commentinfo: CommentInfo[] = container.documentEditor.getComments();
```

## Comment navigation

Next and previous comments can be navigated using the below code snippet.

```ts
//Navigate to next comment
documentEditor.selection.navigateNextComment();

//Navigate to previous comment
documentEditor.selection.navigatePreviousComment();
```

## Delete comment

Current comment can be deleted using [`deleteComment`](../api/document-editor/editor/#deletecomment).

```ts
//Delete the current selected comment.
container.documentEditor.editor.deleteComment();

//Get Comments in the document along with the properties author, date, status.
let commentinfo: CommentInfo[] = container.documentEditor.getComments();

//Delete the particular parent comments and all of its reply comments
container.documentEditor.editor.deleteComment(commentinfo[0].id);

//Delete the particular reply comment.
container.documentEditor.editor.deleteComment(commentinfo[0].replies[0].id);
```

## Delete all comment

All the comments in the document can be deleted using the below code snippet.

```ts
documentEditor.editor.deleteAllComments();
```

## Protect the document in comments only mode

Document Editor provides support for protecting the document with `CommentsOnly` protection. In this protection, user allowed to add or edit comments alone in the document.

Document editor provides an option to protect and unprotect document using [`enforceProtection`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor/#enforceprotection) and [`stopProtection`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor/#stopprotection) API.

The following example code illustrates how to enforce and stop protection in Document editor container.

```ts
import { createRoot } from 'react-dom/client';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container = DocumentEditorContainerComponent;
  function enforceProtection() {
    //enforce protection
    container.documentEditor.editor.enforceProtection('123', 'CommentsOnly');
  }
  function stopProtection() {
    //stop the document protection
    container.documentEditor.editor.stopProtection('123');
  }
  return (
    <div>
      <button onClick={enforceProtection}>Enforce Protection</button>
      <button onClick={stopProtection}>Stop Protection</button>
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          container = scope;
        }}
        height={'590px'}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
        enableToolbar={true}
      />
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);

```

Comment only protection can be enabled in UI by using [Restrict Editing pane](../document-editor/document-management#restrict-editing-pane)

![Enable comment only protection](images/commentsonly.png)

>Note: In enforce Protection method, first parameter denotes password and second parameter denotes protection type. Possible values of protection type are `NoProtection |ReadOnly |FormFieldsOnly |CommentsOnly`. In stop protection method, parameter denotes the password.

## Mention support in Comments

Mention support displays a list of items that users can select or tag from the suggested list. To use this feature, type the @ character in the comment box and select or tag the user from the suggestion list.

The following example illustrates how to enable mention support in the Document Editor


```ts
import { createRoot } from 'react-dom/client';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container = DocumentEditorContainerComponent;
  let mentionData = [
    { Name: 'Mary Kate', EmailId: 'marry@company.com' },
    { Name: 'Andrew James', EmailId: 'james@company.com' },
    { Name: 'Andrew Fuller', EmailId: 'andrew@company.com' },
  ];
  let settings = {
    showRuler: true,
    mentionSettings: { dataSource: mentionData, fields: { text: 'Name' } },
  };
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
        documentEditorSettings={settings}
      />
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);

```
