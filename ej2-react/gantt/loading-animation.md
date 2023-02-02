---
layout: post
title: Loading animation in React Gantt component | Syncfusion
description: Learn here all about Loading animation in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Loading animation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Loading animation in React Gantt component

The loading indicator is used to display a visual indicator while the Gantt is fetching data or performing certain actions, such as sorting or filtering. The gantt support two indicator types, which is achieved by setting the [`loadingIndicator.indicatorType`](https://ej2.syncfusion.com/react/documentation/api/gantt/#loadingindicator) property to Shimmer or Spinner. The default value of the indicator type is "Spinner."

In the following sample, the Shimmer indicator is displayed while the gantt is scrolled when using the virtual data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/loadinganimation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/loadinganimation-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/loadinganimation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/loadinganimation-cs1" %}
