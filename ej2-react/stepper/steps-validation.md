---
layout: post
title: Validation in React Stepper component | Syncfusion
description:  Checkout and learn about Validation with Syncfusion React Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Steps validation in React Stepper component

The Stepper component allows you to set the validation state for each step, displaying either a success or error icon. You can define the success state of a step by setting the `isValid` property to `true`. If set to `false`, the step will display an error state. By default, the `isValid` property is `null`.

> Based on the `stepType`, the validation state icon will be displayed either as an indicator or as part of the step label/text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/steps/validation/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/steps/validation/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/steps/validation/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/validation" %}
