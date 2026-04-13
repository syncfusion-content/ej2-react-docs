export let stringData: Object[] =  [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        name: [{firstName: 'Nancy'}, {lastName: 'Davolio'}],
        priority: 'Normal',
        approved: false,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),name: [{firstName: 'Andrew'}, { lastName: 'Fuller'}],
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),name: [{firstName: 'Janet'}, { lastName: 'Leverling'}],
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),name: [{firstName: 'Margaret'}, { lastName: 'Peacock'}],
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),name: [{firstName: 'Steven'}, { lastName: 'Buchanan'}],
                endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        name: [{firstName: 'Michael'}, { lastName: 'Suyama'}],
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),name: [{firstName: 'Robert'}, { lastName: 'King'}],
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),name: [{firstName: 'Laura'}, { lastName: 'Challahan'}],
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),name: [{firstName: 'Anne'}, { lastName: 'Dodsworth'}],
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),name: [{firstName: 'Tamer'}, { lastName: 'Nancy'}],
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),name: [{firstName: 'Laura'}, { lastName: 'Martin'}],
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    }
];

export let textdata: Object[] = [{
    'Name': 'Robert King',
    'FullName': 'RobertKing',
    'Designation': 'Chief Executive Officer',
    'EmployeeID': '1',
    'EmpID': 'EMP001',
    'Address': '507 - 20th Ave. E.Apt. 2A, Seattle',
    'Contact': '(206) 555-9857',
    'Country': 'USA',
    'DOB': new Date('2/15/1963'),

    'Children': [{
        'Name': 'David william',
        'FullName': 'DavidWilliam',
        'Designation': 'Vice President',
        'EmployeeID': '2',
        'EmpID': 'EMP004',
        'Address': '722 Moss Bay Blvd., Kirkland',
        'Country': 'USA',
        'Contact': '(206) 555-3412',
        'DOB': new Date('5/20/1971'),


        'Children': [{
            'Name': 'Nancy Davolio',
            'FullName': 'NancyDavolio',
            'Designation': 'Marketing Executive',
            'EmployeeID': '3',
            'EmpID': 'EMP035',
            'Address': '4110 Old Redmond Rd., Redmond',
            'Country': 'USA',
            'Contact': '(206) 555-8122',
            'DOB': new Date('3/19/1966'),
            'Children': [
                {
                    'Name': 'Andrew Fuller',
                    'FullName': 'AndrewFuller',
                    'Designation': 'Sales Representative',
                    'EmployeeID': '4',
                    'EmpID': 'EMP045',
                    'Address': '14 Garrett Hill, London',
                    'Country': 'UK',
                    'Contact': '(71) 555-4848',
                    'DOB': new Date('9/20/1980')
                },
            {
                'Name': 'Anne Dodsworth',
                'FullName': 'AnneDodsworth',
                'Designation': 'Sales Representative',
                'EmployeeID': '5',
                'EmpID': 'EMP091',
                'Address': '4726 - 11th Ave. N.E., Seattle',
                'Country': 'USA',
                'Contact': '(206) 555-1189',
                'DOB': new Date('10/19/1989')
            },
            {
                'Name': 'Michael Suyama',
                'FullName': 'MichaelSuyama',
                'Designation': 'Sales Representative',
                'EmployeeID': '6',
                'EmpID': 'EMP110',
                'Address': 'Coventry House Miner Rd., London',
                'Country': 'UK',
                'Contact': '(71) 555-3636',
                'DOB': new Date('11/02/1987')
            },
            {
                'Name': 'Janet Leverling',
                'FullName': 'JanetLeverling',
                'Designation': 'Sales Coordinator',
                'EmployeeID': '7',
                'EmpID': 'EMP131',
                'Address': 'Edgeham Hollow Winchester Way, London',
                'Country': 'UK',
                'Contact': '(71) 555-3636',
                'DOB': new Date('11/06/1990')
            },
            ]

        },
        {
            'Name': 'Romey Wilson',
            'FullName': 'RomeyWilson',
            'Designation': 'Sales Executive',
            'EmployeeID': '8',
            'EmpID': 'EMP039',
            'Address': '7 Houndstooth Rd., London',
            'Country': 'UK',
            'Contact': '(71) 555-3690',
            'DOB': new Date('02/02/1980'),
            'Children': [
            {
                'Name': 'Margaret Peacock',
                'FullName': 'MargaretPeacock',
                'Designation': 'Sales Representative',
                'EmployeeID': '9',
                'EmpID': 'EMP213',
                'Address': '4726 - 11th Ave. N.E., California',
                'Country': 'USA',
                'Contact': '(206) 555-1989',
                'DOB': new Date('01/21/1986')
            },
            {
                'Name': 'Laura Callahan',
                'FullName': 'LauraCallahan',
                'Designation': 'Sales Coordinator',
                'EmployeeID': '10',
                'EmpID': 'EMP201',
                'Address': 'Coventry House Miner Rd., London',
                'Country': 'UK',
                'Contact': '(71) 555-2222',
                'DOB': new Date( '12/01/1990')
            },
            {
                'Name': 'Steven Buchanan',
                'FullName': 'StevenBuchanan',
                'Designation': 'Sales Representative',
                'EmployeeID': '11',
                'EmpID': 'EMP197',
                'Address': '200 Lincoln Ave, Salinas, CA 93901',
                'Country': 'USA',
                'Contact': '(831) 758-7408',
                'DOB': new Date('03/23/1987')
            },
            {
                'Name': 'Tedd Lawson',
                'FullName': 'TeddLawson',
                'Designation': 'Sales Representative',
                'EmployeeID': '12',
                'EmpID': 'EMP167',
                'Address': '200 Lincoln Ave, Salinas, CA 93901',
                'Country': 'USA',
                'Contact': '(831) 758-7368 ',
                'DOB': new Date('08/09/1989')
            },
            ]
        }]
    }]
}];

export let complexData: Object[] =  [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        assignee: {firstName: 'Nancy', lastName: 'Davolio'},
        priority: 'Normal',
        approved: false,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),assignee: {firstName: 'Andrew', lastName: 'Fuller'},
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),assignee: {firstName: 'Janet', lastName: 'Leverling'},
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),assignee: {firstName: 'Margaret', lastName: 'Peacock'},
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),assignee: {firstName: 'Steven', lastName: 'Buchanan'},
                endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        assignee: {firstName: 'Michael', lastName: 'Suyama'},
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),assignee: {firstName: 'Robert', lastName: 'King'},
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),assignee: {firstName: 'Laura', lastName: 'Challahan'},
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),assignee: {firstName: 'Anne', lastName: 'Dodsworth'},
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),assignee: {firstName: 'Tamer', lastName: 'Nancy'},
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),assignee: {firstName: 'Laura', lastName: 'Martin'},
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    }
];

export let orderData: Object[] = [
    {
        orderID: 1,
        orderName: 'Order 1',
        orderDate: new Date('02/03/2017'),
        shippedDate: new Date('02/09/2017'),
        units: 1395,
        unitPrice: 47.42,
        price: 134,
        Category: 'Seafoods',
        subtasks: [
            { orderID: 1.1, orderName: 'Mackerel', Category: 'Frozen seafood', units: 235,
            orderDate: new Date('03/03/2017'), shippedDate: new Date('03/10/2017'), unitPrice: 12.35, price: 28 },
            { orderID: 1.2, orderName: 'Yellowfin Tuna', Category: 'Frozen seafood', units: 324,
            orderDate: new Date('04/05/2017'), shippedDate: new Date('04/12/2017'), unitPrice: 18.56, price: 25 },
            { orderID: 1.3, orderName: 'Herrings', Category: 'Frozen seafood', units: 488,
            orderDate: new Date('05/08/2017'), shippedDate: new Date('05/15/2017'), unitPrice: 11.45, price: 52 },
            { orderID: 1.4, orderName: 'Preserved Olives', Category: 'Edible', units: 125,
            orderDate: new Date('06/10/2017'), shippedDate: new Date('06/17/2017'), unitPrice: 19.26, price: 11 },
            { orderID: 1.5, orderName: 'Sweet corn Frozen', Category: 'Edible', units: 223,
            orderDate: new Date('07/12/2017'), shippedDate: new Date('07/19/2019'), unitPrice: 17.54, price: 15 }
         ]
    },
    {
        orderID: 2,
        orderName: 'Order 2',
        orderDate: new Date('01/10/2018'),
        shippedDate: new Date('01/16/2018'),
        units: 1944,
        unitPrice: 58.45,
        price: 212,
        Category: 'products',
        subtasks: [
            { orderID: 2.1, orderName: 'Tilapias', Category: 'Frozen seafood',
            orderDate: new Date('02/05/2018'), shippedDate: new Date('02/12/2018'), units: 278, unitPrice: 15.26, price: 41 },
            { orderID: 2.2, orderName: 'White Shrimp', Category: 'Frozen seafood', units: 560,
            orderDate: new Date('05/22/2018'), shippedDate: new Date('05/29/2018'), unitPrice: 17.26, price: 39 },
            { orderID: 2.3, orderName: 'Fresh Cheese', Category: 'Dairy', units: '323', unitPrice: 12.67,
            orderDate: new Date('06/08/2018'), shippedDate: new Date('06/15/2018'), price: 38 },
            { orderID: 2.4, orderName: 'Blue Veined Cheese', Category: 'Dairy', units: 370, unitPrice: 15.25,
            orderDate: new Date('07/10/2018'), shippedDate: new Date('07/17/2018'), price: 55 },
            { orderID: 2.5, orderName: 'Butter', Category: 'Dairy', units: '413', unitPrice: 19.25,
            orderDate: new Date('09/18/2018'), shippedDate: new Date('09/25/2018'), price: 37.17 }
        ]
    },
    {
        orderID: 3,
        orderName: 'Order 3',
        orderDate: new Date('09/10/2018'),
        shippedDate: new Date('09/20/2018'),
        units: 1120,
        unitPrice: 33.45,
        price: 109,
        Category: 'Crystals',
        subtasks: [
            { orderID: 3.1, orderName: 'Lead glassware', Category: 'Solid crystals',
            orderDate: new Date('02/07/2018'), shippedDate: new Date('02/14/2018'), units: 542, unitPrice: 16.45, price: 32 },
            { orderID: 3.2, orderName: 'Pharmaceutical Glassware', Category: 'Solid crystals',
            orderDate: new Date('04/19/2018'), shippedDate: new Date('04/26/2018'), units: 324, unitPrice: 11.45, price: 35 },
            { orderID: 3.3, orderName: 'Glass beads', Category: 'Solid crystals', units: 254,
            orderDate: new Date('05/22/2018'), shippedDate: new Date('03/22/2018'), unitPrice: 16.23, price: 40 }
        ]
    }

];
export let sortData: Object[] = [
    {
        orderID: '1',
        orderName: 'Order 1',
        orderDate: new Date('02/03/2017'),
        shippedDate: new Date('02/09/2017'),
        units: '1395',
        unitPrice: '47.42',
        price: 134,
        Category: 'Seafoods',
        subtasks: [
            { orderID: '1.1', orderName: 'Mackerel', Category: 'Frozen seafood', units: '235',
            orderDate: new Date('03/03/2017'), shippedDate: new Date('03/10/2017'), unitPrice: '12.35', price: 28 },
            { orderID: '1.2', orderName: 'Yellowfin Tuna', Category: 'Frozen seafood', units: '324',
            orderDate: new Date('04/05/2017'), shippedDate: new Date('04/12/2017'), unitPrice: '18.56', price: 25 },
            { orderID: '1.3', orderName: 'Herrings', Category: 'Frozen seafood', units: '488',
            orderDate: new Date('05/08/2017'), shippedDate: new Date('05/15/2017'), unitPrice: '11.45', price: 52 },
            { orderID: '1.4', orderName: 'Preserved Olives', Category: 'Edible', units: '125',
            orderDate: new Date('06/10/2017'), shippedDate: new Date('06/17/2017'), unitPrice: '19.26', price: 11 },
            { orderID: '1.5', orderName: 'Sweet corn Frozen', Category: 'Edible', units: '223',
            orderDate: new Date('07/12/2017'), shippedDate: new Date('07/19/2019'), unitPrice: '17.54', price: 15 }
         ]
    },
    {
        orderID: '2',
        orderName: 'Order 2',
        orderDate: new Date('01/10/2018'),
        shippedDate: new Date('01/16/2018'),
        units: '1944',
        unitPrice: '58.45',
        price: 212,
        Category: 'products',
        subtasks: [
            { orderID: '2.1', orderName: 'Tilapias', Category: 'Frozen seafood',
            orderDate: new Date('02/05/2018'), shippedDate: new Date('02/12/2018'), units: '278', unitPrice: '15.26', price: 41 },
            { orderID: '2.2', orderName: 'White Shrimp', Category: 'Frozen seafood', units: '560',
            orderDate: new Date('05/22/2018'), shippedDate: new Date('05/29/2018'), unitPrice: '17.26', price: 39 },
            { orderID: '2.3', orderName: 'Fresh Cheese', Category: 'Dairy', units: '323', unitPrice: '12.67',
            orderDate: new Date('06/08/2018'), shippedDate: new Date('06/15/2018'), price: 38 },
            { orderID: '2.4', orderName: 'Blue Veined Cheese', Category: 'Dairy', units: '370', unitPrice: '15.25',
            orderDate: new Date('07/10/2018'), shippedDate: new Date('07/17/2018'), price: 55 },
            { orderID: '2.5', orderName: 'Butter', Category: 'Dairy', units: '413', unitPrice: '19.25',
            orderDate: new Date('09/18/2018'), shippedDate: new Date('09/25/2018'), price: 37.17 }
        ]
    },
    {
        orderID: '3',
        orderName: 'Order 3',
        orderDate: new Date('09/10/2018'),
        shippedDate: new Date('09/20/2018'),
        units: '1120',
        unitPrice: '33.45',
        price: 109,
        Category: 'Crystals',
        subtasks: [
            { orderID: '3.1', orderName: 'Lead glassware', Category: 'Solid crystals',
            orderDate: new Date('02/07/2018'), shippedDate: new Date('02/14/2018'), units: '542', unitPrice: '16.45', price: 32 },
            { orderID: '3.2', orderName: 'Pharmaceutical Glassware', Category: 'Solid crystals',
            orderDate: new Date('04/19/2018'), shippedDate: new Date('04/26/2018'), units: '324', unitPrice: '11.45', price: 35 },
            { orderID: '3.3', orderName: 'Glass beads', Category: 'Solid crystals', units: '254',
            orderDate: new Date('05/22/2018'), shippedDate: new Date('03/22/2018'), unitPrice: '16.23', price: 40 }
        ]
    }

];
export let sampleData: Object[] =  [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 12,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        progress: 66,
        subtasks: [
            {
                taskID: 13,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                progress: 50,
                duration: 11,
                subtasks: [{
                    taskID: 14,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    progress: 10,
                    approved: false,
                    subtasks: [
                        { taskID: 15, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 16, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 17, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 18, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 19, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 20, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, progress: '50', priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 21,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                progress: 60,
                subtasks: [{
                    taskID: 22,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    progress: 90,
                    subtasks: [
                        { taskID: 23, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 24, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 25, taskName: 'Testing', startDate: new Date('02/21/2017'),
                            endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 26, taskName: 'Bug fix', startDate: new Date('02/25/2017'),
                            endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 27, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 28, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'),
                            endDate: new Date('02/28/2017'), duration: 0, progress: '50', priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 29,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                progress: 30,
                subtasks: [{
                    taskID: 30,
                    taskName: 'Implementation Module 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 11,
                    progress: 60,
                    subtasks: [
                        { taskID: 31, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 32, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 33, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 34, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 35, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 36, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, progress: '50', priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    }
];