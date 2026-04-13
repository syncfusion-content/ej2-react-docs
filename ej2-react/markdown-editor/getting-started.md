---
layout: post
title: Getting Started with React Markdown Editor component | Syncfusion
description:  Checkout and learn about Getting started with React Markdown Editor component of Syncfusion Essential JS 2 and more details.
control: Getting Started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Markdown Editor Component

This section explains you the steps required to create a simple Markdown Editor and demonstrate the basic usage of the Markdown Editor component in React environment.

## Create a React Application

Run the following commands to set up a React application:

```bash
npm create vite@7 my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@7 my-app -- --template react-ts
cd my-app
npm run dev
```

## Adding Syncfusion Rich Text Editor packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Rich Text Editor component, use the following command

```
npm install @syncfusion/ej2-react-richtexteditor
```

## Adding CSS reference

The following CSS files are available in **../node_modules/@syncfusion** package folder. This can be added as reference in **src/App.css**.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
```
## Module Injection

To create Markdown Editor with additional features, inject the required modules. The following modules are used to extend Markdown Editor's basic functionality.

* **MarkdownEditor** - Inject this module to use Rich Text Editor as markdown editor.
* **Image** - Inject this module to use image feature in Markdown Editor.
* **Link** - Inject this module to use link feature in Markdown Editor.
* **Toolbar** - Inject this module to use Toolbar feature.

These modules should be injected into the `services` section of the component as shown below:

```typescript
<RichTextEditorComponent >
      <Inject services={[MarkdownEditor,Image, Link, Toolbar]} />
</RichTextEditorComponent>
```

> Additional feature modules are available [here](https://ej2.syncfusion.com/react/documentation/rich-text-editor/module).

## Adding Markdown Editor component

Now, you can start adding React Markdown Editor component in the application. For getting started, add the Markdown Editor component in **src/App.tsx** file using following code.

Place the following Markdown Editor code in the **src/App.tsx**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/markdown-editor/getting-started-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/markdown-editor/getting-started-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/markdown-editor/getting-started-cs3" %}

## Configure the Toolbar

Configure the toolbar with the tools using items field of the [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor#toolbarsettings) property as your application.

```typescript
import { MarkdownEditor, Inject, RichTextEditorComponent, Toolbar, Link, Image, Table } from '@syncfusion/ej2-react-richtexteditor';

function App() {
  let rteValue = "In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation. The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.";

  const toolbarSettings = { items: [ 'Bold', 'Italic', 'StrikeThrough', 'SuperScript', 'SubScript', '|', 'Formats', '|', 'OrderedList',
  'UnorderedList', 'CreateLink', 'Image', 'CreateTable', '|', 'Undo', 'Redo', ]  };
  return (
    <RichTextEditorComponent value={rteValue} editorMode={"Markdown"} toolbarSettings={toolbarSettings}>
      <Inject services={[Toolbar, MarkdownEditor, Link, Image, Table]} />
    </RichTextEditorComponent>
  );
}
export default App;

```

> The `|` and `-` can insert a vertical and horizontal separator lines in the toolbar.

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output will appear as follows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/markdown-editor/getting-started-cs1" %}

## See also

* [Accessibility in Markdown editor](https://ej2.syncfusion.com/react/documentation/markdown-editor/accessibility)
* [Keyboard support in Markdown editor](https://ej2.syncfusion.com/react/documentation/markdown-editor/keyboard-support)