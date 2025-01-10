---
layout: post
title: Form slider with formvalidator in React Range slider component | Syncfusion
description: Learn here all about Form slider with formvalidator in Syncfusion React Range slider component of Syncfusion Essential JS 2 and more.
control: Form slider with formvalidator 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Form slider with formvalidator in React Range slider component

The Slider component can be validated using our [FormValidator](https://ej2.syncfusion.com/documentation/form-validator/?lang=typescript). The following steps walk-through slider validation.

* Render the slider component inside a form.
* Bind [changed](https://ej2.syncfusion.com/react/documentation/api/slider/#changed) event in the slider component to validate the slider value when the value changes.
* Initialize and render FormValidator for the form using form ID.

   ```ts

   // Initialize Form validation
    let formObj: FormValidator;
    formObj = new FormValidator("#formId", options);

    ```

* Set the required property in the FormValidator [rules](https://ej2.syncfusion.com/react/documentation/api/form-validator/#rules) collection. Here, the [min](https://ej2.syncfusion.com/react/documentation/api/slider/#min) property of slider that sets the minimum value in the slider component is set, and it has hidden input as enable `validateHidden` property is set to true.

```ts

    // Slider element
    <div id="default" name="slider"></div>

   // sets required property in the FormValidator rules collection
   let options: FormValidatorModel = {
    rules: {
      'default': {
       validateHidden: true,
       min: [6, "You must select value greater than 5"]
     }
   }
 };

```

> Form validation is done either by ID or name value of the slider component. The ID of the slider shown above is used to validate it.

Using slider name: Render slider with name attribute. In the following code snippet, name attribute value of slider is used for form validation.

```ts

   // Slider element
   <div id="default" name="slider"></div>

   // sets required property in the FormValidator rules collection
   let options: FormValidatorModel = {
   rules: {
    'slider': {
      validateHidden: true,
      min: [6, "You must select value greater than 5"]
    }
  }
 };

```

* Validate the form using [validate](https://ej2.syncfusion.com/react/documentation/api/form-validator/#validate) method, and it validates the slider value with the defined rules collection and returns the result. If the user selects a value less than the minimum value, the form will not submit.

```ts
  formObj.validate();
```

* Slider validation can be done during value changes in slider. Refer to the following code snippet.

```ts
  // Change event handler for slider
  function onChanged(args: any) {
    formObj.validate();
  }
```

The `FormValidator` has following default validation rules, which are used to validate the Slider component.

| Rules | Description | Example |
| ------------- | ------------- | ------------- |
| `max` | Slider component must have value less than or equal to `max` number | if `max: 3`, **3** is valid and **4** is invalid |
| `min` | Slider component must have value greater than or equal to `min` number | if `min: 4`, **5** is valid and **2** is invalid |
| `regex` | Slider component must have valid value in `regex` format | if `regex: '/4/`, **4** is valid and **1** is invalid |
| `range` | Slider component must have value between `range` number | if `range: [4,5]`, **4** is valid and **6** is invalid |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/form-validation-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/form-validation-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/form-validation-cs2/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/form-validation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/form-validation-cs2" %}
