function OpenMenu() {
    document.getElementById('open_menu').onclick = () => {
        if (document.getElementById('open_menu').checked) {
            document.getElementById('Menu').style.display = 'block';
            localStorage.setItem('open_menu', 'true');
            return 1
        } else {
            document.getElementById('Menu').style.display = 'none';
            localStorage.setItem('open_menu', 'false');
            return 0
        }
    }
    if (localStorage.getItem('open_menu') === 'true') {
        document.getElementById('open_menu').setAttribute('checked', 'checked');
        document.getElementById('Menu').style.display = 'block';
        return 1
    } else {
        document.getElementById('Menu').style.display = 'none';
        return 0
    }
}

function OpenVolume() {
    document.getElementById('open_volume').onclick = () => {
        if (document.getElementById('open_volume').checked) {
            document.getElementById('Volume').style.display = 'block';
            localStorage.setItem('open_volume', 'true');
            return 1
        } else {
            document.getElementById('Volume').style.display = 'none';
            localStorage.setItem('open_volume', 'false');
            return 0
        }
    }
    if (localStorage.getItem('open_volume') === 'true') {
        document.getElementById('open_volume').setAttribute('checked', 'checked');
        document.getElementById('Volume').style.display = 'block';
        return 1
    } else {
        document.getElementById('Volume').style.display = 'none';
        return 0
    }
}

function check_1(_0xf774x1a) {
    document.getElementById(_0xf774x1a).onclick = function () {
        if (document.getElementById(_0xf774x1a).checked) {
            localStorage.setItem(_0xf774x1a, 'true');
            return 1
        } else {
            localStorage.setItem(_0xf774x1a, 'false');
            return 0
        }
    };
    if (localStorage.getItem(_0xf774x1a) === 'true') {
        document.getElementById(_0xf774x1a).setAttribute('checked', 'checked');
        return 1
    } else {
        return 0
    }
}

let vremya_size,
    max_size,
    gis_size,
    ur_gist,
    ur_str_size,
    str_min_size,
    font_size,
    menuopen,
    color,
    invert,
    timer,
    max_obj,
    max_obj_color,
    strelki_procent,
    blok_shema,
    odinak,
    okrugl_on,
    onetiksec_on,
    gorizontal_on,
    poc,
    details,
    obrez,
    pair2,
    okr_get_elem,
    local_get_elem,
    gorizontal,
    okrugl,
    testgorizont,
    estgorizont,
    gorizontmini;

function font_size_s(_0xf774x1a) {
    document.getElementById(_0xf774x1a).onclick = function () {
        const _0xf774x1c = document.getElementById('font');
        let _0xf774x1d = _0xf774x1c.options[_0xf774x1c.selectedIndex].value, id0;
        switch (_0xf774x1d) {
            case '0':
                id0 = 'vremya_size';
                if (localStorage.getItem('vremya_size') >= 1) {
                    vremya_size = localStorage.getItem('vremya_size');
                    document.getElementById('font_size').setAttribute('value', vremya_size)
                } else {
                    vremya_size = 14;
                    document.getElementById('font_size').setAttribute('value', vremya_size)
                }
                break;
            case '1':
                id0 = 'max_size';
                if (localStorage.getItem('max_size') >= 1) {
                    max_size = localStorage.getItem('max_size');
                    document.getElementById('font_size').setAttribute('value', max_size)
                } else {
                    max_size = 14;
                    document.getElementById('font_size').setAttribute('value', max_size)
                }
                break;
            case '2':
                id0 = 'gis_size';
                if (localStorage.getItem('gis_size') >= 1) {
                    gis_size = localStorage.getItem('gis_size');
                    document.getElementById('font_size').setAttribute('value', gis_size)
                } else {
                    gis_size = 14;
                    document.getElementById('font_size').setAttribute('value', gis_size)
                }
                break;
            case '3':
                id0 = 'ur_gist';
                if (localStorage.getItem('ur_gist') >= 1) {
                    ur_gist = localStorage.getItem('ur_gist');
                    document.getElementById('font_size').setAttribute('value', ur_gist)
                } else {
                    ur_gist = 14;
                    document.getElementById('font_size').setAttribute('value', ur_gist)
                }
                break;
            case '4':
                id0 = 'ur_str_size';
                if (localStorage.getItem('ur_str_size') >= 1) {
                    ur_str_size = localStorage.getItem('ur_str_size');
                    document.getElementById('font_size').setAttribute('value', ur_str_size)
                } else {
                    ur_str_size = 14;
                    document.getElementById('font_size').setAttribute('value', ur_str_size)
                }
                break;
            case '5':
                id0 = 'str_min_size';
                if (localStorage.getItem('str_min_size') >= 1) {
                    str_min_size = localStorage.getItem('str_min_size');
                    document.getElementById('font_size').setAttribute('value', str_min_size)
                } else {
                    str_min_size = 14;
                    document.getElementById('font_size').setAttribute('value', str_min_size)
                }
                break
        }
        font_size = document.getElementById('font_size').value;
        localStorage.setItem(id0, font_size);
        document.getElementById(_0xf774x1a).setAttribute('value', font_size)
    };
    if (localStorage.getItem('vremya_size') >= 1) {
        vremya_size = localStorage.getItem('vremya_size')
    } else {
        vremya_size = 14
    }
    if (localStorage.getItem('max_size') >= 1) {
        max_size = localStorage.getItem('max_size')
    } else {
        max_size = 14
    }
    if (localStorage.getItem('gis_size') >= 1) {
        gis_size = localStorage.getItem('gis_size')
    } else {
        gis_size = 14
    }
    if (localStorage.getItem('ur_gist') >= 1) {
        ur_gist = localStorage.getItem('ur_gist')
    } else {
        ur_gist = 14
    }
    if (localStorage.getItem('ur_str_size') >= 1) {
        ur_str_size = localStorage.getItem('ur_str_size')
    } else {
        ur_str_size = 14
    }
    if (localStorage.getItem('str_min_size') >= 1) {
        str_min_size = localStorage.getItem('str_min_size')
    } else {
        str_min_size = 14
    }
}
function blok_shema_0(_0xf774x1a) {
    document.getElementById(_0xf774x1a).onclick = function () {
        if (document.getElementById(_0xf774x1a).checked) {
            localStorage.setItem(_0xf774x1a, 'true');
            if (invert === 1) {
                document.body.style.backgroundImage = "url('img/blok_shema_mod.png')"
            } else {
                document.body.style.backgroundImage = "url('img/blok_shema_classic.png')"
            }
            return 1
        } else {
            localStorage.setItem(_0xf774x1a, 'false');
            document.body.style.backgroundImage = 'none';
            return 0
        }
    };
    if (localStorage.getItem(_0xf774x1a) === 'true') {
        document.getElementById(_0xf774x1a).setAttribute('checked', 'checked');
        if (invert === 1) {
            document.body.style.backgroundImage = "url('img/blok_shema_mod.png')"
        } else {
            document.body.style.backgroundImage = "url('img/blok_shema_classic.png')"
        }
        return 1
    } else {
        document.body.style.backgroundImage = 'none';
        return 0
    }
}

function Menu() {
    OpenMenu();
    OpenVolume();
    color = check_1('color');
    invert = check_1('invert');
    timer = check_1('timer');
    max_obj = check_1('max_obj');
    max_obj_color = check_1('max_obj_color');
    strelki_procent = check_1('strelki_procent');
    font_size = font_size_s('font_size');
    blok_shema = blok_shema_0('blok_shema');
    odinak = check_1('odinak');
    okrugl_on = check_1('okrugl_on');
    onetiksec_on = check_1('onetiksec_on');
    gorizontal_on = check_1('gorizontal_on');
    poc = check_1('poc');
    details = check_1('fotoprint');

    document.getElementById('background').onclick = function () {
        var _0xf774x20 = document.getElementById('background');
        var _0xf774x21 = _0xf774x20.options[_0xf774x20.selectedIndex].value;
        switch (_0xf774x21) {
            case '0':
                document.body.style.backgroundColor = '#21252c';
                break;
            case '1':
                document.body.style.backgroundColor = '#000000';
                break;
            case '2':
                document.body.style.backgroundColor = '#00008b';
                break;
            case '3':
                document.body.style.backgroundColor = '#808080';
                break;
            case '4':
                document.body.style.backgroundColor = '#686c5e';
                break;
            case '5':
                document.body.style.backgroundColor = '#964b00';
                break;
            case '6':
                document.body.style.backgroundColor = '#ffd700';
                break;
            case '7':
                document.body.style.backgroundColor = '#6DB3F2';
                break;
            case '8':
                document.body.style.backgroundColor = 'transparent';
                break
        }
        localStorage.setItem('background', _0xf774x21)
    };
    if (localStorage.getItem('background') > '0') {
        const _0xf774x22 = document.querySelector('#background');
        const _0xf774x23 = localStorage.getItem('background');
        switch (_0xf774x23) {
            case '0':
                document.body.style.backgroundColor = '#21252c';
                break;
            case '1':
                document.body.style.backgroundColor = '#000000';
                break;
            case '2':
                document.body.style.backgroundColor = '#00008b';
                break;
            case '3':
                document.body.style.backgroundColor = '#808080';
                break;
            case '4':
                document.body.style.backgroundColor = '#686c5e';
                break;
            case '5':
                document.body.style.backgroundColor = '#964b00';
                break;
            case '6':
                document.body.style.backgroundColor = '#ffd700';
                break;
            case '7':
                document.body.style.backgroundImage = '#6DB3F2';
                break;
            case '8':
                document.body.style.backgroundColor = 'transparent';
                break
        }
        document.getElementById('background').setAttribute('background', _0xf774x23);
        _0xf774x22.value = _0xf774x23
    }
    document.getElementById('obrez').onclick = function () {
        obrez = document.getElementById('obrez').value;
        document.getElementById('obrez').setAttribute('value', obrez);
        localStorage.setItem('obrez', obrez)
    };
    if (isNaN(obrez) === true) {
        obrez = 0
    } else {}
    if (localStorage.getItem('obrez') !== document.getElementById('obrez').value) {
        document.getElementById('obrez').value = localStorage.getItem('obrez');
        obrez = localStorage.getItem('obrez');
        if (!obrez) {
            obrez = 0;
            localStorage.setItem('obrez', obrez)
        }
    } else {
        localStorage.setItem('obrez', obrez)
    }
    pair2 = document.getElementById('pair').getAttribute('val');
    document.getElementById('okrugl').onclick = function () {
        okrugl = document.getElementById('okrugl').value;
        document.getElementById('okrugl').setAttribute('value', okrugl);
        localStorage.setItem('okrugl' + pair2, okrugl)
    };
    okr_get_elem = document.getElementById('okrugl').value;
    local_get_elem = localStorage.getItem('okrugl' + pair2);
    if (!local_get_elem) {
        if (!okr_get_elem) {} else {
            okrugl = okr_get_elem;
            localStorage.setItem('okrugl' + pair2, okr_get_elem)
        }
    } else {
        okrugl = localStorage.getItem('okrugl' + pair2);
        document.getElementById('okrugl').setAttribute('value', okrugl)
    }
    document.getElementById('gorizontal').onclick = function () {
        gorizontal = document.getElementById('gorizontal').value;
        document.getElementById('gorizontal').setAttribute('value', gorizontal);
        localStorage.setItem('gorizontal' + pair2, gorizontal)
    };
    okr_get_elem = document.getElementById('gorizontal').value;
    local_get_elem = localStorage.getItem('gorizontal' + pair2);
    if (!local_get_elem) {
        if (!okr_get_elem) {} else {
            gorizontal = okr_get_elem;
            localStorage.setItem('gorizontal' + pair2, okr_get_elem)
        }
    } else {
        gorizontal = localStorage.getItem('gorizontal' + pair2);
        document.getElementById('gorizontal').setAttribute('value', gorizontal)
    }
}


let valx = document.getElementById('valx');
let context = valx.getContext('2d');

let acumulate = document.getElementById('acumulate')
let colors = document.getElementById('colors')
let periiod = document.getElementById('period')
let pair = document.getElementById('pair')
let size = document.getElementById('size')
let divscrol = document.getElementsByClassName('divscrol')[0]
let crypto = document.getElementById('crypto')
let quadrants = document.getElementById('quadrants')
let mouse = document.getElementById('mouse')
let numbers = document.getElementById('numbers')
let preload = document.getElementsByClassName('preload')[0]

let Sign = function () {
    let websocket,
        glob_hour,
        glob_min,
        glob_sec,
        X_price,
        Y_price;

    let main = this,
        confirm_data = false;

    let broker = 'Binomo',
        sitelocation = '';

    let _0xf774x2c = 0,
        _0x9058x9 = 0,
        errors_count = 0,
        open_price = 0,
        price_actuals = 0,
        price_count = 0;

    let mousexy = [x = 0, y = 0],
        dsava = [];

    valx.setAttribute('width', window.innerWidth)
    valx.setAttribute('height', window.innerHeight)
    window.addEventListener('resize', function () {
        valx.setAttribute('width', window.innerWidth)
        valx.setAttribute('height', window.innerHeight)
    }, false)

    valx.onmousemove = (event) => {
        if (mouse.checked) {
            requestAnimationFrame(main.indi)
        }
        mousexy.x = event.pageX;
        mousexy.y = event.pageY
    }

    is = function( elem ) {
        let width = elem.offsetWidth,
            height = elem.offsetHeight;

        return ( width === 0 && height === 0 ) ||
            (((elem.style && elem.style.display) || getComputedStyle(elem).display) === "none");
    };

    this.lincen = function (cordinates) {

        if (cordinates.hp < mousexy.y && mousexy.y < (cordinates.hp + cordinates.hh) && mousexy.x < cordinates.ww) {
            return true
        }

        return cordinates.hp < mousexy.y && mousexy.y < (cordinates.hp + cordinates.hh) && mousexy.x > cordinates.wp && mousexy.x < (cordinates.wp + cordinates.ww);

    };

    // this.risg = function (vh_candledata, poc_vh, actual_price) {
    //     let heightV = valx.clientHeight,
    //         widthV = valx.clientWidth,
    //         height = window.innerHeight;
    //
    //     let vh_length = vh_candledata.length,
    //         porcentage_length = poc_vh / 100,
    //         _0xf774x10 = (heightV - ((heightV / 100) * 20)) / vh_length,
    //         _0xf774x3b = ((widthV / 100) * 15) / 100;
    //
    //     let _0xf774x41 = [];
    //
    //     let cena_gist = 0,
    //         _0xf774x42 = 0,
    //         _0xf774x43 = 0;
    //
    //     let vertikal,
    //         vertik,
    //         temp,
    //         temp_2,
    //         tim,
    //         hour,
    //         plus,
    //         minut,
    //         sec,
    //         vh_middle,
    //         _0xf774xf;
    //
    //     for (let i = 0; i < vh_length; i++) {
    //         if (vh_candledata[i][0].length > _0xf774x42) {
    //             _0xf774x42 = vh_candledata[i][0].length
    //         }
    //         if (vh_candledata[i][0].length < _0xf774x42) {
    //             _0xf774x43 = vh_candledata[i][0].length
    //         }
    //     }
    //
    //     for (let i = 0; i < vh_length; i++) {
    //
    //         testgorizont = vh_candledata[i][0].split('.')[1];
    //         if (gorizontal_on === 1) {
    //             if (vh_candledata[i][0].length < _0xf774x42) {
    //                 if (_0xf774x42 - vh_candledata[i][0].length === 1) {
    //                     gorizontmini = vh_candledata[i][0].split('.')[1] + '0'
    //                 } else {
    //                     if (_0xf774x42 - vh_candledata[i][0].length === 2) {
    //                         gorizontmini = vh_candledata[i][0].split('.')[1] + '00'
    //                     } else {
    //                         if (_0xf774x42 - vh_candledata[i][0].length === 3) {
    //                             gorizontmini = vh_candledata[i][0].split('.')[1] + '000'
    //                         } else {
    //                             if (_0xf774x42 - vh_candledata[i][0].length === 4) {
    //                                 gorizontmini = vh_candledata[i][0].split('.')[1] + '0000'
    //                             } else {
    //                                 if (_0xf774x42 - vh_candledata[i][0].length === 5) {
    //                                     gorizontmini = vh_candledata[i][0].split('.')[1] + '00000'
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //                 if (!(gorizontmini % gorizontal)) {
    //                     context.beginPath();
    //                     context.strokeStyle = 'grey';
    //                     context.moveTo(0, (_0xf774x10 * i + _0xf774x10 / 2));
    //                     context.lineTo((widthV / 2), (_0xf774x10 * i + _0xf774x10 / 2));
    //                     context.stroke();
    //                     if (vh_candledata[i][0] <= main.va_data.data[0].close) {
    //                         context.fillStyle = 'rgba(210, 59, 59, 1)'
    //                     }
    //                     context.font = ur_gist + 'px Verdana';
    //                     context.fillText(gorizontmini,
    //                         ((widthV / 2) + 90) - (vh_candledata[i][0].length * 8),
    //                         (_0xf774x10 * i) + _0xf774x10 / 2 + 5)
    //                 }
    //             } else {
    //                 if (vh_candledata[i][0].length > _0xf774x43) {
    //                     if (!(testgorizont % gorizontal)) {
    //                         context.beginPath();
    //                         context.strokeStyle = 'grey';
    //                         context.moveTo(0, (_0xf774x10 * i + _0xf774x10 / 2));
    //                         context.lineTo((widthV / 2), (_0xf774x10 * i + _0xf774x10 / 2));
    //                         context.stroke();
    //                         if (vh_candledata[i][0] <= main.va_data.data[0].close) {
    //                             context.fillStyle = 'rgba(210, 59, 59, 1)'
    //                         }
    //                         context.fillStyle = '#fff';
    //                         context.font = ur_gist + 'px Verdana';
    //                         context.fillText(testgorizont, ((widthV / 2) + 100) - (vh_candledata[i][0].length * 8), (_0xf774x10 * i) + _0xf774x10 / 2 + 5)
    //                     }
    //                 }
    //             }
    //         }
    //         if ((vh_candledata[i][1] > 6) && (poc === 1)) {
    //             if (vh_candledata[i][1] === poc_vh) {
    //                 context.beginPath();
    //                 context.strokeStyle = 'grey';
    //                 context.moveTo(0, (_0xf774x10 * i + _0xf774x10 / 2));
    //                 context.lineTo((widthV / 80) * 50, (_0xf774x10 * i + _0xf774x10 / 2));
    //                 context.stroke();
    //                 context.fillStyle = 'rgba(0, 33, 56, 0.61)';
    //                 context.fillRect(((widthV / 100) * 25) - (vh_candledata[i][0].length * 8), (_0xf774x10 * i + (_0xf774x10 / 2)) - 25, String(vh_candledata[i][0]).length * 10, 20);
    //                 context.fillStyle = 'rgba(210, 59, 59, 1)'
    //                 if (vh_candledata[i][0] <= main.va_data.data[0].close) {
    //                     context.fillStyle = 'rgba(86, 176, 104, 1)'
    //                 }
    //                 context.fillRect(((widthV / 100) * 22) - (vh_candledata[i][0].length * 8), (_0xf774x10 * i + (_0xf774x10 / 2)) - 25, String(vh_candledata[i][1]).length * 10, 20);
    //                 context.fillStyle = '#fff';
    //                 context.font = ur_gist + 'px Verdana';
    //                 context.fillText(vh_candledata[i][0], (($(valx).width() / 100) * 25) - (vh_candledata[i][0].length * 8), (_0xf774x10 * i) + _0xf774x10 / 2 - 10);
    //                 context.fillText(poc_vh, (($(valx).width() / 100) * 22) - (vh_candledata[i][0].length * 8), (_0xf774x10 * i) + _0xf774x10 / 2 - 10)
    //             }
    //         }
    //
    //
    //         _0xf774xf = vh_candledata[i][1];
    //
    //         if (invert === 1) {
    //             context.fillStyle = '#d75c48';
    //             if (vh_candledata[i][0] <= main.va_data.data[0].close) {
    //                 context.fillStyle = '#53a15f'
    //             }
    //             if (color === 1) {
    //                 if (vh_candledata[i][1] >= 5 && vh_candledata[i][1] < 8) {
    //                     context.fillStyle = '#bf3e2a'
    //                 } else {
    //                     if (vh_candledata[i][1] >= 8 && vh_candledata[i][1] < 10) {
    //                         context.fillStyle = '#963121'
    //                     } else {
    //                         if (vh_candledata[i][1] >= 10) {
    //                             context.fillStyle = '#6e2418'
    //                         }
    //                     }
    //                 }
    //                 if (vh_candledata[i][0] <= main.va_data.data[0].close) {
    //                     if (vh_candledata[i][1] >= 5 && vh_candledata[i][1] < 8) {
    //                         context.fillStyle = '#42804b'
    //                     } else {
    //                         if (vh_candledata[i][1] >= 8 && vh_candledata[i][1] < 10) {
    //                             context.fillStyle = '#315e38'
    //                         } else {
    //                             if (vh_candledata[i][1] >= 10) {
    //                                 context.fillStyle = '#203d24'
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         } else {
    //             context.fillStyle = '#53a15f';
    //             if (vh_candledata[i][0] <= main.va_data.data[0].close) {
    //                 context.fillStyle = '#d75c48'
    //             }
    //             if (color === 1) {
    //                 if (vh_candledata[i][1] >= 5 && vh_candledata[i][1] < 8) {
    //                     context.fillStyle = '#42804b'
    //                 } else {
    //                     if (vh_candledata[i][1] >= 8 && vh_candledata[i][1] < 10) {
    //                         context.fillStyle = '#315e38'
    //                     } else {
    //                         if (vh_candledata[i][1] >= 10) {
    //                             context.fillStyle = '#203d24'
    //                         }
    //                     }
    //                 }
    //                 if (vh_candledata[i][0] <= main.va_data.data[0].close) {
    //                     if (vh_candledata[i][1] >= 5 && vh_candledata[i][1] < 8) {
    //                         context.fillStyle = '#bf3e2a'
    //                     } else {
    //                         if (vh_candledata[i][1] >= 8 && vh_candledata[i][1] < 10) {
    //                             context.fillStyle = '#963121'
    //                         } else {
    //                             if (vh_candledata[i][1] >= 10) {
    //                                 context.fillStyle = '#6e2418'
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //
    //         context.fillRect(0,
    //             _0xf774x10 * i,
    //             (_0xf774xf / porcentage_length) * _0xf774x3b,
    //             0 - (_0xf774x3b * (poc_vh / porcentage_length)));
    //
    //         if (vh_candledata[i][0] == main.va_data.data[0].close) {
    //             cena_gist = (_0xf774x10 * i);
    //             context.beginPath();
    //             context.strokeStyle = '#49bde8';
    //             context.moveTo(0, _0xf774x10 * i);
    //             context.lineTo((widthV / 100) * 30, _0xf774x10 * i);
    //             context.stroke();
    //             context.fillStyle = '#49bde8';
    //             context.font = gis_size + 'px Verdana';
    //             vertikal = (heightV / 2 - 100);
    //             vertik = Math.round(_0xf774x10 * i);
    //             if (vertik > vertikal) {
    //                 temp = (-15);
    //                 temp_2 = (-45)
    //             } else {
    //                 temp = 14;
    //                 temp_2 = 60
    //             }
    //             tim = new Date();
    //             hour = tim.getHours();
    //             if (timer === 1) {
    //                 if (broker === 'Binomo') {
    //                     plus = 1
    //                 } else {
    //                     plus = 0
    //                 }
    //                 minut = plus + tim.getMinutes();
    //                 sec = 60 - glob_sec + plus
    //             } else {
    //                 plus = 0;
    //                 minut = tim.getMinutes();
    //                 sec = glob_sec - plus
    //             }
    //             if (minut > 59) {
    //                 minut = 0;
    //                 hour = hour + plus
    //             }
    //             if (hour < 10) {
    //                 hour = '0' + hour
    //             }
    //             if (minut < 10) {
    //                 minut = '0' + minut
    //             }
    //             if (sec < 10) {
    //                 sec = ':' + '0' + sec
    //             } else {
    //                 if (sec < 0) {
    //                     sec = 0
    //                 }
    //             }
    //             if (timer === 1) {
    //                 if (sec <= '45' && sec > '35') {
    //                     context.fillStyle = '#ffff00'
    //                 }
    //                 if (sec <= '35' && sec > '30') {
    //                     context.fillStyle = '#ff0000'
    //                 }
    //             } else {
    //                 if (sec >= '15' && sec < '25') {
    //                     context.fillStyle = '#ffff00'
    //                 }
    //                 if (sec >= '25' && sec < '30') {
    //                     context.fillStyle = '#ff0000'
    //                 }
    //             }
    //             context.fillText(vh_candledata[i][0], ((widthV / 100) * 20) - (vh_candledata[i][0].length * 8), (_0xf774x10 * i) + temp)
    //         }
    //         _0xf774x41.hp = _0xf774x10 * i;
    //         _0xf774x41.hh = _0xf774x10 - (_0xf774x10 / 100);
    //         _0xf774x41.ww = _0xf774x3b * 100;
    //
    //         if (main.lincen(_0xf774x41) || (_0xf774x2c === vh_candledata[i][0])) {
    //             context.fillStyle = 'rgba(0, 33, 56, 0.61)';
    //             context.fillRect(((widthV / 100) * 15.2), (_0xf774x10 * i + (_0xf774x10 / 2)), String(vh_candledata[i][0]).length * 10, 20);
    //             context.fillStyle = 'rgba(210, 59, 59, 1)'
    //             if (vh_candledata[i][0] <= main.va_data.data[0].close) {
    //                 context.fillStyle = 'rgba(86, 176, 104, 1)';
    //             }
    //             context.fillRect(((widthV / 100) * 15.2), (_0xf774x10 * i + (_0xf774x10 / 2)) - 20, String(vh_candledata[i][1]).length * 20, 20);
    //             context.beginPath();
    //             context.strokeStyle = '#fff';
    //             context.moveTo(0, _0xf774x10 * i + (_0xf774x10 / 2));
    //             context.lineTo((widthV / 100) * 15.2, _0xf774x10 * i + (_0xf774x10 / 2));
    //             context.stroke();
    //             context.fillStyle = '#fff';
    //             context.font = gis_size + 'px Verdana';
    //             if (odinak > 0) {
    //                 _0xf774x2c = vh_candledata[i][0]
    //             }
    //             context.fillText(vh_candledata[i][0], ((widthV / 100) * 15.5), (_0xf774x10 * i + (_0xf774x10 / 2)) + 14);
    //             context.fillText(vh_candledata[i][1], ((widthV / 100) * 15.5), (_0xf774x10 * i + (_0xf774x10 / 2)) - 5)
    //         }
    //
    //         /*if (_0x9058x18 === +vh_candledata[i][0]) {
    //             context.beginPath();
    //             context.lineWidth = 2;
    //             context.strokeStyle = '#49bde8';
    //             context.moveTo(0, _0xf774x10 * i + (_0xf774x10 / 2));
    //             context.lineTo((widthV / 100) * 15.2, _0xf774x10 * i + (_0xf774x10 / 2));
    //             context.stroke();
    //
    //             context.font = gis_size + 'px Verdana';
    //             context.fillStyle = '#49bde8';
    //             context.fillText(vh_candledata[i][0], ((widthV / 100) * 15.5), (_0xf774x10 * i + (_0xf774x10 / 2)) + 14);
    //
    //         }*/
    //
    //     }
    //
    // }

    this.risv = function (clusterdata, actual_price, _0x9058x19) {
        if (window.location.hostname.length != sitelocation.length) {
            return;
        }

        let period = periiod.value * 1 + 1;
        let bigpoc = 0;
        let candlepoc = 0;
        let pocvh = 0;
        let candle = 0;
        let candles = 0;
        let ticksallqnt = 0;

        let height = window.innerHeight;
        let heightV = valx.clientHeight
        let widthV = valx.clientWidth

        let checkedA = acumulate.checked;
        let checkedC = colors.checked;
        let checkedCy = crypto.checked
        let checkedQ = quadrants.checked

        let tick = 0;
        let price = []

        for (let i = 0; i < clusterdata.length && i != (clusterdata.length - 1); i++) {

            for (let t in clusterdata[i].cluster) {
                ticksallqnt++
            }

            for (let t in clusterdata[i].cluster) {
                if (i == 0) {
                    if (clusterdata[i].cluster[t] != 0) {
                        price[t] = clusterdata[i].cluster[t]
                    }

                }

                if (i != 0 && i <= (clusterdata.length - 2)) {
                    if (price[t]) {
                        price[t] += clusterdata[i].cluster[t]
                    }
                }

                if (clusterdata.length - 2) {

                }


                tick++
            }
            candles++
        }

        ticksallqnt = 0

        for (let i = clusterdata.length - 1; i >= 0; i--) {
            if (checkedA) {
                for (let t in clusterdata[i].cluster) {
                    if (checkedA) {
                        if (clusterdata[i].cluster[t] > bigpoc && i != (clusterdata.length - 1)) {
                            bigpoc = clusterdata[i].cluster[t]
                        } else {
                            if (i == (clusterdata.length - 1) && clusterdata[i].cluster[t] > pocvh) {
                                pocvh = clusterdata[i].cluster[t]
                            }
                        }
                        if (clusterdata[i].cluster[t] > candlepoc && i != (clusterdata.length - 1)) {
                            candlepoc = clusterdata[i].cluster[t]
                        }
                    }
                }
                for (let i = clusterdata.length - 1; i >= 0; i--) {
                    for (let t in clusterdata[i].cluster) {
                        ticksallqnt++
                    }
                }
                ticksallqnt = Math.round(ticksallqnt / clusterdata.length)
            } else {
                try {
                    if (!checkedA) {
                        for (let x = clusterdata.length - 1; x >= 0; x--) {
                            for (let t in clusterdata[x].cluster) {
                                if (clusterdata[x].cluster[t] > bigpoc && x != (clusterdata.length - 1)) {
                                    bigpoc = clusterdata[x].cluster[t]
                                } else {
                                    if (x == (clusterdata.length - 1) && clusterdata[x].cluster[t] > pocvh) {
                                        pocvh = clusterdata[x].cluster[t]
                                    }
                                }
                                if (clusterdata[i].cluster[t] > candlepoc && i != (clusterdata.length - 1)) {
                                    candlepoc = clusterdata[i].cluster[t]
                                }
                                ticksallqnt++
                            }
                        }
                        ticksallqnt = Math.round(ticksallqnt / clusterdata.length)
                    }
                } catch (e) {
                    localStorage.setItem('dataa', '{}')
                    location.reload(true)
                }
            }

            let poc = 0,
                time_candle, candle_hours, candle_minutes, seconds;
            let qnt_space = 300;
            let candle_size = (heightV - qnt_space) / ticksallqnt;
            let tick = 0;
            let bar_color;
            let candle_lentgh = (widthV) / (period + 1.5);
            let bar_division, bar_size;
            let cordinates = [];

            for (let t in clusterdata[i].cluster) {

                poc = clusterdata[i].cluster[t];

                if (poc === 0) {
                    bar_size = 1
                } else {
                    bar_color = 'rgba(86, 176, 104, 1)';
                    if (i != (clusterdata.length - 1)) {
                        bar_size = poc * ((candle_lentgh - candle_lentgh / 100 * 30) / bigpoc)
                    } else {
                        bar_size = poc * ((candle_lentgh - candle_lentgh / 100 * 15) / pocvh)
                    }
                }

                if (clusterdata[i].open < clusterdata[i].close) {
                    if (t < clusterdata[i].open || t > clusterdata[i].close) {
                        if (checkedC) {
                            bar_color = 'rgba(86, 176, 104, 0.4)'
                        } else {
                            bar_color = 'rgba(150, 150, 150, 0.4)'
                        }
                    } else {
                        bar_color = 'rgba(86, 176, 104, 1)'
                    }
                } else {
                    if (t < clusterdata[i].close || t > clusterdata[i].open) {
                        if (checkedC) {
                            bar_color = 'rgba(210, 59, 59, 0.4)'
                        } else {
                            bar_color = 'rgba(150, 150, 150, 0.4)'
                        }
                    } else {
                        bar_color = 'rgba(210, 59, 59, 1)'
                    }
                }

                bar_division = candle_size - (candle_size / 100) * 5;

                context.fillStyle = bar_color;

                if (i != (clusterdata.length - 1)) {
                    context.fillRect((candle_lentgh / 2) + candle * candle_lentgh, heightV - ((candle_size * tick)) - 130 - qnt_space / 2, bar_size, bar_division)
                } else {
                    context.fillRect(candle * candle_lentgh,
                        heightV - ((candle_size * tick)) - 130 - qnt_space / 2,
                        bar_size * 1.5, bar_division)
                }

                if (i != (clusterdata.length - 1) && poc > 0)  {
                    if (poc === candlepoc) {
                        context.fillStyle = context.fillStyle.slice(0, 18) + '1)';
                        context.font = 'bold ' + candle_lentgh / 7 + 'px Verdana';
                        context.fillText(candlepoc, (candle_lentgh / 2) + candle * candle_lentgh + bar_size, heightV - ((candle_size * tick)) - 130 - qnt_space / 2 + bar_division)
                    } else if (numbers.checked){
                        context.fillStyle = context.fillStyle.slice(0, 18) + '1)';
                        context.font = candle_lentgh / 8 + 'px Verdana';
                        context.fillText(poc, (candle_lentgh / 2) + candle * candle_lentgh + bar_size, heightV - ((candle_size * tick)) - 130 - qnt_space / 2 + bar_division)
                    }
                }

                let round_price = (!pair.getAttribute('val').includes('CRY/IDX')) ? 1000000 : (!checkedCy ? 1000000000 : 1000000000);

                let pair_val = pair.getAttribute('val');

                if (pair_val.includes('JPY')) {
                    round_price = 10000
                }
                if (pair_val.includes('AUD/CAD')) {
                    round_price = 100000
                }

                if (Math.round(t * round_price) % 50 == 0 && i == 0 && !pair_val.includes('CRY/IDX') && checkedQ) {
                    context.strokeStyle = 'rgba(130, 130, 130, 0.5)';
                    context.moveTo(0, height - ((candle_size * tick)) - 130 - qnt_space / 2 + bar_division / 2);
                    context.lineTo((clusterdata.length - 1) * candle_lentgh + candle_lentgh * 1.5, height - ((candle_size * tick)) - 130 - qnt_space / 2 + bar_division / 2);
                    context.stroke();
                    context.fillStyle = 'rgba(130, 130, 130, 0.5)';
                    context.font = candle_lentgh / 6 + 'px Verdana';
                    if (Math.round(t * round_price) % 100 == 0) {
                        context.fillText(t, (clusterdata.length - 1) * candle_lentgh + candle_lentgh * 1.5, height - ((candle_size * tick)) - 130 - qnt_space / 2 + bar_division / 2)
                    }
                }

                if (Math.round((t * round_price)) % 250 == 0 && i == 0 && pair_val.includes('CRY/IDX') && checkedQ) {
                    context.strokeStyle = 'rgba(130, 130, 130, 0.5)';
                    context.moveTo(0, height - ((candle_size * tick)) - 130 - qnt_space / 2 + bar_division / 2);
                    context.lineTo((clusterdata.length - 1) * candle_lentgh + candle_lentgh * 1.5, height - ((candle_size * tick)) - 130 - qnt_space / 2 + bar_division / 2);
                    context.stroke();
                    context.fillStyle = 'rgba(130, 130, 130, 0.5)';
                    context.font = candle_lentgh / 6 + 'px Verdana';
                    let price = String(Math.round(t * round_price)).slice(6);
                    context.fillText(price, (clusterdata.length - 1) * candle_lentgh + candle_lentgh * 1.5, height - ((candle_size * tick)) - 130 - qnt_space / 2 + bar_division / 2)
                }

                if (Math.round(t * round_price) / round_price == actual_price && i == 1) {
                    context.strokeStyle = '#49bde8';
                    context.beginPath();
                    context.moveTo(0, height - ((candle_size * tick)) - 130 - qnt_space / 2 + candle_size / 2);
                    context.lineTo(candle * candle_lentgh + candle_lentgh * 2.5, height - ((candle_size * tick)) - 130 - qnt_space / 2 + candle_size / 2);
                    context.stroke();
                    context.fillStyle = '#49bde8';
                    context.font = candle_lentgh / 5 + 'px Verdana';
                    if (t.length > 7) {
                        let price_one = t.slice(0, 7);
                        let price_two = t.slice(7, 12);
                        context.fillText(price_one, candle * candle_lentgh + candle_lentgh * 2.5, height - ((candle_size * tick)) - 130 - qnt_space / 2 + candle_size / 2 - 14);
                        context.fillText(price_two, candle * candle_lentgh + candle_lentgh * 2.5, height - ((candle_size * tick)) - 130 - qnt_space / 2 + candle_size / 2 + 14)

                    } else {
                        context.fillText(t, candle * candle_lentgh + candle_lentgh * 2.5, height - ((candle_size * tick)) - 130 - qnt_space / 2 + candle_size / 2)
                    }
                }

                cordinates.hp = height - ((candle_size * tick)) - 130 - qnt_space / 2;
                cordinates.hh = bar_division;
                cordinates.wp = candle * candle_lentgh + candle_lentgh / 2;
                cordinates.ww = candle_lentgh;

                let price_line;

                if (main.lincen(cordinates) || price_actuals == t) {
                    if (t.length > 7) {
                        price_line = t.slice(7, t.length) + '-' + poc
                    } else {
                        price_line = t + '-' + poc
                    }
                    context.beginPath();
                    context.strokeStyle = '#fff';
                    context.moveTo(0, cordinates.hp + (bar_division / 2));
                    context.lineTo(cordinates.wp + candle_lentgh, cordinates.hp + (bar_division / 2));
                    context.stroke();
                    context.fillStyle = '#fff';
                    context.font = candle_lentgh / 7 + 'px Verdana';
                    if (i == clusterdata.length - 1) {
                        context.fillText(price_line, cordinates.wp, cordinates.hp + (14 + bar_division / 2))
                    } else {
                        context.fillText(price_line, cordinates.wp, cordinates.hp + (14 + bar_division / 2))
                    }
                }
                tick++
            }

            if (colors.checked) {
                context.fillStyle = bar_color
            } else {
                context.fillStyle = 'rgba(125, 125, 125, 0.3)'
            }

            // if (seconds == '00' && size.value == 15) {
            //     context.beginPath();
            //     context.strokeStyle = '#fff';
            //     context.moveTo((candle_lentgh / 2) + candle * candle_lentgh, qnt_space - 130 - qnt_space / 2);
            //     context.lineTo((candle_lentgh / 2) + candle * candle_lentgh, heightV);
            //     context.stroke()
            // }
            ticksallqnt = 0;
            poc = 0;
            candle++;
            if (acumulate.checked) {
                bigpoc = 0;
                pocvh = 0
            }
            candlepoc = 0;
        }


        if (!is(preload)) {
            preload.style.opacity = 0
            setTimeout(() => {
                preload.style.display = 'none'
            }, 1000)
        }

    };

    this.rish = function (data, va_data) {
        let heightV = valx.clientHeight
        let widthV = valx.clientWidth
        let height = window.innerHeight;

        let dataticks,
            raplength,
            qnticks,
            qntickss,
            pocmaxx,
            candledate,
            candlehours,
            candleminutes,
            candleseconds,
            color_text,
            pricemax,
            plus,x,
            sec_0,y,
            buyticks,
            buymaxall,
            sellticks,
            sellmaxall,
            ticks,
            delta,
            direction_arrow,
            po_up,
            procent_rassh,
            rash_down,
            arrow_down_x,
            arrow_down_y;

        let ticksmax = 0,
            price = 0,
            positionpoc = 0,
            pricebase = 0,
            positionsticks = 0,
            max_p_find = 0,
            gqnticks = 0,
            rash_up = 0;

        let convertedata = [],
            rateandpoc = [],
            rapconverted = [],
            candles_data = [],
            cordinates_v = [],
            X_price = [],
            Y_price = [],
            fon_sheva = [];

        let periodval = periiod.value;
        let period = periiod.value * 1 + 1;

        if (!data[0].tick) {
            return;
        }

        for (let j = 0; j < periodval; j++) {
            if (!va_data[j].tick) {
                break
            }
            dataticks = va_data[j].tick.length
            if (dataticks > ticksmax) {
                ticksmax = dataticks
            }

            convertedata = [];
            for (let i = 0; i < dataticks; i++) {
                if (!convertedata[va_data[j].tick[i].close]) {
                    convertedata[va_data[j].tick[i].close] = 1
                } else {
                    convertedata[va_data[j].tick[i].close]++
                }
            }
            rateandpoc = [];
            for (const p in convertedata) {
                rateandpoc.push([p, convertedata[p]])
            }
            raplength = rateandpoc.length;
            let rprev;
            rapconverted = []
            for (let r = 0; r < raplength; r++) {
                if (Number(rateandpoc[r][0]) > 0) {
                    rprev = r;
                    price = rateandpoc[r][0];
                    for (let s = 0; s < raplength; s++) {
                        if (Number(rateandpoc[s][0]) > price) {
                            price = rateandpoc[s][0];
                            rprev = s;
                            if (r > 0) {
                                r--
                            }
                        }
                    }
                    rapconverted.push([price, rateandpoc[rprev][1]]);
                    rateandpoc[rprev][0] = 0
                }
            }
            candles_data.push(rapconverted)
        }

        let qntcandles = candles_data.length;

        let porcentage_length = ticksmax / 100;

        const period_divison = (widthV) / (period + 1.5);
        let _0xf774x67 = ((heightV / 100) * 20) / 100;

        for (let i = 0; i < qntcandles; i++) {
            if (!va_data[i].tick) {
                break;
            }
            if (va_data[i].tick) {
                dataticks = va_data[i].tick.length
            }
            if (va_data[i].close < va_data[i].open) {
                context.fillStyle = '#d75c48';
                fon_sheva[i] = 'red'
            } else {
                if (va_data[i].close > va_data[i].open) {
                    context.fillStyle = '#53a15f';
                    fon_sheva[i] = 'green'
                } else {
                    if (va_data[i].close === va_data[i].open) {
                        context.fillStyle = '#808080';
                        fon_sheva[i] = 'gray'
                    }
                }
            }
            qnticks = candles_data[qntcandles-1].length
            if (qnticks > 0) {
                context.fillRect(
                    (period_divison / 2) + (qntcandles - i) * period_divison,
                    heightV,
                    period_divison - (period_divison / 100),
                    0 - (_0xf774x67 * (dataticks / porcentage_length))
                );
            }

            context.fillStyle = '#fff';
            context.font = vremya_size + 'px Verdana';
            candledate = new Date(data[i].time * 1000);
            candlehours = candledate.getHours();
            if (broker === 'Binomo') {
                plus = 1;
                sec_0 = 59
            } else {
                plus = 0;
                sec_0 = 60
            }
            if (timer === 1) {
                candleminutes = (candledate.getMinutes());
                if (i < 1) {
                    candleseconds = sec_0 - glob_sec + plus;
                    if (candleseconds < -1) {
                        candleseconds = 59
                    }
                    if (candleseconds < -2) {
                        candleseconds = 58
                    }
                    if (candleseconds < 10) {
                        candleseconds = '0' + candleseconds
                    }
                } else {
                    candleseconds = '';
                    context.font = vremya_size + 'px Verdana'
                }
                if (candleminutes < 10) {
                    candleminutes = '0' + candleminutes
                }
                if (candleminutes > 59) {
                    candleminutes = '00';
                    candlehours = (parseInt(candlehours) + 1)
                }
                if (candlehours < 10) {
                    candlehours = '0' + candlehours
                }
                if (candleseconds > 59) {
                    candleseconds = '00'
                }
                if (candleseconds <= '45' && candleseconds > '35') {
                    context.fillStyle = '#ffff00'
                }
                if (candleseconds <= '35' && candleseconds > '30') {
                    context.fillStyle = '#ff0000'
                }
            } else {
                candleminutes = (candledate.getMinutes() + plus);
                if (i < 1) {
                    candleseconds = glob_sec - plus;
                    if (candleseconds < 10) {
                        candleseconds = '0' + candleseconds
                    }
                } else {
                    candleseconds = '';
                    context.font =  vremya_size + 'px Verdana'
                }
                if (candleminutes < 10) {
                    candleminutes = '0' + candleminutes
                }
                if (3 > 59) {
                    candleminutes = '00';
                    candlehours = (parseInt(candlehours) + plus)
                }

                if (candlehours < 10) {
                    candlehours = '0' + candlehours
                }
                if (candleseconds > 59) {
                    candleseconds = '00'
                }
                if (candleseconds >= '15' && candleseconds < '25') {
                    context.fillStyle = '#ffff00'
                }
                if (candleseconds >= '25' && candleseconds < '30') {
                    context.fillStyle = '#ff0000'
                }

            }
            if (i < 1) {
                candleseconds = ':' + candleseconds;
                if (timer === 1) {
                } else {
                    candleminutes = candleminutes - 1
                    candleminutes = String(candleminutes).length < 1 ? '0' + candleminutes : candleminutes
                }
            } else {
                if (!timer === 1) {
                    candleminutes = candleminutes - 1
                    candleminutes = String(candleminutes).length < 1 ? '0' + candleminutes : candleminutes
                }
            }


            context.fillText(
                candlehours + ':' + candleminutes + candleseconds,
                (period_divison / 2) + (qntcandles - i) * period_divison,
                heightV - (_0xf774x67 * (dataticks / porcentage_length)) - 10
            );

            X_price[i] = (period_divison / 2) + (qntcandles - i) * period_divison
            Y_price[i] = heightV - (_0xf774x67 * (dataticks / porcentage_length))
        }

        for (let i = 0; i < qntcandles; i++) {
            pocmaxx = 0;
            buyticks = 0;
            buymaxall = 0
            sellticks = 0;
            sellmaxall = 0;
            ticks = 0;
            delta = 0;

            qnticks = candles_data[i].length;

            pricebase = va_data[i].tick[0].close

            for (let j = 0; j < qnticks; j++) {
                if (candles_data[i][j][1] >= pocmaxx) {
                    pocmaxx = candles_data[i][j][1]
                    pricemax = candles_data[i][j][0]
                    gqnticks = qnticks;
                    max_p_find = j


                    if (pricemax < pricebase) {
                        color_text = '#008f1d'
                    }
                    if (pricemax > pricebase) {
                        color_text = '#d75c48'
                    }
                    if (Number(candles_data[i][j][0]) === pricebase) {
                        color_text = '#ffffff'
                    }
                }
            }

            positionsticks = ((va_data[i].tick.length / porcentage_length) * _0xf774x67) / qnticks;
            for (let length = 0; length < qnticks; length++) {
                positionpoc = (period_divison / 100) * (candles_data[i][length][1] / (pocmaxx / 100))

                if (invert === 1) {
                    ticks += 1
                    context.fillStyle = '#930000';
                    if (candles_data[i][length][0] <= pricebase) {
                        context.fillStyle = '#005811'
                        buymaxall += candles_data[i][length][1]
                        buyticks += 1
                    } else {
                        sellmaxall += candles_data[i][length][1]
                        sellticks += 1
                    }

                    delta = buymaxall - sellmaxall

                    if (color === 1) {
                        if (candles_data[i][length][1] >= 6) {
                            context.fillStyle = '#2e0000'
                        }
                        if (candles_data[i][length][1] >= 4 && candles_data[i][length][1] < 6) {
                            context.fillStyle = '#610000'
                        }
                        if (candles_data[i][length][0] <= pricebase) {
                            if (candles_data[i][length][1] >= 6) {
                                context.fillStyle = '#002908'
                            }
                            if (candles_data[i][length][1] >= 4 && candles_data[i][length][1] < 6) {
                                context.fillStyle = '#005c12'
                            }
                        }
                    }
                } else {
                    context.fillStyle = '#005811';
                    if (candles_data[i][length][0] <= pricebase) {
                        context.fillStyle = '#930000'
                    }
                    if (color === 1) {
                        if (candles_data[i][length][1] >= 6) {
                            context.fillStyle = '#002908'
                        }
                        if (candles_data[i][length][1] >= 4 && candles_data[i][length][1] < 6) {
                            context.fillStyle = '#0a4500'
                        }
                        if (candles_data[i][length][0] <= pricebase) {
                            if (candles_data[i][length][1] >= 6) {
                                context.fillStyle = '#2e0000'
                            }
                            if (candles_data[i][length][1] >= 4 && candles_data[i][length][1] < 6) {
                                context.fillStyle = '#610000'
                            }
                        }
                    }
                }


                context.fillRect(
                    (period_divison / 2) + (qntcandles - i) * period_divison,
                    height - (positionsticks * (qnticks - length)),
                    positionpoc - ((positionpoc / 100) * 10),
                    positionsticks - (positionsticks / 100)
                );

                cordinates_v.hp = heightV - (positionsticks * (qnticks - length))
                cordinates_v.hh = positionsticks
                cordinates_v.wp = (period_divison / 2) + (qntcandles - i) * period_divison
                cordinates_v.ww = (period_divison / 100) * (pocmaxx / (pocmaxx / 100));

                if (main.lincen(cordinates_v) || (_0xf774x2c === candles_data[i][length][0])) {
                    const price = candles_data[i][length][0];
                    context.fillStyle = 'rgba(0, 33, 56, 0.61)';
                    context.fillRect(
                        (period_divison / 2) + (qntcandles - i) * period_divison + cordinates_v.ww - 1,
                        cordinates_v.hp + (cordinates_v.hh / 2) - 20,
                        10,
                        20);
                    context.fillStyle = 'rgba(210, 59, 59, 1)'
                    if (candles_data[i][length][0] <= pricebase) {
                        context.fillStyle = 'rgba(86, 176, 104, 1)';
                    }
                    context.fillRect(
                        (period_divison / 2) + (qntcandles - i) * period_divison + cordinates_v.ww - 1,
                        cordinates_v.hp + (cordinates_v.hh / 2) - 40,
                        String(candles_data[i][length][1]).length * 15,
                        20);

                    context.beginPath();
                    context.strokeStyle = '#fff';
                    context.moveTo(cordinates_v.wp, cordinates_v.hp + (positionsticks / 2));
                    context.lineTo(cordinates_v.wp + cordinates_v.ww, cordinates_v.hp + (positionsticks / 2));
                    context.stroke();
                    context.fillStyle = '#fff';
                    context.font = '14px Verdana';
                    price_actuals = price
                    if (okrugl == 7.5) {
                        let a = Math.pow(10, 8)
                        let b = Math.trunc(price_actuals * a) / a
                        price_actuals = b
                    }
                    if (odinak > 0) {
                        _0xf774x2c = price
                    }
                    context.fillText(price, (period_divison / 2) + (qntcandles - i) * period_divison + cordinates_v.ww, cordinates_v.hp + (cordinates_v.hh / 2) - 5);
                    context.fillText(candles_data[i][length][1], (period_divison / 2) + (qntcandles - i) * period_divison + cordinates_v.ww, cordinates_v.hp + (cordinates_v.hh / 2) - 25)
                }
            }

            x = X_price[i];
            y = Y_price[i]

            if (details === 1) {
                context.font = '14px Verdana';
                context.fillStyle = '#f7ff00'
                context.fillText("Vol:" + (sellmaxall + buymaxall), x, y - (vremya_size * 6.8))
                context.fillStyle = '#ffffff'
                context.fillText("Total:" + ticks, x, y - (vremya_size * 5.8))
                context.fillStyle = '#03ff93'
                context.fillText("Delta:" + delta, x, y - (vremya_size * 4.6))


            }


            if (max_obj === 1) {
                if (max_obj_color === 1) {
                    context.fillStyle = color_text
                } else {
                    context.fillStyle = '#ffffff'
                }
                pricemax = pricemax.slice(obrez, 12);
                context.font = max_size + 'px Verdana';
                context.fillText(pricemax, x, y - (vremya_size * 2.2));
                context.font = "bolder " + max_size + 'px Verdana';
                context.fillText(pocmaxx, x, y - (vremya_size * 3.4));
            }

            if (strelki_procent === 1) {
                context.fillStyle = color_text;
                const _0xf774x6b = '⬈',
                    _0xf774x6c = '⬊',
                    _0xf774x6d = '⬍';
                procent_rassh = (max_p_find * 100 / gqnticks);
                procent_rassh = parseFloat(procent_rassh.toFixed());
                context.font = str_min_size + 'px Verdana';
                if (fon_sheva[i] === 'red') {
                    if (procent_rassh < 50) {
                        direction_arrow = 'down'
                    } else {
                        if (procent_rassh > 50) {
                            direction_arrow = 'down'
                        } else {
                            if (procent_rassh === 50) {
                                direction_arrow = '0'
                            }
                        }
                    }
                    procent_rassh = 100 - procent_rassh
                }
                if (fon_sheva[i] === 'green') {
                    if (procent_rassh < 50) {
                        direction_arrow = 'up'
                    } else {
                        if (procent_rassh > 50) {
                            direction_arrow = 'up'
                        } else {
                            if (procent_rassh === 50) {
                                direction_arrow = '0'
                            }
                        }
                    }
                }
                if (fon_sheva[i] === 'grey') {
                    if (procent_rassh < 50) {
                        direction_arrow = '0'
                    } else {
                        if (procent_rassh > 50) {
                            direction_arrow = '0'
                        } else {
                            if (procent_rassh === 50) {
                                direction_arrow = '0'
                            }
                        }
                    }
                }
                if (direction_arrow === 'up') {
                    context.fillText(_0xf774x6b + procent_rassh, x + (cordinates_v.ww / 4), y - (parseFloat(max_size) + parseFloat(vremya_size) + parseFloat(max_size) * 1.4));
                    rash_up = procent_rassh;
                    rash_down = 100 - procent_rassh
                } else {
                    if (direction_arrow === 'down') {
                        context.fillText(_0xf774x6c + procent_rassh, x + (cordinates_v.ww / 4), y - (parseFloat(max_size) + parseFloat(vremya_size) + parseFloat(max_size) * 1.4));
                        rash_up = 100 - procent_rassh;
                        rash_down = procent_rassh
                    } else {
                        if (direction_arrow === '0') {
                            context.fillText(_0xf774x6d + procent_rassh, x + (cordinates_v.ww / 4), y - (parseFloat(max_size) + parseFloat(vremya_size) + parseFloat(max_size) * 1.4));
                            rash_up = procent_rassh;
                            rash_down = procent_rassh
                        }
                    }
                }
                po_up = 2;
            }

        }
    }

    this.soc = function (newbroker = 'EURUSD', _0x9058x3d = 60) {
        if (window.location.hostname.length != sitelocation.length) {
            return;
        }
        preload.style.display = ''
        preload.style.opacity = '0.5'

        if (document.getElementById(pair.getAttribute('val').replace(/[/]/g, '_')).getAttribute('data') !== broker || !websocket) {
            broker = document.getElementById(pair.getAttribute('val').replace(/[/]/g, '_')).getAttribute('data')
            if (websocket) {
                websocket.close()
            }
            if (broker == 'OlympTrade') {
                websocket = new WebSocket('wss://olymptrade.com/ws2')
            }
            if (broker == 'Binomo') {
                websocket = new WebSocket('wss://as.binomo.com/')
            }
            websocket.onopen = function () {
                if (broker == 'Binomo') {
                    websocket.send('subscribe:' + newbroker)
                }
            };
            websocket.onclose = function () {
                console.log('Connection closed...');
                main.soc(pair.getAttribute('val'), size.value + 2)
            };
            websocket.onmessage = function (response) {
                main.predobrdata(response.data, response.data)
            };
        } else {
            if (broker == 'Binomo') {
                websocket.send('unsubscribe:' + main.data.pair);
                websocket.send('subscribe:' + newbroker)
            }
            price_count = 0
        }
    };

    this.predobrdata = function (data, v_data) {
        if (window.location.hostname.length != sitelocation.length) {
            return;
        }
        let server_data = JSON.parse(data);
        let va_server_data = JSON.parse(data)

        let tim_00,
            test_time;

        let num;
        let KF;

        if (broker == 'Binomo') {
            let data = {},
                v_data = {},
                candle_timestramp;
            if (open_price == 0 && server_data.data[0].assets) {
                open_price = server_data.data[0].assets[0].rate
            }
            if (server_data.data[0].assets) {
                if (open_price == server_data.data[0].assets[0].rate) {
                    price_count++
                }
            }
            if (server_data.errors[0]) {
                data = {
                    "servertime": 1234567890
                }

                v_data = {
                    "servertime": 1234567890
                }

            } else {
                if (server_data.data[0].assets) {
                    server_data = server_data.data[0].assets[0];
                    va_server_data = va_server_data.data[0].assets[0];

                    candle_timestramp = String(Date.parse(server_data.created_at));

                    tim_00 = (Date.parse(server_data.created_at));
                    test_time = new Date(tim_00);
                    glob_sec = test_time.getSeconds();

                    candle_timestramp = Number(candle_timestramp.substring(0, candle_timestramp.length - 3));

                    if (confirm_data == true) {
                        data.pair = server_data.ric;
                        data.time = +candle_timestramp;

                        data.open = +server_data.rate;
                        data.low = +server_data.rate;
                        data.high = +server_data.rate;
                        data.close = +server_data.rate;

                        if (okrugl_on === 1) {
                            num = va_server_data.rate;
                            KF = Math.pow(10, okrugl);
                            va_server_data.rate = Math.trunc(num * KF) / KF
                        }


                        v_data.open = +va_server_data.rate;
                        v_data.low = +va_server_data.rate;
                        v_data.high = +va_server_data.rate;
                        v_data.close = +va_server_data.rate;

                    } else {
                        if (confirm_data == false) {
                            data.barsize = +size.value;
                            data.data = [];
                            data.pair = server_data.ric;
                            let new_data = {};

                            new_data.pair = server_data.ric;
                            new_data.time = candle_timestramp - (candle_timestramp % size.value);
                            new_data.open = +server_data.rate;
                            new_data.low = +server_data.rate
                            new_data.high = +server_data.rate;
                            new_data.close = +server_data.rate;
                            for (let i = 0; i < 72; i++) {
                                data.data.push(new_data);
                                new_data.time = candle_timestramp - size.value
                            }

                            v_data.data = [];
                            let v_new_data = {};

                            v_new_data.open = +va_server_data.rate;
                            v_new_data.low = +va_server_data.rate
                            v_new_data.high = +va_server_data.rate;
                            v_new_data.close = +va_server_data.rate;

                            for (let i = 0; i < 72; i++) {
                                v_data.data.push(v_new_data);
                                v_new_data.time = candle_timestramp - size.value
                            }
                        }
                    }
                }
            }
            main.obr(data, v_data)
        } else {
            main.obr(server_data, va_server_data)
        }

        Menu()
    };

    this.obr = function (candles_data, va_candles_data) {
        _0xf774x2c = 0

        if (window.location.hostname.length != sitelocation.length) {
            return;
        }
        if (candles_data.servertime) {
            errors_count++
        }

        if (candles_data.time) {
            errors_count = 0;

            if (Math.floor((candles_data.time - 1)/ main.data.barsize) > Math.floor((main.data.data[0].time + 1) / main.data.barsize)) {
                if (candles_data.time > _0x9058x9) {
                    _0x9058x9 = candles_data.time + 10;
                    main.data.data.unshift(candles_data);
                    main.va_data.data.unshift(va_candles_data)

                    let copy = {}

                    copy.pair = candles_data.pair
                    copy.time = candles_data.time
                    copy.open = candles_data.open
                    copy.low = candles_data.low
                    copy.high = candles_data.high
                    copy.close = candles_data.close

                    let va_copy = {}
                    va_copy.open = va_candles_data.open
                    va_copy.low = va_candles_data.low
                    va_copy.high = va_candles_data.high
                    va_copy.close = va_candles_data.close

                    if (main.data.data[0].high < candles_data.high) {
                        copy.high = candles_data.high
                    }
                    if (main.data.data[0].low > candles_data.low) {
                        copy.low = candles_data.high
                    }

                    if (main.va_data.data[0].high < va_candles_data.high) {
                        va_copy.high = va_candles_data.high
                    }
                    if (main.va_data.data[0].low > va_candles_data.low) {
                        va_copy.low = va_candles_data.high
                    }

                    main.data.data[0].tick = []
                    main.data.data[0].tick.push(copy)

                    main.va_data.data[0].tick = []
                    main.va_data.data[0].tick.push(va_copy)

                    if (main.data.data[0].close != candles_data.close) {
                        copy.close = candles_data.close;
                        main.data.data[0].tick.unshift(copy)
                    }

                    if (main.va_data.data[0].close != va_candles_data.close) {
                        va_copy.close = va_candles_data.close;
                        main.va_data.data[0].tick.unshift(va_copy)
                    }
                }
            } else {
                if (candles_data.close) {
                    errors_count = 0;
                    if (main.data.data[0].high < candles_data.high) {
                        main.data.data[0].high = candles_data.high
                    }
                    if (main.data.data[0].low > candles_data.low) {
                        main.data.data[0].low = candles_data.low
                    }

                    if (main.data.data[0].close != candles_data.close) {
                        main.data.data[0].close = candles_data.close;
                        main.data.data[0].close_c = candles_data.close_c;
                        main.data.data[0].tick.unshift(candles_data)
                    }
                }

                if (va_candles_data.close) {
                    errors_count = 0;
                    if (main.va_data.data[0].high < va_candles_data.high) {
                        main.va_data.data[0].high = va_candles_data.high
                    }
                    if (main.va_data.data[0].low > va_candles_data.low) {
                        main.va_data.data[0].low = va_candles_data.low
                    }

                    if (main.va_data.data[0].close != va_candles_data.close) {
                        main.va_data.data[0].close = va_candles_data.close;
                        main.va_data.data[0].tick.unshift(va_candles_data)
                    }
                }
            }
            requestAnimationFrame(main.indi)

        } else {
            if (candles_data.data) {
                if (!confirm_data) {
                    let historic_data = [];
                    if (historic_data) {
                        if (historic_data.pair == candles_data.pair && historic_data.barsize == candles_data.barsize) {
                            main.data = historic_data
                        } else {
                            main.data = candles_data
                            main.va_data = va_candles_data
                        }
                    } else {
                        main.data = candles_data
                        main.va_data = va_candles_data
                    }
                    confirm_data = true
                }
            }
        }
        if (errors_count > 2 || price_count > 20) {
            let height = window.innerHeight,
                width = window.innerWidth;
            context.clearRect(0, 0, width, height);
            context.strokeStyle = '#fff';
            context.font = ((width / 100) * 4) + 'px Verdana';
            let _0x9058x36 = 'Котировки ' + pair.innerText + ' недоступны';
            context.strokeText(_0x9058x36, (width / _0x9058x36.length) * 4, height / 2);
            open_price = 0;
            price_count = 0
        }
    };

    this.pairchange = function () {
        if (window.location.hostname.length != sitelocation.length) {
            return;
        }
        confirm_data = false;
        let _0x9058x4d = 0;
        if (dsava.aff) {
            _0x9058x4d = dsava.aff
        }
        let _0x9058x40 = {
            aff: _0x9058x4d,
            pair: pair.getAttribute('val'),
            period: periiod.value,
            size: size.value,
            date: dsava.date
        };
        errors_count = 0;
        localStorage.setItem('dsava', JSON.stringify(_0x9058x40));
        main.soc(pair.getAttribute('val'), size.value)
    };

    this.indi = function () {
        if (window.location.hostname.length != sitelocation.length) {
            return;
        }
        if (!main.data) {
            return
        }
        let main_data = main.data.data,
            va_main_data = main.va_data.data,
            period = periiod.value

        let vh_lentgh = 0,
            high = 0,
            low = 10000,
            poc_vh = 0;

        let data = [],
            poc_array = [],
            vh_converted_array = [],
            vh_candledata = []

        let actual_price,
            index,
            ky;

        let checkedCy = crypto.checked,
            pairIn = pair.getAttribute('val').includes('CRY/IDX')

        for (let i = 0; i < period; i++) {
            if (main_data[i].tick) {
                for (let x = 0; x < main_data[i].tick.length; x++) {
                    if (main_data[i].tick[x].open > high) {
                        high = main_data[i].tick[x].open
                    }
                    if (main_data[i].tick[x].open < low) {
                        low = main_data[i].tick[x].open
                    }

                    data[i] = main_data[i]
                }
            } else {}
        }

        context.clearRect(0, 0, valx.clientWidth, valx.clientHeight);
        let converted_data = {
            "high": high,
            "low": low,
            "time": 'Total',
            "cluster": []
        };

        let priceTotal_round = (!pairIn) ? 0.00001 : (!checkedCy ? 0.00000001 : 0.0000001);
        let priceLentgh_round = (!pairIn) ? 7 : (!checkedCy ? 12 : 11);
        let priceCount_round = (!pairIn) ? 100000 : (!checkedCy ? 100000000 : 10000000);

        let price, price_round;

        if (pair.getAttribute('val').includes('JPY')) {
            priceCount_round = 1000;
            priceTotal_round = 0.001
        }
        if ('tick' in main_data[0]) {
            actual_price = Math.round(main_data[0].tick[0].open * priceCount_round) / priceCount_round
        }

        for (let i = 0; i < data.length; i++) {
            data[i].cluster = [];

            for (let x = low; x <= high; x += priceTotal_round) {

                price = String(Math.round(x * priceCount_round) / priceCount_round).slice(0, priceLentgh_round);

                data[i].cluster[price] = 0;
                converted_data.cluster[price] = 0
            }


            for (let x = 0; x < data[i].tick.length; x++) {
                price_round = String(Math.round(data[i].tick[x].open * priceCount_round) / priceCount_round).slice(0, priceLentgh_round);

                if (data[i].tick.length != 1) {
                    data[i].cluster[price_round * 1] += 1;
                }

                if (isNaN(data[i].cluster[price_round])) {
                    data[i].cluster[price_round * 1] = 0;
                    data[i].cluster[price_round * 1] += 1
                }
            }
        }

        for (let i = 0; i < data.length; i++) {
            if ('tick' in main_data[i]) {
                for (let x = 0; x < data[i].tick.length; x++) {
                    price_round = String(Math.round(data[i].tick[x].open * priceCount_round) / priceCount_round).slice(0, priceLentgh_round);
                    converted_data.cluster[price_round * 1] += 1
                }
                if (vh_lentgh < data[i].tick.length) {
                    vh_lentgh = data[i].tick.length
                }
            }
        }

        converted_data.open = data[data.length - 1].open;
        converted_data.close = data[0].close;

        for (let i = 0; i < period; i++) {
            if (!va_main_data[i].tick) {
                break;
            }
            for (let length = 0; length < va_main_data[i].tick.length; length++) {
                if (!poc_array[va_main_data[i].tick[length].close]) {
                    poc_array[va_main_data[i].tick[length].close] = 1
                } else {
                    poc_array[va_main_data[i].tick[length].close]++
                }
            }
        }

        for (const p in poc_array) {
            if (poc_array[p] > poc_vh) {
                poc_vh = poc_array[p]
            }
            vh_converted_array.push([p, poc_array[p]])
        }

        let array_length = vh_converted_array.length

        for (let i = 0; i < array_length; i++) {
            if (Number(vh_converted_array[i][0]) > 0) {
                index = i;
                ky = vh_converted_array[i][0];
                for (let length = 0; length < array_length; length++) {
                    if (Number(vh_converted_array[length][0]) > ky) {
                        ky = vh_converted_array[length][0];
                        index = length;
                        if (i > 0) {
                            i--
                        }
                    }
                }
                vh_candledata.push([ky, vh_converted_array[index][1]]);
                vh_converted_array[index][0] = 0
            }
        }

        data.push(converted_data);
        main.risv(data, actual_price, vh_lentgh)

        main.rish(main_data,va_main_data)

        if (_0xf774x2c == 0) {
            price_actuals = 0
        }
    };

    size.onchange = () => {
        main.pairchange()
    }

    pair.onclick = () => {
        if (!is(divscrol)) {
            divscrol.style.display = ''
        } else {
            divscrol.style.display = 'block'
        }
    }

    for (let sells of document.getElementsByClassName('sels')) {
        sells.onclick = () => {
            if (sells.getAttribute('val') !== pair.getAttribute('val')) {
                pair.setAttribute('val', sells.getAttribute('val'))
                pair.innerHTML = sells.innerHTML

                main.pairchange()
            }
            divscrol.style.display = 'none'
        }
    }

    periiod.onchange = () => {
        if (periiod.value < 2) {
            periiod.value = 1
        }
        if (periiod.value > 72) {
            periiod.value = 72
        }

        let aff = 0;
        if (dsava.aff) {
            aff = dsava.aff
        }
        let options = {
            aff: aff,
            pair: pair.getAttribute('val'),
            period: periiod.value,
            size: size.value,
            date: dsava.date
        };
        localStorage.setItem('dsava', JSON.stringify(options))
    }

    dsava = JSON.parse(localStorage.getItem('dsava'));
    let date = new Date();
    date = date.getTime();
    if (dsava) {
        if (dsava.pair) {
            pair.setAttribute('val', dsava.pair)
            pair.innerHTML = document.getElementById(dsava.pair.replace(/[/]/g, '_')).innerHTML
        }
        if (dsava.period) {
            periiod.value = dsava.period
        }
        if (dsava.size) {
            size.options[2].removeAttribute('selected')
            document.getElementById( dsava.size).setAttribute('selected', 'selected')
        }
    } else {
        var newdsava = {
            aff: 'null',
            pair: pair.value,
            period: periiod.value,
            size: size.value,
            date: date
        };
        localStorage.setItem('dsava', JSON.stringify(newdsava));
        dsava = newdsava
    }
    if (window.location.hostname.length == sitelocation.length) {
        main.soc(pair.getAttribute('val'), size.value)
    }

};

window.onload = () => { Sign() }