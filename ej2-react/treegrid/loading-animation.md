---
layout: post
title: React TreeGrid Loading Animation | Syncfusion
description: Learn how to use loading animations in React TreeGrid, including spinner and shimmer indicators for improved loading experiences.
control: Loading animation
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Loading Animation in React TreeGrid

TreeGrid displays a loading indicator while data is fetched and bound during initial rendering, refresh operations, and after actions such as sorting or filtering.

Two indicator types are supported and configured with the `loadingIndicator.indicatorType` property: `Spinner` or `Shimmer`. The default is `Spinner`.

In the following sample, the `Shimmer` indicator is shown while the TreeGrid loads and refreshes with remote data.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/indicator-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/indicator-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/indicator-cs1" %}