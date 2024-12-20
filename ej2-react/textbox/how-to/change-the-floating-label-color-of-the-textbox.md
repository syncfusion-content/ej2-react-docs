---
layout: post
title: Change the floating label color of the TextBox in React | Syncfusion
description: Learn here all about Change the floating label color of the TextBox in Syncfusion React TextBox component of Syncfusion Essential JS 2 and more.
control: Change the floating label color of the TextBox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Change the floating label color of the TextBox in React

You can change the floating label color of the TextBox for both `success` and `warning` validation states by applying the following CSS styles.

```css

    /* For Success state */
    .e-float-input.e-input-group.e-success label.e-float-text,
    .e-float-input.e-input-group.e-success input:focus ~ label.e-float-text,
    .e-float-input.e-input-group.e-success input:valid ~ label.e-float-text {
      color: #22b24b;
    }

    /* For Warning state */
    .e-float-input.e-input-group.e-warning label.e-float-text,
    .e-float-input.e-input-group.e-warning input:focus ~ label.e-float-text,
    .e-float-input.e-input-group.e-warning input:valid ~ label.e-float-text {
      color: #ffca1c;
    }

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/default-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/default-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/default-cs9" %}
