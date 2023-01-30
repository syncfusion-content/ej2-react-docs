---
layout: post
title: Read by default in React Document editor component | Syncfusion
description: Learn here all about Read by default in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Read by default 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Read by default in React Document editor component

In this article, we are going to see how to open a document in read only mode by default in Document Editor & Document  Editor Container.

## Opening a document in read only mode by default in DocumentEditor

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/base-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/base-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/base-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/base-cs4" %}

## Opening a document in ready only mode by default in DocumentEditorContainer

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/base-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/base-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/base-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/base-cs5" %}

Note: You can use the `restrictEditing` in `DocumentEditorContainerComponent` and `isReadOnly` in `DocumentEditorComponent` based on your requirement to change component to read only mode.