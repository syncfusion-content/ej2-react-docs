---
layout: post
title: Configure data grid options on editing mode in React | Syncfusion
description: Learn here all about Configure data grid options on editing mode in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Configure data grid options on editing mode 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Configure data grid options on editing mode in React

You can access the data grid options such as sort, group, filter, etc on editing mode using `beginDrillThrough` event in the pivot table. The event fires on every value cell click and provides the data grid information before it displays.

> To access the data grid options, you need to inject module for the provided options in data grid itself.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs158/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs158/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs158/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs158/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs158" %}
