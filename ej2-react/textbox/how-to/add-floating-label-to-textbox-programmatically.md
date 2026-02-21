---
layout: post
title: Add floating label to TextBox programmatically in React TextBox component | Syncfusion
description: Learn here all about Add floating label to TextBox programmatically in Syncfusion React TextBox component of Syncfusion Essential JS 2 and more.
control: Add floating label to TextBox programmatically 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add floating label to TextBox programmatically in React TextBox component

The floating label automatically floats above the TextBox input field when the user focuses on it or enters a value. This behavior enhances the visual hierarchy and provides clear input context. Configure the floating label behavior using the `floatLabelType` property with the following options:

| Type | Description |
|------|-------------|
| Auto | The label floats above the input when focused or when a value is entered |
| Always | The label always remains floating above the input |
| Never | The label never floats; placeholder text is displayed instead (default behavior) |

## Implementation steps

1. **Import the Input module** from the `ej2-inputs` library:

   ```ts
    import {Input} from '@syncfusion/ej2-inputs';
   ```

2. **Configure the floating label** by passing the HTML input element and `floatLabelType` property set to `Auto` (or another value) to the `createInput` method.

3. **Set the placeholder** for the input element either via the `placeholder` attribute or as a parameter to `createInput`. The placeholder text serves as the floating label content.

4. **Optional: Add icons** to enhance the input by passing the `buttons` property with the `e-input-group-icon` class to the `createInput` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/default-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/default-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/default-cs7" %}
