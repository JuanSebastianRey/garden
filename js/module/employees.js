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