const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema({
    visibleIndex: {type: Number},
    dataField: {type: String},
    dataType: {type: String},
    visible: {type: Boolean},
    _id: false
});

const FilterPanel = new Schema({
    filterEnabled: {type: Boolean},
});

const Column = new Schema({
    userId: {type: String},
    tableId: {type: String},
    allowedPageSize: {type: [Number]},
    columns: [Item],
    filterPanel: FilterPanel,
    filterValue: {type: Number},
    pageIndex: {type: Number},
    pageSize: {type: Number},
    searchText: {type: String},
    selectedRowKeys: []
});

module.exports = mongoose.model('columns', Column)