// 3. Devuelve un listado con el nombre, 
// apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
export const getAllEmployeesNameLastnameAndEmailJustWithCodeBoss7 = async()=>{
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataupdate = [];
    data.forEach(val => {
        let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)

        dataupdate.push({
            name: val.name,
            lastname: `${val.lastname1} ${val.lastname2}`, 
            email
        })
    });
    return dataupdate
}
// 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.

export const getAllPositionNameLastnameEmailofBoss = async()=>{
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json();
    let dataupdate = [];
    data.forEach(val => {
        let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        if (val.code_boss === null){
            dataupdate.push({
                position: val.position,
                name: val.name,
                lastname: `${val.lastname1} ${val.lastname2}`, 
                email,
            })
        }
        
    });
    return dataupdate
}

// 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.
export const getAllEmployeesNameLastnameAndPositionWithoutRepresentanteventas = async()=>{
    let res = await fetch("http://localhost:5502/employees?position_ne=Representante Ventas")
    let data = await res.json();
    let dataupdate = [];
    data.forEach(val => {
        dataupdate.push({
            id: val.id,
            name: val.name,
            lastname: `${val.lastname1} ${val.lastname2}`, 
            position: val.position
        })
    });
    return dataupdate

}
// Obtener la informacion de un empleado por su codigo
export const getEmployByCode = async(code) =>{
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}   
// Obtener la informacion de un empleado por su codigo
export const getAllEmploy = async() =>{
    let res = await fetch(`http://localhost:5502/employees`);
    let data = await res.json();
    return data;
}
//9. Devuelve un listado que muestre el nombre de cada empleados, 
// el nombre de su jefe y el nombre del jefe de sus jefe.

export const getAll = async()=>{
    let dataEmployees = await getAllEmploy();
    for (let i = 0; i < dataEmployees.length; i++) {
        let {code_boss} = dataEmployees[i]
        let listBoss = [];
        if(!code_boss) continue 
        do{
            let searchedBoss = async() => await getEmployByCode(code_boss)
            let [boos] = await searchedBoss()
            code_boss = boos.code_boss
            listBoss.push(boos)
        }while(code_boss)
        dataEmployees[i].code_boss = listBoss;
    }
    return dataEmployees;
}