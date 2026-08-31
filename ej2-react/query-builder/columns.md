---
layout: post
title: Column Binding in React Query Builder UI | Syncfusion
description: Bind JavaScript arrays or DataManager sources to React Query Builder UI columns. Define fields, labels, operators, and types for each rule schema.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column Binding in React Query Builder UI

Column definitions define the schema for the Query Builder, controlling how fields appear and behave. These definitions map to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/query-builder#datasource) and directly influence all query operations, including rule and group creation and deletion. The [`field`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel#field) property is essential for binding data source values to query builder columns.

> If the column field is not specified in the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/query-builder#datasource), the column values will remain empty.

## Auto generation

When the [`columns`](https://ej2.syncfusion.com/react/documentation/api/query-builder#columns) property is empty or undefined during initialization, the Query Builder automatically generates columns from all fields in the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/query-builder#datasource).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs1" %}

> When columns are auto-generated, the column type is inferred from the first record in the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/query-builder#datasource).

## Labels

By default, the column label is derived from the column [`field`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel#field) name. To customize the label, define the [`label`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel#label) property.

## Operators

Define the available operators for each column using the [`operators`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel#operators) property. The following operators are supported based on data type:

| Operators | Description | Supported Types |
| ------------ | ----------------------- | ------------------ |
| startswith  | Checks whether the value begins with the specified string. | String |
| endswith  | Checks whether the value ends with the specified string. | String |
| contains | Checks whether the value contains the specified string. | String |
| equal | Checks whether the value equals the specified value. | String, Number, Date, Boolean |
| notequal | Checks whether the value does not equal the specified value. | String, Number, Date, Boolean |
| greaterthan | Checks whether the value is greater than the specified value. | Date, Number |
| greaterthanorequal | Checks whether a value is greater than or equal to the specified value. | Date, Number |
| lessthan | Checks whether the value is less than the specified value.| Date, Number |
| lessthanorequal | Checks whether the value is less than or equal to the specified value. | Date, Number |
| between | Checks whether the value is between the two specified values. | Date, Number |
| notbetween | Checks whether the value is not between the two specified values. | Date, Number |
| in | Checks whether the value is one of the specified values. | String, Number |
| notin | Checks whether the value is not in the specified values. | String, Number |
| isempty | Checks whether the value is empty. | String |
| isnotempty | Checks whether the value is not empty. | String |
| isnull | Checks whether the value is null. | String, Number |
| isnotnull | Checks whether the value is not null. | String, Number |

## Step

The Query Builder allows you to set step values for number fields, making numeric input easier to navigate. Use the [`step`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel#step) property to define the increment applied to the numeric textbox. The default value is `1`, and accepted values are positive non-zero numbers.

## Format

The Query Builder formats date and number values. Use the [`format`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel#format) property to format date and number values.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs2" %}

## Validations

Validation allows you to validate the conditions and it displays errors for invalid fields when using the [`validateFields`](https://ej2.syncfusion.com/react/documentation/api/query-builder#validatefields) method. To enable validation in the Query Builder, set [`allowValidation`](https://ej2.syncfusion.com/react/documentation/api/query-builder#allowvalidation) to true. Column fields are validated once `allowValidation` is set to true. You should manually configure the validation for the Operator and Value fields through the [`validation`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel#validation) property.

Additionally, the `validation` model supports `isRequired`, `min`, `max`, and `message` properties for customizing field-level error messages and constraints.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs3" %}

> Set [`isRequired`](https://ej2.syncfusion.com/react/documentation/api/query-builder/validation#isrequired) validation for Operator and Value fields.
> Set [`min`](https://ej2.syncfusion.com/react/documentation/api/query-builder/validation#min), [`max`](https://ej2.syncfusion.com/react/documentation/api/query-builder/validation#max) values for number values.
