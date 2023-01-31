---
layout: post
title: Leaf item in React Treemap component | Syncfusion
description: Learn here all about Leaf item in Syncfusion React Treemap component of Syncfusion Essential JS 2 and more.
control: Leaf item 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Leaf item in React Treemap component

A leaf item defines a visualized data element and does not contain child nodes but contains parent node if the levels are specified in the TreeMap.

## Leaf label

Label is represented by item name or value. Label will be appeared by specifying the [`labelPath`](https://ej2.syncfusion.com/react/documentation/api/treemap/leafItemSettingsModel/#labelpath) property and customize the label style using the [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/treemap/leafItemSettingsModel/#labelstyle) property.

<<<<<
{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/leafitem-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/leafitem-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/leafitem-cs1" %}

<!-- markdownlint-disable MD036 -->

### Label position and format

Positioning the leaf item label using the [`labelPosition`](https://ej2.syncfusion.com/react/documentation/api/treemap/leafItemSettingsModel/#labelposition) property and the text format can be customized by specifying data source properties name in the [`labelFormat`](https://ej2.syncfusion.com/react/documentation/api/treemap/leafItemSettingsModel/#labelformat) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/leafitem-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/leafitem-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/leafitem-cs2" %}

<!-- markdownlint-disable MD036 -->

### Label template and position

Specifies the template of leaf item label and position of the template to be customized using [`labelTemplate`](https://ej2.syncfusion.com/react/documentation/api/treemap/leafItemSettingsModel/#labeltemplate) and [`templatePosition`](https://ej2.syncfusion.com/react/documentation/api/treemap/leafItemSettingsModel/#templateposition) properties.

{% raw %}

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import { TreeMapComponent } from '@syncfusion/ej2-react-treemap';

class App extends React.Component {
render() {
  return ( <TreeMapComponent id='treemap'
        dataSource={[
            { Sport: "Swimming", Gold: 16, GameImage: 'Swimming.svg', ItemHeight: "180px", ItemWidth: "180px" },
            { Sport: "Athletics", Gold: 13, GameImage: 'Athletics.svg', ItemHeight: "70px", ItemWidth: "70px" },
            { Sport: "Gymnastics", Gold: 4, GameImage: 'Gymnastics.svg', ItemHeight: "80px", ItemWidth: "80px" },
            { Sport: "Cycling", Gold: 2, GameImage: 'Cycling.svg', ItemHeight: "50px", ItemWidth: "50px" },
            { Sport: "Wrestling", Gold: 2, GameImage: 'Wrestling.svg', ItemHeight: "60px", ItemWidth: "50px" },
            { Sport: "Basketball", Gold: 2, GameImage: 'Basketball.svg', ItemHeight: "50px", ItemWidth: "50px" },
            { Sport: "Boxing", Gold: 1, GameImage: 'Boxing.svg', ItemHeight: "40px", ItemWidth: "30px" },
            { Sport: "Tennis", Gold: 1, GameImage: 'Tennis.svg', ItemHeight: "40px", ItemWidth: "40px" },
            { Sport: "Judo", Gold: 1, GameImage: 'Judo.svg', ItemHeight: "40px", ItemWidth: "40px" },
            { Sport: "Rowing", Gold: 1, GameImage: 'Rowing.svg', ItemHeight: "40px", ItemWidth: "40px" },
            { Sport: "Shooting", Gold: 1, GameImage: 'Shooting.svg', ItemHeight: "40px", ItemWidth: "40px" },
            { Sport: "Triathlon", Gold: 1, GameImage: 'Triathlon.svg', ItemHeight: "40px", ItemWidth: "40px" },
            { Sport: "Water polo", Gold: 1, GameImage: 'Water polo.svg', ItemHeight: "40px", ItemWidth: "40px" }
        ]}
        weightValuePath= 'Gold'
        leafItemSettings=  {{
            labelPath: 'Sport',
            fill: '#993399',
            templatePosition: 'Center',
            labelTemplate: '<div style="pointer-events: none;"><img src="src/treemap/image/{{:GameImage}}"' +
            ' style="height:{{:ItemHeight}};width:{{:ItemWidth}};"></img></div>'
        }}>
    </TreeMapComponent> );
 }
}
ReactDOM.render(<App />, document.getElementById('treemap'));
```
{% endraw %}

{% raw %}

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import { TreeMapComponent } from '@syncfusion/ej2-react-treemap';
class App extends React.Component {
    render() {
        return (<TreeMapComponent id='treemap' dataSource={[
                { Sport: "Swimming", Gold: 16, GameImage: 'Swimming.svg', ItemHeight: "180px", ItemWidth: "180px" },
                { Sport: "Athletics", Gold: 13, GameImage: 'Athletics.svg', ItemHeight: "70px", ItemWidth: "70px" },
                { Sport: "Gymnastics", Gold: 4, GameImage: 'Gymnastics.svg', ItemHeight: "80px", ItemWidth: "80px" },
                { Sport: "Cycling", Gold: 2, GameImage: 'Cycling.svg', ItemHeight: "50px", ItemWidth: "50px" },
                { Sport: "Wrestling", Gold: 2, GameImage: 'Wrestling.svg', ItemHeight: "60px", ItemWidth: "50px" },
                { Sport: "Basketball", Gold: 2, GameImage: 'Basketball.svg', ItemHeight: "50px", ItemWidth: "50px" },
                { Sport: "Boxing", Gold: 1, GameImage: 'Boxing.svg', ItemHeight: "40px", ItemWidth: "30px" },
                { Sport: "Tennis", Gold: 1, GameImage: 'Tennis.svg', ItemHeight: "40px", ItemWidth: "40px" },
                { Sport: "Judo", Gold: 1, GameImage: 'Judo.svg', ItemHeight: "40px", ItemWidth: "40px" },
                { Sport: "Rowing", Gold: 1, GameImage: 'Rowing.svg', ItemHeight: "40px", ItemWidth: "40px" },
                { Sport: "Shooting", Gold: 1, GameImage: 'Shooting.svg', ItemHeight: "40px", ItemWidth: "40px" },
                { Sport: "Triathlon", Gold: 1, GameImage: 'Triathlon.svg', ItemHeight: "40px", ItemWidth: "40px" },
                { Sport: "Water polo", Gold: 1, GameImage: 'Water polo.svg', ItemHeight: "40px", ItemWidth: "40px" }
            ]} weightValuePath='Gold' leafItemSettings={{
                labelPath: 'Sport',
                fill: '#993399',
                templatePosition: 'Center',
                labelTemplate: '<div style="pointer-events: none;"><img src="src/treemap/image/{{:GameImage}}"' +
                    ' style="height:{{:ItemHeight}};width:{{:ItemWidth}};"></img></div>'
            }}>
    </TreeMapComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('treemap'));
```
{% endraw %}

<!-- markdownlint-disable MD036 -->

## Item gap

The [`gap`](https://ej2.syncfusion.com/react/documentation/api/treemap/leafItemSettingsModel/#gap) property is used to separate an item from another item. Each item rectangle is split into equal space with specified gap.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/leafitem-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/leafitem-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/leafitem-cs3" %}