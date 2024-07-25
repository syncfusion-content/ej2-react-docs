---
layout: post
title: Styling in React Rich text editor component | Syncfusion
description: Learn all about Styling in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Styling 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Styling in React Rich text editor component

## Font name and size

By default, the Rich Text Editor initializes with the font name and font size set to "Default." This configuration means that the editor will inherit the font family and font size from its parent element in the application. If the content in the Rich Text Editor inherits its font properties from any parent element, these inherited values will appear as the default selections in the respective drop-down menus.

**Customizing font styles for text sections**

To apply a different font style to a specific section of the content:
1. Select the text that you want to customize.
2. In the editor’s toolbar, open the font name drop-down menu.
3. Choose the desired font style to apply it to the selected text.
4. Similarly, you can change the font size by selecting the desired size from the font size drop-down menu.

This will update the font style and size for the highlighted section of text, allowing customization within the content of the Rich Text Editor.

### FontName DropDowns

The following table lists the default font name and width of the fontname drop-down and available list of font names.

| **Property** | **Default value** |
| --- | --- |
| default | null |
| Width | 72px |
| Items | { text: 'Default', value: '' }, { text: 'Segoe UI', value: 'Segoe UI' }, <br /> { text: 'Arial', value: 'Arial,Helvetica,sans-serif' }, <br /> { text: 'Courier New', value: 'Courier New,Courier,monospace' }, <br /> { text: 'Georgia', value: 'Georgia,serif' }, <br /> { text: 'Impact', value: 'Impact,Charcoal,sans-serif' }, <br /> { text: 'Lucida Console', value: 'Lucida Console,Monaco,monospace' }, <br /> { text: 'Tahoma', value: 'Tahoma,Geneva,sans-serif' }, <br /> { text: 'Times New Roman', value: 'Times New Roman,Times,serif' }, <br /> { text: 'Trebuchet MS', value: 'Trebuchet MS,Helvetica,sans-serif' }, <br /> { text: 'Verdana', value: 'Verdana,Geneva,sans-serif' } |

### FontSize DropDowns

The following table lists the default font size and width of the fontsize dropdown and the available list of font sizes.

| **Property** | **Default value** |
| --- | --- |
| default | null |
| Width | 60px |
| Items | { text: 'Default', value: '' }, { text: '8', value: '8pt' }, <br /> { text: '10', value: '10pt' }, <br /> { text: '12', value: '12pt' }, <br /> { text: '14', value: '14pt' }, <br /> { text: '18', value: '18pt' }, <br /> { text: '24', value: '24pt' }, <br /> { text: '36', value: '36pt' } |

The following sample demonstrates the option to add the font name and font size tools to the toolbar as well as modify the default width of the tools.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs60/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs60/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs60" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs61/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs61/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs61" %}

## Custom font and size

The Rich Text Editor provides custom fonts and sizes with the existing list.

If you want to add additional font names and font sizes to font drop-down, pass the font information as JSON data to the items field of the [`fontSize`](/rich-text-editor/api-fontSize.html) and the [`fontFamily`](/rich-text-editor/api-fontFamily.html) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs62/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs62/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs62" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs63/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs63/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs63" %}

## Font and background color

To apply font color or background color for a selected content of RTE, use font color and background color tools.

The Rich Text Editor provides customs font color and background color with the existing list through the [colorCodes](/rich-text-editor/api-backgroundColor.html#colorcode) field of fontColor and backgroundColor.

The FontColor and the BackgroundColor property has two [modes](/rich-text-editor/api-backgroundColor.html#mode) Picker and Palette. Palette mode has a predefined set of colorCode and in the picker mode, more colors has been provided. Through the [modeSwitcher](../api/rich-text-editor/backgroundColor/#modeswitcher), you can switch between these two options.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs64/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs64/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs64" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs65/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs65/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs65" %}

## Editor content styles

By default, the content styles of the Rich Text Editor are not returned when retrieving HTML value from the editor. So, the styles are not applied when using HTML values outside of the editor. To get the styles to the Rich Text Editor’s content for your application, copy and use the styles listed below directly in your application. They are used in the UI elements of the Rich Text Editor.

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