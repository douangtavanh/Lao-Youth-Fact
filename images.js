const deepFreeze = require('deepfreeze');

const images = [
    'https://firebasestorage.googleapis.com/v0/b/lao-youth-f819d.appspot.com/o/PM-Thongloun.jpg?alt=media&token=8fdc645d-a1a4-4217-b06c-f47e124bad62',
    null,
    'https://firebasestorage.googleapis.com/v0/b/lao-youth-f819d.appspot.com/o/Bounnhang_Vorachith_2016_(cropped).jpg?alt=media&token=e98c43c7-e458-41a7-9826-27146be1bf13'
]

const imagesTitle = [
    'H.E. Thonglound Sisoulith',
    null,
    'H.E. Bounnhang Vorachith'
]

module.exports = deepFreeze({
    images,
    imagesTitle,
});