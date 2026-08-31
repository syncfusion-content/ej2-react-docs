---
layout: post
title: How to change display mode in React Query Builder UI | Syncfusion
description: Switch the React Query Builder UI layout between vertical and horizontal orientations with the displayMode property for compact or stacked rules.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to change display mode in React Query Builder UI

The Query Builder supports two layout orientations to accommodate different UI preferences. Display the component vertically or horizontally using the [`displayMode`](https://ej2.syncfusion.com/react/documentation/api/query-builder#displaymode) property. The default value is `"Horizontal"`.

The `displayMode` property accepts the following values:

| Value | Description | UI effect |
| --- | --- | --- |
| `Horizontal` | Renders the field, operator, and value editors side-by-side in a single row. | Compact and ideal for wide layouts. |
| `Vertical` | Stacks the field, operator, and value editors in a single column. | Useful for narrow viewports and mobile screens. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs11/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs11/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs11" %}

> The default display mode is horizontal.