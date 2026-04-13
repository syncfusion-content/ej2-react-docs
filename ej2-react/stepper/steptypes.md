---
layout: post
title: Step Types in React Stepper component | Syncfusion
description:  Checkout and learn about Step Types with Syncfusion React Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Step types in React Stepper component

The Stepper component provides support for displaying steps with the following step types.

## Default type

In default type, the Stepper displays steps with a combination of both indicators and labels by setting the [stepType](https://ej2.syncfusion.com/react/documentation/api/stepper#steptype) property as `Default`. By default, the Stepper displays steps in the `Default` type.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/step-types/default/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/step-types/default/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/step-types/default/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/step-types/default" %}

## Label type

In label type, the Stepper displays the steps with only the step labels by setting the [stepType](https://ej2.syncfusion.com/react/documentation/api/stepper#steptype) property as `Label`.

> When both label and text are defined, the label takes priority in displaying the steps.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/step-types/label/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/step-types/label/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/step-types/label/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/step-types/label" %}

### Label positions

You can display the label on the top, bottom, left, or right side of the steps using the [labelPosition](https://ej2.syncfusion.com/react/documentation/api/stepper#labelposition) property. 

The following label positions are supported in Stepper:

| Value | Description |
|-----|-----|
| `Top` | Positions the label at the top of each step. |
| `Bottom` | Positions the label at the bottom of each step. |
| `Start` | Positions the label to the left side of each step. |
| `End` | Positions the label to the right side of each step. |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/label-position/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/label-position/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/label-position/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/label-position" %}

## Indicator type

In indicator type, the Stepper displays steps with only the step indicators by setting the [stepType](https://ej2.syncfusion.com/react/documentation/api/stepper#steptype) property as `Indicator`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/step-types/indicator/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/step-types/indicator/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/step-types/indicator/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/step-types/indicator" %}
