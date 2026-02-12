var pool = require ('./bd');

async function getNovedades() {
    var query = "select * from novedades order by id desc";
    var rows = await pool.query(query);
    return rows;
}

module.exports = {getNovedades}

// PARA ELIMINAR NOVEDADES
// async function deleteNovedadById(id) {
//     var query= "delete from novedades where id =?";
//     var rows= await pool.query(query, [id]);
//     return rows;
// }

//module.exports={getNovedades, deleteNovedadesById, insertNovedad, getNovedadById, modificaarNovedadById}