---
layout: post
title: Add floating label to textbox programmatically in React Textbox component | Syncfusion
description: Learn here all about Add floating label to textbox programmatically in Syncfusion React Textbox component of Syncfusion Essential JS 2 and more.
control: Add floating label to textbox programmatically 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add floating label to textbox programmatically in React Textbox component

The `Floating Label TextBox` floats label above the TextBox after focusing, or entering a value in the TextBox.

Floating label supports the types of actions as given below.

Type     | Description
------------ | -------------
  Auto       | The floating label will float above the input after focusing, or entering a value in the input.
  Always     | The floating label will always float above the input.
  Never      | By default, never float the label in the input when the placeholder is available.

* Create a TypeScript file and import the `Input` modules from `ej2-inputs` library as shown below.

   ```ts
    import {Input} from '@syncfusion/ej2-inputs';
   ```

* Pass the `HTML Input` element and `floatLabelType` property as `Auto` to the `createInput` method.

* Set the `placeholder` value to the input element via `element attribute` or pass the parameter to the `createInput` method.

    The `watermark label` will be updated based on the specified `placeholder` value of the `Floating Label TextBox`.

* You can add the `icons` on the input by passing `buttons` property value with the class name `e-input-group-icon` as parameter to the `createInput` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/default-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/default-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/default-cs7" %}
