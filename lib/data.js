const fs = require('fs')

global.createDataId = (nama, _db) => {                                                                                                                      
let obj = { name: nama, id: [] }
_db.push(obj)
global.setDatabase('database.json', JSON.stringify(_db))
}

global.getDataId = (nama) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].name === nama) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].id
    }
}


global.addDataId = (nama, data, _db) => {
    var found = false;
    Object.keys(_db).forEach((i) => {
        if(_db[i].name == nama){
            found = i
        }
    })
    if (found !== false) {
        _db[found].id.push(data)
        global.setDatabase('database.json',JSON.stringify(_db));
    }
}


global.removeDataId = (nama, data, _db) => {
    var found = false;
    Object.keys(_db).forEach((i) => {
        if(_db[i].name == nama){
            found = i
        }
    })
    if (found !== false) {
_db[found].id.splice(_db[found].id.indexOf(data, 1))
        global.setDatabase('database.json',JSON.stringify(_db));
    }
}



global.checkDataId = (nama, data, _db) => {
    var found = false;
    var status = false
    Object.keys(_db).forEach((i) => {
        if(_db[i].name == nama){
            found = i
        }
    })
    if (found !== false) {
     for (let indexs of  _db[found].id){
     if(indexs == data){
     	status = true
     }
        }
    }
    return status
}



global.checkDataName = (nama, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].name === nama) {
            status = true
        }
    })
return status
}