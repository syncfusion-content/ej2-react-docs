---
layout: post
title: Getting started functional with React Rich text editor component | Syncfusion
description:  Checkout and learn about Getting started functional with React Rich text editor component of Syncfusion Essential JS 2 and more details.
control: Getting started functional 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started

This section explains the steps to create a simple Rich Text Editor and demonstrates the basic usage of the RTE component.

## Dependencies

The following minimum dependencies are required to use the Rich Text Editor.

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

## Setup for local development

Before starting, need to install [`Create-react-app`](https://github.com/facebookincubator/create-react-app) command line interface into your machine globally by using following command.

```bash
npm install -g create-react-app
```

Create a new project using create-react-app command as follows

<div class='tsx'>

```bash
create-react-app quickstart --scripts-version=react-scripts-ts

cd quickstart
```

</div>

<div class='jsx'>

```sh

create-react-app quickstart

cd quickstart

```

</div>

## Adding CSS reference

Combined CSS files are available in the Essential JS2 package root folder. This can be referred in your `[src/App.css]`. In the below code example shows that loading styles for the dependent component of Rich Text Editor.

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-icons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';

```

## Initialize Rich Text Editor component

To getting started with Rich Text Editor component add the following code in `src/App.tsx` file.

### Initialize from React element

Rich Text Editor can be initialized using React element.

Place the following Rich Text Editor code in the `App.tsx`.



```ts
/**
 * Initilaize Rich Text Editor from React element
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

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
* `QuickToolbar` - Inject this module to use quick toolbar feature for the target element.
* `Resize` - Inject this module to use resize feature in Rich Text Editor.
* `FileManager` - Inject this module to use file browser feature in Rich Text Editor.
* `PasteCleanup` - Inject this module to use paste cleanup feature in Rich Text Editor.

These modules should be inject by using services.

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

## Run the application

The [`create-react-app`](https://github.com/facebookincubator/create-react-app) will pre-configure the project to compile and run the application in browser. Use the following command to run the application.

```bash
npm start

```

Output will be displayed as follows

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs7" %}

> You can refer to our [React Rich Text Editor](https://www.syncfusion.com/react-ui-components/react-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Rich Text Editor example](https://ej2.syncfusion.com/react/demos/#/material/rich-text-editor/rich-text-editor) that shows how to render the rich text editor tools.