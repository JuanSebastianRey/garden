// 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
export const getAllOfficesCodeAndCity = async()=>{
    let res = await fetch("http://172.16.101.146:5404/offices")
    let data = await res.json();
    let dataupdate=[];
    data.forEach(val => {
        dataupdate.push({
            code: val.code_office,
            city: val.city
        })
      });
    return dataupdate;
    }
// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
export const getAllOfficesFromSpainCityAndMovil = async()=>{
    let res = await fetch("http://172.16.101.146:5404/offices?country=España")
    let data = await res.json();
    let dataupdate = [];
    data.forEach(val => {
        dataupdate.push({
            city: val.city,
            telephone: val.movil
        })
    });
    return dataupdate;
    
}
// Obtener la informacion de una oficina por su codigo
export const getOfficesByCode = async(code) =>{
    let res = await fetch(`http://172.16.101.146:5404/offices?code_office=${code}`);
    let dataClients = await res.json();
    return dataClients;
}