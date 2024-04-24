import { 
    getAllOfficesCodeAndCity, 
    getAllOfficesFromSpainCityAndMovil 
} from "./module/offices.js";
// console.log(await getAllOfficesFromSpainCityAndMovil());
import {
    getAllEmployeesNameLastnameAndEmailJustWithCodeBoss7,
    getAllPositionNameLastnameEmailofBoss,
    getAllEmployeesNameLastnameAndPositionWithoutRepresentanteventas
} from "./module/employees.js";
// console.log(await getAllEmployeesNameLastnameAndPositionWithoutRepresentanteventas());
import {
    getAllClientsNameFromSpain,
} from "./module/clients.js";
// console.log(await getAllClientsStates());
import{
    getAllRequestsStatus,
    getAllPaymentsCodeClientsIn2008,
    getAllRequestsCoderequestCodeclientDatewaitDatedelivery,
    getAllRequestsCoderequestCodeclientDatewaitDatedeliveryBefore2days
} from "./module/requests.js";
console.log(await getAllRequestsCoderequestCodeclientDatewaitDatedeliveryBefore2days());