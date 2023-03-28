---
layout: post
title: Events with React Rating component | Syncfusion
description:  Learn here all about Events in Syncfusion React Rating component of Syncfusion Essential JS 2 and more.
control: Events
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events in React Rating Component

This section describes the rating events that will be triggered when appropriate actions are performed. The following events are available in the rating component.

## beforeItemRender

The rating component triggers the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/rating#beforeitemrender) event before rendering each rating item. The [`RatingItemEventArgs`](https://ej2.syncfusion.com/react/documentation/api/rating/ratingItemEventArgs/) passed as an event argument provides the details of the item to be rendered.

```ts
{/* Import the Rating. */}
import { RatingComponent, RatingItemEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render Rating.*/}
function App() {

    function beforeItemRender(args: RatingItemEventArgs){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <RatingComponent id='rating' beforeItemRender={ beforeItemRender } ></RatingComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
```

## created

The rating component triggers the [`created`](https://ej2.syncfusion.com/react/documentation/api/rating#created) event when the rendering of the rating component is completed.

```ts
{/* Import the Rating. */}
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render Rating.*/}
function App() {

    function created(){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <RatingComponent id='rating' created={ created } ></RatingComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
```

## onItemHover

The rating component triggers the [`onItemHover`](https://ej2.syncfusion.com/react/documentation/api/rating#onitemhover) event when the rating item is hovered. The [`RatingHoverEventArgs`](https://ej2.syncfusion.com/react/documentation/api/rating/ratingHoverEventArgs/) passed as an event argument provides the details of the hovered item.

```ts
{/* Import the Rating. */}
import { RatingComponent, RatingHoverEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render Rating.*/}
function App() {

    function onItemHover(args: RatingHoverEventArgs){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <RatingComponent id='rating' onItemHover={ onItemHover } ></RatingComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
```

## valueChanged

The rating component triggers the [`valueChanged`](https://ej2.syncfusion.com/react/documentation/api/rating/#valuechanged) event when the value of the rating is changed. The [`RatingChangedEventArgs`](https://ej2.syncfusion.com/react/documentation/api/rating/ratingChangedEventArgs/) passed as an event argument provides the details when value is changed.

```ts
{/* Import the Rating. */}
import { RatingComponent, RatingChangedEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render Rating.*/}
function App() {

    function valueChanged(args: RatingChangedEventArgs){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <RatingComponent id='rating' valueChanged={ valueChanged } ></RatingComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
```

Below example demonstrates the valueChanged event of the Rating component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/events-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/events-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/events-cs1" %}
