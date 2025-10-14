---
layout: post
title: Labels in React Diagram component | Syncfusion®
description: Learn here all about Labels in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Labels 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Labels in React Diagram Component

[`Annotation`](https://ej2.syncfusion.com/react/documentation/api/diagram/annotationModel) is a block of text that can be displayed over a node or connector. Annotations are used to textually represent an object with a string that can be edited at runtime. Multiple annotations can be added to a node or connector.

<!-- markdownlint-disable MD033 -->

## Create Annotations

An annotation can be added to a node or connector by defining the annotation object and adding it to the annotations collection of the node or connector. The [`content`](https://ej2.syncfusion.com/react/documentation/api/diagram/annotationModel#content) property of the annotation defines the text to be displayed. The following code illustrates how to create an annotation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Annotation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Annotation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Annotation-cs1" %}
 
N> When setting an Annotation's ID, ensure that it does not contain white spaces, does not start with numbers or special characters, and does not include special characters like underscores (_) or spaces.

## Add annotations at runtime

Annotations can be added at runtime by using the client-side method [`addLabels`](https://ej2.syncfusion.com/react/documentation/api/diagram/#addlabels). The following code illustrates how to add an annotation to a node.

The annotation's [`id`](https://ej2.syncfusion.com/react/documentation/api/diagram/annotationModel#id) property is used to define the name of the annotation and is further used to find the annotation at runtime and perform any customization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Run-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Run-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Run-cs1" %}

## Update annotations at runtime

Annotations can be updated directly by accessing the annotation from the node's annotations collection property and modifying any annotation properties at runtime. To reflect the changes immediately, call the `dataBind` method.

The following code example illustrates how to change the annotation properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Update-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Update-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Update-cs2" %}


## Remove annotations

A collection of annotations can be removed from the node by using the diagram method [`removeLabels`](https://ej2.syncfusion.com/react/documentation/api/diagram/#removelabels). The following code illustrates how to remove an annotation from a node.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Update-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Update-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Update-cs1" %}

