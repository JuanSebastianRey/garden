// 6. Devuelve un listado con el nombre de los todos los clientes españoles.
export const getAllClientsNameFromSpain= async()=>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let dataupdate = [];
    data.forEach(val => {
        dataupdate.push({
            name: val.client_name
        })
    });
    return dataupdate
}
