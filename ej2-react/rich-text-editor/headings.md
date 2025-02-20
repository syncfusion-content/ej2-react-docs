---
layout: post
title: Headings in React Rich Text Editor component | Syncfusion
description: Learn here all about Headings in Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Headings 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Heading Styles in the React Rich Text Editor Component

The React Rich Text Editor component provides a feature to format text with various heading styles, such as Heading 1, Heading 2, Heading 3, and Heading 4. These headings allow for structuring content hierarchically, improving readability, and organizing information effectively.

## Applying Heading Styles

To enable heading styles in your Rich Text Editor:

1. Ensure the `Formats` item is included in the toolbar configuration.
2. To apply a heading:
    * Select the desired text
    * Click the `Formats` dropdown in the toolbar
    * Choose the appropriate heading level (e.g., Heading 1, Heading 2)

This action will format the selected text with the chosen heading style, helping to create a clear document structure and emphasize important sections.

Below are examples and code snippets demonstrating how to integrate and utilize heading formatting options effectively in the Rich Text Editor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/headings-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/headings-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/headings-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/headings-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/headings-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/headings-cs2" %}

## Customizing Format Dropdown Items

The Rich Text Editor allows you to customize the format dropdown to include specific styles such as heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, and paragraph.

To customize the format dropdown:

1. Define a `formats` array in your component configuration.
2. Specify each format option with a display name and corresponding value.

This customization enhances the editor’s functionality, enabling users to structure content with appropriate headings, improving readability and organization.

Below are examples demonstrating how to customize the format dropdown.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/headings-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/headings-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/headings-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/headings-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/headings-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/headings-cs4" %}

## See Also

* [Block Quote Formatting](https://ej2.syncfusion.com/react/documentation/rich-text-editor/quotation-formatting)
* [Bullet and Numbered Lists](https://ej2.syncfusion.com/react/documentation/rich-text-editor/list-formatting)
* [Code Block Insertion and Styling](https://ej2.syncfusion.com/react/documentation/rich-text-editor/code-block-formatting)
