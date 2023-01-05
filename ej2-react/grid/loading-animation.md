---
layout: post
title: Loading animation in React Grid component | Syncfusion
description: Learn here all about Loading animation in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Loading animation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Loading animation in React Grid component

The grid has an option to show a loading indicator in-between the time of fetching the data and binding it to the grid during initial rendering or refreshing or after performing any grid action like sorting, filtering, grouping, and more. The grid supports two indicator types, which is achieved by setting the `loadingIndicator.indicatorType` property to Spinner or Shimmer. The default value of the indicator type is "Spinner."

In the following sample, the Shimmer indicator is displayed while the grid is loading and refreshing when using the remote data.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/data-binding-cs9/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/data-binding-cs9/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/data-binding-cs9" % }