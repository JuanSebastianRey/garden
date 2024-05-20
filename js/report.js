
import "./components/clock.js";
import { getAllOfficesCodeAndCity } from "./module/offices.js";
const queryAboutTable1 = document.querySelector("#queryAboutTable1");
queryAboutTable1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable1.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesCodeAndCity();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.city}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo de la oficina: </b>${val.code}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
import { getAllOfficesFromSpainCityAndMovil } from "./module/offices.js";
const queryAboutTable2 = document.querySelector("#queryAboutTable2");
queryAboutTable2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable2.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesFromSpainCityAndMovil();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.city}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Numero de la oficina: </b>${val.telephone}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
import { getAllEmployeesNameLastnameAndEmailJustWithCodeBoss7 } from "./module/employees.js";
const queryAboutTable3 = document.querySelector("#queryAboutTable3");
queryAboutTable3.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable3.children
    if(!report__container.innerHTML){
        let data = await getAllEmployeesNameLastnameAndEmailJustWithCodeBoss7();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Codigo: ${val.code}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name} ${val.lastname}</p>
                        <p><b>Email del empleado: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
import { getAllPositionNameLastnameEmailofBoss } from "./module/employees.js";
const queryAboutTable4 = document.querySelector("#queryAboutTable4");
queryAboutTable4.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable4.children
    if(!report__container.innerHTML){
        let data = await getAllPositionNameLastnameEmailofBoss();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Cargo: ${val.position}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del jefe: </b>${val.name} ${val.lastname}</p>
                        <p><b>Email del jefe: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
import { getAllEmployeesNameLastnameAndPositionWithoutRepresentanteventas } from "./module/employees.js";
const queryAboutTable5 = document.querySelector("#queryAboutTable5");
queryAboutTable5.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable5.children
    if(!report__container.innerHTML){
        let data = await getAllEmployeesNameLastnameAndPositionWithoutRepresentanteventas();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Cargo: ${val.position}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name} ${val.lastname}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
import { getAllClientsNameFromSpain } from "./module/clients.js";
const queryAboutTable6 = document.querySelector("#queryAboutTable6");
queryAboutTable6.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable6.children
    if(!report__container.innerHTML){
        let data = await getAllClientsNameFromSpain();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pais: ${val.country}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del cliente: </b>${val.name}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
import { getAllRequestsStatus } from "./module/requests.js";
const queryAboutTable7 = document.querySelector("#queryAboutTable7");
queryAboutTable7.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable7.children
    if(!report__container.innerHTML){
        let data = await getAllRequestsStatus();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Estado</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Tipo de estado: </b>${val.status}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
import { getAllPaymentsCodeClientsIn2008 } from "./module/requests.js";
const queryAboutTable8 = document.querySelector("#queryAboutTable8");
queryAboutTable8.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable8.children
    if(!report__container.innerHTML){
        let data = await getAllPaymentsCodeClientsIn2008();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Codigo: ${val.code}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Fecha: </b>${val.date}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
import { getAllRequestsCoderequestCodeclientDatewaitDatedelivery } from "./module/requests.js";
const queryAboutTable9 = document.querySelector("#queryAboutTable9");
queryAboutTable9.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable9.children
    if(!report__container.innerHTML){
        let data = await getAllRequestsCoderequestCodeclientDatewaitDatedelivery();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Codigo pedido: ${val.code_R}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Codigo cliente: </b>${val.code_C}</p>
                    <p><b>Fecha de espera: </b>${val.date_W}</p>
                    <p><b>Fecha de entrega: </b>${val.date_D}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
import { getAllRequestsCoderequestCodeclientDatewaitDatedeliveryBefore2days } from "./module/requests.js";
const queryAboutTable10 = document.querySelector("#queryAboutTable10");
queryAboutTable10.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable10.children
    if(!report__container.innerHTML){
        let data = await getAllRequestsCoderequestCodeclientDatewaitDatedeliveryBefore2days();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Codigo pedido: ${val.code_R}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Codigo cliente: </b>${val.code_C}</p>
                    <p><b>Fecha de espera: </b>${val.date_W}</p>
                    <p><b>Fecha de entrega: </b>${val.date_D}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
import { getAllRequestsOfStatusRejectedIn2009 } from "./module/requests.js";
const queryAboutTable11 = document.querySelector("#queryAboutTable11");
queryAboutTable11.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable11.children
    if(!report__container.innerHTML){
        let data = await getAllRequestsOfStatusRejectedIn2009();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Codigo pedido: ${val.code_R}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Codigo cliente: </b>${val.code_C}</p>
                    <p><b>Fecha de espera: </b>${val.date_W}</p>
                    <p><b>Estado: </b>${val.status}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
import { getAllRequestsOfStatusDeliveredInJanuary } from "./module/requests.js";
const queryAboutTable12 = document.querySelector("#queryAboutTable12");
queryAboutTable12.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable12.children
    if(!report__container.innerHTML){
        let data = await getAllRequestsOfStatusDeliveredInJanuary();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Codigo pedido: ${val.code_R}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Codigo cliente: </b>${val.code_C}</p>
                    <p><b>Fecha de espera: </b>${val.date_W}</p>
                    <p><b>Estado: </b>${val.status}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
import { getAllPaymentsIn2008WithPaypal } from "./module/payments.js";
const queryAboutTable13 = document.querySelector("#queryAboutTable13");
queryAboutTable13.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable13.children
    if(!report__container.innerHTML){
        let data = await getAllPaymentsIn2008WithPaypal();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Tipo de pago: ${val.type_P}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Fecha de pago: </b>${val.date_P}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
import { getClientsEmploy } from "./module/clients.js";
const queryAboutTable17 = document.querySelector("#queryAboutTable17");
queryAboutTable17.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable17.children
    if(!report__container.innerHTML){
        let data = await getClientsEmploy();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
