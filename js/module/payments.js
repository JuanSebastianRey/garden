// 13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor
export const getAllPaymentsIn2008WithPaypal = async()=>{
    let res = await fetch("http://172.16.101.146:5405/payments")
    let data = await res.json();
    let dataupdate=data.filter((val)=> (new Date(val.date_payment).getFullYear() === 2008 && val.payment === "PayPal"))
    .map(val =>({
        type_P: val.payment,
        date_P: val.date_payment,
    }));
    return dataupdate;
}