---
layout: post
title: Loading React Diagram from PostgreSQL database | Syncfusion®
description: Learn how to fetch organizational data from PostgreSQL and bind it to the Syncfusion React Diagram using DataManager and a Node.js/Express backend.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Loading React Diagram from PostgreSQL database

The Syncfusion® React Diagram component allows visualization of organizational chart layout using data from a PostgreSQL database through a REST API. This guide explains how to set up the PostgreSQL database, create a Node.js backend service, and link the data to the React Diagram component to display an organizational chart layout.

> **Note**: This guide works with React Diagram version 28.x or later. The REST API needs to return an array of JSON objects with **id**, **parent_id**, and **role** fields for correct data binding.

## Overview

This integration workflow connects:

* **PostgreSQL** – Stores the organizational chart data.
* **Node.js + Express** – REST API that serves JSON data from PostgreSQL.
* **React + Syncfusion® EJ2 Diagram** – data binding via DataManager and rendering of an organizational chart layout.

## Prerequisites

Ensure availability of the following software:

- **Node.js** 20.x or newer
- **PostgreSQL** 12.x or newer
- **TypeScript** 5.x
- **React** 19.x or newer

## PostgreSQL database setup

### Installing PostgreSQL

Download PostgreSQL from the official website: [https://www.postgresql.org/download/](https://www.postgresql.org/download/)


**Installation Steps:**

1. Download the installer for the preferred version (12.x or higher recommended)
2. Run the installer and follow the setup wizard
3. During installation:
  - Set a password for the PostgreSQL (example: **postgres123**) and remember it.
  - Keep the default port **5432**.
  - Next, the Select Components screen will open.
  - By default, all options are selected, as shown in the image:
    ![Select Components](images/select-component-Package.png)
  - Uncheck the **Stack Builder** option — it is not necessary for this setup.
  - Ensure **PostgreSQL Server**, **pgAdmin 4**, and **Command Line Tools** are selected.

4. Complete the installation.

Two options are available to create a database:
  * Manual (pgAdmin 4)
  * Automated initialization and seeding (seed script).

### Option A: Manual (pgAdmin 4)

#### Opening pgAdmin

PostgreSQL includes pgAdmin 4, a graphical tool for database management. Open pgAdmin 4 from the Windows Start menu or application launcher.

![Opening pgAdmin 4](images/pgadmin-start.jpg)

#### Creating the database

Right-click on **Databases** option and select **Create** → **Database**.

![Create Database Menu](images/create-database-menu.png)

In the **Create - Database** dialog:
1. Enter **org_chart_db** as the database name. 
2. Click **Save** to create the database.

![Database Creation Dialog](images/database-creation-dialog.png)

After creating the database, right-click the **org_chart_db** database and choose **Query Tool** from the context menu.

**Quick procedure before running SQL:**

- Clear the editor (Ctrl+A → Delete) to remove any previous statements.
- Enter the SQL, then click **Execute / Execute Query** (or press **F5**) to run it.
- After execution, clear the editor again before entering the next statement.

Follow this simple sequence for every SQL in this guide.

#### Creating the table

Run the following SQL to create the **org_chart_layout** table:

```sql
CREATE TABLE IF NOT EXISTS org_chart_layout (
  id text PRIMARY KEY,
  role text NOT NULL,
  parent_id text NULL
);
```
![Create Table Query](images/create-table-query.jpg)

The table structure includes:
- **id** - Primary key for unique node identification.
- **role** - Display text for the node in the organizational chart layout.
- **parent_id** - Foreign key reference to the parent node (NULL for root).

#### Inserting sample data

Add organizational chart data using the SQL **INSERT** statement. The sample data shows a typical organizational structure with board, management, and department levels.

```sql
INSERT INTO org_chart_layout (id, role, parent_id) VALUES
('parent', 'Board', NULL),
('1', 'General Manager', 'parent'),
('2', 'Human Resource Manager', '1'),
('3', 'Trainers', '2'),
('4', 'Recruiting Team', '2'),
('5', 'Finance Asst. Manager', '2'),
('6', 'Design Manager', '1'),
('7', 'Design Supervisor', '6'),
('8', 'Development Supervisor', '6'),
('9', 'Drafting Supervisor', '6'),
('10', 'Operations Manager', '1'),
('11', 'Statistics Department', '10'),
('12', 'Logistics Department', '10'),
('16', 'Marketing Manager', '1'),
('17', 'Overseas Sales Manager', '16'),
('18', 'Petroleum Manager', '16'),
('20', 'Service Department Manager', '16'),
('21', 'Quality Control Department', '16')
ON CONFLICT (id) DO UPDATE
SET role = EXCLUDED.role,
    parent_id = EXCLUDED.parent_id;
```

![Insert Data Query](images/insert-data-query.jpg)

#### Verifying data insertion

Run a **SELECT** query to confirm the data insertion:

```sql
SELECT * FROM org_chart_layout ORDER BY id;
```

The query should return 18 rows. Parent–child relationships are indicated by the **parent_id** column, which references the **id** of the parent node (NULL for root nodes).

![Verify Data Query Results](images/verify-data-results.jpg)


### Option B: Automated (seed script)

This project includes an automated initialization script that handles database creation, table schema generation, and data seeding in one command.  

The script performs the following operations:
1. **Dynamic Database Provisioning**: Detects if the database exists and creates it automatically.
2. **Schema Generation**: Creates the **org_chart_layout** table with the required primary keys and organizational relationships.
3. **Data Seeding**: Populates the table with 18 nodes of organizational data from a JSON source.

The implementation details for the automated initialization script are covered in the [Automated database initialization and seeding](#automated-database-initialization-and-seeding) section under Backend Implementation.

## Backend implementation

### Backend dependencies

Create a **server** folder inside the project root folder, navigate to it, and install the following packages:

```powershell
cd server
npm install express pg cors dotenv
npm install -D @types/express @types/pg @types/cors @types/node typescript tsx nodemon
```

**Dependencies Explained:**
- **express** - Web framework for building REST APIs.
- **pg** - PostgreSQL client for Node.js.
- **cors** - To able cross-origin requests.
- **dot env** - Loads environment variables from the .env file.
- **typescript**, **tsx** - TypeScript runtime and compiler.

### Database connection configuration

#### Environment configuration

Create a **server/.env** file with the following configuration:

```env
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=org_chart_db
PORT=5000
NODE_ENV=development
```

> **Note**: Update **DB_PASSWORD** to match your local PostgreSQL credentials.

#### Connection pool configuration

Create a **server/src/db/index.ts** file to configure the connection pool that manages database connections efficiently.

```ts
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export default pool;
```
The error handler captures unexpected database errors on idle connections and terminates the application to prevent operating in an unstable state.

> **Important**: Replace **your_password** with the actual PostgreSQL password set during installation. Never commit the **.env** file to version control.

#### TypeScript type definitions

Create a **server/src/types/layout.types.ts** file and add the following interface:

```ts
export interface LayoutNode {
  id: string;
  parent_id: string | null;
  role: string;
}
```

### Automated database initialization and seeding

This section explains the automated database initialization and seeding process that creates the database, applies the schema, and populates the initial organizational chart data.

#### Seed data file

Create a **server/src/data/layoutSeed.json** file with the organizational chart data:

```json
[
  { "id": "parent", "parent_id": null, "role": "Board" },
  { "id": "1", "parent_id": "parent", "role": "General Manager" },
  { "id": "2", "parent_id": "1", "role": "Human Resource Manager" }
  // More data...
]
```

#### Seed script

Create a **server/src/script/seedLayout.ts** file that automates database creation and data insertion:

```ts
import pool from '../db/index.js';
import pkg from 'pg';
const { Client } = pkg;
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { LayoutNode } from '../types/layout.types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const seedDatabase = async (): Promise<void> => {
  const dbName = process.env.DB_NAME || 'org_chart_db';
  
  // Step 1: Create database if it doesn't exist
  const systemClient = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    database: 'postgres',
  });

  try {
    await systemClient.connect();
    const res = await systemClient.query(
      `SELECT 1 FROM pg_database WHERE datname = '${dbName}'`
    );
    
    if (res.rowCount === 0) {
      console.log(`Database "${dbName}" not found. Creating...`);
      await systemClient.query(`CREATE DATABASE ${dbName}`);
      console.log(`Database "${dbName}" created successfully.`);
    } else {
      console.log(`Database "${dbName}" already exists.`);
    }
  } catch (error) {
    console.error('Error checking/creating database:', error);
  } finally {
    await systemClient.end();
  }
  const client = await pool.connect();
  
  try {
    console.log('Starting database seeding...');

    const seedDataPath = join(__dirname, '../data/layoutSeed.json');
    const seedData: LayoutNode[] = JSON.parse(readFileSync(seedDataPath, 'utf-8'));

    await client.query(`
      DROP TABLE IF EXISTS org_chart_layout;
      
      CREATE TABLE org_chart_layout (
        id TEXT PRIMARY KEY,
        parent_id TEXT,
        role TEXT NOT NULL,
        FOREIGN KEY (parent_id) REFERENCES org_chart_layout(id) ON DELETE CASCADE
      );
      
      CREATE INDEX idx_org_chart_layout_parent_id ON org_chart_layout(parent_id);
    `);
    
    console.log('Table created successfully');
    for (const node of seedData) {
      await client.query(
        'INSERT INTO org_chart_layout (id, parent_id, role) VALUES ($1, $2, $3)',
        [node.id, node.parent_id, node.role]
      );
    }

    console.log(`Successfully seeded ${seedData.length} nodes`);
    console.log('Database seeding completed!');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    client.release();
  }
};

seedDatabase();
```

#### Running the seed script

Add the seed script to your **server/package.json** file:

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/server.js",
    "dev": "tsx watch src/server.ts",
    "seed": "tsx src/script/seedLayout.ts"
  }
}
```

Execute the following command to initialize the database:

```powershell
cd server
npm run seed
```

This creates the database, table schema, and populates it with 18 organizational chart nodes.

### Backend API endpoints

Create the API layer to expose organizational chart data to the frontend.

#### Controller

Create a **server/src/controllers/layout.controller.ts** file to handle database queries:

```ts
import { Request, Response } from 'express';
import pool from '../db/index.js';
import { LayoutNode } from '../types/layout.types.js';

/**
 * Fetches all organizational chart layout nodes from the database
 * Returns organizational chart data as JSON array
 */
export const getLayoutData = async (req: Request, res: Response): Promise<void> => {
  try {
    // Execute SQL query to fetch all nodes ordered by id
    const result = await pool.query<LayoutNode>(
      'SELECT id, parent_id, role FROM org_chart_layout ORDER BY id'
    );
    
    // Send the rows array as JSON response
    res.json(result.rows);
  } catch (error) {
    // Log error for debugging
    console.error('Error fetching layout data:', error);
    
    // Extract error message safely
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Return 500 Internal Server Error with details in development mode
    res.status(500).json({
      message: 'Failed to fetch layout data',
      error: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    });
  }
};
```

#### Routes

Create a **server/src/routes/layout.routes.ts** file to map URL endpoints to controller functions:

```ts
import { Router } from 'express';
import { getLayoutData } from '../controllers/layout.controller.js';

// Create a new router instance
const router = Router();

// Define GET endpoint: /api/layout
// When accessed, it calls the `getLayoutData` controller function
router.get('/layout', getLayoutData);

export default router;
```

This creates the endpoint **http://localhost:5000/api/layout** that returns the organizational chart data.

#### Main server file

Create a **server/src/server.ts** file to configure Express, enable CORS, and start the server:

```ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db/index.js';
import layoutRoutes from './routes/layout.routes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware: Parse incoming JSON request bodies
app.use(express.json());

// Middleware: Enable CORS for React frontend
// Allows requests from Vite dev server (ports 5173, 5174)
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));

// Register API routes with /api prefix
// All routes from `layoutRoutes` will be accessible at /api/*
app.use('/api', layoutRoutes);

// 404 Handler: Catch all undefined routes
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler: Catch any unhandled errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Server error:', err);
  res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

/**
 * Start the Express server
 * First tests database connectivity, then starts HTTP server
 */
const startServer = async (): Promise<void> => {
  try {
    // Test database connection before starting server
    await pool.query('SELECT NOW()');
    console.log('✓ Database connected successfully');
    
    // Start listening for HTTP requests
    app.listen(PORT, () => {
      console.log(`✓ Server running on http://localhost:${PORT}`);
      console.log(`✓ API endpoint: http://localhost:${PORT}/api/layout`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);  // Exit with error code
  }
};

startServer();
```

### Running the backend server

Open a terminal and navigate to the **server** folder:

```powershell
cd server
npm run dev
```

Expected console output when the server starts successfully:

```
✓ Database connected successfully
✓ Server running on http://localhost:5000
✓ API endpoint: http://localhost:5000/api/layout
```

This confirms:
- PostgreSQL connection is established.
- Express server is listening on port 5000.
- The API endpoint is accessible.

> **Important**: Keep this terminal window open. The backend must continue running to serve data to the frontend.

## Frontend implementation

### Frontend dependencies

From your project root, scaffold the client application using Vite (React + TypeScript template):

```powershell
npm create vite@latest client -- --template react-ts

```

Then install the UI and type dependencies:

```powershell
cd client
npm install @syncfusion/ej2-react-diagrams @syncfusion/ej2-data @syncfusion/ej2-base
npm install react react-dom
npm install -D @types/react @types/react-dom typescript vite
```

**Package Overview:**
- **@syncfusion/ej2-react-diagrams** - React diagram component with **OrganizationalChart** layout support.
- **@syncfusion/ej2-data** - DataManager for data binding.
- **@syncfusion/ej2-base** - Core utilities and base components.
- **vite** - Fast build tool and development server.

Import Syncfusion® CSS styles in the **client/src/index.css** file for proper component rendering:

```css
/* Import Material theme base styles */
@import '@syncfusion/ej2-base/styles/material.css';

/* Import Diagram component-specific styles */
@import '@syncfusion/ej2-react-diagrams/styles/material.css';
```

> **Note**: Syncfusion® provides multiple themes (Material, Bootstrap, Fabric). This example uses Material theme for modern appearance.

#### TypeScript type definitions

Create a **client/src/types/layout.types.ts** file and add the following interface:

```ts
export interface LayoutNode {
  id: string;
  parent_id: string | null;
  role: string;
}

```

### Service layer

Create a **client/src/services/layoutService.ts** file to handle API communication:

This service layer handles the HTTP request, performs error checking, and returns typed data that components can use.

```ts
import type { LayoutNode } from '../types/layout.types';

const API_URL = 'http://localhost:5000/api/layout';

export const fetchLayoutData = async (): Promise<LayoutNode[]> => {
  const response = await fetch(API_URL);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch layout data: ${response.statusText}`);
  }
  
  return response.json();
};
```

### Diagram component

Create a `OrganizationalLayout.tsx`file inside  **client/src/components/** folder to render the organizational chart layout:

The diagram component fetches data on mount, binds it to the **DataManager**, and configures organizational chart layout properties.

```tsx
import { useEffect, useState } from 'react';
import {
  DiagramComponent,
  Inject,
  HierarchicalTree,
  DataBinding,
  Node,
  Connector
} from '@syncfusion/ej2-react-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
import type { LayoutNode } from '../types/layout.types';
import { fetchLayoutData } from '../services/layoutService';

const OrganizationalLayout = () => {
  // State management for data, loading, and error states
  const [data, setData] = useState<LayoutNode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data when component mounts
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // Call service layer to fetch data from backend
        const layoutData = await fetchLayoutData();
        setData(layoutData);
        setError(null);
      } catch (err) {
        // Handle fetch errors gracefully
        const errorMessage = err instanceof Error 
          ? err.message 
          : 'Failed to load diagram data';
        setError(errorMessage);
        console.error('Error loading layout data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []); // Empty dependency array - runs once on mount

  // Show loading message while fetching data
  if (loading) {
    return <div>Loading diagram...</div>;
  }

  // Show error message if fetch failed
  if (error) {
    return (
      <div>
        <h3>Error Loading Diagram</h3>
        <p>{error}</p>
      </div>
    );
  }

  // Render diagram once data is loaded
  return (
    <DiagramComponent
      id="diagram"
      width="100%"
      height="700px"
      
      // Data binding configuration
      dataSourceSettings={{
        id: 'id',                           // Field name for unique identifier
        parentId: 'parent_id',              // Field name for parent reference
        dataSource: new DataManager(data)   // Wrap data with `DataManager`
      }}
      
      // Layout algorithm configuration
      layout={{
        type: 'OrganizationalChart',  // Use org chart layout
        horizontalSpacing: 50,        // Horizontal gap between nodes
        verticalSpacing: 50           // Vertical gap between levels
      }}
      
      // Customize default node appearance
      getNodeDefaults={(node: Node) => {
        node.width = 100;
        node.height = 40;
        node.shape = { type: 'Basic', shape: 'Rectangle' };
        node.style = { fill: '#6BA5D7', strokeColor: '#6BA5D7' };
        
        // Add text annotation showing the role field
        node.annotations = [{
          content: (node.data as LayoutNode).role,
          style: { color: 'white' }
        }];
        return node;
      }}
      
      // Customize default connector appearance
      getConnectorDefaults={(connector: Connector) => {
        connector.type = 'Orthogonal';  // 90-degree angle connectors
        connector.targetDecorator = { 
          shape: 'Arrow', 
          width: 10, 
          height: 10 
        };
        connector.style = { strokeColor: '#6BA5D7' };
        return connector;
      }}
    >
      <Inject services={[HierarchicalTree, DataBinding]} />
    </DiagramComponent>
  );
};

export default OrganizationalLayout;
```

Add the `OrganizationalLayout` component to `App.tsx` as shown below.

```tsx
import './App.css';
import OrganizationalLayout from './components/OrganizationalLayout';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Syncfusion® React Diagram - Organizational Chart Layout</h1>
      </header>
      <main className="app-main">
        <OrganizationalLayout />
      </main>
    </div>
  );
}

export default App;

```

### Running the application

Run the client dev server:

```powershell
cd client
npm run dev
```

Open `http://localhost:5173` in a browser. The organizational chart should render using data fetched from the backend API.

**Application Flow:**
1. React component mounts → triggers **useEffect** hook.
2. Service layer fetches data from **http://localhost:5000/api/layout**.
3. Backend queries PostgreSQL and returns JSON array.
4. Frontend receives data → wraps it with **DataManager**.
5. **DiagramComponent** renders organizational chart visualization.

> **Note**: If the diagram doesn't appear, press F12 to check the browser console for errors and verify both backend and frontend servers are running.

## Troubleshooting

### Database initialization issues

**Symptom**: `Error: database "org_chart_db" does not exist`

**Root Cause**: The initialization script has not been run, or the database user lacks creation privileges.

**Resolution Steps**:
1. **Run Initialization**: Execute **npm run seed** in the **server** folder.
2. **PostgreSQL Service**: Ensure PostgreSQL is running on your system:
   ```powershell
   Get-Service -Name postgresql*
   ```
3. **Check Permissions**: Ensure the database user has **CREATEDB** rights.
4. **Environment Check**: Verify **DB_NAME** in **server/.env** matches the expected name.

**Symptom**: `Error: password authentication failed`

**Root Cause**: The password in **server/.env** does not match the PostgreSQL user password.

**Resolution Steps**:
1. Open pgAdmin 4.
2. Right-click on user → **Properties** → **Definition**.
3. Enter a new password and save.
4. Update **DB_PASSWORD** in **server/.env** with the new password.
5. Restart the Node.js server with **npm run dev**.

> **Tip**: Avoid special characters in PostgreSQL passwords to prevent shell escaping issues.

### CORS configuration

CORS (Cross-Origin Resource Sharing) errors occur when the frontend and backend run on different ports without proper permission configuration.

**Symptom**: Browser console shows `Access to fetch at 'http://localhost:5000/api/layout' from origin 'http://localhost:5173' has been blocked by CORS policy`

**Root Cause**: The backend CORS configuration does not include the frontend's port.

**Resolution Steps**:
1. Check the frontend port (usually 5173).
2. Open **server/src/server.ts**.
3. Update the CORS origin array to include all frontend ports:
   ```ts
   app.use(cors({
     origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
     credentials: true
   }));
   ```
4. Save the file and refresh the browser page.

**Additional Check**: If using a different port, add it to the origins array.

### Empty diagram rendering

An empty diagram (no nodes visible) can result from API failures, empty database, or data binding issues.

**Symptom**: Page loads successfully but diagram area is blank with no nodes displayed.

**Diagnostic Steps**:

1. **Verify API is responding**:
   ```powershell
   Invoke-WebRequest -Uri http://localhost:5000/api/layout -UseBasicParsing
   ```
   **Expected**: JSON array with organizational chart data should be returned.

2. **Check database has data**:
   Open pgAdmin Query Tool and execute:
   ```sql
   SELECT COUNT(*) FROM org_chart_layout;
   ```
   **Expected**: Should return 18 (or the number of records inserted).

3. **Inspect browser Network tab**:
   - Press F12 → **Network** tab.
   - Refresh the page.
   - Look for the **layout** request.
   - Status should be **200 OK**.
   - **Preview** tab should show JSON data.

4. **Check component state**:
   - Add console logs in `OrganizationalLayout.tsx`:
     ```ts
     useEffect(() => {
       const loadData = async () => {
         const layoutData = await fetchLayoutData();
         // Log data
         console.log('Fetched data:', layoutData); 
         setData(layoutData);
       };
       loadData();
     }, []);
     ```
   - Verify data is being received and set correctly.

**Common Resolution**: Most empty diagram issues are caused by the backend server not running or CORS blocking the API request.

> Please find the sample in this [Github location](https://github.com/SyncfusionExamples/ej2-web-diagram-examples/)


## See Also

- [Syncfusion® React Diagram Documentation](https://ej2.syncfusion.com/react/documentation/diagram/getting-started)
- [DataManager API Reference](https://ej2.syncfusion.com/react/documentation/data/getting-started)
- [Organizational Chart Layout](https://ej2.syncfusion.com/react/documentation/diagram/org-chart)
- [PostgreSQL Node.js Driver](https://node-postgres.com/)
- [Express REST API Best Practices](https://expressjs.com/en/guide/routing.html)