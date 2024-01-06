---
layout: post
title: Template in React Stepper component | Syncfusion
description:  Checkout and learn about Template with Syncfusion React Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Stepper component

The Stepper component allows you to customize the default appearance and content of each step, creating a personalized experience for the user. You can use the [template](https://ej2.syncfusion.com/react/documentation/api/stepper#template) propety to set the template content for the steps.

The step model and current step index are passed as `step` and `currentStep` properties in the template context for customization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/template/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/template" %}
