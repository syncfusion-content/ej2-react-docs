---
layout: post
title: Finetune in React Image Editor | Syncfusion
description: Fine-tune brightness, contrast, saturation, hue, exposure, blur, and opacity in the React Image Editor with precise intensity controls.
platform: ej2-react
control: Finetune
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Finetune in React Image Editor

Fine-tuning involves making precise adjustments to the settings of an image filter in order to achieve a specific desired effect. It provides control over the intensity and specific aspects of the filter's impact on the image. For example, fine-tuning allows you to modify parameters like brightness, saturation, or other relevant properties to fine-tune the level or quality of the filter's effect. This level of control enables you to achieve the exact look or outcome you want for your image.

The [`finetuneImage`](https://ej2.syncfusion.com/react/documentation/api/image-editor#finetuneImage) method performs fine-tuning on the image and accepts two parameters: an [`ImageFinetuneOption`](https://ej2.syncfusion.com/react/documentation/api/image-editor/imageFinetuneOption) specifying the option, and a numeric `value` indicating intensity. Supported options are listed below; the `value` is a numeric value (typical range -100 to 100, step 1).

ImageFinetuneOption enumeration:

- `Blur` - Adjust the blur of the image.
- `Brightness` - Adjust the brightness of the image.
- `Contrast` - Adjust the contrast of the image.
- `Exposure` - Adjust the exposure of the image.
- `Hue` - Adjust the hue of the image.
- `Opacity` - Adjust the opacity of the image.
- `Saturation` - Adjust the saturation of the image.

## Adjust the Brightness, Contrast, and Saturation

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

## Adjust the Hue, Exposure, Blur, and Opacity

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

The [`finetuneValueChanging`](https://ej2.syncfusion.com/react/documentation/api/image-editor#finetunevaluechanging) event is triggered while fine-tuning and receives a [`FinetuneEventArgs`](https://ej2.syncfusion.com/react/documentation/api/image-editor/finetuneeventargs) object with the following properties (see API):

- `finetune` : The finetune option being applied.

- `value` : The finetune value to be applied.

- `cancel` : Set to `true` to cancel the fine-tuning action.
