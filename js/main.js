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
    getAllRequestsCoderequestCodeclientDatewaitDatedeliveryBefore2days,
    getAllRequestsOfStatusRejectedIn2009,
    getAllRequestsOfStatusDeliveredInJanuary
} from "./module/requests.js";
// console.log(await getAllRequestsOfStatusDeliveredInJanuary());

import {
    getAllPaymentsIn2008WithPaypal
} from "./module/payments.js";
console.log(await getAllPaymentsIn2008WithPaypal());