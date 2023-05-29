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

export let summaryData: Object[] = [
    {
        ID: '1',
        Name: 'Order 1',
        units: '1395',
        unitPrice: '47.00',
        price: 65565,
        category: 'Seafoods',
        subtasks: [
            { ID: '1.1', Name: 'Mackerel', category: 'Frozen seafood', units: '235', unitPrice: '12.26', price: 2881.1 },
            { ID: '1.2', Name: 'Yellowfin Tuna', category: 'Frozen seafood', units: '324', unitPrice: '18.45', price: 5977.8 },
            { ID: '1.3', Name: 'Herrings', category: 'Frozen seafood', units: '488', unitPrice: '11.45', price: 5587.6 },
            { ID: '1.4', Name: 'Preserved Olives', category: 'Edible', units: '125', unitPrice: '19.56', price: 2445 },
            { ID: '1.5', Name: 'Sweet corn Frozen', category: 'Edible', units: '223', unitPrice: '12.34', price: 2751.82 }
         ]
    },
    {
        ID: '2',
        Name: 'Order 2',
        units: '1944',
        unitPrice: '58.45',
        price: 1245.73,
        category: 'Products',
        subtasks: [
            { ID: '2.1', Name: 'Tilapias', category: 'Frozen seafood', units: '278', unitPrice: '15.45', price: 4295.1 },
            { ID: '2.2', Name: 'White Shrimp', category: 'Frozen seafood', units: '560', unitPrice: '17.66', price: 9889.6 },
            { ID: '2.3', Name: 'Fresh Cheese', category: 'Dairy', units: '323', unitPrice: '12.35', price: 3989 },
            { ID: '2.4', Name: 'Blue Veined Cheese', category: 'Dairy', units: '370', unitPrice: '15.77', price: 5834.9 },
            { ID: '2.5', Name: 'Butter', category: 'Dairy', units: '413', unitPrice: '19.45', price: 8032.85 }
        ]
    },
    {
        ID: '3',
        Name: 'Order 3',
        units: '1120',
        unitPrice: '33.45',
        price: 37464,
        category: 'Crystals',
        subtasks: [
            { ID: '3.1', Name: 'Lead glassware', category: 'Solid crystals', units: '542', unitPrice: '19.56', price: 10601.52 },
            { ID: '3.2', Name: 'Pharmaceutical Glassware', category: 'Solid crystals', units: '324', unitPrice: '11.36', price: 3680.64 },
            { ID: '3.3', Name: 'Glass beads', category: 'Solid crystals', units: '254', unitPrice: '16.11', price: 4091.94 }
        ]
    }

];

export let summaryRowData: Object[] = [{
    'FreightID': 'CX2389NK',
    'FreightName': 'Maersk Edibles Co.',
    'TotalUnits': 59,
    'TotalCosts': 278,
    'UnitWeight': 241,
    'children': [{

        'FreightID': 'QW4567OP',
        'FreightName': 'Chang',
        'TotalUnits': 12,
        'TotalCosts': 140,
        'UnitWeight': 50,
    }, {
        'FreightID': 'QW3458BH',
        'FreightName': 'Aniseed Syrup',
        'TotalUnits': 89,
        'TotalCosts': 590,
        'UnitWeight': 87,
    }, {
        'FreightID': 'QW8967OH',
        'FreightName': 'Chef Anton',
        'TotalUnits': 46,
        'TotalCosts': 460,
        'UnitWeight': 54,
    }, {

        'FreightID': 'QW6549NJ',
        'FreightName': 'Chef Antons Gumbo Mix',
        'TotalUnits': 34,
        'TotalCosts': 590,
        'UnitWeight': 50,
    }]
},
{
    'FreightID': 'DW8954IO',
    'FreightName': 'Aeon fitness inc.',
    'TotalUnits': 172,
    'TotalCosts': 24,
    'UnitWeight': 296,
    'children': [
        {
            'FreightID': 'UF5647YH',
            'FreightName': 'Reebox CrossFit Back Bay',
            'TotalUnits': 60,
            'TotalCosts': 870,
            'UnitWeight': 73,
        },
        {
            'FreightID': 'UF1290LK',
            'FreightName': 'The Green Microgym',
            'TotalUnits': 56,
            'TotalCosts': 876,
            'UnitWeight': 90,
        },
        {
            'FreightID': 'UF8956KU',
            'FreightName': 'DeFrancos',
            'TotalUnits': 45,
            'TotalCosts': 458,
            'UnitWeight': 68,
        },
        {
            'FreightID': 'UF7464JK',
            'FreightName': 'Westside Barbell',
            'TotalUnits': 25,
            'TotalCosts': 231,
            'UnitWeight': 65,
        }],
    },
    {
        'FreightID': 'EJ9456KN',
        'FreightName': 'Sun technologies inc',
        'TotalUnits': 33,
        'TotalCosts': 229,
        'UnitWeight': 192,
        'children': [
            {
                'FreightID': 'GH2367OP',
                'FreightName': 'Haier Group',
                'TotalUnits': 78,
                'TotalCosts': 678,
                'UnitWeight': 23,
            },
            {
                'FreightID': 'GH4309TH',
                'FreightName': 'Panda Electronics',
                'TotalUnits': 90,
                'TotalCosts': 790,
                'UnitWeight': 48,
            },
            {
                'FreightID': 'GH3494SD',
                'FreightName': 'Jiangsu Etern',
                'TotalUnits': 36,
                'TotalCosts': 435,
                'UnitWeight': 56,
            },
            {
                'FreightID': 'GH3213FR',
                'FreightName': 'Zhejiang Fuchunjiang',
                'TotalUnits': 12,
                'TotalCosts': 278,
                'UnitWeight': 65,
            }],

        }
];
