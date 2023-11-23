---
layout: post
title: Getting started with React Rich text editor component | Syncfusion
description:  Checkout and learn about Getting started with React Rich text editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started

This article provides a step-by-step introduction to get started with the Syncfusion React Rich Text Editor component.

## Prerequisites

[System requirements for Syncfusion React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Dependencies

The following list of dependencies are required to use the `Rich Text Editor` component in the application.

```javascript
|-- @syncfusion/ej2-react-richtexteditor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-filemanager
    |-- @syncfusion/ej2-richtexteditor
    |-- @syncfusion/ej2-react-base
```

## Create the React application

To set-up, a React application, choose any of the following ways. The best and easiest way is to use the [Create-react-app](https://github.com/facebookincubator/create-react-app). It sets up the development environment in JavaScript and improvises the application for production. Refer to the [installation instructions](https://github.com/facebook/create-react-app#creating-an-app) of the `Create-react-app`

```bash
npx create-react-app my-app
cd my-app
npm start
```

or

```bash
yarn create react-app my-app
cd my-app
yarn start
```

To set-up a React application in the `TypeScript` environment, run the following command.

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

Besides using the [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) package runner tool, also create an application from the `npm init`. To begin with `npm init`, upgrade the `npm` version to `npm 6+`.

```bash
npm init react-app my-app
cd my-app
npm start
```

## Add Syncfusion React packages

Once you have created the React application, install the required Syncfusion React component package in the application. All Syncfusion React (Essential JS 2) packages are published on the [npmjs](https://www.npmjs.com/~syncfusionorg) public registry.

To install the RichTextEditor component package, use the following command.

```bash
npm install @syncfusion/ej2-react-richtexteditor --save
```

or

```bash
yarn add @syncfusion/ej2-react-richtexteditor
```

## Import the Syncfusion CSS styles

After installing the Syncfusion component packages in the application, import the required themes based on the components used.

The Syncfusion React component comes with built-in [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme), which are available in installed packages. It is quite simple to adapt the Syncfusion React components based on the application style by referring to any of the built-in themes. Import the `Material` theme for the Rich Text Editor component.

Import the CSS styles for the Rich Text Editor component and its dependencies in the `src/App.css` file.

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

Check out the [Themes topic](https://ej2.syncfusion.com/react/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in React applications.

## Add Rich Text Editor component to the application

### Initialize from React element

Start adding the required components to the application. Add the Rich Text Editor component in the `src/App.js` or `src/App.tsx` file using the following code.

* Before adding the Rich Text Editor component to the markup, import the Rich Text Editor component in the `src/App.js` or `src/App.tsx` file.

```bash
import { RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';
```

* Then, add the Rich Text Editor component in the application using the following code sample.

```ts
/**
 * Initilaize Rich Text Editor from React element
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import './App.css';

function App() {
  return (
      <RichTextEditorComponent>
          <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>

          <p><b>Key features:</b></p>
          <ul>
              <li>
                  <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
              </li>
              <li>
                  <p>Capable of handling markdown editing.</p>
              </li>
              <li>
                  <p>Contains a modular library to load the necessary functionality on demand.</p>
              </li>
              <li>
                  <p>Provides a fully customizable toolbar.</p>
              </li>
              <li>
                  <p>Provides HTML view to edit the source directly for developers.</p>
              </li>
              <li>
                  <p>Supports third-party library integration.</p>
              </li>
              <li>
                  <p>Allows preview of modified content before saving it.</p>
              </li>
              <li>
                  <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
              </li>
              <li>
                  <p>Contains undo/redo manager.</p>
              </li>
              <li>
                  <p>Creates bulleted and numbered lists.</p>
              </li>
          </ul>
          <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
  );
}

export default App;

```



### Initialize from `<IFRAME>` element

The Rich Text Editor’s content is placed in an iframe and isolated from the rest of the page.
Initialize the Rich Text Editor on div element and set the enable field of `iframeSettings` property to true.

Place the following Rich Text Editor code in the `app.tsx`.



```ts
/**
 * Rich Text Editor Iframe Samples
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  const iframeSetting: object = { enable: true };

  return (
      <RichTextEditorComponent iframeSettings={iframeSetting}>
          <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>

          <p><b>Key features:</b></p>
          <ul>
              <li>
                  <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
              </li>
              <li>
                  <p>Capable of handling markdown editing.</p>
              </li>
              <li>
                  <p>Contains a modular library to load the necessary functionality on demand.</p>
              </li>
              <li>
                  <p>Provides a fully customizable toolbar.</p>
              </li>
              <li>
                  <p>Provides HTML view to edit the source directly for developers.</p>
              </li>
              <li>
                  <p>Supports third-party library integration.</p>
              </li>
              <li>
                  <p>Allows preview of modified content before saving it.</p>
              </li>
              <li>
                  <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
              </li>
              <li>
                  <p>Contains undo/redo manager.</p>
              </li>
              <li>
                  <p>Creates bulleted and numbered lists.</p>
              </li>
          </ul>
          <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
}

export default App;

```



## Module Injection

To create Rich Text Editor with additional features, inject the required modules. The following modules are used to extend Rich Text Editor’s basic functionality.

* `Toolbar` - Inject this module to use Toolbar feature.
* `Link` - Inject this module to use link feature in Rich Text Editor.
* `Image`- Inject this module to use image feature in Rich Text Editor.
* `Table`- Inject this module to use table feature in Rich Text Editor.
* `Count` - Inject this module to use character count in Rich Text Editor.
* `HtmlEditor` - Inject this module to use Rich Text Editor as html editor.
* `MarkdownEditor`-Inject this module to use Rich Text Editor as markdown editor.
* `QuickToolbar` - Inject this module to use quick toolbar feature for the target  element.
* `Resize` - Inject this module to use resize feature in Rich Text Editor.
* `FileManager` - Inject this module to use file browser feature in Rich Text Editor.
* `PasteCleanup` - Inject this module to use paste cleanup feature in Rich Text Editor.

These modules should be inject by using services.

## Run the application

All are set. Now, run the application using the following command.

```bash
npm start
```

or

```bash
yarn start
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

## Configure the Toolbar

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

> You can refer to our [React Rich Text Editor](https://www.syncfusion.com/react-components/react-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Rich Text Editor example](https://ej2.syncfusion.com/react/demos/#/material/rich-text-editor/rich-text-editor) that shows how to render the rich text editor tools.