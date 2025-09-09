---
layout: post
title: Search Cards in React Kanban component | Syncfusion
description: Learn how to search cards in the Syncfusion React Kanban component of Syncfusion Essential JS 2 and more.
control: Search cards 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Search Cards in React Kanban Component

The Kanban component enables searching cards in the `dataSource`. You can search the cards in Kanban by using the [query](https://ej2.syncfusion.com/react/documentation/api/kanban/#query) property.

In the following sample, the searching operation starts as soon as you start typing characters in the external text box. It will search the cards based on the `Id` and `Summary` using the `search` query with `contains` operator.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/kanban/auto-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/kanban/auto-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/auto-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/auto-cs9" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/kanban/auto-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/kanban/auto-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/auto-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/auto-cs10" %}