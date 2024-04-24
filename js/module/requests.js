// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const getAllRequestsStatus = async()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataupdate = [];
    data.forEach(val => {
        if (val.region !== null){
            dataupdate.push({
                status: val.status
            })   
        }
    });
    return dataupdate
}



// // 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos
import { format } from "@formkit/tempo"
export const getAllPaymentsCodeClientsIn2008 = async () => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let dataupdate = data
        .filter((val, index, self) =>
            self.findIndex(t => t.code_client === val.code_client) === index && new Date(val.date_request).getFullYear() === 2008
        )
        .map(val => ({
            code: val.code_client,
            age: val.date_request
        }));

    return dataupdate;
}            