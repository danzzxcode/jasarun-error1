const fs = require('fs')

//TEBAK GAMBAR
global.cekTebakgambar = (sender, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            status = true
        }
    })
    return status
}

global.addTebakgambar = (sender, deskripsi, jawaban, image, _db) => {
    const obj = { id: sender, soal: deskripsi, jawaban: jawaban, image: image }
    _db.push(obj)
    global.setDatabase('tebakgambar.json', JSON.stringify(_db))
}

global.delTebakgambar = (sender, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        global.setDatabase('tebakgambar.json', JSON.stringify(_db))
    }
    return true
}

global.getSoalTebakgambar = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].soal
    }
}

global.getJawabanTebakgambar = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].jawaban
    }
}

global.getImageTebakgambar = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].image
    }
}


//CAK LONTONG
global.cekCaklontong = (sender, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            status = true
        }
    })
    return status
}

global.addCaklontong = (sender, soal, jawaban, deskripsi, _db) => {
    const obj = { id: sender, soal: soal, jawaban: jawaban, deskripsi: deskripsi }
    _db.push(obj)
    global.setDatabase('caklontong.json', JSON.stringify(_db))
}

global.delCaklontong = (sender, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        global.setDatabase('caklontong.json', JSON.stringify(_db))
    }
    return true
}

global.getSoalCaklontong = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].soal
    }
}

global.getJawabanCaklontong = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].jawaban
    }
}

global.getDeskripsiCaklontong = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].deskripsi
    }
}

//TEBAK KATA
global.cekTebakkata = (sender, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            status = true
        }
    })
    return status
}

global.addTebakkata = (sender, soal, jawaban, _db) => {
    const obj = { id: sender, soal: soal, jawaban: jawaban }
    _db.push(obj)
    global.setDatabase('tebakkata.json', JSON.stringify(_db))
}

global.delTebakkata = (sender, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        global.setDatabase('tebakkata.json', JSON.stringify(_db))
    }
    return true
}

global.getSoalTebakkata = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].soal
    }
}

global.getJawabanTebakkata = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].jawaban
    }
}

//TEBAK BENDERA
global.cekTebakbendera = (sender, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            status = true
        }
    })
    return status
}

global.addTebakbendera = (sender, image, jawaban, _db) => {
    const obj = { id: sender, soal: image, jawaban: jawaban }
    _db.push(obj)
    global.setDatabase('tebakbendera.json', JSON.stringify(_db))
}

global.delTebakbendera = (sender, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        global.setDatabase('tebakbendera.json', JSON.stringify(_db))
    }
    return true
}

global.getSoalTebakbendera = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].soal
    }
}

global.getJawabanTebakbendera = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].jawaban
    }
}

//TEBAK KALIMAT
global.cekTebakkalimat = (sender, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            status = true
        }
    })
    return status
}

global.addTebakkalimat = (sender, soal, jawaban, _db) => {
    const obj = { id: sender, soal: soal, jawaban: jawaban }
    _db.push(obj)
    global.setDatabase('tebakkalimat.json', JSON.stringify(_db))
}

global.delTebakkalimat = (sender, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        global.setDatabase('tebakkalimat.json', JSON.stringify(_db))
    }
    return true
}

global.getSoalTebakkalimat = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].soal
    }
}

global.getJawabanTebakkalimat = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].jawaban
    }
}


//SIAPA AKU
global.cekSiapaaku = (sender, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            status = true
        }
    })
    return status
}

global.addSiapaaku = (sender, soal, jawaban, _db) => {
    const obj = { id: sender, soal: soal, jawaban: jawaban }
    _db.push(obj)
    global.setDatabase('siapaaku.json', JSON.stringify(_db))
}

global.delSiapaaku = (sender, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        global.setDatabase('siapaaku.json', JSON.stringify(_db))
    }
    return true
}

global.getSoalSiapaaku = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].soal
    }
}

global.getJawabanSiapaaku = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].jawaban
    }
}

//TEBAK LIRIK
global.cekTebaklirik = (sender, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            status = true
        }
    })
    return status
}

global.addTebaklirik = (sender, soal, jawaban, _db) => {
    const obj = { id: sender, soal: soal, jawaban: jawaban }
    _db.push(obj)
    global.setDatabase('tebaklirik.json', JSON.stringify(_db))
}

global.delTebaklirik = (sender, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        global.setDatabase('tebaklirik.json', JSON.stringify(_db))
    }
    return true
}

global.getSoalTebaklirik = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].soal
    }
}

global.getJawabanTebaklirik = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].jawaban
    }
}

//TEBAK TEBAKAN
global.cekTebaktebakan = (sender, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            status = true
        }
    })
    return status
}

global.addTebaktebakan = (sender, soal, jawaban, _db) => {
    const obj = { id: sender, soal: soal, jawaban: jawaban }
    _db.push(obj)
    global.setDatabase('tebaktebakan.json', JSON.stringify(_db))
}

global.delTebaktebakan = (sender, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        global.setDatabase('tebaktebakan.json', JSON.stringify(_db))
    }
    return true
}

global.getSoalTebaktebakan = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].soal
    }
}

global.getJawabanTebaktebakan = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].jawaban
    }
}

//SUSUN KATA
global.cekSusunkata = (sender, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            status = true
        }
    })
    return status
}

global.addSusunkata = (sender, soal, tipe, jawaban, _db) => {
    const obj = { id: sender, soal: soal, type: tipe, jawaban: jawaban }
    _db.push(obj)
    global.setDatabase('susunkata.json', JSON.stringify(_db))
}

global.delSusunkata = (sender, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        global.setDatabase('susunkata.json', JSON.stringify(_db))
    }
    return true
}

global.getSoalSusunkata = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].soal
    }
}

global.getTypeSusunkata = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].type
    }
}

global.getJawabanSusunkata = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].jawaban
    }
}


