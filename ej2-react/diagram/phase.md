---
layout: post
title: Phase in React Diagram component | Syncfusion®
description: Learn here all about Swim lane in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Phase 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

## Phase

Phase are the subprocess which will split each lanes as horizontally or vertically based on the swimlane orientation. We can add multiple number of [`Phase`](https://ej2.syncfusion.com/react/documentation/api/diagram/phaseModel)to swimlane.

The following code example illustrates how to create phase.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/swimlane/es5Phase-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/swimlane/es5Phase-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/swimlane/es5Phase-cs1" %}

### Dynamically add/remove phase to Lane

You can add a phase at runtime by using [`addPhases`](https://ej2.syncfusion.com/react/documentation/api/diagram/#addphases) method and remove phase by using [`removePhase`](https://ej2.syncfusion.com/react/documentation/api/diagram/#removephase) method. The following code example illustrates how to add and remove phase at run time.

  {% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/swimlane/es5PhaseCustomize-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/swimlane/es5PhaseCustomize-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/swimlane/es5PhaseCustomize-cs3" %}

### Customizing phase

* The length of the region can be set by using the  [`offset`](https://ej2.syncfusion.com/react/documentation/api/diagram/phaseModel#offset) property of the phase.
* Every phase region can be textually described with the [`header`](https://ej2.syncfusion.com/react/documentation/api/diagram/headerModel) property of the phase.
* You can increase the height of phase by using [`phaseSize`](https://ej2.syncfusion.com/react/documentation/api/diagram/swimLaneModel#phaseSize) property of swimlane.
* We can provide additional information to the phase by using the [`addInfo`](https://ej2.syncfusion.com/react/documentation/api/diagram/phaseModel#addInfo) property of the phase.

The following code example illustrates how to customize the phase in swimlane.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/swimlane/es5PhaseCustomize-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/swimlane/es5PhaseCustomize-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/swimlane/es5PhaseCustomize-cs4" %}

#### Dynamic customization of phase

You can customize the phase style and text properties dynamically. The following code illustrates how to dynamically customize the phase.

The following code example illustrates how to customize the phase at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/swimlane/es5PhaseCustomize-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/swimlane/es5PhaseCustomize-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/swimlane/es5PhaseCustomize-cs5" %}

### Phase interaction

#### Resizing

* The phase can be resized by using its selector.
* You must select the phase header to enable the phase selection.
* Once the phase can be resized, the lane size will be updated automatically.

#### Resizing helper

* The special resize selector will be used to resize the phase.
* The resize cursor will be available on the left and bottom direction for horizontal, and the top and bottom direction for vertical swimlane.

#### Phase header editing

Diagram provides the support to edit phase headers at runtime. We achieve the header editing by double click event. Double clicking the header label will enables the editing of that. The following image illustrates how to edit the swimlane header.The following image illustrates how to edit the phase header. ![Phase Header Editing](images/phase-header-edit.gif)


