const Medico = require('../models/Medico');
const RetornoQuery = require('../models/RetornoQuery');

const db = require('../config/database');
const tableName = "medico";


//POST
exports.save = function (req, res) {
    var entidade = new Medico(
        null,
        req.body.nome,
        req.body.telefone,
        req.body.especialidades
    );

    db.query(`INSERT INTO ${tableName} (nome, telefone) VALUES('${entidade.getNome()}','${entidade.getTelefone()}')`, function(error, resultMedico, fields){
        if(error) {
            res.json(error);
        } else {
            insereEspecialidadesMedico(resultMedico.insertId, req.body.especialidades, res, true);
        }
    });
};

//PUT
exports.update = function (req, res) {
    var entidade = new Medico(
        req.body.id,
        req.body.nome,
        req.body.telefone
    );

    db.query(`UPDATE ${tableName} SET nome='${entidade.getNome()}', telefone='${entidade.getTelefone()}' WHERE id=${entidade.getId()}`, function(error, results, fields){
        if(error)
            res.json(error);
        else atualizaEspecialidadesMedico(req.body.id, req.body.especialidades, res, true);
    });
};

insereEspecialidadesMedico = function(idMedico, especialidades, res, isInsert){
    if(especialidades){
        especialidades.forEach(function(item){
            if(item && item.id){
                db.query(`INSERT INTO medico_especialidade (id_medico, id_especialidade) VALUES('${idMedico}','${item.id}')`, function(errorIns, resultInsert, fields){
                    if(errorIns) {
                        res.json(errorIns);
                    }
                });
            }
        });
        res.json(isInsert ? new RetornoQuery(null, idMedico) : new RetornoQuery(especialidades.length, idMedico) );
    }else{
        res.json(isInsert ? new RetornoQuery(null, idMedico) : new RetornoQuery(especialidades.length, idMedico) );
    }
}

atualizaEspecialidadesMedico = function(idMedico, especialidades, res){
    db.query(`DELETE FROM medico_especialidade WHERE id_medico=` + parseInt(idMedico), function(errorDel, resultDelete, fields){
        if (errorDel) {
            res.json(errorDel);
        } else{
            insereEspecialidadesMedico(idMedico, especialidades, res, false);
        }
    });
}

//DELETE
exports.delete = function (req, res) {
    db.query(`DELETE FROM ${tableName} WHERE id=` + parseInt(req.params.id), function(error, results, fields){
        if(error)
            res.json(error);
        else
            res.json(results);
    });
};

//GET
exports.findById = function (req, res) {
    let filter = '';
    if(req.params.id) filter = ' WHERE id=' + parseInt(req.params.id);

    db.query(`SELECT * FROM ${tableName}` + filter, function(error, resultMedico, fields){
        if(error) {
            res.json(error);
        }else{
            db.query(` 
            select e.id, e.descricao 
            from medico_especialidade me 
            inner join medico m on m.id = me.id_medico 
            inner join especialidade e on e.id = me.id_especialidade 
            where m.id = `+ req.params.id,
                function(error, resultEspecialidades, fields){
                    var retorno = resultMedico != null && resultMedico != [] ? resultMedico[0] : {};
                    retorno.especialidades = resultEspecialidades != null && resultEspecialidades != [] ? resultEspecialidades : [];

                    res.json(retorno);
                });
        }
    });
};

//GET
exports.findAll = function (req, res) {
    db.query(`SELECT * FROM ${tableName}`, function(error, results, fields){
        if(error)
            res.json(error);
        else
            res.json(results);
    });
};

