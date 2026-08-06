---
layout: post
title: Virtual Scrolling in React Scheduler | Syncfusion
description: Learn how to enable virtual scrolling in the Syncfusion React Scheduler timeline and agenda views to load resources and events on demand.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtual Scrolling in React Scheduler

Virtual scrolling improves Scheduler performance when you work with a large number of resources and events. It loads resources and appointments dynamically in timeline views as users scroll, which provides a smoother experience. Enable virtual scrolling by setting the [`allowVirtualScrolling`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#allowvirtualscrolling) property to `true` in the required timeline view settings. In Agenda view, set the same property in the agenda view configuration to enable virtual loading of events.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/events-cs48/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/events-cs48/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-cs48/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/events-cs48" %}

> **Note:** Virtual loading of resources and events is not supported in `MonthAgenda`, `Year`, and `TimelineYear` (horizontal orientation) views.

## Enabling lazy loading for appointments

Lazy loading provides an efficient way to load appointment data on demand. It helps you work with large volumes of data without performance issues.

By default, the Scheduler retrieves all appointments within the current date range from the server. When lazy loading is enabled, the Scheduler sends queries to the server to fetch appointments only for the resources currently visible after scroll actions. These queries include the resource IDs and the current date range as a comma-separated string. On the server, the resource IDs are parsed to filter and return only the appointments needed for rendering.

With this feature enabled, the Scheduler fetches data from remote services only for the appointments visible in the viewport. Additional appointment data is loaded on demand as new resources enter the viewport during scrolling.

Enable this feature by setting the [`enableLazyLoading`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#enablelazyloading) property to `true` in the appropriate view settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/events-cs50/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/events-cs50/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-cs50/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/events-cs50" %}

The following server-side controller code demonstrates how to retrieve appointment data based on resource IDs received as query parameters:

```c#
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.OData.Query;

namespace LazyLoadingServices.Controllers
{
    public class VirtualEventDataController : Controller
    {
        private readonly EventsContext dbContext;

        [HttpGet]
        [EnableQuery]
        [Route("api/VirtualEventData")]
        public IActionResult GetData([FromQuery] Params param)
        {
            IQueryable<EventData> query = dbContext.Events;
            // Filter the appointment data based on the ResourceId query params.
            if (!string.IsNullOrEmpty(param.ResourceId))
            {
                string[] resourceId = param.ResourceId.Split(',');
                query = query.Where(data => resourceId.Contains(data.ResourceId.ToString()));
            }
            return Ok(query.ToList());
        }
    }
    public class Params
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string ResourceId { get; set; }
    }
}
```

> **Note:**
> * This property is effective when a large number of resources and appointments are bound to the Scheduler.
> * This property is applicable only when [resource grouping](https://ej2.syncfusion.com/react/documentation/api/schedule/group#resources) is enabled in the Scheduler.

## See also

* [Virtual scrolling in Agenda view](./views#agenda-view)

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler)
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule)
* [Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview)
