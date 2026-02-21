---
layout: post
title: Virtualization in React MultiColumn Combobox component | Syncfusion
description: Checkout and learn about Virtualization in React MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: MultiColumn Combobox
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in React MultiColumn ComboBox component

MultiColumn ComboBox virtualization is a technique used to efficiently render extensive lists of items while minimizing the impact on performance. This method is particularly advantageous when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created. When scrolling through the list, existing DOM elements are reused to display relevant data instead of generating new elements for each item. This recycling process is managed internally.

Enabling the [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox#enablevirtualization) property option in a MultiColumn ComboBox activates this virtualization technique.

## Binding local data

The MultiColumn Combobox can generate its list items through an object of arrays of data. For this, the appropriate columns should be mapped to the [fields](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/#fields) property. When using virtual scrolling, the list updates based on the scroll offset value, triggering a request to fetch more data from the server.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/virtualization/localdata/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/virtualization/localdata/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/virtualization/localdata" %}

## Binding remote data

The MultiColumn ComboBox retrieves data from remote services using the `DataManager` component. When binding remote data, the component fetches all data from the server and stores it locally. During virtual scrolling, additional data is retrieved from the locally stored data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/virtualization/remotedata/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/virtualization/remotedata/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/virtualization/remotedata" %}
