---
layout: post
title: How to set maximum group count in React Query Builder | Syncfusion
description: Cap nested group depth in the React Query Builder UI with the maxGroupCount property to keep queries readable, especially on mobile screens.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set maximum group count in React Query Builder UI

Limit the nesting depth of groups by setting the [`maxGroupCount`](https://ej2.syncfusion.com/react/documentation/api/query-builder#maxgroupcount) property. The default value is `5`. The property accepts positive integers starting from `1` (which produces a flat list of conditions with no nested groups).

When the limit is reached, the **Add Group** button inside the deepest group is automatically disabled, preventing further nesting through the UI. The same limit applies when adding groups programmatically through [`addGroups`](https://ej2.syncfusion.com/react/documentation/api/query-builder#addgroups).

> Using this property in mobile environments prevents excessive nested group creation and improves usability on smaller screens.

The following example demonstrates restricting the maximum group count to `2`:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs13/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs13/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs13" %}

> Using this property in mobile environments prevents excessive nested group creation and improves usability on smaller screens.