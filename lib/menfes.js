const fs = require('fs')

global.addMenfes = (sender1, sender2, _db) => {
    const obj = { pengirim: sender1, penerima: sender2, chat: false }
    _db.push(obj)
    global.setDatabase('menfes.json', JSON.stringify(_db))
}

global.cekPengirimMenfes = (sender, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].pengirim === sender) {
            status = true
        }
    })

    return status
}

global.cekPenerimaMenfes = (sender, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].penerima === sender) {
            status = true
        }
    })

    return status
}

global.delPengirimMenfes = (sender, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].pengirim == sender) {
            position = i
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        global.setDatabase('menfes.json', JSON.stringify(_db))
    }
    return true
}


global.delPenerimaMenfes = (sender, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].penerima == sender) {
            position = i
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        global.setDatabase('menfes.json', JSON.stringify(_db))
    }
    return true
}

global.setChatMenfes = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].penerima === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].chat = true
        global.setDatabase('menfes.json', JSON.stringify(_db))
    }
}


global.getIdPengirimMenfes = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].penerima == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].pengirim
    }
}


global.getIdPenerimaMenfes = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].pengirim == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].penerima
    }
}


global.getChatPengirimMenfes = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].pengirim == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].chat
    }
}


global.getChatPenerimaMenfes = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].penerima == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].chat
    }
}
