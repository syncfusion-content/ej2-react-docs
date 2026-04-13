---
layout: post
title: Positioning Cursor at Content End in Rich Text Editor | Syncfusion
description: Learn here all about Positioning Cursor at Content End in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Positioning Cursor at Content End
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Positioning Cursor at Content End in React Rich Text Editor

To focus the cursor at the end of the content in the Rich Text Editor, you need to ensure the editor is focused and then manipulate the selection to place the cursor at the end. This involves focusing the editor using the `focus` method and then using the `Range` and `Selection` objects to collapse the range at the end of the content. Adding a slight delay (using `setTimeout`) ensures the focus is properly set before manipulating the cursor position.

The following example illustrates how to programmatically focus the cursor at the end of the Rich Text Editor content.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/cursor-at-end-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/cursor-at-end-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/cursor-at-end-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/cursor-at-end-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/cursor-at-end-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/cursor-at-end-cs2" %}
