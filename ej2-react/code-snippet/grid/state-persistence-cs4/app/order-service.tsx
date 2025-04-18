export async function getData(state) {
    const BASE_URL ='https://services.odata.org/V4/Northwind/Northwind.svc/Orders';
    const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
    let sortQuery = '';
    let filterQuery = '';
    if ((state.sorted || []).length) {
        sortQuery = `&$orderby=` + state.sorted.map((obj) =>
            obj.direction === 'descending' ? `${obj.name} desc` : obj.name
        ).reverse().join(',');
    }
    if (state.where) {
        filterQuery = `&$filter=` + state.where.map((obj) => {
            return obj.predicates.map((predicate) => {
                return predicate.operator === 'equal'? `${predicate.field} eq ${predicate.value}`: `${predicate.operator}(tolower(${predicate.field}),'${predicate.value}')`;
            }).reverse().join(' and ');
        });
    }
    const request = `${BASE_URL}?${pageQuery}${sortQuery}${filterQuery}&$count=true`;
    const response = await fetch(request);
    const data = await response.json();
    return {
      result: data['value'],
      count: parseInt(data['@odata.count'], 10),
    };
}
