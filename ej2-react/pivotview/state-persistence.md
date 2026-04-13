---
layout: post
title: State persistence in React Pivotview component | Syncfusion
description: Learn here all about State persistence in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: State persistence 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in React Pivot Table component

State persistence enables users to automatically retain the entire configuration of the Pivot Table component in the browser's local storage (cookies). This includes the current layout, field arrangements, sorting, applied filters, and the expanded or collapsed states of fields. By enabling the [`enablePersistence`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#enablepersistence) property in the Pivot Table component, all these interactive states and settings are saved automatically. As a result, users can refresh the browser or navigate to different pages and return at any time, knowing that all modified report settings will be retained—ensuring a seamless and uninterrupted data analysis experience.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs286/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs286/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs286/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs286/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs286" %}

## Save and Load Pivot Layout

In addition to automatic state persistence, the Pivot Table component allows you to save and restore the current layout programmatically. By using the [`getPersistData`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#getpersistdata) method, you can retrieve the complete state of the Pivot Table component as a serialized string. This string can be stored and later re-applied to the component by passing it to the [`loadPersistData`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#loadpersistdata) method. This approach offers flexibility for saving user-specific layouts, restoring previous configurations, or implementing custom workflows for managing and reloading the component’s state as needed.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs287/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs287/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs287/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs287/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs287" %}