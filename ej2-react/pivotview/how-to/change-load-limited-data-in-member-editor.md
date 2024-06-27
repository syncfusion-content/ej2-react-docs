---
layout: post
title: Change load limited data in member editor in React | Syncfusion
description: Learn here all about Change load limited data in member editor in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Change load limited data in member editor 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Change load limited data in member editor in React

In the filter dialog, you can set the limit to display the field values while loading large data. Based on this limit, the initial loading will complete quickly without any performance constraint. You can use the search option to refine the field values from the exceeded limit and refine the data further. A message with the remaining data count will be displayed in the member editor. The data limit can be set in the `maxNodeLimitInMemberEditor` property.

By default, the property holds the value 1000.

> The property is available in both pivot table and field list components.

In the following example, the limit of data in the member editor is set to 100. So, the member editor of the `ProductID` field shows only its first 100 members from its 1000 members.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs155/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs155/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs155" %}
