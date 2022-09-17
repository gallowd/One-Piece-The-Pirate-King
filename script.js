sessionStorage.clear();
let scenario = localStorage.getItem("theme");
let map = document.getElementById("map");
if (scenario == "marinford"){
    map.setAttribute("class", "map_marineford");
} else if (scenario == "mirror_world") {
    map.setAttribute("class", "map_mirror_world");
} else if (scenario == "dressrosa") {
    map.setAttribute("class", "map_dressrosa");
} else if (scenario == "enies_lobby") {
    map.setAttribute("class", "map_enies_lobby");
}

const luffyHP = document.getElementById("luffy_hp");
const katakuriHP = document.getElementById("katakuri_hp");

const luffy = document.getElementById("luffy");
const luffy_2 = document.getElementById("luffyPersonaje");
let atkLuffy = "no"

const katakuri = document.getElementById("katakuri");
const katakuri_2 = document.getElementById("katakuriPersonaje");
katakuri.y = 400;
katakuri.x = 1350;
katakuri.hp = 100000;
let atkKatakuri = "no";
let katakuriDaño = 0;

luffy.x = 250;
luffy.y = 500;
luffy.hp = 40000;
luffy.stamina = 800;
let staminaMax = 1000;
let held_directions = [];
let speed = 3;
let luffyDaño = 14;
let vision = "r";

katakuri.setAttribute("class", "katakuri");
katakuri_2.setAttribute("class" ,"katakuri_spritesheet_left pixelart");

const directions = {
    run_right:"run-right",
    run_left: "run-left",
    down: "down",
    jump: "jump",
    gatling: "luffy_gatling",
    muchi: "luffy_muchi",
    rifle: "luffy_rifle",
    bazzoka: "luffy_bazooka",
    buso_koka_gatling: "buso_koka_gatling",
    buso_koka_muchi: "buso_koka_muchi",
    elephant_gun: "elephant_gun",
    busoshoku_haki: "busoshoku_haki",
    jet_gatling: "jet_gatling",
    jet_muchi: "jet_muchi",
    jet_rifle: "jet_rifle",
    jet_bazooka: "jet_bazooka",
    speed,
}

const keys = {
    39: directions.run_right,
    37: directions.run_left,
    38: directions.jump,
    40: directions.down,

    81: directions.gatling,
    87: directions.muchi,
    69: directions.rifle,
    82: directions.bazzoka,

    65: directions.jet_gatling,
    83: directions.jet_muchi,
    68: directions.jet_rifle,
    70: directions.jet_bazooka,

    90: directions.buso_koka_gatling,
    88: directions.buso_koka_muchi,
    67: directions.elephant_gun,
    86: directions.busoshoku_haki,

    32: directions.speed,
}

document.addEventListener("keydown", (e) => {
    let dir = keys[e.which];
    if (dir && held_directions.indexOf(dir) === -1) {
        held_directions.unshift(dir)
    }
})

document.addEventListener("keyup", (e) => {
    let dir = keys[e.which];
    let index =  held_directions.indexOf(dir);
    if (index > -1) {
        held_directions.splice(index, 1)
    }
})

let interval = setInterval(() => {
    let num1 = Math.floor(Math.random()*5) + 1;
    let num2 = Math.floor(Math.random()*2) + 1;
    let staminaCharge = setInterval(() => {
        if (luffy.stamina < staminaMax) {
            luffy.stamina = luffy.stamina + 50;
        } else {
            clearInterval(staminaCharge);
        }
    }, 2000)
    if (num1 == 1) {
        if (num2 == 1) {
            katakuri.setAttribute("class", "katakuri_atk_1");
            katakuri_2.setAttribute("class" ,"katakuri_atk_1_right pixelart");
            katakuri.y = 270;
            katakuri.x = 10;
            atkKatakuri = "si"
            katakuriDaño = 35;
            katakuri.width = 870
            katakuri.height = 405
            setTimeout (() => {
                if (sessionStorage.getItem("winner") == "luffy") {
                    katakuri.setAttribute("class", "katakuri_derrotado");
                    katakuri_2.setAttribute("class" ,"katakuri_derrotado_spritesheet pixelart");
                } else {
                    katakuri.setAttribute("class", "katakuri");
                    katakuri_2.setAttribute("class" ,"katakuri_spritesheet_right pixelart");
                }
                katakuri.y = 400;
                katakuri.x = 50;
                atkKatakuri = "no"
                katakuri.width = 97
                katakuri.height = 170
            }, 1800)
        }
        if (num2 == 2) {
            katakuri.setAttribute("class", "katakuri_atk_1");
            katakuri_2.setAttribute("class" ,"katakuri_atk_1_left pixelart");
            katakuri.y = 305;
            katakuri.x = 600;
            atkKatakuri = "si"
            katakuriDaño = 35;
            katakuri.width = 870
            katakuri.height = 405
            setTimeout (() => {
                if (sessionStorage.getItem("winner") == "luffy") {
                    katakuri.setAttribute("class", "katakuri_derrotado");
                    katakuri_2.setAttribute("class" ,"katakuri_derrotado_spritesheet pixelart");
                } else {
                    katakuri.setAttribute("class", "katakuri");
                    katakuri_2.setAttribute("class" ,"katakuri_spritesheet_left pixelart");
                }
                katakuri.y = 400;
                katakuri.x = 1350;
                atkKatakuri = "no"
                katakuri.width = 97
                katakuri.height = 170
            }, 1800)
        }
    } else if (num1 == 2) {
        if (num2 == 1) {
            katakuri.setAttribute("class", "katakuri_atk_2");
            katakuri_2.setAttribute("class" ,"katakuri_atk_2_right pixelart");
            katakuri.y = 390;
            katakuri.x = 10;
            atkKatakuri = "si"
            katakuriDaño = 25;
            katakuri.width = 840
            katakuri.height = 300
            setTimeout (() => {
                if (sessionStorage.getItem("winner") == "luffy") {
                    katakuri.setAttribute("class", "katakuri_derrotado");
                    katakuri_2.setAttribute("class" ,"katakuri_derrotado_spritesheet pixelart");
                } else {
                    katakuri.setAttribute("class", "katakuri");
                    katakuri_2.setAttribute("class" ,"katakuri_spritesheet_right pixelart");
                }
                katakuri.y = 400;
                katakuri.x = 50;
                atkKatakuri = "no"
                katakuri.width = 97
                katakuri.height = 170
            }, 1200)
        }
        if (num2 == 2) {
            katakuri.setAttribute("class", "katakuri_atk_2");
            katakuri_2.setAttribute("class" ,"katakuri_atk_2_left pixelart");
            katakuri.y = 390;
            katakuri.x = 600;
            atkKatakuri = "si"
            katakuriDaño = 25;
            katakuri.width = 840
            katakuri.height = 300
            setTimeout (() => {
                if (sessionStorage.getItem("winner") == "luffy") {
                    katakuri.setAttribute("class", "katakuri_derrotado");
                    katakuri_2.setAttribute("class" ,"katakuri_derrotado_spritesheet pixelart");
                } else {
                    katakuri.setAttribute("class", "katakuri");
                    katakuri_2.setAttribute("class" ,"katakuri_spritesheet_left pixelart");
                }
                katakuri.y = 400;
                katakuri.x = 1350;
                atkKatakuri = "no"
                katakuri.width = 97
                katakuri.height = 170
            }, 1200)
        }
    }else if (num1 == 3) {
        if (num2 == 1) {
            katakuri.setAttribute("class", "katakuri_atk_3");
            katakuri_2.setAttribute("class" ,"katakuri_atk_3_right pixelart");
            katakuri.y = 200;
            katakuri.x = 10;
            atkKatakuri = "si"
            katakuriDaño = 30;
            katakuri.width = 450
            katakuri.height = 100
            setTimeout (() => {
                if (sessionStorage.getItem("winner") == "luffy") {
                    katakuri.setAttribute("class", "katakuri_derrotado");
                    katakuri_2.setAttribute("class" ,"katakuri_derrotado_spritesheet pixelart");
                } else {
                    katakuri.setAttribute("class", "katakuri");
                    katakuri_2.setAttribute("class" ,"katakuri_spritesheet_right pixelart");
                }
                katakuri.y = 400;
                katakuri.x = 50;
                atkKatakuri = "no"
                katakuri.width = 97
                katakuri.height = 170
            }, 1800)
        }
        if (num2 == 2) {
            katakuri.setAttribute("class", "katakuri_atk_3");
            katakuri_2.setAttribute("class" ,"katakuri_atk_3_left pixelart");
            katakuri.y = 200;
            katakuri.x = 900;
            atkKatakuri = "si"
            katakuriDaño = 30;
            katakuri.width = 450
            katakuri.height = 100
            setTimeout (() => {
                if (sessionStorage.getItem("winner") == "luffy") {
                    katakuri.setAttribute("class", "katakuri_derrotado");
                    katakuri_2.setAttribute("class" ,"katakuri_derrotado_spritesheet pixelart");
                } else {
                    katakuri.setAttribute("class", "katakuri");
                    katakuri_2.setAttribute("class" ,"katakuri_spritesheet_left pixelart");
                }
                katakuri.y = 400;
                katakuri.x = 1350;
                atkKatakuri = "no"
                katakuri.width = 97
                katakuri.height = 170
            }, 1800)
        }
    }else if (num1 == 4) {
        if (num2 == 1) {
            katakuri.setAttribute("class", "katakuri_atk_4");
            katakuri_2.setAttribute("class" ,"katakuri_atk_4_right pixelart");
            katakuri.y = 380;
            katakuri.x = 50;
            atkKatakuri = "si"
            katakuriDaño = 32;
            katakuri.width = 600
            katakuri.height = 100
            setTimeout (() => {
                if (sessionStorage.getItem("winner") == "luffy") {
                    katakuri.setAttribute("class", "katakuri_derrotado");
                    katakuri_2.setAttribute("class" ,"katakuri_derrotado_spritesheet pixelart");
                } else {
                    katakuri.setAttribute("class", "katakuri");
                    katakuri_2.setAttribute("class" ,"katakuri_spritesheet_right pixelart");
                }
                katakuri.y = 400;
                katakuri.x = 50;
                atkKatakuri = "no"
                katakuri.width = 97
                katakuri.height = 170
            }, 1300)
        }
        if (num2 == 2) {
            katakuri.setAttribute("class", "katakuri_atk_4");
            katakuri_2.setAttribute("class" ,"katakuri_atk_4_left pixelart");
            katakuri.y = 380;
            katakuri.x = 900;
            atkKatakuri = "si"
            katakuriDaño = 32;
            katakuri.width = 600
            katakuri.height = 100
            setTimeout (() => {
                if (sessionStorage.getItem("winner") == "luffy") {
                    katakuri.setAttribute("class", "katakuri_derrotado");
                    katakuri_2.setAttribute("class" ,"katakuri_derrotado_spritesheet pixelart");
                } else {
                    katakuri.setAttribute("class", "katakuri");
                    katakuri_2.setAttribute("class" ,"katakuri_spritesheet_left pixelart");
                }
                katakuri.y = 400;
                katakuri.x = 1350;
                atkKatakuri = "no"
                katakuri.width = 97
                katakuri.height = 170
            }, 1300)
        }
    }else if (num1 == 5) {
        if (num2 == 1) {
            katakuri.setAttribute("class", "katakuri_atk_5");
            katakuri_2.setAttribute("class" ,"katakuri_atk_5_right pixelart");
            katakuri.y = 0;
            katakuri.x = 0;
            atkKatakuri = "si"
            katakuriDaño = 40;
            katakuri.width = 870
            katakuri.height = 675
            setTimeout (() => {
                if (sessionStorage.getItem("winner") == "luffy") {
                    katakuri.setAttribute("class", "katakuri_derrotado");
                    katakuri_2.setAttribute("class" ,"katakuri_derrotado_spritesheet pixelart");
                } else {
                    katakuri.setAttribute("class", "katakuri");
                    katakuri_2.setAttribute("class" ,"katakuri_spritesheet_right pixelart");
                }
                katakuri.y = 400;
                katakuri.x = 50;
                atkKatakuri = "no"
                katakuri.width = 97
                katakuri.height = 170
            }, 2000)
        }
        if (num2 == 2) {
            katakuri.setAttribute("class", "katakuri_atk_5");
            katakuri_2.setAttribute("class" ,"katakuri_atk_5_left pixelart");
            katakuri.y = -1;
            katakuri.x = 630;
            atkKatakuri = "si"
            katakuriDaño = 40;
            katakuri.width = 870
            katakuri.height = 675
            setTimeout (() => {
                if (sessionStorage.getItem("winner") == "luffy") {
                    katakuri.setAttribute("class", "katakuri_derrotado");
                    katakuri_2.setAttribute("class" ,"katakuri_derrotado_spritesheet pixelart");
                } else {
                    katakuri.setAttribute("class", "katakuri");
                    katakuri_2.setAttribute("class" ,"katakuri_spritesheet_left pixelart");
                }
                katakuri.y = 400;
                katakuri.x = 1350;
                atkKatakuri = "no"
                katakuri.width = 97
                katakuri.height = 170
            }, 2000)
        }
    }
    if (sessionStorage.getItem("winner") == "luffy") {
        katakuri.setAttribute("class", "katakuri_derrotado");
        katakuri_2.setAttribute("class" ,"katakuri_derrotado_spritesheet pixelart");
        clearInterval(interval);
    }
}, 3000)

const placeCharacter = () => {
    let pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--pixel-size"));
    const held_direction = held_directions[0];
    
    let rightLimit = 1410;
    let leftLimit = 50;
    let yLimit = 0;
    if (luffy.x < leftLimit) {
        luffy.x = leftLimit;
    }
    if (luffy.x + luffy.width + 10 > rightLimit) {
        luffy.x = rightLimit - luffy.width - 10;
    }
    if (luffy.y - luffy.height < yLimit) {
        luffy.y = yLimit;
    }

    if (held_direction) {
        if (held_direction === directions.run_right) {
            luffy.y = 500;
            luffy.setAttribute("class", "luffy");
            luffy_2.setAttribute("class", "luffy_run_right pixelart");
            luffy.x += speed;
            vision = "r";
        }
        if (held_direction === directions.run_left) {
            luffy.y = 500;
            luffy.setAttribute("class", "luffy");
            luffy_2.setAttribute("class", "luffy_run_left pixelart");
            luffy.x -= speed;
            vision = "l";
        }
        if (held_direction === directions.down) {
            luffy.y = 500;
            if (vision == "r") {
                luffy.setAttribute("class", "luffy");
                luffy_2.setAttribute("class", "luffy_down_right pixelart");
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy");
                luffy_2.setAttribute("class", "luffy_down_left pixelart");
            }
        }
        if (held_direction === directions.jump) {
            if (vision == "r") {
                luffy.setAttribute("class", "luffy");
                luffy_2.setAttribute("class", "luffy_jump_right pixelart");
                if (luffy.y > 10) {
                    luffy.y -= speed*3;
                }
                vision = "r";
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy");
                luffy_2.setAttribute("class", "luffy_jump_left pixelart");
                if (luffy.y > 10) {
                    luffy.y -= speed*3;
                }
                vision = "l";
            }
        }
        if (held_direction === directions.gatling) {
            if (vision == "r") {
                luffy.setAttribute("class", "luffy_gatling");
                luffy_2.setAttribute("class" ,"luffy_gatling_right pixelart");
                luffy.y = 500;
                vision = "r";
                atkLuffy = "si";
                luffy.width = 180
                luffy.height = 120
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy_gatling");
                luffy_2.setAttribute("class" ,"luffy_gatling_left pixelart");
                luffy.y = 500;
                vision = "l";
                atkLuffy = "si";
                luffy.width = 180
                luffy.height = 120
            }
        }
        if (held_direction === directions.muchi) {
            if (vision == "r") {
                luffy.setAttribute("class", "luffy_muchi");
                luffy_2.setAttribute("class" ,"luffy_muchi_right pixelart");
                luffy.y = 500;
                vision = "r";
                atkLuffy = "si";
                luffyDaño = 12;
                luffy.width = 210
                luffy.height = 105
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy_muchi");
                luffy_2.setAttribute("class" ,"luffy_muchi_left pixelart");
                luffy.y = 500;
                vision = "l";
                atkLuffy = "si";
                luffyDaño = 12;
                luffy.width = 210
                luffy.height = 105
            }
        }
        if (held_direction === directions.rifle) {
            if (vision == "r") {
                luffy.setAttribute("class", "luffy_rifle");
                luffy_2.setAttribute("class" ,"luffy_rifle_right pixelart");
                luffy.y = 500;
                vision = "r";
                atkLuffy = "si";
                luffyDaño = 16;
                luffy.width = 260
                luffy.height = 113
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy_rifle");
                luffy_2.setAttribute("class" ,"luffy_rifle_left pixelart");
                luffy.y = 500;
                vision = "l";
                atkLuffy = "si";
                luffyDaño = 16;
                luffy.width = 180
                luffy.height = 113
            }
        }
        if (held_direction === directions.bazzoka) {
            if (vision == "r") {
                luffy.setAttribute("class", "luffy_bazooka");
                luffy_2.setAttribute("class" ,"luffy_bazooka_right pixelart");
                luffy.y = 500;
                vision = "r";
                atkLuffy = "si";
                luffyDaño = 18;
                luffy.width = 280
                luffy.height = 120
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy_bazooka");
                luffy_2.setAttribute("class" ,"luffy_bazooka_left pixelart");
                luffy.y = 500;
                vision = "l";
                atkLuffy = "si";
                luffyDaño = 18;
                luffy.width = 140
                luffy.height = 120
            }
        }
        if (held_direction === directions.buso_koka_gatling && luffy.stamina > 0 && true) {
            if (vision == "r") {
                luffy.setAttribute("class", "luffy_buso_koka_gatling");
                luffy_2.setAttribute("class" ,"luffy_buso_koka_gatling_right pixelart");
                luffy.y = 500;
                vision = "r";
                atkLuffy = "si";
                luffyDaño = 30;
                luffy.width = 230
                luffy.height = 120
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy_buso_koka_gatling");
                luffy_2.setAttribute("class" ,"luffy_buso_koka_gatling_left pixelart");
                luffy.y = 500;
                vision = "l";
                atkLuffy = "si";
                luffyDaño = 30;
                luffy.width = 140
                luffy.height = 120
            }
            luffy.stamina = luffy.stamina - 3;
            if (luffy.stamina <= 100) {
                if (vision == "r") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "right");
                }
                if (vision == "l") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "left");
                }
            }
        }
        if (held_direction === directions.buso_koka_muchi && luffy.stamina > 0 && true) {
            if (vision == "r") {
                luffy.setAttribute("class", "luffy_buso_koka_muchi");
                luffy_2.setAttribute("class" ,"luffy_buso_koka_muchi_right pixelart");
                luffy.y = 500;
                vision = "r";
                atkLuffy = "si";
                luffyDaño = 28;
                luffy.width = 170
                luffy.height = 105
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy_buso_koka_muchi");
                luffy_2.setAttribute("class" ,"luffy_buso_koka_muchi_left pixelart");
                luffy.y = 500;
                vision = "l";
                atkLuffy = "si";
                luffyDaño = 28;
                luffy.width = 170
                luffy.height = 105
            }
            luffy.stamina = luffy.stamina - 2;
            if (luffy.stamina <= 100) {
                if (vision == "r") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "right");
                }
                if (vision == "l") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "left");
                }
            }
        }
        if (held_direction === directions.elephant_gun && luffy.stamina > 0 && true) {
            luffy.y = 440;
            if (vision == "r") {
                luffy.setAttribute("class", "luffy_elephant_gun");
                luffy_2.setAttribute("class" ,"luffy_elephant_gun_right pixelart");
                vision = "r";
                atkLuffy = "si";
                luffyDaño = 38;
                luffy.width = 310
                luffy.height = 210
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy_elephant_gun");
                luffy_2.setAttribute("class" ,"luffy_elephant_gun_left pixelart");
                vision = "l";
                atkLuffy = "si";
                luffyDaño = 38;
                luffy.width = 210
                luffy.height = 210
            }
            luffy.stamina = luffy.stamina - 4;
            if (luffy.stamina <= 100) {
                if (vision == "r") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "right");
                }
                if (vision == "l") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "left");
                }
            }
        }
        if (held_direction === directions.busoshoku_haki) {
            katakuriDaño = 20;
            if (vision == "r") {
                luffy.setAttribute("class", "luffy_busoshoku_haki");
                luffy_2.setAttribute("class" ,"luffy_busoshoku_haki_right pixelart");
                luffy.y = 500;
                vision = "r";
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy_busoshoku_haki");
                luffy_2.setAttribute("class" ,"luffy_busoshoku_haki_left pixelart");
                luffy.y = 500;
                vision = "l";
            }
        }
        if (held_direction === directions.jet_gatling && luffy.stamina > 0 && true) {
            if (vision == "r") {
                luffy.setAttribute("class", "luffy_jet_gatling");
                luffy_2.setAttribute("class" ,"luffy_jet_gatling_right pixelart");
                luffy.y = 500;
                vision = "r";
                atkLuffy = "si";
                luffyDaño = 22;
                luffy.width = 210
                luffy.height = 120
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy_jet_gatling");
                luffy_2.setAttribute("class" ,"luffy_jet_gatling_left pixelart");
                luffy.y = 500;
                vision = "l";
                atkLuffy = "si";
                luffyDaño = 22;
                luffy.width = 110
                luffy.height = 120
            }
            luffy.stamina = luffy.stamina - 2;
            if (luffy.stamina <= 100) {
                if (vision == "r") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "right");
                }
                if (vision == "l") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "left");
                }
            }
        }
        if (held_direction === directions.jet_muchi && luffy.stamina > 0 && true) {
            if (vision == "r") {
                luffy.setAttribute("class", "luffy_jet_muchi");
                luffy_2.setAttribute("class" ,"luffy_jet_muchi_right pixelart");
                luffy.y = 500;
                vision = "r";
                atkLuffy = "si";
                luffyDaño = 20;
                luffy.width = 150
                luffy.height = 105
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy_jet_muchi");
                luffy_2.setAttribute("class" ,"luffy_jet_muchi_left pixelart");
                luffy.y = 500;
                vision = "l";
                atkLuffy = "si";
                luffyDaño = 20;
                luffy.width = 170
                luffy.height = 105
            }
            luffy.stamina = luffy.stamina - 1;
            if (luffy.stamina <= 0) {
                if (vision == "r") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "right");
                }
                if (vision == "l") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "left");
                }
            }
        }
        if (held_direction === directions.jet_rifle && luffy.stamina > 0 && true) {
            if (vision == "r") {
                luffy.setAttribute("class", "luffy_jet_rifle");
                luffy_2.setAttribute("class" ,"luffy_jet_rifle_right pixelart");
                luffy.y = 500;
                vision = "r";
                atkLuffy = "si";
                luffyDaño = 24;
                luffy.width = 240
                luffy.height = 113
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy_jet_rifle");
                luffy_2.setAttribute("class" ,"luffy_jet_rifle_left pixelart");
                luffy.y = 500;
                vision = "l";
                atkLuffy = "si";
                luffyDaño = 24;
                luffy.width = 100
                luffy.height = 113
            }
            luffy.stamina = luffy.stamina - 2;
            if (luffy.stamina <= 0) {
                if (vision == "r") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "right");
                }
                if (vision == "l") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "left");
                }
            }
        }
        if (held_direction === directions.jet_bazooka && luffy.stamina > 0 && true) {
            if (vision == "r") {
                luffy.setAttribute("class", "luffy_jet_bazooka");
                luffy_2.setAttribute("class" ,"luffy_jet_bazooka_right pixelart");
                luffy.y = 500;
                vision = "r";
                atkLuffy = "si";
                luffyDaño = 26;
                luffy.width = 240
                luffy.height = 120
            }
            if (vision == "l") {
                luffy.setAttribute("class", "luffy_jet_bazooka");
                luffy_2.setAttribute("class" ,"luffy_jet_bazooka_left pixelart");
                luffy.y = 500;
                vision = "l";
                atkLuffy = "si";
                luffyDaño = 26;
                luffy.width = 100
                luffy.height = 120
            }
            luffy.stamina = luffy.stamina - 3;
            if (luffy.stamina <= 100) {
                if (vision == "r") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "right");
                }
                if (vision == "l") {
                    luffy.setAttribute("class", "luffy");
                    luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
                    luffy.setAttribute("facing", "left");
                }
            }
        }
        if (held_direction === directions.speed) {
            speed = 45
            setTimeout(() => {
                speed = 3
            }, 1000)
        }
    } else if (vision == "r") {
        luffy.setAttribute("class", "luffy");
        luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
        luffy.setAttribute("facing", "right");
        luffy.y = 500;
        luffy.width = 50
        luffy.height = 80
        atkLuffy = "no"
    } else {
        luffy.setAttribute("class", "luffy");
        luffy_2.setAttribute("class" ,"luffy_spritesheet pixelart");
        luffy.setAttribute("facing", "left");
        luffy.y = 500;
        luffy.width = 70
        luffy.height = 80
        atkLuffy = "no"
    }
    luffy.setAttribute("walking", held_direction ? "true" : "false");

    if ((luffy.x + luffy.width > katakuri.x) && (luffy.x < katakuri.x + katakuri.width) && (luffy.y + luffy.height > katakuri.y - katakuri.height) && atkLuffy == "si") {
        katakuri.hp -= luffyDaño
    }
    if ((luffy.x + luffy.width > katakuri.x) && (luffy.x < katakuri.x + katakuri.width) && (luffy.y + luffy.height > katakuri.y - katakuri.height) && atkKatakuri == "si") {
        luffy.hp -= katakuriDaño
    }

    katakuriHP.innerHTML = `
    <h1>Katakuri</h1>
    <p><strong>${katakuri.hp} HP</strong></p>
    `
    luffyHP.innerHTML = `
    <h1>Luffy</h1>
    <p><strong>${luffy.hp} HP</strong></p>
    <p><strong>${luffy.stamina} STM</strong></p>`

    if (katakuri.hp <= 0){
        katakuriHP.innerHTML = `
        <h1>Katakuri</h1>
        <p><strong>${0} HP</strong></p>`
        sessionStorage.setItem("winner", "luffy");
    } else if (luffy.hp <= 0) {
        luffyHP.innerHTML = `
        <h1>Luffy</h1>
        <p><strong>${0} HP</strong></p>`
        sessionStorage.setItem("winner", "katakuri");
    }

    if (sessionStorage.getItem("winner") == "luffy") {
        luffy.y = 510;
        katakuri.y = 560;
    } else if (sessionStorage.getItem("winner") == "katakuri") {
        luffy.y = 590;
        katakuri.y = 400;
    }

    luffy.style.transform = `translate3d( ${luffy.x*pixelSize}px, ${luffy.y*pixelSize}px, 0)`;
    katakuri.style.transform = `translate3d( ${katakuri.x*pixelSize}px, ${katakuri.y*pixelSize}px, 0)`;
}

const step = () => {
    placeCharacter();
    if (sessionStorage.getItem("winner") == "luffy") {
        katakuri.setAttribute("class", "katakuri_derrotado");
        katakuri_2.setAttribute("class" ,"katakuri_derrotado_spritesheet pixelart");
        clearInterval(interval);
        if (vision = "r") {
            luffy.setAttribute("class", "luffy_victorioso");
            luffy_2.setAttribute("class" ,"luffy_victorioso_right pixelart");
        } else {
            luffy.setAttribute("class", "luffy_derrotado");
            luffy_2.setAttribute("class" ,"luffy_victorioso_left pixelart");
        }
        Swal.fire({
            imageUrl: 'images/luffy_victoria.jpg',
            title: '¡YOU WIN!',
            showConfirmButton: false,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            html:
                '<a href="./seleccion.html">Volver</a> '
        })
    } else if (sessionStorage.getItem("winner") == "katakuri") {
        clearInterval(interval);
        if (vision = "r") {
            luffy.setAttribute("class", "luffy_derrotado");
            luffy_2.setAttribute("class" ,"luffy_derrotado_right pixelart");
            luffy.y = 2000;
        } else {
            luffy.setAttribute("class", "luffy_derrotado");
            luffy_2.setAttribute("class" ,"luffy_derrotado_left pixelart");
        }
        Swal.fire({
            imageUrl: 'images/luffy_derrotado.png',
            title: 'YOU LOSE',
            showConfirmButton: false,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            html:
                '<a href="./seleccion.html">Volver</a> '
        })
    } else {
        window.requestAnimationFrame(() => {
            step();
        })
    }
}
step();