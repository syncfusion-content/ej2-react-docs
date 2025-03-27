---
layout: post
title: Customization in React Mention component | Syncfusion
description: Learn here all about Customization in Syncfusion React Mention component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React Mention component

## Show or hide mention character

By default, the `showMentionChar` which does not display the text content with the mentioned character is disabled. If the property [showMentionChar](https://ej2.syncfusion.com/react/documentation/api/mention/#showmentionchar) is enabled, it allows the respective [mentionChar](https://ej2.syncfusion.com/react/documentation/api/mention/#mentionchar) configured along with the text content opted from the suggested list to display.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/customization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/customization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/customization-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/customization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/customization-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/customization-cs2" %}

## Adding the suffix character after selection

The Mention has provided support to specify the custom suffix to append alongside the mentioned selected item while inserting. You can append space or new line character as [suffixText](https://ej2.syncfusion.com/react/documentation/api/mention/#suffixtext).

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/customization-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/customization-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/customization-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/customization-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/customization-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/customization-cs4" %}

## Configure the popup list

You can customize the suggestion list width and height using the [popupHeight](https://ej2.syncfusion.com/react/documentation/api/mention/#popupheight) and [popupWidth](https://ej2.syncfusion.com/react/documentation/api/mention/#popupwidth) properties.

By default, the popup list width value is set as `auto`. Depending on the mentioned suggestion data list, the width value is automatically adjusted. The popup list height value is set as `300px`.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/customization-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/customization-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/customization-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/customization-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/customization-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/customization-cs6" %}

## Trigger character

You can customize the trigger character by using the [mentionChar](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DropDowns.Mention.html#Syncfusion_EJ2_DropDowns_Mention_MentionChar) property in the Mention component. The trigger character triggers the suggestion list to display in the target area.

By default, the [mentionChar](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DropDowns.Mention.html#Syncfusion_EJ2_DropDowns_Mention_MentionChar) is `@`.

## Leading Space Requirement

The [requireLeadingSpace](https://ej2.syncfusion.com/react/documentation/api/mention/#requireleadingspace) property in Mention controls whether a space is needed before triggering the Mention suggestion popup. 

When set to `false`, the mention can be activated without a preceding space. When set to `true`, a space is required before the mention character to activate suggestions.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/customization-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/customization-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/customization-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/customization-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/customization-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/customization-cs8" %}

![Leading Space Requirement](./images/required_leading_space.gif)
