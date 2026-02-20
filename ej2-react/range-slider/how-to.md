---
layout: post
title: How to in React Range Slider component | Syncfusion
description: Learn here all about How to in Syncfusion React Range Slider component of Syncfusion Essential JS 2 and more.
control: How to 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to in React Range Slider component

## Value formatting using slider

### Date Format

Achieve date formatting in `ticks` and `tooltip` using the `renderingTicks` and `tooltipChange` events. The following sample demonstrates this process.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs9" %}

### Time Format

Apply time formatting similarly to date formatting using the `renderingTicks` and `change` events. The following sample demonstrates time formatting.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs10" %}

### Numeric Value Customization

Format numeric values with different decimal digits, fixed whole numbers, or unit representations. The following sample demonstrates numeric value customization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs11" %}

### Customize the bar

Customize the Slider appearance by overriding Slider CSS classes. By default, the Slider uses the `e-slider-track` class for the bar. You can override this class with your own color values as shown in the following snippet.

```css
.e-control.e-slider .e-slider-track .e-range {
  background: linear-gradient(left, #e1451d 0, #fdff47 17%, #86f9fe 50%, #2900f8 65%, #6e00f8 74%, #e33df9 83%, #e14423 100%);
}
```

```ts
function change(args: SliderChangeEventArgs) {
  if (args.value > 0 && args.value <= 25) {
      // Change handle and range bar color to green when
      (sliderHandle as HTMLElement).style.backgroundColor = 'green';
      (sliderTrack as HTMLElement).style.backgroundColor = 'green';
  } else if (args.value > 25 && args.value <= 50) {
      // Change handle and range bar color to royal blue
      (sliderHandle as HTMLElement).style.backgroundColor = 'royalblue';
      (sliderTrack as HTMLElement).style.backgroundColor = 'royalblue';
  } else if (args.value > 50 && args.value <= 75) {
      // Change handle and range bar color to dark orange
      (sliderHandle as HTMLElement).style.backgroundColor = 'darkorange';
      (sliderTrack as HTMLElement).style.backgroundColor = 'darkorange';
  } else if (args.value > 75 && args.value <= 100) {
      // Change handle and range bar color to red
      (sliderHandle as HTMLElement).style.backgroundColor = 'red';
      (sliderTrack as HTMLElement).style.backgroundColor = 'red';
  }
}
```

You can also apply background color to a specific range based on Slider values using the change event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/bar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/bar-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/bar-cs1" %}

## Customize the limits

Customize the limit bar by overriding Slider CSS classes. By default, the Slider uses the `e-limits` class for the limits bar. You can override this class with your own color values.

```css
.e-slider-container.e-horizontal .e-limits {
  background-color: rgba(69, 100, 233, 0.46);
}
```

The following example shows how to customize the limit bar with a different background color.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/limits-custom-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/limits-custom-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/limits-custom-cs1" %}

## Customize the ticks

Customize the Slider ticks by overriding the Slider CSS classes. Ticks help identify the current value in the Slider and support [`smallStep`](https://ej2.syncfusion.com/documentation/slider/api-ticksData.html?lang=typescript#smallstep) and [`largeStep`](https://ej2.syncfusion.com/documentation/slider/api-ticksData.html?lang=typescript#largestep). By default, the Slider uses the `e-tick` class for ticks.

```css
.e-scale .e-tick.e-custom::before {
    content: '\e967';
    position: absolute;
}
```

```css
#ticks_slider .e-scale :nth-child(1)::before {
    color: red;
}
```

The color is applied to rendered ticks using the nth-child selector. The `child_number` value determines which tick receives the specified color.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/ticks-custom-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/ticks-custom-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/ticks-custom-cs1" %}

## Customize the thumb

Customize the Slider thumb by overriding the Slider CSS classes. By default, the Slider uses the `e-handle` class for the thumb.

```css
.e-control.e-slider .e-handle {
    background-image: url('https://ej2.syncfusion.com/demos/src/slider/images/thumb.png');
    background-color: transparent;
    height: 25px;
    width: 25px;
}
#square_slider.e-control.e-slider .e-handle {
    border-radius: 0%;
    background-color: #f9920b;
    border: 0;
}
#circle_slider.e-control.e-slider .e-handle {
    border-radius: 50%;
    background-color: #f9920b;
    border: 0;
}
#oval_slider.e-control.e-slider .e-handle {
    height: 25px;
    width: 8px;
    top: 3px;
    border-radius: 15px;
    background-color: #f9920b;
}
```

The following sample shows how to customize the Slider thumb to different shapes (square, circle, oval) and apply custom background images.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/thumb-custom-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/thumb-custom-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/thumb-custom-cs1" %}

## Validate the Slider using FormValidator

Validate the Slider component using the [FormValidator](https://ej2.syncfusion.com/documentation/form-validator/?lang=typescript). Follow these steps to set up Slider validation.

* Render the Slider component inside a form.
* Bind the [changed](https://ej2.syncfusion.com/react/documentation/slider/api-sliderComponent.html/#changed) event to validate the Slider value when it changes.
* Initialize the FormValidator for the form using the form ID.

```ts

// Initialize Form validation
let formObj: FormValidator;
formObj = new FormValidator("#formId", options);

```

* Set the required property in the FormValidator [rules](https://ej2.syncfusion.com/documentation/form-validator/api-formValidator.html?lang=typescript/#rules) collection. The [min](https://ej2.syncfusion.com/react/documentation/slider/api-sliderComponent.html/#min) property sets the minimum value for the Slider component. Enable the `validateHidden` property to validate hidden inputs.

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

> Form validation is done either by ID or name value of the Slider component. Above ID of the Slider is used to validate it.

Using Slider name: Render the Slider with a name attribute. In the following code snippet, the Slider's name attribute value is used for form validation.

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

* Validate the form using the [validate](https://ej2.syncfusion.com/documentation/form-validator/api-formValidator.html?lang=typescript/#validate) method. This validates the Slider value against the defined rules and returns the result. If the user selects a value less than the minimum, the form will not submit.

```ts

formObj.validate();

```

* Validate the Slider during value changes. Refer to the following code snippet.

```ts

// change event handler for slider
function onChanged(args: any) {
  formObj.validate();
}

```

The `FormValidator` provides the following default validation rules for the Slider component.

| Rules | Description | Example |
| ------------- | ------------- | ------------- |
| `max` | Slider component must have value less than or equal to `max` number | if `max: 3`, **3** is valid and **4** is invalid |
| `min` | Slider component must have value greater than or equal to `min` number | if `min: 4`, **5** is valid and **2** is invalid |
| `regex` | Slider component must have valid value in `regex` format | if `regex: '/4/`, **4** is valid and **1** is invalid |
| `range` | Slider component must have value between `range` number | if `range: [4,5]`, **4** is valid and **6** is invalid |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/form-validation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/form-validation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/form-validation-cs1" %}
