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
//1. Devuelve un listado con el código de pedido, código de cliente, fecha esperada 
//y fecha de entrega de los pedidos que no han sido entregados a tiempo.
export const getAllRequestsCoderequestCodeclientDatewaitDatedelivery = async ()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataupdate=data.filter((val)=> (val.date_wait < val.date_delivery))
    .map(val =>({
        code_R: val.code_request,
        code_C: val.code_client,
        date_W: val.date_wait,
        date_D: val.date_delivery,
    }));
    return dataupdate;
}

//2. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y
// fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

export const getAllRequestsCoderequestCodeclientDatewaitDatedeliveryBefore2days = async ()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataupdate=data.filter((val)=> (val.date_wait > val.date_delivery))
    .map(val =>({
        code_R: val.code_request,
        code_C: val.code_client,
        date_W: val.date_wait,
        date_D: val.date_delivery,
    }));
    return dataupdate;
}

// 1. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`
export const getAllRequestsOfStatusRejectedIn2009 = async() =>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataupdate=data.filter((val)=> (new Date(val.date_wait).getFullYear() === 2009 && val.status === "Rechazado"))
    .map(val =>({
        code_R: val.code_request,
        code_C: val.code_client,
        date_W: val.date_wait,
        status: val.status,
    }));
    return dataupdate;
}

// 2. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.
export const getAllRequestsOfStatusDeliveredInJanuary = async()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataupdate=data.filter((val)=> (new Date(val.date_wait).getMonth() === 0 && val.status === "Entregado"))
    .map(val =>({
        code_R: val.code_request,
        code_C: val.code_client,
        date_W: val.date_wait,
        status: val.status,
    }));
    return dataupdate;
}