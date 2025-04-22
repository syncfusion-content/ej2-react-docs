---
layout: post
title: Editor value in React Rich Text Editor component | Syncfusion
description: Learn here all about Editor value in Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Editor value
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Editor Value in React Rich Text Editor Component

## Set placeholder text 

Specifies the placeholder for the Rich Text Editor’s content used when the editor's content area is empty through the [placeholder](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#placeholder) property.

You can customize the appearance of the placeholder text by targeting the `e-rte-placeholder` class in your CSS. This allows you to modify properties such as font family, color, and other styles.

``` css

.e-richtexteditor .e-rte-placeholder {
    font-family: monospace;
}

```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs46/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs46/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs46" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs47/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs47/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs47" %}

## Get and set value

**Setting Values**

You can set the initial content of the Rich Text Editor using the `value` property. There are two methods to accomplish this:

* Using the [value](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#value) property directly.

* Using the [valuetemplate](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#valuetemplate) property allows you to customize the content of the Rich Text Editor.

**Retrieving Values**

To get the content from the Rich Text Editor, use the following approaches:

* Using the [value](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#value) property: This returns the current content of the editor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/editor-value-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/editor-value-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/editor-value-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/editor-value-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/editor-value-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/editor-value-cs2" %}

* Using the [change](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#change) event: The `change` event is triggered when the Rich Text Editor loses focus and its content has been modified. This event allows you to capture and handle content changes dynamically.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/editor-value-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/editor-value-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/editor-value-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/editor-value-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/editor-value-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/editor-value-cs4" %}

## Two-way binding value

Two-way binding allows the Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor to stay synchronized with the component’s state. When the state is updated, all instances of the editor using the same state will reflect the changes automatically.

In the below example, the React `useState` hook is used to manage the content of the editor. Initially, the editor displays "Initial content". After one second, a `useEffect` hook updates the state to "Updated content after 1 second".

Since both editor instances use the same state variable (editorContent), they will update simultaneously when the state changes.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/two-way-binding-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/two-way-binding-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/two-way-binding-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/two-way-binding-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/two-way-binding-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/two-way-binding-cs2" %}

With this setup, any changes made in the Rich Text Editor will update the `editorContent` property, and any programmatic changes to `editorContent` will update the editor's content. This two-way binding ensures that your component always has the most up-to-date content from the editor, and vice versa.

## Autosave

The auto-save option in the Rich Text Editor allows the content to be automatically saved during idle periods after you have typed. Once this option is enabled, the editor will save the content based on the [saveInterval](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#saveinterval) property's value, which is specified in milliseconds.

The change event will be triggered if the content has been modified since the last saved state, ensuring consistent tracking of changes without manual intervention.

In the following example, the `saveInterval={500}` property ensures content is saved every 500 milliseconds (0.5 seconds):

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/auto-save-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/auto-save-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/auto-save-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/auto-save-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/auto-save-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/auto-save-cs2" %}

## Programmatic content access

You can use the [getHtml](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#gethtml) public method to retrieve the Rich Text Editor content.

```typescript

  let editorValue: string = this.editorObj.getHtml();

```

To fetch the Rich Text Editor's text content, use [getText](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#gettext) method.

```typescript

  let editorValue: string = this.editorObj.getText();

```

## Encoded editor value

The [enableHtmlEncode](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#enablehtmlencode) property in the Rich Text Editor specifies whether the source code is displayed in an encoded format. Additionally, the [value](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#value) property also returns the content in an encoded format. This feature is particularly useful when you want to ensure that HTML content is displayed safely without being interpreted by the browser.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/html-encoder-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/html-encoder-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/html-encoder-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/html-encoder-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/html-encoder-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/html-encoder-cs2" %}

## Styling editor content

By default, the content styles of the Rich Text Editor are not included when retrieving the HTML value from the editor. This can result in the styles not being applied when using the HTML content outside of the editor. To ensure that the styles are correctly applied, you can copy and use the following styles directly in your application: These styles are used in the UI elements of the Rich Text Editor.

> Make sure to add a CSS class ‘e-rte-content’ to the content container.

```css

.e-rte-content p {
  margin: 0 0 10px;
  margin-bottom: 10px;
}

.e-rte-content li {
  margin-bottom: 10px;
}

.e-rte-content h1 {
  font-size: 2.17em;
  font-weight: 400;
  line-height: 1;
  margin: 10px 0;
}

.e-rte-content h2 {
  font-size: 1.74em;
  font-weight: 400;
  margin: 10px 0;
}

.e-rte-content h3 {
  font-size: 1.31em;
  font-weight: 400;
  margin: 10px 0;
}

.e-rte-content h4 {
  font-size: 1em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content h5 {
  font-size: 00.8em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content h6 {
  font-size: 00.65em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content blockquote {
  margin: 10px 0;
  margin-left: 0;
  padding-left: 5px;
}

.e-rte-content pre {
  background-color: inherit;
  border: 0;
  border-radius: 0;
  color: #333;
  font-size: inherit;
  line-height: inherit;
  margin: 0 0 10px;
  overflow: visible;
  padding: 0;
  white-space: pre-wrap;
  word-break: inherit;
  word-wrap: break-word;
}

.e-rte-content strong, .e-rte-content b {
  font-weight: 700;
}

.e-rte-content a {
  text-decoration: none;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}

.e-rte-content a:hover {
  text-decoration: underline;
}

.e-rte-content h3 + h4,
.e-rte-content h4 + h5,
.e-rte-content h5 + h6 {
  margin-top: 00.6em;
}

.e-rte-content .e-rte-image.e-imgbreak {
  border: 0;
  cursor: pointer;
  display: block;
  float: none;
  margin: 5px auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-image {
  border: 0;
  cursor: pointer;
  display: block;
  float: none;
  margin: auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-image.e-imginline {
  display: inline-block;
  float: none;
  margin-left: 5px;
  margin-right: 5px;
  max-width: calc(100% - (2 * 5px));
  vertical-align: bottom;
}

.e-rte-content .e-rte-image.e-imgcenter {
  cursor: pointer;
  display: block;
  float: none;
  margin: 5px auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-image.e-imgleft {
  float: left;
  margin: 0 5px 0 0;
  text-align: left;
}

.e-rte-content .e-rte-image.e-imgright {
  float: right;
  margin: 0 0 0 5px;
  text-align: right;
}

.e-rte-content .e-rte-img-caption {
  display: inline-block;
  margin: 5px auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-img-caption.e-caption-inline {
  display: inline-block;
  margin: 5px auto;
  margin-left: 5px;
  margin-right: 5px;
  max-width: calc(100% - (2 * 5px));
  position: relative;
  text-align: center;
  vertical-align: bottom;
}

.e-rte-content .e-rte-img-caption.e-imgcenter {
  display: block;
}

.e-rte-content .e-rte-img-caption .e-rte-image.e-imgright,
.e-rte-content .e-rte-img-caption .e-rte-image.e-imgleft {
  float: none;
  margin: 0;
}

.e-rte-content .e-rte-table {
  border-collapse: collapse;
  empty-cells: show;
}

.e-rte-content .e-rte-table td,
.e-rte-content .e-rte-table th {
  border: 1px solid #bdbdbd;
  height: 20px;
  min-width: 20px;
  padding: 2px 5px;
  vertical-align: middle;
}

.e-rte-content .e-rte-table.e-dashed-border td,
.e-rte-content .e-rte-table.e-dashed-border th {
  border-style: dashed;
}

.e-rte-content .e-rte-img-caption .e-img-inner {
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  font-weight: initial;
  margin: auto;
  opacity: .9;
  position: relative;
  text-align: center;
  width: 100%;
}

.e-rte-content .e-rte-img-caption .e-img-wrap {
  display: inline-block;
  margin: auto;
  padding: 0;
  width: 100%;
}

.e-rte-content blockquote {
  border-left: solid 2px #333;
}

.e-rte-content a {
  color: #2e2ef1;
}

.e-rte-content .e-rte-table th {
  background-color: #e0e0e0;
}

```

## Character count

The Character Count feature in the Rich Text Editor allows you to track and display the number of characters entered in the editor. This feature is particularly useful when you need to limit the content length or provide visual feedback to users about their input.

### How to enable character count

To enable the character count feature, set the [showCharCount](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#showcharcount) property to `true`. By default, this property is set to `false`.

When enabled, the character count is displayed at the bottom right corner of the editor.

> To use Count feature, inject Count module using the `<Inject services={[Count]} />`.

### Understanding character count color indicators

The character count color will be modified based on the characters in the Rich Text Editor.

| Status | Description |
|----------------|---------|
| normal | The character count color remains black until 70% of the maxLength count is reached.|
| warning | When the character count reaches 70% of the maxLength, the color changes to orange, indicating that the maximum limit is approaching.|
| error |Once the character count hits 90% of the maxLength, the color turns red, signaling that the limit is nearly reached.|

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/character-count-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/character-count-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/character-count-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/character-count-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/character-count-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/character-count-cs2" %}

### Setting maximum character limit

You can restrict the number of characters entered in the editor by setting the [maxLength](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#maxlength) property to a specific numeric value. When set, the maximum allowable character count is displayed alongside the current count at the bottom right of the editor.

If `maxLength` is not set, there is no limit to the character count in the editor.

### Retrieving character count programmatically

You can programmatically get the current character count in the editor using the [getCharCount](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#getcharcount) public method.

```ts
    const editorCount: number = this.editor.getCharCount();
```

## Source code editing

Rich Text Editor includes the ability for users to directly edit HTML code via `Source View` in the text area. If you made any modification in Source view directly, the changes will be reflected in the Rich Text Editor's content. So, the users will have more flexibility over the content they have created.

### Configuring source code tool in the toolbar

You can add the `SourceCode` tool in the Rich Text Editor using the `toolbarSettings` [items](../api/rich-text-editor/toolbarSettings/#items) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/code-view-support-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/code-view-support-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/code-view-support-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/code-view-support-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/code-view-support-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/code-view-support-cs2" %}


>This functionality can also be enabled through the use of the [CodeMirror](https://codemirror.net/) plugin. It helps to highlight the HTML content and ensures that any modifications in the code view are instantly reflected in the preview mode.

The Rich Text Editor provides the [showSourceCode](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#showsourcecode) method, which allows you to toggle programmatically between the code view and the formatted text view. When invoked, this method switches the editor’s view to the opposite state.

## See also

* [Customizing the placeholder in styles](./style#customizing-placeholder-text)
* [Implementing prevention of cross-site scripting (XSS)](./xhtml-validation#cross-site-scripting-xss)
* [Integrating code-mirror for enhanced syntax highlighting](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/third-party-integration#codemirror-integration)