---
layout: post
title: Columns in React Query builder component | Syncfusion
description: Learn here all about Columns in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Columns in React Query Builder component

Column definitions define the schema for the Query Builder, controlling how fields appear and behave. These definitions map to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#datasource) and directly influence all query operations, including rule and group creation and deletion. The [`field`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel/#field) property is essential for binding data source values to query builder columns.

> If the column field is not specified in the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#datasource), the column values will remain empty.

## Auto generation

When the [`columns`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#columns) property is empty or undefined during initialization, the Query Builder automatically generates columns from all fields in the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#datasource).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs1" %}

> When columns are auto-generated, the column type is inferred from the first record in the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#datasource).

## Labels

By default, the column label is derived from the column [`field`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel/#field) name. To customize the label, define the [`label`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel/#label) property.

## Operators

Define the available operators for each column using the [`operators`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel/#operators) property. The following operators are supported based on data type:

| Operators | Description | Supported Types |
| ------------ | ----------------------- | ------------------ |
| startswith  | Checks whether the value begins with the specified string. | String |
| endswith  | Checks whether the value ends with the specified string. | String |
| contains | Checks whether the value contains the specified string. | String |
| equal | Checks whether the value equals the specified value. | String, Number, Date, Boolean |
| notequal | Checks whether the value does not equal the specified value. | String, Number, Date, Boolean |
| greaterthan | Checks whether the value is greater than the specified value. | Date Number |
| greaterthanorequal | Checks whether a value is greater than or equal to the specified value. | Date Number |
| lessthan | Checks whether the value is less than the specified value.| Date Number |
| lessthanorequal | Checks whether the value is less than or equal to the specified value. | Date Number |
| between | Checks whether the value is between the two-specific value. | Date  Number |
| notbetween | Checks whether the value is not between the two-specific value. | Date  Number |
| in | Checks whether the value is one of the specific values. | String  Number |
| notin | Checks whether the value is not in the specific values. | String  Number |

## Step

The Query Builder allows you to set the step values to the number fields. So that you can easily access the numeric textbox. Use the [`step`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel/#step) property, to set the step value for number values.

## Format

The Query Builder formats date and number values. Use the [`format`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel/#format) property to format date and number values.

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

Validation allows you to validate the conditions and it display errors for invalid fields while using  the [`validateFields`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#validatefields) method.  To enable validation in the query builder , set the allowValidation to true. Column fields are validated after setting [`allowValidation`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#allowvalidation) as to true. So, you should manually configure the validation for Operator and, Value fields through [`validation`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel/#validation).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs3" %}

> Set [`isRequired`](https://ej2.syncfusion.com/react/documentation/api/query-builder/validation/#isrequired) validation for Operator and Value fields.
> Set [`min`](https://ej2.syncfusion.com/react/documentation/api/query-builder/validation/#min), [`max`](https://ej2.syncfusion.com/react/documentation/api/query-builder/validation/#max) values for number values.
