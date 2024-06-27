let rData = [
    { 'Date': '1/1/2015', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Hydro-electric', 'PowUnits': 46, 'ProCost': 43 },
    { 'Date': '2/1/2015', 'Sector': 'Private Sector', 'EnerType': 'Free Energy', 'EneSource': 'Geo-thermal', 'PowUnits': 30, 'ProCost': 29 },
    { 'Date': '3/1/2015', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Solar', 'PowUnits': 125, 'ProCost': 96 },
    { 'Date': '9/1/2015', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Hydro-electric', 'PowUnits': 33, 'ProCost': 65 },
    { 'Date': '11/1/2015', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Solar', 'PowUnits': 109, 'ProCost': 96 },
    { 'Date': '12/1/2015', 'Sector': 'Private Sector', 'EnerType': 'Free Energy', 'EneSource': 'Wind', 'PowUnits': 266, 'ProCost': 139 },
    { 'Date': '1/1/2016', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Wind', 'PowUnits': 257, 'ProCost': 143 },
    { 'Date': '3/1/2016', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Geo-thermal', 'PowUnits': 28, 'ProCost': 48 },
    { 'Date': '4/1/2016', 'Sector': 'Private Sector', 'EnerType': 'Free Energy', 'EneSource': 'Solar', 'PowUnits': 128, 'ProCost': 117 },
    { 'Date': '5/1/2016', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Hydro-electric', 'PowUnits': 68, 'ProCost': 48 },
    { 'Date': '7/1/2016', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Solar', 'PowUnits': 141, 'ProCost': 98 },
    { 'Date': '8/1/2016', 'Sector': 'Private Sector', 'EnerType': 'Free Energy', 'EneSource': 'Wind', 'PowUnits': 281, 'ProCost': 134 },
    { 'Date': '9/1/2016', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Wind', 'PowUnits': 228, 'ProCost': 107 },
    { 'Date': '11/1/2016', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Geo-thermal', 'PowUnits': 19, 'ProCost': 44 },
    { 'Date': '12/1/2016', 'Sector': 'Private Sector', 'EnerType': 'Free Energy', 'EneSource': 'Solar', 'PowUnits': 149, 'ProCost': 82 },
    { 'Date': '1/1/2017', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Hydro-electric', 'PowUnits': 47, 'ProCost': 58 },
    { 'Date': '1/1/2017', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Wind', 'PowUnits': 210, 'ProCost': 110 },
    { 'Date': '11/1/2016', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Hydro-electric', 'PowUnits': 60, 'ProCost': 43 },
    { 'Date': '9/1/2016', 'Sector': 'Public Sector', 'EnerType': 'Free Energy', 'EneSource': 'Solar', 'PowUnits': 102, 'ProCost': 108 },
    { 'Date': '10/1/2016', 'Sector': 'Private Sector', 'EnerType': 'Free Energy', 'EneSource': 'Hydro-electric', 'PowUnits': 77, 'ProCost': 64 },
    { 'Date': '6/1/2015', 'Sector': 'Private Sector', 'EnerType': 'Biomass', 'EneSource': 'Bio-diesel', 'PowUnits': 7, 'ProCost': 28 },
    { 'Date': '8/1/2015', 'Sector': 'Private Sector', 'EnerType': 'Biomass', 'EneSource': 'Wood', 'PowUnits': 13, 'ProCost': 25 },
    { 'Date': '9/1/2015', 'Sector': 'Public Sector', 'EnerType': 'Biomass', 'EneSource': 'Wastage', 'PowUnits': 30, 'ProCost': 49 },
    { 'Date': '10/1/2015', 'Sector': 'Private Sector', 'EnerType': 'Biomass', 'EneSource': 'Ethanol Fuel', 'PowUnits': 4, 'ProCost': 26 },
    { 'Date': '11/1/2015', 'Sector': 'Public Sector', 'EnerType': 'Biomass', 'EneSource': 'Bio-diesel', 'PowUnits': 76, 'ProCost': 87 },
    { 'Date': '9/1/2016', 'Sector': 'Public Sector', 'EnerType': 'Biomass', 'EneSource': 'Bio-diesel', 'PowUnits': 85, 'ProCost': 80 },
    { 'Date': '12/1/2016', 'Sector': 'Private Sector', 'EnerType': 'Biomass', 'EneSource': 'Wastage', 'PowUnits': 20, 'ProCost': 22 },
    { 'Date': '1/1/2017', 'Sector': 'Public Sector', 'EnerType': 'Biomass', 'EneSource': 'Ethanol Fuel', 'PowUnits': 40, 'ProCost': 51 },
    { 'Date': '2/1/2017', 'Sector': 'Private Sector', 'EnerType': 'Biomass', 'EneSource': 'Bio-diesel', 'PowUnits': 7, 'ProCost': 25 },
    { 'Date': '12/1/2017', 'Sector': 'Private Sector', 'EnerType': 'Biomass', 'EneSource': 'Bio-diesel', 'PowUnits': 8, 'ProCost': 28 },
    { 'Date': '2/1/2018', 'Sector': 'Private Sector', 'EnerType': 'Biomass', 'EneSource': 'Wood', 'PowUnits': 20, 'ProCost': 23 }
];

export let renewableEnergy = getClassDate(rData);

function getClassDate(data) {
    let date;
    for (let ln = 0, lt = data.length; ln < lt; ln++) {
        date = new Date(data[ln]['Date'].toString());
        let dtYr = date.getFullYear();
        let dtMn = date.getMonth();
        let dtdv = (dtMn + 1) / 3;
        data[ln]['Year'] = 'FY ' + dtYr;
        data[ln]['Quarter'] = dtdv <= 1 ? 'Q1 ' + ('FY ' + dtYr) : dtdv <= 2 ? 'Q2 ' + ('FY ' + dtYr) :
            dtdv <= 3 ? 'Q3 ' + ('FY ' + dtYr) : 'Q4 ' + ('FY ' + dtYr);
        data[ln]['HalfYear'] = (dtMn + 1) / 6 <= 1 ? 'H1 ' + ('FY ' + dtYr) : 'H2' + ('FY ' + dtYr);
        delete (data[ln]['Date']);
    }
    return data;
}