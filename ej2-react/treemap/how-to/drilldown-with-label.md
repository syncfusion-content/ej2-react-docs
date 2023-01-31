---
layout: post
title: Drilldown with label in React Treemap component | Syncfusion
description: Learn here all about Drilldown with label in Syncfusion React Treemap component of Syncfusion Essential JS 2 and more.
control: Drilldown with label 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drilldown with label in React Treemap component

Yon can add a label template as <div> element to the treemap control when using the label template. To add a label template to the tree map control, you have to hide another labels by setting the `showLabels` property to **false** in `leafItemSettings` to show only the label template.

To add label template to tree map drilldown, follow the given steps:

**Step 1**:

Create a treemap control and enable the drill-down option.

{% raw %}

```ts
import { TreeMapComponent, LevelDirective, LevelsDirective, ILoadedEventArgs, IDrillEndEventArgs } from '@syncfusion/ej2-react-treemap';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { CarSales } from './datasource';

class App extends React.Component {
  render() {
    return (
      <TreeMapComponent id='container' weightValuePath='Sales' palette={['white']} enableDrillDown={true} dataSource={CarSales}
          leafItemSettings={ {
            showLabels: false,
            labelTemplate: '#template',
            templatePosition: 'Center'
          } }>
          <LevelsDirective>
            <LevelDirective groupPath='Continent' fill='#336699' border={ { color: 'black', width: 0.5 } } />
            <LevelDirective groupPath='Company' fill='#336699' border={ { color: 'black', width: 0.5 } } />
          </LevelsDirective>
        </TreeMapComponent>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('treemap') as HTMLElement
);
```
{% endraw %}

{% raw %}

```ts
import { TreeMapComponent, LevelDirective, LevelsDirective } from '@syncfusion/ej2-react-treemap';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { CarSales } from './datasource';
class App extends React.Component {
    render() {
        return (<TreeMapComponent id='container' weightValuePath='Sales' palette={['white']} enableDrillDown={true} dataSource={CarSales} leafItemSettings={{
                showLabels: false,
                labelTemplate: '#template',
                templatePosition: 'Center'
            }}>
          <LevelsDirective>
            <LevelDirective groupPath='Continent' fill='#336699' border={{ color: 'black', width: 0.5 }}/>
            <LevelDirective groupPath='Company' fill='#336699' border={{ color: 'black', width: 0.5 }}/>
          </LevelsDirective>
        </TreeMapComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('treemap'));
```
{% endraw %}

**Step 2**:

Add the label template in the `leafItemSettings` options, and then set the `showLabels` property to **false** to hide another labels and show only label template.

{% tabs %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treemap/how-to/label-template-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treemap/how-to/label-template-cs1/app/datasource.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/how-to/label-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/how-to/label-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/how-to/label-template-cs1" %}