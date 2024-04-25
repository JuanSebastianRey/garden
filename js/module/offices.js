// 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
export const getAllOfficesCodeAndCity = async()=>{
    let res = await fetch("http://localhost:5504/offices")
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
    let res = await fetch("http://localhost:5504/offices?country=España")
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