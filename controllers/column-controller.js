const Column = require('../models/column-model')

createColumn = (req, res) => {
    console.log("createColumn")
    let body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a column',
        })
    }

    const column = new Column(body)

    if (!column) {
        return res.status(400).json({ success: false, error: err })
    }

    column
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: column._id,
                message: 'column created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'column not created!',
            })
        })
}

updateColumn = async (req, res) => {
    console.log("updateColumnById")
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    
    Column.findOneAndUpdate(
        { userId: req.params.userId, tableId: req.params.tableId }, 
        {$set: {"userId": req.params.userId, "tableId": req.params.tableId, "columns": body.columns}},
        {upsert:true}
        ).then(() => {
            return res.status(200).json({
                success: true,
                id: column._id,
                message: 'Column updated!',
            })
        }).catch(error => {
            return res.status(404).json({
                error,
                message: 'Column not updated!',
            })
        });
}

getColumnById = async (req, res) => {
    console.log("getColumnById")
    console.log(req.params.userId)
    console.log(req.params.tableId)
    await Column.findOne({ userId: req.params.userId, tableId: req.params.tableId }, (err, column) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!column) {
            return res
                .status(404)
                .json({ success: false, error: `Column not found` })
        }
        return res.status(200).json({ success: true, data: column })
    }).catch(err => console.log(err))
}

module.exports = {
    createColumn,
    updateColumn,
    getColumnById,
}