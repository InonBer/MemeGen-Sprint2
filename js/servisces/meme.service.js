var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'trump'] },
    { id: 2, url: 'img/2.jpg', keywords: ['cute', 'dogs'] },
    { id: 3, url: 'img/3.jpg', keywords: ['cute', 'Baby and Dog'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cute', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['popular', 'Succsess kid'] },
    { id: 6, url: 'img/6.jpg', keywords: ['popular', 'physics'] },
    { id: 7, url: 'img/7.jpg', keywords: ['popular', 'Surprise'] },
    { id: 8, url: 'img/8.jpg', keywords: ['popular', 'willy wokna'] },
    { id: 9, url: 'img/9.jpg', keywords: ['evil', 'evil kid'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny', 'Obama'] },
    { id: 11, url: 'img/11.jpg', keywords: ['popular', 'gaymoment'] },
    { id: 12, url: 'img/12.jpg', keywords: ['popular', 'you'] },
    { id: 13, url: 'img/13.jpg', keywords: ['popular', 'cheers'] },
    { id: 14, url: 'img/14.jpg', keywords: ['popular', 'matrix'] },
    { id: 15, url: 'img/15.jpg', keywords: ['popular', 'i see'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'startrek'] },
    { id: 17, url: 'img/17.jpg', keywords: ['popular', 'putin'] },
    { id: 18, url: 'img/18.jpg', keywords: ['popular', 'toystory'] },
];
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: []
}

function getImgs() {
    return gImgs
}

var elCanvas = document.querySelector('canvas')
var ctx = elCanvas.getContext('2d')


function _addTextLine(txt) {

    ctx.lineWidth = 2;
    // ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.font = '40px Arial';
    ctx.fillText(txt, 50, 50); //Draws (fills) a given text at the given (x, y) position.
    // ctx.strokeText(txe, x - 50, y); //Draws (strokes) a given text at the given (x, y) position.

}