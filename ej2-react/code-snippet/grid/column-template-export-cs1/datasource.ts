export let data: Object[] = [
    {
        OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
        ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
        ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
        ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
        ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
    },
    {
        OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3, OrderDate: new Date(8367642e5),
        ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
        ShipRegion: 'CJ', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0
    },
    {
        OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4, OrderDate: new Date(8368506e5),
        ShipName: 'Suprêmes délices', ShipCity: 'Charleroi', ShipAddress: 'Boulevard Tirou, 255',
        ShipRegion: 'CJ', ShipPostalCode: 'B-6000', ShipCountry: 'Belgium', Freight: 51.3, Verified: !0
    },
    {
        OrderID: 10253, CustomerID: 'HANAR', EmployeeID: 3, OrderDate: new Date(836937e6),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 58.17, Verified: !0
    },
    {
        OrderID: 10254, CustomerID: 'CHOPS', EmployeeID: 5, OrderDate: new Date(8370234e5),
        ShipName: 'Chop-suey Chinese', ShipCity: 'Bern', ShipAddress: 'Hauptstr. 31',
        ShipRegion: 'CJ', ShipPostalCode: '3012', ShipCountry: 'Switzerland', Freight: 22.98, Verified: !1
    },
    {
        OrderID: 10255, CustomerID: 'RICSU', EmployeeID: 9, OrderDate: new Date(8371098e5),
        ShipName: 'Richter Supermarkt', ShipCity: 'Genève', ShipAddress: 'Starenweg 5',
        ShipRegion: 'CJ', ShipPostalCode: '1204', ShipCountry: 'Switzerland', Freight: 148.33, Verified: !0
    },
    {
        OrderID: 10256, CustomerID: 'WELLI', EmployeeID: 3, OrderDate: new Date(837369e6),
        ShipName: 'Wellington Importadora', ShipCity: 'Resende', ShipAddress: 'Rua do Mercado, 12',
        ShipRegion: 'SP', ShipPostalCode: '08737-363', ShipCountry: 'Brazil', Freight: 13.97, Verified: !1
    },
    {
        OrderID: 10257, CustomerID: 'HILAA', EmployeeID: 4, OrderDate: new Date(8374554e5),
        ShipName: 'HILARION-Abastos', ShipCity: 'San Cristóbal', ShipAddress: 'Carrera 22 con Ave. Carlos Soublette #8-35',
        ShipRegion: 'Táchira', ShipPostalCode: '5022', ShipCountry: 'Venezuela', Freight: 81.91, Verified: !0
    },
    {
        OrderID: 10258, CustomerID: 'ERNSH', EmployeeID: 1, OrderDate: new Date(8375418e5),
        ShipName: 'Ernst Handel', ShipCity: 'Graz', ShipAddress: 'Kirchgasse 6',
        ShipRegion: 'CJ', ShipPostalCode: '8010', ShipCountry: 'Austria', Freight: 140.51, Verified: !0
    },
    {
        OrderID: 10259, CustomerID: 'CENTC', EmployeeID: 4, OrderDate: new Date(8376282e5),
        ShipName: 'Centro comercial Moctezuma', ShipCity: 'México D.F.', ShipAddress: 'Sierras de Granada 9993',
        ShipRegion: 'CJ', ShipPostalCode: '05022', ShipCountry: 'Mexico', Freight: 3.25, Verified: !1
    },
    {
        OrderID: 10260, CustomerID: 'OTTIK', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Ottilies Käseladen', ShipCity: 'Köln', ShipAddress: 'Mehrheimerstr. 369',
        ShipRegion: 'CJ', ShipPostalCode: '50739', ShipCountry: 'Germany', Freight: 55.09, Verified: !0
    },
    {
        OrderID: 10261, CustomerID: 'QUEDE', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Que Delícia', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua da Panificadora, 12',
        ShipRegion: 'RJ', ShipPostalCode: '02389-673', ShipCountry: 'Brazil', Freight: 3.05, Verified: !1
    },
    {
        OrderID: 10262, CustomerID: 'RATTC', EmployeeID: 8, OrderDate: new Date(8379738e5),
        ShipName: 'Rattlesnake Canyon Grocery', ShipCity: 'Albuquerque', ShipAddress: '2817 Milton Dr.',
        ShipRegion: 'NM', ShipPostalCode: '87110', ShipCountry: 'USA', Freight: 48.29, Verified: !0
    }];

    export let employeeData: Object[] = [{
        'EmployeeID': 1,
        'LastName': 'Davolio',
        'FirstName': 'Nancy',
        'EmailID': 'nancy@domain.com',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Ms.',
        'BirthDate': new Date(-664743600000),
        'HireDate': new Date(704692800000),
        'Address': '507 - 20th Ave. E.\r\nApt. 2A',
        'City': 'Seattle',
        'Region': 'WA',
        'PostalCode': '98122',
        'Country': 'USA',
        'HomePhone': '(206) 555-9857',
        'Extension': '5467',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Education includes a BA in psychology from Colorado State University in 1970.  She also completed\
        \'The Art of the Cold Call.\'  Nancy is a member of Toastmasters International.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp',
        'EmployeeImage': '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'
    },
    {
        'EmployeeID': 2,
        'LastName': 'Fuller',
        'FirstName': 'Andrew',
        'EmailID': 'andrew@domain.com',
        'Title': 'Vice President, Sales',
        'TitleOfCourtesy': 'Dr.',
        'BirthDate': new Date(-563828400000),
        'HireDate': new Date(713764800000),
        'Address': '908 W. Capital Way',
        'City': 'Tacoma',
        'Region': 'WA',
        'PostalCode': '98401',
        'Country': 'USA',
        'HomePhone': '(206) 555-9482',
        'Extension': '3457',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of \
        Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, \
        was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the \
        Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.',
        'ReportsTo': 0,
        'PhotoPath': 'http://accweb/emmployees/fuller.bmp',
        'EmployeeImage': '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'
    },
    {
        'EmployeeID': 3,
        'LastName': 'Leverling',
        'FirstName': 'Janet',
        'EmailID': 'janet@domain.com',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Ms.',
        'BirthDate': new Date(-200088000000),
        'HireDate': new Date(702104400000),
        'Address': '722 Moss Bay Blvd.',
        'City': 'Kirkland',
        'Region': 'WA',
        'PostalCode': '98033',
        'Country': 'USA',
        'HomePhone': '(206) 555-3412',
        'Extension': '3355',
        'Photo': { 'Length': 21722 },
    
        'Notes': 'Janet has a BS degree in chemistry from Boston College (1984). \
         She has also completed a certificate program in food retailing management.\
         Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/leverling.bmp',
        'EmployeeImage': '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'
    },
    {
        'EmployeeID': 4,
        'LastName': 'Peacock',
        'FirstName': 'Margaret',
        'EmailID': 'margaret@domain.com',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Mrs.',
        'BirthDate': new Date(-1018814400000),
        'HireDate': new Date(736401600000),
        'Address': '4110 Old Redmond Rd.',
        'City': 'Redmond',
        'Region': 'WA',
        'PostalCode': '98052',
        'Country': 'USA',
        'HomePhone': '(206) 555-8122',
        'Extension': '5176',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American \
        Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/peacock.bmp',
        'EmployeeImage': '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'
    },
    {
        'EmployeeID': 5,
        'LastName': 'Buchanan',
        'FirstName': 'Steven',
        'EmailID': 'steven@domain.com',
        'Title': 'Sales Manager',
        'TitleOfCourtesy': 'Mr.',
        'BirthDate': new Date(-468010800000),
        'HireDate': new Date(750830400000),
        'Address': '14 Garrett Hill',
        'City': 'London',
        'Region': null,
        'PostalCode':
        'SW1 8JR',
        'Country': 'UK',
        'HomePhone': '(71) 555-4848',
        'Extension': '3453',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as \
        a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent \
        post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses \'Successful \
        Telemarketing\' and \'International Sales Management.\'  He is fluent in French.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/buchanan.bmp',
        'EmployeeImage': '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'
    },
    {
        'EmployeeID': 6,
        'LastName': 'Suyama',
        'FirstName': 'Michael',
        'EmailID': 'michael@domain.com',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Mr.',
        'BirthDate': new Date(-205185600000),
        'HireDate': new Date(750830400000),
        'Address': 'Coventry House\r\nMiner Rd.',
        'City': 'London',
        'Region': null,
        'PostalCode': 'EC2 7JR',
        'Country': 'UK',
        'HomePhone': '(71) 555-7773',
        'Extension': '428',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles \
        (MBA, marketing, 1986).  He has also taken the courses \'Multi-Cultural Selling\' and \'Time Management for the Sales Professional.\'  \
        He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
        'ReportsTo': 5,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp',
        'EmployeeImage': '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'
    },
    {
        'EmployeeID': 7,
        'LastName': 'King',
        'FirstName': 'Robert',
        'EmailID': 'robert@domain.com',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Mr.',
        'BirthDate': new Date(-302731200000),
        'HireDate': new Date(757486800000),
        'Address': 'Edgeham Hollow\r\nWinchester Way',
        'City': 'London',
        'Region': null,
        'PostalCode': 'RG1 9SP',
        'Country': 'UK',
        'HomePhone': '(71) 555-5598',
        'Extension': '465',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the \
        University of Michigan in 1992, the year he joined the company.  After completing a course entitled \'Selling in Europe,\' \
        he was transferred to the London office in March 1993.',
        'ReportsTo': 5,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp',
        'EmployeeImage': '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'
    },
    {
        'EmployeeID': 8,
        'LastName': 'Callahan',
        'FirstName': 'Laura',
        'EmailID': 'laura@domain.com',
        'Title': 'Inside Sales Coordinator',
        'TitleOfCourtesy': 'Ms.',
        'BirthDate': new Date(-377982000000),
        'HireDate': new Date(762843600000),
        'Address': '4726 - 11th Ave. N.E.',
        'City': 'Seattle',
        'Region': 'WA',
        'PostalCode': '98105',
        'Country': 'USA',
        'HomePhone': '(206) 555-1189',
        'Extension': '2344',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Laura received a BA in psychology from the University of Washington.  She has also completed a course in business \
        French.  She reads and writes French.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp',
        'EmployeeImage': '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'
    },
    {
        'EmployeeID': 9,
        'LastName': 'Dodsworth',
        'FirstName': 'Anne',
        'EmailID': 'anne@domain.com',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Ms.',
        'BirthDate': new Date(-123966000000),
        'HireDate': new Date(784875600000),
        'Address': '7 Houndstooth Rd.',
        'City': 'London',
        'Region': null,
        'PostalCode': 'WG2 7LT',
        'Country': 'UK',
        'HomePhone': '(71) 555-4444',
        'Extension': '452',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.',
        'ReportsTo': 5,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp',
        'EmployeeImage': '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'
    }];

    export let fEmployeeData: Object[] = [{
        'EmployeeID': 1,
        'LastName': 'Davolio',
        'FirstName': 'Nancy',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Ms.',
        'BirthDate': new Date(-664743600000),
        'HireDate': new Date(704692800000),
        'Address': '507 - 20th Ave. E.\r\nApt. 2A',
        'City': 'Seattle',
        'Region': 'WA',
        'PostalCode': '98122',
        'Country': 'USA',
        'HomePhone': '(206) 555-9857',
        'Extension': '5467',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Education includes a BA in psychology from Colorado State University in 1970.  She also completed\
        \'The Art of the Cold Call.\'  Nancy is a member of Toastmasters International.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
    },
    
    {
        'EmployeeID': 3,
        'LastName': 'Leverling',
        'FirstName': 'Janet',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Ms.',
        'BirthDate': new Date(-200088000000),
        'HireDate': new Date(702104400000),
        'Address': '722 Moss Bay Blvd.',
        'City': 'Kirkland',
        'Region': 'WA',
        'PostalCode': '98033',
        'Country': 'USA',
        'HomePhone': '(206) 555-3412',
        'Extension': '3355',
        'Photo': { 'Length': 21722 },
    
        'Notes': 'Janet has a BS degree in chemistry from Boston College (1984). \
         She has also completed a certificate program in food retailing management.\
         Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/leverling.bmp'
    },
    {
        'EmployeeID': 4,
        'LastName': 'Peacock',
        'FirstName': 'Margaret',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Mrs.',
        'BirthDate': new Date(-1018814400000),
        'HireDate': new Date(736401600000),
        'Address': '4110 Old Redmond Rd.',
        'City': 'Redmond',
        'Region': 'WA',
        'PostalCode': '98052',
        'Country': 'USA',
        'HomePhone': '(206) 555-8122',
        'Extension': '5176',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American \
        Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/peacock.bmp'
    },
    {
        'EmployeeID': 5,
        'LastName': 'Buchanan',
        'FirstName': 'Steven',
        'Title': 'Sales Manager',
        'TitleOfCourtesy': 'Mr.',
        'BirthDate': new Date(-468010800000),
        'HireDate': new Date(750830400000),
        'Address': '14 Garrett Hill',
        'City': 'London',
        'Region': null,
        'PostalCode':
        'SW1 8JR',
        'Country': 'UK',
        'HomePhone': '(71) 555-4848',
        'Extension': '3453',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as \
        a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent \
        post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses \'Successful \
        Telemarketing\' and \'International Sales Management.\'  He is fluent in French.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/buchanan.bmp'
    },
    {
        'EmployeeID': 6,
        'LastName': 'Suyama',
        'FirstName': 'Michael',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Mr.',
        'BirthDate': new Date(-205185600000),
        'HireDate': new Date(750830400000),
        'Address': 'Coventry House\r\nMiner Rd.',
        'City': 'London',
        'Region': null,
        'PostalCode': 'EC2 7JR',
        'Country': 'UK',
        'HomePhone': '(71) 555-7773',
        'Extension': '428',
        'Photo': { 'Length': 21626 },
        'Notes': 'Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles \
        (MBA, marketing, 1986).  He has also taken the courses \'Multi-Cultural Selling\' and \'Time Management for the Sales Professional.\'  \
        He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
        'ReportsTo': 5,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
    },
    {
        'EmployeeID': 8,
        'LastName': 'Callahan',
        'FirstName': 'Laura',
        'Title': 'Inside Sales Coordinator',
        'TitleOfCourtesy': 'Ms.',
        'BirthDate': new Date(-377982000000),
        'HireDate': new Date(762843600000),
        'Address': '4726 - 11th Ave. N.E.',
        'City': 'Seattle',
        'Region': 'WA',
        'PostalCode': '98105',
        'Country': 'USA',
        'HomePhone': '(206) 555-1189',
        'Extension': '2344',
        'Photo': { 'Length': 21626 },
    
        'Notes': 'Laura received a BA in psychology from the University of Washington.  She has also completed a course in business \
        French.  She reads and writes French.',
        'ReportsTo': 2,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
    },
    {
        'EmployeeID': 9,
        'LastName': 'Dodsworth',
        'FirstName': 'Anne',
        'Title': 'Sales Representative',
        'TitleOfCourtesy': 'Ms.',
        'BirthDate': new Date(-123966000000),
        'HireDate': new Date(784875600000),
        'Address': '7 Houndstooth Rd.',
        'City': 'London',
        'Region': null,
        'PostalCode': 'WG2 7LT',
        'Country': 'UK',
        'HomePhone': '(71) 555-4444',
        'Extension': '452',
        'Photo': { 'Length': 21626 },
        'Notes': 'Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.',
        'ReportsTo': 5,
        'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
    }];