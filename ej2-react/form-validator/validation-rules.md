---
layout: post
title: Validation rules in React Form validator component | Syncfusion
description: Learn here all about Validation rules in Syncfusion React Form validator component of Syncfusion Essential JS 2 and more.
control: Validation rules 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Validation rules in React Form validator component

## Default Rules

The `FormValidator` provides the following default validation rules for form validation:

| Rules | Description | Example |
| ------------- | ------------- | ------------- |
| `required` | The form input element must have any input values | a or 1 or - |
| `email` | The form input element must have valid `email` format values | `form@syncfusion.com` |
| `url` | The form input element must have valid `url` format values | `http://syncfusion.com/` |
| `date` | The form input element must have valid `date` format values | 05/15/2017 |
| `dateIso` | The form input element must have valid `dateISO` format values | 2017-05-15 |
| `number` | The form input element must have valid `number` format values | 1.0 or 1 |
| `digits` | The form input element must have valid `digits` values | 1 |
| `maxLength` | Input value must have less than or equal to `maxLength` character length | if `maxLength: 5`, **check** is valid and **checking** is invalid |
| `minLength` | Input value must have greater than or equal to `minLength` character length | if `minLength: 5`, **testing** is valid and **test** is invalid |
| `rangeLength` | Input value must have value between `rangeLength` character length | if `rangeLength: [4,5]`, **test** is valid and **key** is invalid |
| `range` | Input value must have value between `range` number | if `range: [4,5]`, **4** is valid and **6** is invalid |
| `max` | Input value must have less than or equal to `max` number | if `max: 3`, **3** is valid and **4** is invalid |
| `min` | Input value must have greater than or equal to `min` number | if `min: 4`, **5** is valid and **2** is invalid |
| `regex` | Input value must have valid `regex` format | if `regex: '^[A-z]+$'`, **a** is valid and **1** is invalid |

> The [`rules`](https://ej2.syncfusion.com/documentation/api/form-validator/#rules) option must map the input element's `name` attribute.
> The `FormValidator` validates only the mapped input elements.

## Defining Custom Rules

You can define custom rules in the [`rules`](https://ej2.syncfusion.com/documentation/api/form-validator/#rules) property to validate the form with custom logic.

The custom validation method must return a boolean value to indicate validation success or failure.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/form-validator/validation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/form-validator/validation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/form-validator/validation-cs1" %}

## Adding or Removing Rules

After creating a `FormValidator` instance, you can add rules to an input element using the [`addRules`](https://ej2.syncfusion.com/documentation/api/form-validator/#addrules) method, or remove existing rules using the [`removeRules`](https://ej2.syncfusion.com/documentation/api/form-validator/#removerules) method.

```ts

import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import * as React from 'react';

export default class Validation extends React.Component<{}, {}> {
public formObject: FormValidator;

public componentDidMount(): void {
        const options: FormValidatorModel = {
         rules: {
          'email': {
            required: [true, '* Enter your email']
          },
          'mobile': {
            required: [true, '* Enter your mobile number']
          },
          'name': {
              required: [true, '* Enter your name']
          },
        }
      };
      this.formObject = new FormValidator('#form1', options);
      // Add email rule to user element
      this.formObject.addRules('name', { maxLength : [5, 'Character count should not greater than 5'] });
      // Remove number rule from age element
      this.formObject.removeRules('mobile', ['number']);
  }

  public render() {
    return (
      <form id='form1'>
        <div>
          <input type='text' className='e-input' name='email'/>
        </div>
        <div>
          <input type='text' className='e-input' name='name'/>
        </div>
        <div>
          <input type='text' className='e-input' name='mobile'/>
        </div>
      </form>
    )
  }
}

```

## Validating a single Element

The `validate` method accepts an optional argument where you can pass an input element's name attribute to validate its value against the defined rules.

```ts

import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import * as React from 'react';

export default class Validation extends React.Component<{}, {}> {
public formObject: FormValidator;

public componentDidMount(): void {
        const options: FormValidatorModel = {
         rules: {
          'email': {
            required: [true, '* Enter your email']
          },
          'mobile': {
            required: [true, '* Enter your mobile number']
          },
          'name': {
              required: [true, '* Enter your name']
          },
        }
      };
      this.formObject = new FormValidator('#form1', options);
      // Add email rule to user element
      this.formObject.validate('name');
  }

  public render() {
    return (
      <form id='form1'>
        <div>
          <input type='text' className='e-input' name='email'/>
        </div>
        <div>
          <input type='text' className='e-input' name='name'/>
        </div>
        <div>
          <input type='text' className='e-input' name='mobile'/>
        </div>
      </form>
    )
  }

}
```