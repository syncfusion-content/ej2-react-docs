---
layout: post
title: Finetune in ##Platform_Name## Image Editor component | Syncfusion
description: Learn here all about Finetune in Syncfusion React Image editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Finetune 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Finetune in Image Editor component

Fine-tuning involves making precise adjustments to the settings of an image filter in order to achieve a specific desired effect. It provides control over the intensity and specific aspects of the filter's impact on the image. For example, fine-tuning allows you to modify parameters like brightness, saturation, or other relevant properties to fine-tune the level or quality of the filter's effect. This level of control enables you to achieve the exact look or outcome you want for your image.

## Adjust the brightness, contrast, and saturation

The [`finetuneImage`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#finetuneImage) method is designed to facilitate fine-tuning operations on an image. It accepts two parameters: the first parameter is [`ImageFinetuneOption`](https://ej2.syncfusion.com/react/documentation/api/image-editor/imageFinetuneOption/) which determines the type of fine-tuning to be applied (brightness, contrast, and saturation), and the second parameter represents the fine-tuning value, indicating the degree or intensity of the adjustment. This method allows for convenient adjustment of brightness, contrast, and saturation by specifying the desired type and corresponding value.

The `finetuneImage` method is used to perform brightness, contrast, and saturation fine-tuning by specifying this type as a first parameter and specifying the fine-tuning value as the second parameter of the method.

Here is an example of brightness, contrast, and saturation fine-tuning using the `finetuneImage` method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs34/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs34/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs34/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs34" %}

## Adjust the hue, exposure, blur, and opacity

The [`finetuneImage`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#finetuneImage) method is designed to facilitate fine-tuning operations on an image. It accepts two parameters: the first parameter is [`ImageFinetuneOption`](https://ej2.syncfusion.com/react/documentation/api/image-editor/imageFinetuneOption/) which determines the type of fine-tuning to be applied (hue, exposure, blur, and opacity), and the second parameter represents the fine-tuning value, indicating the degree or intensity of the adjustment. This method allows for convenient adjustment of hue, exposure, blur, and opacity by specifying the desired type and corresponding value.

Here is an example of hue, exposure, blur, and opacity fine-tuning using the `finetuneImage` method. 

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs28/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs28/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs28/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs28" %}

## Finetune value changing event 

The [`finetuneValueChanging`](https://ej2.syncfusion.com/documentation/api/image-editor/#finetunevaluechanging) event is triggered when performing fine-tuning on the image. This event is passed an object that contains information about the fine-tuning event, such as the type of fine-tuning and the value of fine-tuning performed. 

The parameter available in the [`FinetuneEventArgs`](https://ej2.syncfusion.com/react/documentation/api/image-editor/finetuneEventArgs/) event is, 

FinetuneEventArgs.finetune - The type of fine-tuning as ImageFinetuneOption to be applied in the image editor. 

FinetuneEventArgs.value - The fine-tuning value to be applied in the image editor. 

FinetuneEventArgs.cancel – Specifies a boolean value to cancel the fine-tuning action. 
