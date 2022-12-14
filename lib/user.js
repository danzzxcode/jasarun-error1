require('../settings.js')
const fs = require('fs')

global.clearAllUser = (data) => {
    Object.keys(data).forEach((i) => {
        data.splice(data[i], 1)
        global.setDatabase('user.json', JSON.stringify(data))
    })
    console.log('Sukses clear all user')
}

global.addUserId = (gcount, tanggal, pushname, sender, limitCount, data) => {                                                                                                                      
let obj = { 
  name: pushname, 
  id: sender, 
  date: tanggal, 
  xp: 1, 
  level: 1, 
  hit: 0, 
  balance: 0, 
  limit: limitCount, 
  glimit: gcount,
  besi: rpg.besiawal, 
  gold: rpg.goldawal, 
  emerald: rpg.emeraldawal, 
  umpan: rpg.umpanawal, 
  potion: rpg.potionawal, 
  ikan: 0, 
  ayam: 0, 
  kelinci: 0, 
  domba: 0, 
  sapi: 0, 
  gajah: 0, 
  ikanGoreng: 0, 
  ayamGoreng: 0, 
  kelinciGoreng: 0, 
  dombaGoreng: 0, 
  sapiGoreng: 0, 
  gajahGoreng: 0, 
  healt: rpg.darahawal
  }
data.push(obj)
global.setDatabase('user.json', JSON.stringify(data))
}

global.kurangLimit = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].limit -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getLimit = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].limit
    }
}

global.tambahLimit = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].limit += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.addMonay = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].monay += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangMonay = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].monay -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getMonay = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].monay
    }
}

global.addBalance = (sender, duit, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].balance += duit
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangBalance = (sender, duit, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].balance -= duit
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getBalance = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].balance
    }
}

global.kurangGLimit = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].glimit -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.tambahGLimit = (pemain, duit, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === pemain) {
            position = i
        }
    })
    if (position !== false) {
        data[position].glimit += duit
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getGLimit = (sender, gcount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].glimit
    } else {
        return gcount
    }
}

global.AddHit = (sender, data) => {
    var found = false
    Object.keys(data).forEach((i) => {
        if (data[i].id == sender) {
            found = i
        }
    })
    if (found !== false) {
        data[found].hit += 1
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.gethitUser = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].hit
    }
}

global.checkHit = (sender, data) => {
    let status = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            status = true
        }
    })
    return status
}

global.getLevelingXp = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].xp
    }
}

global.getLevelingLevel = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].level
    }
}

global.getLevelingId = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].id
    }
}

global.getDateId = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].date
    }
}

global.addLevelingXp = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].xp += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.resetLevelingXp = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].xp -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.addLevelingLevel = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].level += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.addBesi = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].besi += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangBesi = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].besi -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getBesi = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].besi
    }
}

global.addEmas = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].gold += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangEmas = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].gold -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getEmas = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].gold
    }
}

global.addEmerald = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].emerald += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangEmerald = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].emerald -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getEmerald = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].emerald
    }
}

global.addUmpan = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].umpan += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangUmpan = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].umpan -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getUmpan = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].umpan
    }
}

global.addPotion = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].potion += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangPotion = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].potion -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getPotion = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].potion
    }
}

global.addAyam = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].ayam += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangAyam = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].ayam -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getAyam = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].ayam
    }
}

global.addIkan = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].ikan += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangIkan = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].ikan -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getIkan = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].ikan
    }
}
global.addKelinci = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].kelinci += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangKelinci = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].kelinci -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getKelinci = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].kelinci
    }
}
global.addDomba = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].domba += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangDomba = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].domba -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getDomba = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].domba
    }
}
global.addSapi = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].sapi += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangSapi = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].sapi -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getSapi = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].sapi
    }
}

global.addGajah = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].gajah += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangGajah = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].gajah -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getGajah = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].gajah
    }
}

global.addIkanGoreng = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].ikanGoreng += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangIkanGoreng = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].ikanGoreng -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getIkanGoreng = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].ikanGoreng
    }
}

global.addAyamGoreng = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].ayamGoreng += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangAyamGoreng = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].ayamGoreng -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getAyamGoreng = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].ayamGoreng
    }
}

global.addKelinciGoreng = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].kelinciGoreng += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangKelinciGoreng = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].kelinciGoreng -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getKelinciGoreng = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].kelinciGoreng
    }
}

global.addDombaGoreng = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].dombaGoreng += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangDombaGoreng = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].dombaGoreng -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getDombaGoreng = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].dombaGoreng
    }
}

global.addSapiGoreng = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].sapiGoreng += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangSapiGoreng = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].sapiGoreng -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getSapiGoreng = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].sapiGoreng
    }
}

global.addGajahGoreng = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].gajahGoreng += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangGajahGoreng = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].gajahGoreng -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getGajahGoreng = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].gajahGoreng
    }
}

global.addDarah = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].healt += amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.kurangDarah = (sender, amount, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        data[position].healt -= amount
        global.setDatabase('user.json', JSON.stringify(data))
    }
}

global.getDarah = (sender, data) => {
    let position = false
    Object.keys(data).forEach((i) => {
        if (data[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return data[position].healt
    }
}

global.userLeveling = (levelRole) => {
    var role = `Newbie ???`
    if (levelRole <= 2) {
        return (role = `Newbie ???`)
    } else if (levelRole <= 4) {
        return (role = `Beginner Grade 1 ?????`)
    } else if (levelRole <= 6) {
        return (role = `Beginner Grade 2 ?????`)
    } else if (levelRole <= 8) {
        return (role = `Beginner Grade 3 ?????`)
    } else if (levelRole <= 10) {
        return (role = `Beginner Grade 4 ??????`)
    } else if (levelRole <= 12) {
        return (role = `Private Grade 1 ?????`)
    } else if (levelRole <= 14) {
        return (role = `Private Grade 2 ?????`)
    } else if (levelRole <= 16) {
        return (role = `Private Grade 3 ?????`)
    } else if (levelRole <= 18) {
        return (role = `Private Grade 4 ??????`)
    } else if (levelRole <= 20) {
        return (role = `Private Grade 5 ??????`)
    } else if (levelRole <= 22) {
        return (role = `Corporal Grade 1 ?????`)
    } else if (levelRole <= 24) {
        return (role = `Corporal Grade 2 ?????`)
    } else if (levelRole <= 26) {
        return (role = `Corporal Grade 3 ?????`)
    } else if (levelRole <= 28) {
        return (role = `Corporal Grade 4 ??????`)
    } else if (levelRole <= 30) {
        return (role = `Corporal Grade 5 ??????`)
    } else if (levelRole <= 32) {
        return (role = `Sergeant Grade 1 ?????`)
    } else if (levelRole <= 34) {
        return (role = `Sergeant Grade 2 ?????`)
    } else if (levelRole <= 36) {
        return (role = `Sergeant Grade 3 ?????`)
    } else if (levelRole <= 38) {
        return (role = `Sergeant Grade 4 ??????`)
    } else if (levelRole <= 40) {
        return (role = `Sergeant Grade 5 ??????`)
    } else if (levelRole <= 42) {
        return (role = `Staff Grade 1 ?????`)
    } else if (levelRole <= 44) {
        return (role = `Staff Grade 2 ?????`)
    } else if (levelRole <= 46) {
        return (role = `Staff Grade 3 ?????`)
    } else if (levelRole <= 48) {
        return (role = `Staff Grade 4 ??????`)
    } else if (levelRole <= 50) {
        return (role = `Staff Grade 5 ??????`)
    } else if (levelRole <= 52) {
        return (role = `Sergeant Grade 1 ?????`)
    } else if (levelRole <= 54) {
        return (role = `Sergeant Grade 2 ?????`)
    } else if (levelRole <= 56) {
        return (role = `Sergeant Grade 3 ?????`)
    } else if (levelRole <= 58) {
        return (role = `Sergeant Grade 4 ??????`)
    } else if (levelRole <= 60) {
        return (role = `Sergeant Grade 5 ??????`)
    } else if (levelRole <= 62) {
        return (role = `2nd Lt. Grade 1 ????? `)
    } else if (levelRole <= 64) {
        return (role = `2nd Lt. Grade 2 ?????`)
    } else if (levelRole <= 66) {
        return (role = `2nd Lt. Grade 3 ?????`)
    } else if (levelRole <= 68) {
        return (role = `2nd Lt. Grade 4 ??????`)
    } else if (levelRole <= 70) {
        return (role = `2nd Lt. Grade 5 ??????`)
    } else if (levelRole <= 72) {
        return (role = `1st Lt. Grade 1 ????????`)
    } else if (levelRole <= 74) {
        return (role = `1st Lt. Grade 2 ????????`)
    } else if (levelRole <= 76) {
        return (role = `1st Lt. Grade 3 ????????`)
    } else if (levelRole <= 78) {
        return (role = `1st Lt. Grade 4 ?????????`)
    } else if (levelRole <= 80) {
        return (role = `1st Lt. Grade 5 ?????????`)
    } else if (levelRole <= 82) {
        return (role = `Major Grade 1 ?????`)
    } else if (levelRole <= 84) {
        return (role = `Major Grade 2 ?????`)
    } else if (levelRole <= 86) {
        return (role = `Major Grade 3 ?????`)
    } else if (levelRole <= 88) {
        return (role = `Major Grade 4 ??????`)
    } else if (levelRole <= 90) {
        return (role = `Major Grade 5 ??????`)
    } else if (levelRole <= 92) {
        return (role = `Colonel Grade 1 ????????`)
    } else if (levelRole <= 94) {
        return (role = `Colonel Grade 2 ????????`)
    } else if (levelRole <= 96) {
        return (role = `Colonel Grade 3 ????????`)
    } else if (levelRole <= 98) {
        return (role = `Colonel Grade 4 ?????????`)
    } else if (levelRole <= 100) {
        return (role = `Colonel Grade 5 ?????????`)
    } else if (levelRole <= 102) {
        return (role = `Brigadier Early ???`)
    } else if (levelRole <= 104) {
        return (role = `Brigadier Silver ???`)
    } else if (levelRole <= 106) {
        return (role = `Brigadier gold ???`)
    } else if (levelRole <= 108) {
        return (role = `Brigadier Platinum ???`)
    } else if (levelRole <= 110) {
        return (role = `Brigadier Diamond ???`)
    } else if (levelRole <= 112) {
        return (role = `Major General Early ???`)
    } else if (levelRole <= 114) {
        return (role = `Major General Silver ???`)
    } else if (levelRole <= 116) {
        return (role = `Major General gold ???`)
    } else if (levelRole <= 118) {
        return (role = `Major General Platinum ???`)
    } else if (levelRole <= 120) {
        return (role = `Major General Diamond ???`)
    } else if (levelRole <= 122) {
        return (role = `Lt. General Early ???`)
    } else if (levelRole <= 124) {
        return (role = `Lt. General Silver ???`)
    } else if (levelRole <= 126) {
        return (role = `Lt. General gold ???`)
    } else if (levelRole <= 128) {
        return (role = `Lt. General Platinum ???`)
    } else if (levelRole <= 130) {
        return (role = `Lt. General Diamond ???`)
    } else if (levelRole <= 132) {
        return (role = `General Early ???`)
    } else if (levelRole <= 134) {
        return (role = `General Silver ???`)
    } else if (levelRole <= 136) {
        return (role = `General gold ???`)
    } else if (levelRole <= 138) {
        return (role = `General Platinum ???`)
    } else if (levelRole <= 140) {
        return (role = `General Diamond ???`)
    } else if (levelRole <= 142) {
        return (role = `Commander Early ???`)
    } else if (levelRole <= 144) {
        return (role = `Commander Intermediate ???`)
    } else if (levelRole <= 146) {
        return (role = `Commander Elite ???`)
    } else if (levelRole <= 148) {
        return (role = `The Commander Hero ???`)
    } else if (levelRole <= 152) {
        return (role = `Legends I ???`)
    } else if (levelRole <= 154) {
        return (role = `Legends I ???`)
    } else if (levelRole <= 156) {
        return (role = `Legends I ???`)
    } else if (levelRole <= 158) {
        return (role = `Legends I ???`)
    } else if (levelRole <= 160) {
        return (role = `Legends I ???`)
    } else if (levelRole <= 162) {
        return (role = `Legends I ???`)
    } else if (levelRole <= 164) {
        return (role = `Legends I ???`)
    } else if (levelRole <= 166) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 168) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 170) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 172) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 174) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 176) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 178) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 180) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 182) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 184) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 186) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 188) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 190) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 192) {
        return (role = `Legends I ???`)
    } else if (levelRole <= 194) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 196) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 198) {
        return (role = `Legends II ???`)
    } else if (levelRole <= 200) {
        return (role = `Legends III ???`)
    } else if (levelRole <= 210) {
        return (role = `Legends III ???`)
    } else if (levelRole <= 220) {
        return (role = `Legends III ???`)
    } else if (levelRole <= 230) {
        return (role = `Legends III ???`)
    } else if (levelRole <= 240) {
        return (role = `Legends III ???`)
    } else if (levelRole <= 250) {
        return (role = `Legends III ???`)
    } else if (levelRole <= 260) {
        return (role = `Legends III ???`)
    } else if (levelRole <= 270) {
        return (role = `Legends III ???`)
    } else if (levelRole <= 280) {
        return (role = `Legends III ???`)
    } else if (levelRole <= 290) {
        return (role = `Legends III ???`)
    } else if (levelRole <= 300) {
        return (role = `Legends IV ???`)
    } else if (levelRole <= 310) {
        return (role = `Legends IV ???`)
    } else if (levelRole <= 320) {
        return (role = `Legends IV ???`)
    } else if (levelRole <= 330) {
        return (role = `Legends IV ???`)
    } else if (levelRole <= 340) {
        return (role = `Legends IV ???`)
    } else if (levelRole <= 350) {
        return (role = `Legends IV ???`)
    } else if (levelRole <= 360) {
        return (role = `Legends IV ???`)
    } else if (levelRole <= 370) {
        return (role = `Legends IV ???`)
    } else if (levelRole <= 380) {
        return (role = `Legends IV ???`)
    } else if (levelRole <= 390) {
        return (role = `Legends IV ???`)
    } else if (levelRole <= 400) {
        return (role = `Legends V ???`)
    } else if (levelRole <= 410) {
        return (role = `Legends V ???`)
    } else if (levelRole <= 420) {
        return (role = `Legends V ???`)
    } else if (levelRole <= 430) {
        return (role = `Legends V ???`)
    } else if (levelRole <= 440) {
        return (role = `Legends V ???`)
    } else if (levelRole <= 450) {
        return (role = `Legends V ???`)
    } else if (levelRole <= 460) {
        return (role = `Legends V ???`)
    } else if (levelRole <= 470) {
        return (role = `Legends V ???`)
    } else if (levelRole <= 480) {
        return (role = `Legends V ???`)
    } else if (levelRole <= 490) {
        return (role = `Legends V ???`)
    } else if (levelRole <= 500) {
        return (role = `Legends VI ???`)
    } else if (levelRole <= 600) {
        return (role = `Legends VII ???`)
    } else if (levelRole <= 700) {
        return (role = `Legends VIII ???`)
    } else if (levelRole <= 800) {
        return (role = `Legends IX ???`)
    } else if (levelRole <= 900) {
        return (role = `Legends X ???`)
    } else if (levelRole <= 1000) {
        return (role = `Mythic I ??????`)
    } else if (levelRole <= 2000) {
        return (role = `Mythic II ??????`)
    } else if (levelRole <= 3000) {
        return (role = `Mythic III ??????`)
    } else if (levelRole <= 4000) {
        return (role = `Mythic IV ??????`)
    } else if (levelRole <= 5000) {
        return (role = `Mythic V ??????`)
    } else if (levelRole <= 6000) {
        return (role = `Mythic VII ??????`)
    } else if (levelRole <= 7000) {
        return (role = `Mythic VIII ??????`)
    } else if (levelRole <= 8000) {
        return (role = `Mythic IX ??????`)
    } else if (levelRole <= 9000) {
        return (role = `Mythic X ??????`)
    } else if (levelRole <= 10000) {
        return (role = `Awakened Mythic ????????????`)
    } else if (levelRole <= 99999999999) {
        return (role = `End level ?????????`)
    }
}

global.userXp = (jumlahXp) => {
    var bars = `[??????????????????????????????]`
    if (jumlahXp <= 5) {
        return (bars = `[??????????????????????????????]`)
    } else if (jumlahXp <= 10) {
        return (bars = `[??????????????????????????????]`)
    } else if (jumlahXp <= 20) {
        return (bars = `[??????????????????????????????]`)
    } else if (jumlahXp <= 30) {
        return (bars = `[??????????????????????????????]`)
    } else if (jumlahXp <= 40) {
        return (bars = `[??????????????????????????????]`)
    } else if (jumlahXp <= 50) {
        return (bars = `[??????????????????????????????]`)
    } else if (jumlahXp <= 60) {
        return (bars = `[??????????????????????????????]`)
    } else if (jumlahXp <= 70) {
        return (bars = `[??????????????????????????????]`)
    } else if (jumlahXp <= 80) {
        return (bars = `[??????????????????????????????]`)
    } else if (jumlahXp <= 90) {
        return (bars = `[??????????????????????????????]`)
    } else if (jumlahXp <= 100) {
        return (bars = `[??????????????????????????????]`)
    } else if (jumlahXp <= 1000) {
        return (bars = `[??????????????????????????????]`)
    }
}
