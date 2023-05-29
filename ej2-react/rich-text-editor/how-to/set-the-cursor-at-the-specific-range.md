---
layout: post
title: Set the cursor at the specific range in React Rich text editor component | Syncfusion
description: Learn here all about Set the cursor at the specific range in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Set the cursor at the specific range 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set the cursor at the specific range in React Rich text editor component

This can be achieved by using `setRange` method in the RTE using `NodeSelection` instance. In this below sample, we have passed the text node (specific location in RTE content) in `setStart` method and passed the range in `setRange` method of RTE.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs22/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs22/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs22" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs23/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs23/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs23" %}
