---
layout: post
title: Modules in React Ribbon component | Syncfusion
description:  Checkout and learn about Modules in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Modules in Ribbon component

The React Ribbon component contains several feature-based modules that must be injected to enable their respective functionalities.

| Module | Description | Module Injection Type |
|------|-------------|------|
| `RibbonButton` | Enables Button functionality in the Ribbon. | default |
| `RibbonCheckBox` | Enables CheckBox functionality in the Ribbon.| default |
| `RibbonDropDown` | Enables DropDown Button functionality in the Ribbon.| default |
| `RibbonSplitButton` | Enables Split Button functionality in the Ribbon.| default |
| `RibbonComboBox` | Enables ComboBox functionality in the Ribbon. | default |
| `RibbonGroupButton` | Enables Group Button functionality in the Ribbon. | default |
| `RibbonColorPicker` | Provides support for the ColorPicker item.| selective |
| `RibbonGallery` | Provides support for the Gallery item.| selective |
| `RibbonFileMenu` | Enables the File Menu feature.| selective |
| `RibbonBackstage` | Enables the Backstage view feature.| selective |
| `RibbonContextualTab` | Enables the Contextual Tab feature.| selective |
| `RibbonKeyTip` | Enables the KeyTip navigation feature.| selective |

These modules should be injected into the Ribbon using the `Inject` directive.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% raw %}

import { RibbonFileMenu, RibbonColorPicker, Inject } from "@syncfusion/ej2-react-ribbon";
<RibbonComponent id="ribbon" fileMenu={{ visible: true, menuItems: fileOptions}}>
    // Render Tabs here
    <Inject services={[RibbonFileMenu, RibbonColorPicker]} />
</RibbonComponent>

{% endraw %}
{% endhighlight %}
{% endtabs %}