---
layout: post
title: Getting started with React Schedule and MongoDB | Syncfusion
description: Checkout and learn about Getting started with React Schedule component of Syncfusion Essential JS 2 in the MERN project.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion React Scheduler with MongoDB (MERN Integration)

This section provides a step-by-step guide for setting up a MERN application and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> React Scheduler component.

## What is MERN?

MERN is a full‑stack JavaScript technology stack consisting of MongoDB, Express.js, React, and Node.js, used to build scalable, high‑performance web applications. It enables seamless development across the front end and back end using JavaScript, making it a popular choice for modern, data‑driven applications.

## Overview
This integration enables full CRUD (Create, Read, Update, Delete) operations for calendar events using:

* Frontend: React + Syncfusion React Scheduler
* Backend: Node.js + Express
* Database: MongoDB
* Communication: REST APIs via Syncfusion DataManager

Users can create, edit, and delete appointments in the Scheduler UI, with all changes persisted in MongoDB.

## Prerequisites

Before getting started with the MERN application, ensure the following prerequisites are met:

* **Node.js ≥ 20.19.0**  
Required for optimal performance and full compatibility with MongoDB Node.js Driver v7.0 and modern ES features.

* **MongoDB (Latest Stable Version)**   
Required for storing and retrieving application data. Supports both local installation and MongoDB Atlas.

## Architecture Diagram
![Architecture Diagram](./images/react-mongodb-architecture.png)

### Architecture Flow

1. User interacts with Syncfusion React Scheduler
2. Scheduler sends requests via DataManager
3. Node.js API processes CRUD actions
4. MongoDB stores event data
5. Updated data is sent back to Scheduler UI

## Database Setup
**MongoDB**   
Follow the steps below to set up the MongoDB database for the application:

1. Download the MongoDB Community Edition from the official website: [MongoDB](https://www.mongodb.com/try/download/community)

2. Install MongoDB by following the platform‑specific installation instructions (Windows / macOS / Linux).

3. Launch MongoDB Compass after successful installation.

4. Open MongoDB Compass and connect the default connection string: `mongodb://localhost:27017`
    ![mongodb-connection](./images/react-mongodb-connection.png)
    *Image illustrating the MongoDB connection string*

5. Create a new Database `mydb` and a Collection `ScheduleData` in default connection string.
    ![mongodb-database-collection](./images/react-mongodb-database-collection.png)
    *Image illustrating the MongoDB database & collection*

6. Confirm that MongoDB Compass shows the database in the connected state, as illustrated in the screenshot.
    ![mongodb-connectivity](./images/react-mongodb-connectivity.png)
    *Image illustrating the MongoDB connectivity*

## Create a React Application
To create a new `React` application, use the Vite build tool, which provides faster startup, hot reload, and better performance for modern React applications.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm create vite@latest 

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create vite 

{% endhighlight %}
{% endtabs %}

Running one of the above commands will prompt you to configure the project as shown below.

1. **Define the project name**     
    For example, let us name the project mern-react-app.

    {% tabs %}
    {% highlight bash tabtitle="CMD" %}

    √ Project name: » **mern-react-app**
    
    {% endhighlight %}
    {% endtabs %}

2. **Select the required configurations**   

    Choose React as the framework and TypeScript as the variant for better type safety and maintainability.
    
    {% tabs %}
    {% highlight bash tabtitle="CMD" %}

    √ Select a framework: » **React**   
    √ Select a variant: » **TypeScript**   
    
    {% endhighlight %}
    {% endtabs %}

    **Note:**  
    You can also create the React application with TypeScript directly using the Vite template, as shown below.

    {% tabs %}
    {% highlight bash tabtitle="NPM" %}

    npm create vite@latest mern-react-app -- --template react-ts

    {% endhighlight %}
    {% highlight bash tabtitle="YARN" %}

    yarn create vite mern-react-app --template react-ts

    {% endhighlight %}
    {% endtabs %}

3. **Select additional Vite options**

    {% tabs %}
    {% highlight bash tabtitle="CMD" %}

    √ Use rolldown-vite (Experimental)?: » **No**   
    √ Install with npm and start now? » **Yes**  
    
    {% endhighlight %}
    {% endtabs %}
   
After executing the above commands, the application will be available at: `http://localhost:5173`

The React application is now created and running with default settings.
Next, we will proceed with integrating Syncfusion® React Scheduler component into the project after setting up the server.

4. **Terminate & navigate to the project directory**   
    Once the project is created successfully, stop the running state of the application and move into the application folder using the following command:

    {% tabs %}
    {% highlight bash tabtitle="CMD" %}

    ctrl + c
    cd mern-react-app

    {% endhighlight %}
    {% endtabs %}

## Create a server application

1. **To set up the backend for the MERN application, Install the required packages and make a new directory for server in the react project folder `mern-react-app/` itself.**

    {% tabs %}
    {% highlight bash tabtitle="CMD" %}

    npm install express mongodb cors   
 
    {% endhighlight %}
    {% endtabs %}

    * Express – A minimal and flexible web framework used to build API endpoints
    * MongoDB (Node.js Driver) – The official MongoDB driver that allows your server to communicate with the database
    * CORS – A package that enables your application (running on a different port) to access the server’s API

    {% tabs %}
    {% highlight bash tabtitle="CMD" %}

    mkdir server

    {% endhighlight %}
    {% endtabs %}

2. **Create a file server.js**   
Create a new file named `server.js` inside the directory `server` created above and add the following code to set up the server: 

    {% tabs %}
    {% highlight js tabtitle="server.js" %}

    const { MongoClient } = require('mongodb');
    const express = require('express');
    const cors = require('cors');

    const app = express();
    const mongoUrl = 'mongodb://127.0.0.1:27017/';
    const PORT = 5000;

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // CORS configuration
    app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: false
    }));

    app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    });

    (async () => {
    const client = new MongoClient(mongoUrl);
    await client.connect();
    const db = client.db('mydb');
    const collection = db.collection('ScheduleData');

    // Fetch all scheduler events
    app.post('/GetData', async (req, res) => {
        try {
        const data = await collection.find({}).toArray();
        res.json(data);
        } catch (err) {
        res.status(500).json({ error: err.message });
        }
    });

    // Handle batch CRUD operations
    app.post('/BatchData', async (req, res) => {
        try {
            const body = req.body;
            let events = [];

            // INSERT
            if (body.action === 'insert' || (body.added && body.added.length)) {
                events = body.added || [body.value];
                for (const e of events) {
                e.StartTime = new Date(e.StartTime);
                e.EndTime = new Date(e.EndTime);
                await collection.insertOne(e);
                }
            }

            // UPDATE
            if (body.action === 'update' || (body.changed && body.changed.length)) {
                events = body.changed || [body.value];
                for (const e of events) {
                delete e._id;
                e.StartTime = new Date(e.StartTime);
                e.EndTime = new Date(e.EndTime);
                await collection.updateOne(
                    { Id: e.Id },
                    { $set: e }
                );
                }
            }

            // DELETE
            if (body.action === 'remove' || (body.deleted && body.deleted.length)) {
                events = body.deleted || [{ Id: body.key }];
                for (const e of events) {
                await collection.deleteOne({ Id: e.Id });
                }
            }

            res.json(body);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    })();
    
    {% endhighlight %}
    {% endtabs %}

    Here database name is `mydb` and collection name is `ScheduleData`, both were previously created during the database setup process 

3. **Add server script to package.json**    
To enable running the Node.js backend directly from the React project’s root, add the following script inside your root `package.json` under the "scripts" section:
    
    {% tabs %}
    {% highlight json tabtitle="package.json" %}

    "scripts": {
        "server": "node ./server/server.js"
    }

    {% endhighlight %}
    {% endtabs %}

## Integrating Syncfusion React Scheduler to MERN Application
This section integrates [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) to the above created MERN application.

1. **Install the required [Syncfusion React Scheduler Package](https://www.npmjs.com/package/@syncfusion/ej2-react-schedule)** 
    
    {% tabs %}
    {% highlight bash tabtitle="NPM" %}

    npm install @syncfusion/ej2-react-schedule
    
    {% endhighlight %}
    {% highlight bash tabtitle="YARN" %}

    yarn add @syncfusion/ej2-react-schedule

    {% endhighlight %}
    {% endtabs %}

2. **Adding CSS references**   
Add CSS references for the Schedule in `src/App.css`:
   
    {% tabs %}
    {% highlight css tabtitle="App.css" %}

    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
    
    {% endhighlight %}
    {% endtabs %}

3. **Add the Schedule component**   
In the `src/App.tsx` file, use the following code snippet to render the Syncfusion React Schedule component and import `App.css` to apply styles to the schedule:
    
    {% tabs %}
    {% highlight jsx tabtitle="App.tsx" %}

    import React from 'react';
    import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
    import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
    import './App.css';

    export default class App extends React.Component<{}, {}> {
    public scheduleObj: ScheduleComponent = new ScheduleComponent({});
    private dataManager: DataManager = new DataManager({
        url: 'http://localhost:5000/GetData',
        crudUrl: 'http://localhost:5000/BatchData',
        adaptor: new UrlAdaptor(),
        crossDomain: true
    });

    public render() {
    return (
    
    <div className="control-section">
        <div className="schedule-control">
        <ScheduleComponent 
        id="schedule" 
        ref={(schedule: ScheduleComponent | null) => { 
            this.scheduleObj = schedule!;
            }}
        height="550px"
        selectedDate={new Date(2026, 0, 1)} 
        currentView="Month" 
        eventSettings={ {dataSource: this.dataManager }}>
            <ViewsDirective>
            <ViewDirective option="Day" />
            <ViewDirective option="Week" />
            <ViewDirective option="WorkWeek" />
            <ViewDirective option="Month" />
            <ViewDirective option="Agenda" />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
        </div>
    </div>
    );
    }
    }
    
    {% endhighlight %}
    {% endtabs %}

## Run the MERN Application

**Note**:  
If your project’s package.json contains **"type": "module"**, remove it before running the server.  
This project uses CommonJS (require), not ES modules—keeping "type": "module" will cause Node.js to throw a “require is not defined in ES module scope” error.

1. **From the project folder `mern-react-app/`, run the backend server:**
    
    {% tabs %}
    {% highlight bash tabtitle="NPM" %} 

    npm run server
   
    {% endhighlight %}
    {% highlight bash tabtitle="YARN" %}

    yarn server

    {% endhighlight %}
    {% endtabs %}

    The Node server started running on http://localhost:5000/

2. **Open another terminal from the same project folder `mern-react-app/` and run the React application:**
    
    {% tabs %}
    {% highlight bash tabtitle="NPM" %}

    npm run dev
    
    {% endhighlight %}
    {% highlight bash tabtitle="YARN" %}

    yarn run dev

    {% endhighlight %}
    {% endtabs %}

    The React application started running on http://localhost:5173/

3. **You can create, read, update and delete events in the React Scheduler and able to see the changes in DB as well.**

## Output Preview
**Syncfusion React Scheduler**
![FrontEnd React Scheduler](./images/react-mongodb-scheduler-output.png)
*Image illustrating the Syncfusion React Scheduler* 

**Syncfusion React Scheduler Events in MongoDB**
![Backend DB Records](./images/react-mongodb-db-output.png)
*Image illustrating the Syncfusion React Scheduler Events in MongoDB* 

## Common pitfalls & solutions

1. **CORS issues (blocked by CORS)**

    Ensure app.use(cors(...)) is registered before routes and that origin matches your React dev URL. Set credentials: true only if you send cookies/Authorization and then also configure DataManager to send them. 

2. **Dates stored as strings**

    Convert StartTime/EndTime to Date objects on the server before inserting/updating. Otherwise, Scheduler rendering/timezone math may be off.

3. **Immutable _id error on updates**

    Delete _id from payload before calling updateOne. The MongoDB driver does not allow changing _id.

4. **Missing CSS → broken layout**

    Import all required CSS bundles for EJ2 controls; otherwise the editor/pickers won’t render correctly.

5. **ID management collisions**

    Scheduler uses Id for CRUD. Ensure uniqueness; either generate on the client (e.g., from timestamp) or on the server (find max + 1, or use a counter). If you rely on user-provided Ids, duplicates will cause updates to affect the wrong row.

6. **Load-on-demand expectations**

    The Scheduler can load data on demand via DataManager/adaptors. If you implement server-side filtering (by date range), make sure to honor the query parameters that DataManager sends.

7. **Recurring events**

    Persist RecurrenceRule, RecurrenceID, RecurrenceException fields; they are needed for repeats and exceptions. [Scheduler events](https://ej2.syncfusion.com/react/documentation/schedule/appointments)

<br>

> Please find the sample in this [GitHub location](https://github.com/SyncfusionExamples/ej2-react-scheduler-with-mongodb)