---
layout: post
title: How to detect Tab selection in React Tab | Syncfusion
description: React to the user selecting a Syncfusion React Tab item by handling the select event and reading the new selected index.
control: Tab selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to detect Tab selection in React Tab

We can able to find the tab selection whether it is selected by user interaction or programmatically way in the [`selecting`](https://ej2.syncfusion.com/react/documentation/api/tab/#selecting) and [`selected`](https://ej2.syncfusion.com/react/documentation/api/tab/#selected) event argument with the field of `isInteracted`. When the user changes the tab through click actions it will return true otherwise, it will return false. The following code example depicts to find the tab selecting the state in selecting and selected events.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/tab-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/tab-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-cs8" %}
