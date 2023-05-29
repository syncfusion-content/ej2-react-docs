---
layout: post
title: Position the dialog on center of the page on scrolling in React Dialog component | Syncfusion
description: Learn here all about Position the dialog on center of the page on scrolling in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Position the dialog on center of the page on scrolling 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Position the dialog on center of the page on scrolling in React Dialog component

By default, when scroll the page/container Dialog also scrolled along with the page/container. When a user expects to display the Dialog in the same position without scrolling achieving this in sample level as like below. Here added 'e-fixed' class to Dialog element and prevent the scrolling.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/scrollposition-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/scrollposition-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/scrollposition-cs2" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/scrollposition-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/scrollposition-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/scrollposition-cs3" %}