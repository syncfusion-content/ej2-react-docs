---
layout: post
title: Types in React Avatar component | Syncfusion
description: Learn here all about Types in Syncfusion React Avatar component of Syncfusion Essential JS 2 and more.
control: Types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Types in React Avatar component

This section explains different types of avatar.

## Avatar size

The Essential JS 2 Avatar has the following predefined sizes that can be used with the `.e-avatar` class to change the appearance of the avatar.

| Class Name         | Description
| :-------------:    |:-------------:
| e-avatar-xlarge    | Displays xlarge size avatar.
| e-avatar-large     | Displays apply large size avatar.
| e-avatar           | Displays apply default size avatar.
| e-avatar-small     | Displays apply small size avatar.
| e-avatar-xsmall    | Displays apply xsmall size avatar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/avatar/size-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/avatar/size-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/avatar/size-cs1" %}

## Avatar types

The types of Essential JS 2 avatar are:

* Default
* Circle

### Default

The default style of the avatar is rectangular shape with rounded corners, which can be applied from adding the modifier
class `.e-avatar` to the target element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/avatar/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/avatar/default-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/avatar/default-cs1" %}

### Circle

The circle avatar style can be applied by adding the modifier class `.e-avatar-circle` to the target element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/avatar/circle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/avatar/circle-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/avatar/circle-cs1" %}
