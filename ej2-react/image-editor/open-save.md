---
layout: post
title: Open save in React Image editor component | Syncfusion
description: Learn here all about Open save in Syncfusion React Image editor component of Syncfusion Essential JS 2 and more.
control: Open save 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Open save in React Image editor component

The Image Editor component supports opening the image by using a hosted/online URL, Image Data, or base64. It also supports save options like image and base64.

## Open

The Image Editor component opens an image by using base64, Image Data, or a hosted/online URL using the [`open`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#open) method. It also opens an image by clicking the open button from the toolbar. The supported file types are PNG, JPEG, SVG, and base64.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/image-editor/default-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/image-editor/default-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs9" %}

## Save

The Image Editor component saves the edited image as Image Data or images like PNG, JPEG, and SVG.

### Save as ImageData

The getImageData method is used to get the image as ImageData and this can be loaded to our Image Editor component using the open method.

### Save as Image

The [`export`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#export) method is used to save the modified image as an image, and it accepts a file name and file type as parameters. The file type parameter supports PNG, JPEG, and SVG and the default file type is PNG. It also saves an image by clicking the save button from the toolbar and the supported file types are PNG, JPEG, and SVG.

In the following example, the [`export`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#export) method is used in the button click event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/image-editor/default-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/image-editor/default-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs10" %}
