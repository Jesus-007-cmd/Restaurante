
import * as AWS from 'aws-sdk'

const config = {
region: 'us-east-1',
secretAccessKey: 'IqlF5culAhipWRQIpVSgucAgnAjiqcgAXq/HByKn',
accessKeyId: 'AKIAX6YRKOH5K4ZHBR67'

}
AWS.config.update(config);
const dynamo= new AWS.DynamoDB.DocumentClient();
const table ='clientes';
const tabReservaciones ='mesas';


//para obtener el total de clientes:

//aqui finaliza la obtención del ultimo registro

export const getClientes = async() => {
    const params={
    TableName: table
    }
const data = await dynamo.scan(params).promise();
return data
}

export const getReservaciones = async() => {
    
    const params={
    TableName: tabReservaciones
}
const data = await dynamo.scan(params).promise();
return data
}

export const reservarMesa = async(jsonMesa) => {
    const params={
        TableName: tabReservaciones,
        Item: {
            id_mesa: Number(jsonMesa.id_mesa),
            fecha: jsonMesa.fecha,
            hora: jsonMesa.hora,
            mesa: jsonMesa.mesa
        }
    }
   
    const data=await dynamo.put(params).promise()
    console.log(data.$response.httpResponse);

}
export const regCliente = async(jsonCliente) => {
    
    const params={
        TableName: table,
        Item: {
            id_cliente: jsonCliente.id_clie,
            apellidos: jsonCliente.apellidos,
            calle:jsonCliente.calle,
            ciudad:jsonCliente.ciudad,
            colonia:jsonCliente.colonia,
            contraseña:jsonCliente.contraseña,
            correo:jsonCliente.correo,
            nombre:jsonCliente.nombre,
            numero:jsonCliente.numero,
            numero_tel:   jsonCliente.numero_tel
           }
    }
    const data=await dynamo.put(params).promise()
    console.log(data.$response.httpResponse);

}

