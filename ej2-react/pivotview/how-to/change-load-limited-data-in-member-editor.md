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

## Overview

When working with large datasets in the React Pivotview component, loading all field values in the filter dialog's member editor can cause performance issues. The [`maxNodeLimitInMemberEditor`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#maxnodelimitinmembereditor) property allows you to set a limit on the number of field values displayed initially, improving the loading performance while still providing access to all data through search functionality.

## Setting the data limit

The [`maxNodeLimitInMemberEditor`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#maxnodelimitinmembereditor) property determines how many field values are loaded initially in the member editor. By default, this property is set to 1000 items.

When the number of field values exceeds this limit:
- Only the specified number of values will load initially
- A message appears indicating how many additional values are available
- Users can use the search option to find specific values from the complete dataset

> This property is available in both pivot table and field list components.

## Implementation example

In the following example, the limit of data in the member editor is set to 100. As a result, the member editor for the `ProductID` field displays only its first 100 members out of 1000 total members.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs155/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs155/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs155" %}    