---
layout: post
title: Validation events in React Form validator component | Syncfusion
description: Learn here all about Validation events in Syncfusion React Form validator component of Syncfusion Essential JS 2 and more.
control: Validation events 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Validation events in React Form validator component

Validation events have two types of events. These are

* validationBegin
* validationComplete

## Validation Begin

`validationBegin` event triggers before the validation starts and also it invoke for each rules in validation process. Please find the below code snippet.

```ts

validationBegin: function(args) {
        // ("Validation begin");
      },
```

The following values are passed in `args`. You can use this values in event validation.

| Fields  | Description |
|---------|-------------|
|`element`| Specifies the input element |
|`name`   | Specifies the event name (validationBegin)  |
|`param`  | Specifies the param value (true/false)  |
|`value`  | Specifies the input value  |

## Validation Complete

`validationComplete` event triggered after validation is completed and also it invoke  for each rules in validation process. Please find the below code snippet.

```ts

validationComplete: function(args) {
        // ("Validation complete");
      }
```

The following values are passed in `args`. You can use this values in event validation.

| Fields  | Description |
|---------|-------------|
|`element`| Specifies the input element |
|`name`   | Specifies the event name (validationComplete)  |
|`param`  | Specifies the param value (true/false)  |
|`value`  | Specifies the input value  |
|`status` | Specifies the status (success/failure) |
|`inputName` | Specifies the type of input  |

Please find the simple sample for validation events.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/form-validator/validation-events-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/form-validator/validation-events-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/form-validator/validation-events-cs1" %}
