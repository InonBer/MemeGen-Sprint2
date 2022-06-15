function init() {
    console.log('noice');
    renderImage()
    var elCanvas = document.querySelector('canvas')
    var ctx = elCanvas.getContext('2d')
}


function renderImage() {
    const imgs = getImgs()
    var elGrid = document.querySelector('.grid-container')
    var strHTML = ''
    for (var i = 0; i < imgs.length; i++) {
        strHTML += `<img onclick="renderCanvas('${imgs[i].url}')" id="${imgs[i].id}" 
        class="grid-img"
        src="${imgs[i].url}" 
        data-trans="category-${imgs[i].keywords[0]}"
        data-trans="name-${imgs[i].keywords[1]}"
        alt="">`

    }
    elGrid.innerHTML = strHTML
}

function renderCanvas(url) {
    var elGrid = document.querySelector('.grid-container')
    elGrid.style.display = 'none'
    var elCanvasCont = document.querySelector('.canvas-container')
    elCanvasCont.style.display = 'inline'
    var elCanvas = document.querySelector('canvas')
    var ctx = elCanvas.getContext('2d')
    var img = new Image()
    img.src = url
    img.onload = function () {
        ctx.drawImage(img, 0, 0)
    }
}

function addNewLine() {
    var elInput = document.querySelector('.text-input').value
    console.log(elInput);
    _addTextLine(elInput)
}
