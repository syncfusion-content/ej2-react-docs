---
layout: post
title: Clipboard in React Document editor component | Syncfusion
description: Learn here all about Clipboard in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Clipboard 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in React Document editor component

Document Editor takes advantage of system clipboard and allows you to copy or move a portion of the document into it in HTML format, so that it can be pasted in any application that supports clipboard.

## Copy

Copy a portion of document to system clipboard using built-in context menu of document editor. You can also do it programmatically using the following sample code.

```ts
documentEditor.selection.copy();
```

## Cut

Cut a portion of document to system clipboard using built-in context menu of document editor. You can also do it programmatically using the following sample code.

```ts
documentEditor.editor.cut();
```

## Paste

Due to limitations, you can paste contents from system clipboard in document editor only using the ‘CTRL + V’ keyboard shortcut.

>Note: Due to browser limitation of getting content from system clipboard, paste using API and context menu option doesn't work.

## Local paste (copy/paste within control)

Document Editor expose API to enable local paste within the control. On enabling this, the following is performed:
* Selected contents will be stored to an internal clipboard as SFDT in addition to system clipboard.
* Clipboard paste will be overridden, and internally stored data (SFDT data) that has formatted text will be pasted using paste() API in Document editor.

Refer to the following sample code.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, SfdtExport, Selection, Editor } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor);
function App() {
  let documenteditor: DocumentEditorComponent = new DocumentEditorComponent(undefined);
    React.useEffect(() => {
    componentDidMount();
}, []);
  function componentDidMount() {
    //Enable document editor local paste option.
    documenteditor.enableLocalPaste = true;
  }
  return (
    <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} />
  );
}
export default App
ReactDOM.render(<App />, document.getElementById('sample'));

```

By default, **enableLocalPaste** is false.
When local paste is enabled for a document editor instance, you can paste contents programmatically if the internal clipboard has stored data during last copy operation. Refer to the following sample code.

```ts
documentEditor.editor.paste();
```

### Paste options in context menu

In Document editor, paste options in context menu will be in disabled state if you were try to copy/paste content from outside of Document editor. It gets enabled when **enableLocalPaste** is true and trying to copy/paste content inside Document editor.

>Note: Due to browser limitation of getting content from system clipboard, paste using API and context menu option doesn't work. Hence, the paste option is disabled in context menu.

Alternatively, you can use the keyboard shortcuts,

* Cut: Ctrl + X
* Copy: Ctrl + C
* Paste: Ctrl + V

### EnableLocalPaste behavior

|**EnableLocalPaste** |**Paste behavior details**|
|--------------------------|----------------------|
|True |Allows to paste content that is copied from the same Document Editor component alone and prevents pasting content from system clipboard. Hence the content copied from outside Document Editor component can’t be pasted.<br>Browser limitation of pasting from system clipboard using API and context menu options, will be resolved. So, you can copy and paste content within the Document Editor component using API and context menu options too.|
|False|Allows to paste content from system clipboard. Hence the content copied from both the Document Editor component and outside can be pasted.<br>Browser limitation of pasting from system clipboard using API and context menu options, will remain as a limitation.|

Note:
* Keyboard shortcut for pasting will work properly in both cases.
* Copying content from Document Editor component and pasting outside will work properly in both cases.

## Paste with formatting

Document Editor provides support to paste the system clipboard data with formatting. To enable clipboard paste with formatting options, set the `enableLocalPaste` property in Document Editor to false and use this .NET Standard library [`Syncfusion.EJ2.WordEditor.AspNet.Core`](<https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Core/>) for Core by the web API service implementation. This library helps you to paste the system clipboard data with formatting.

You can paste your system clipboard data in the following ways:
* **Keep Source Formatting** This option retains the character styles and direct formatting applied to the copied text. Direct formatting includes characteristics such as font size, italics, or other formatting that is not included in the paragraph style.
* **Match Destination Formatting** This option discards most of the formatting applied directly to the copied text, but it retains the formatting applied for emphasis, such as bold and italic when it is applied to only a portion of the selection. The text takes on the style characteristics of the paragraph where it is pasted. The text also takes on any direct formatting or character style properties of text that immediately precedes the cursor when the text is pasted.
* **Text Only** This option discards all formatting and non-text elements such as pictures or tables. The text takes on the style characteristics of the paragraph where it is pasted and takes on any direct formatting or character style properties of text that immediately precedes the cursor when the text is pasted. Graphical elements are discarded and tables are converted to a series of paragraphs.

This paste option appears as follows.

![Image](images/paste.png)

## See Also

* [Feature modules](../document-editor/feature-module)
* [Keyboard shortcuts](../document-editor/keyboard-shortcut#clipboard)