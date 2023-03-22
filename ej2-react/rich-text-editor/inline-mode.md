---
layout: post
title: Inline mode in React Rich text editor component | Syncfusion
description: Learn here all about Inline mode in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Inline mode 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Inline mode in React Rich text editor component

This is the inline example for the Rich Text Editor. For this you must set the [inlineMode](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#inlinemode) property.

Inline edition allows you to select any editable element or click the element on the page and edit it in-place.

Inline editing is a true WYSIWYG formation and on the contrary to Rich Text Editor HTML/MD editing, the styles that are used for edited content comes directly from the document stylesheet. This means that inline editors ignore the default Rich Text Editor content styles.

## Show on select/click

Enabling the [onSelection](/rich-text-editor/api-inlineModeModel.html#onselection) option of inlineMode makes the inline Rich Text Editor to appear.  You can select the text in the editable area otherwise the inline Rich Text Editor will be appear once click into the editable area.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs34/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs34/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs34" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs35/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs35/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs35" %}