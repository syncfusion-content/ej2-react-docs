---
layout: post
title: Template in React Stepper | Syncfusion
description: Customize the Syncfusion React Stepper step appearance with the `template` property, passing the step model and current index into the render context.
control: Stepper
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Stepper

The React Stepper component allows you to customize the default appearance and content of each step, creating a personalized experience for the user. You can use the [template](https://ej2.syncfusion.com/react/documentation/api/stepper#template) propety to set the template content for the steps.

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
