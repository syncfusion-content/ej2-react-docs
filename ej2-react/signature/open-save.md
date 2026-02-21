---
layout: post
title: Open save in React Signature component | Syncfusion
description: Learn here all about Open save in Syncfusion React Signature component of Syncfusion Essential JS 2 and more.
control: Open save 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Open save in React Signature component

The Signature component supports to open the signature by using hosted/online URL or base64. And it also supports various save options like image, base64, and blob.

## Open Signature

The Signature component opens pre-drawn signatures using the [`load`](https://ej2.syncfusion.com/react/documentation/api/signature/#load) method. It supports PNG, JPEG, and SVG images as base64 strings or hosted/online URLs.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/signature/open-save-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/signature/open-save-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/signature/open-save-cs1" %}

## Save Signature

The Signature component supports saving signatures in multiple formats: base64, blob, and image formats (PNG, JPEG, SVG).

### Save as Base64

The `getSignature` method saves the signature as base64 in PNG, JPEG, or SVG format. The base64 output can be loaded back using the [`load`](https://ej2.syncfusion.com/react/documentation/api/signature/#load) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/signature/save-base-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/signature/save-base-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/signature/save-base-cs1" %}

### Save as Blob

The [`saveAsBlob`](https://ej2.syncfusion.com/react/documentation/api/signature/#saveasblob) method saves the signature as a Blob (binary data object) for storage in databases or transmission.

### Save as Image

The [`save`](https://ej2.syncfusion.com/react/documentation/api/signature/#save) method saves the signature as an image file. It accepts filename and file type (PNG, JPEG, or SVG) as parameters. The default file type is PNG.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/signature/save-image-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/signature/save-image-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/signature/save-image-cs1" %}

## Save with Background

The [`saveWithBackground`](https://ej2.syncfusion.com/react/documentation/api/signature/#savewithbackground) property controls whether the signature is saved with its background. The default value is `true`, so signatures are saved with their background by default.

The following example sets the background color to 'rgb(103 58 183)' with save-with-background enabled.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/signature/save-image-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/signature/save-image-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/signature/save-image-cs2" %}