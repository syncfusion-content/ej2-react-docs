---
layout: post
title: Value filtering in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table applies value filtering on row and column members using numeric conditions such as greater than, less than, or between.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Value filtering in React Pivot Table

Value filtering allows you to perform a filtering operation based on aggregate values. For example, to show the data where the total sum of units sold for each country is greater than 2000, apply a value filter of **2000** with the filter operator **GreaterThan** on the country field.

Value filtering can be enabled by setting the `allowValueFilter` property to **true** (default `false`).
## Value filtering through UI

Value filtering can also be performed through the UI option available in the [`grouping bar`](./grouping-bar) and [`field list`](./field-list) at runtime. Open the filter dialog for the field you want to filter, switch the type to **Value**, choose the measure, condition, and values, then apply.

## Value filtering through code

It can be configured using the `filterSettings` option through the code-behind. The settings required to filter at initial rendering are:

* `name`: Sets the normal field name.
* `type`: Sets the filter type as **Value** to the field.
* `measure`: Sets the value field name.
* `condition`: Sets the operator type such as equals, greater than, less than, etc.
* `value1`: Sets the start value.
* `value2`: Sets the end value. It is applicable only for operators such as **Between** and **NotBetween**.

The following example shows a value filter applied on the **Country** field, comparing the **Sold** measure against the value 2000:

```js
dataSourceSettings: {
  filters: [{ name: 'Country', type: 'Value', measure: 'Sold', condition: 'GreaterThan', value1: 2000 }]
}
```

Operators that can be used in value filtering are:

| Operator | Description |
|------|-------------|
| Equals | Shows rows that match the given value. |
| DoesNotEquals | Shows rows that do not match the given value. |
| GreaterThan | Shows rows where the value is greater. |
| GreaterThanOrEqualTo | Shows rows where the value is greater than or equal. |
| LessThan | Shows rows where the value is lesser. |
| LessThanOrEqualTo | Shows rows where the value is lesser than or equal. |
| Between | Shows rows whose values fall between the start and end values. |
| NotBetween | Shows rows whose values fall outside the start and end values. |

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs306/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs306/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs306" %}

## See Also

* [Filtering](./filtering)
* [Member Filtering](./member-filtering)
* [Label Filtering](./label-filtering)