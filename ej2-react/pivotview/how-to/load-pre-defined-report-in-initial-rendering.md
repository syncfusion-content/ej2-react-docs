---
layout: post
title: How to load a saved report in Pivot Table on startup | Syncfusion
description: Step-by-step example showing how to load a pre-defined report from a saved report collection on the initial render of the Pivot Table using the dataBound event.
platform: ej2-react
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# How to load a saved report in Pivot Table on startup

By default, the Pivot Table displays with the report configuration defined in the component initialization. To load a specific report from a previously saved report collection during the initial rendering process, configure the desired report name within the [`dataBound`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#databound) event. This approach allows the Pivot Table to automatically apply the selected report's configuration, including field arrangements, filters, and formatting settings, as soon as the component completes its data binding process.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs319/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs319/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs319/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs319/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs319" %}