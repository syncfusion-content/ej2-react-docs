---
layout: post
title: Validation Events in React Form Validation Library | Syncfusion
description: Hook into the React Form Validation Library validationBegin and validationComplete events to react to validation lifecycle stages.
control: Validation events 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Validation Events in React Form Validation Library

The FormValidator supports two types of validation events:

* validationBegin
* validationComplete

## Validation Begin

The `validationBegin` event triggers before validation starts and is invoked for each rule in the validation process. The following code snippet shows the event:

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

The `validationComplete` event is triggered after validation completes and is invoked for each rule in the validation process. The following code snippet shows the event:

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

The following sample demonstrates validation events:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/form-validator/validation-events-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/form-validator/validation-events-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/form-validator/validation-events-cs1" %}
