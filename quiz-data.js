const deepFreeze = require('deepfreeze');

const data = {
    q1: 'Who is a prime minister of Lao PDR?',
    q2: 'How many province in Lao PDR?'
}

const answer = {
    q1: 'Thongloun Sisoulith',
    q2: '17'
}

module.exports = deepFreeze({
    data,
    answer
});