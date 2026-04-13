---
layout: post
title: Validation in React Rich text editor component | Syncfusion
description: Learn here all about Validation in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Validation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Validation in React Rich text editor component

## Validation rules

The Rich Text Editor provides the functionality of character count and its validation. So, you can validate the Rich Text Editor’s value on form submission by applying validationRules and validationMessage to the Rich Text Editor.

| **Rules** | **Description** |
| --- | --- |
| required | Requires the value for the Rich Text Editor control. |
| minlength | Requires the value to be of given minimum characters count. |
| maxlength | Requires the value to be of given maximum characters count. |

This sample is used to validate form using the obtrusive Validation. Type the values in Rich Text Editor and the form enables the validation with the formvalidator rules by clicking on the submit externally. All rules are validated by the formvalidator rules.

## Validation message

The default error message for a rule can be customizable by defining it along with the concern rule object as follows.

In the following sample, customize the error message along with the concern rule.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/form-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/form-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/form-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/form-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/form-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/form-cs4" %}

## Custom placement of validation message

The FormValidator has an event customPlacement which can be used to place the error message from default position to desired custom location.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/form-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/form-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/form-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/form-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/form-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/form-cs6" %}