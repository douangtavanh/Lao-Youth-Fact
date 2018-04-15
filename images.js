const deepFreeze = require('deepfreeze');

const images = [
    'https://firebasestorage.googleapis.com/v0/b/lao-youth-f819d.appspot.com/o/Thongloun_Sisoulith.jpg?alt=media&token=ec57a45c-2aa7-4cec-b27e-4f1469ab5dc6',
    null,
    null
]

const imagesTitle = [
    'H.E Thonglound Sisoulith',
    null,
    null
]

module.exports = deepFreeze({
    images,
    imagesTitle,
});