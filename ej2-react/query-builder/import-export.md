---
layout: post
title: Import export in React Query builder component | Syncfusion
description: Learn here all about Import export in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: Import export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Import export in React Query builder component

Importing allows you to view or edit the predefined conditions which is available in JSON or SQL. You can import the conditions either initial rendering or post rendering.

## Initial rendering

To apply conditions initially, you can define the [`rule`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#rule). Here, you can import structured JSON object by defining the [`rule`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#rule) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs18/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs18/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs18" %}

## Post rendering

### Importing from JSON

You can set the conditions from structured JSON object through the [`setRules`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#setrules) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs19/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs19/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs19" %}

### Importing from SQL

You can set the conditions from SQL query through the [`setRulesFromSql`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#setrulesfromsql) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs20/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs20/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs20" %}

## Exporting

Exporting allows you to save or maintain the created conditions through the Query Builder. You can export the defined conditions by the following ways.

## Exporting to JSON

You can export the defined conditions to structured JSON object through the [`getRules`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#getrules) method.

## Exporting to SQL

You can export the defined conditions to SQL query through the [`getSqlFromRules`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#getsqlfromrules) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/import-export-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/import-export-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/import-export-cs1" %}