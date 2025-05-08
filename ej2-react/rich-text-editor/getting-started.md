---
layout: post
title: Getting started with React Rich Text Editor component | Syncfusion
description:  Checkout and learn about Getting started with React Rich Text Editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Rich Text Editor component

This section explains you the steps required to create a simple Rich Text Editor and demonstrate the basic usage of the Rich Text Editor component in React environment.

To get start quickly with React Rich Text Editor, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=5mLO6_nwzww" %}

## Setup for local development

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Rich Text Editor packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Rich Text Editor component, use the following command

```
npm install @syncfusion/ej2-react-richtexteditor --save
```

> The --save will instruct NPM to include the Rich Text Editor package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in **../node_modules/@syncfusion** package folder. This can be added as reference in **src/App.css**.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding Rich Text Editor component

Now, you can start adding React Rich Text Editor component in the application. For getting started, add the Rich Text Editor component in **src/App.tsx** file using following code.

Place the following Rich Text Editor code in the **src/App.tsx**.

```ts
/**
 * Initilaize Rich Text Editor from React element
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import './App.css';

function App() {
    let value: string = `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul>
    <li>
        <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p>
    </li>
    <li>
        <p>Bulleted and numbered lists.</p>
    </li>
    <li>
        <p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p>
    </li>
    <li>
        <p>Contains undo/redo manager. </p>
    </li>
  </ul><div style="display: inline-block; width: 60%; vertical-align: top; cursor: auto;"><img alt="Sky with sun" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" width="309" style="min-width: 10px; min-height: 10px; width: 309px; height: 174px;" class="e-rte-image e-imginline e-rte-drag-image" height="174" /></div>  `;
  return (
      <RichTextEditorComponent value={value}>
          <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
  );
}

export default App;
```

## Module injection

To create Rich Text Editor with additional features, inject the required modules. The following modules are used to extend Rich Text Editor's basic functionality.

* **HtmlEditor** - Inject this module to use Rich Text Editor as html editor.
* **Image** - Inject this module to use image feature in Rich Text Editor.
* **Link** - Inject this module to use link feature in Rich Text Editor.
* **QuickToolbar** - Inject this module to use quick toolbar feature for the target element.
* **Toolbar** - Inject this module to use Toolbar feature.

These modules should be injected into the **providers** section of root **NgModule** or component class.

> Additional feature modules are available [here](./module.md).

## Configure the toolbar

Configure the toolbar with the tools using items field of the toolbarSettings property as your application requires.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs5" %}

> The `|` and `-` can insert a vertical and horizontal separator lines in the toolbar.

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

or

```bash
yarn dev
```

The output will appear as follows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs7" %}

## Retrieve the formatted content

To retrieve the editor contents, use the `value` property of Rich Text Editor.

  ```ts
    const rteValue: string = this.rteObj.value;
   ```

Or you can use the public method `getContent` to retrieve the RTE content.

  ```ts
    const rteValue: string = this.rteObj.getContent();
  ```

To fetch the RichTextEditor's text content, use the `textContent` property of RTE `EditPanel`.

   ```ts
     const rteValue: string = this.rteObj.contentModule.getEditPanel().textContent;
   ```

## Insert images and links

The image module inserts an image into Rich Text Editor's content area, and the link module links external resources such as website URLs, to selected text in the Rich Text Editor’s content, respectively.

The link inject module adds a link icon to the toolbar and the image inject module adds an image icon to the toolbar.

Specifies the items to be rendered in the quick toolbar based on the target element such image, link, and text element. The quick toolbar opens to customize the element by clicking the target element.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs6" %}

## See also

* [Accessibility in Rich text editor](https://ej2.syncfusion.com/react/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/react/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/react/documentation/rich-text-editor/globalization)

> You can refer to our [React Rich Text Editor](https://www.syncfusion.com/react-components/react-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Rich Text Editor example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/rich-text-editor/rich-text-editor) that shows how to render the Rich Text Editor tools.
