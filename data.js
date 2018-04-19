const deepFreeze = require('deepfreeze');

const welcome = {
    intent: [
    'Hello, Welcome to Lao Youth fact, do you want fact or quick quiz?',
    'Welcome to Lao Youth fact, I\'m here to help you prepare your SSEAYP exam. which one do you want to hear fact or quick quiz?'
    ]
}

const fact = [
    'Thongloun Sisoulith is a prime minister of Lao PDR',
    'Lao PDR has 17 provinces and 1 Capital',
    'President of Lao People Revolutionary Party is Bounnhang Vorachith',
    'President of Lao PDR is Bounnhang Vorachith',
    'Vice president of Lao PDR is Phankham Viphavanh',
    'President of National Assembly is Pany Yathortu',
    'Lao People Revolutionary Party establish in 22 March 1955',
    'National Army Day establish in 20 January 1945',
    'Lao Youth Union establish in 14 April 1955',
    'Kaysone Phomvihane born in 13 December 1919',
    'Souphanouving born in 13 July 1909',
    'To be Lao youth member, you have to be 15 to 35 years old',
    'To be Lao prioneer, you have to be 9 to 14 years old',
    'To be Lao Young prioneer, you have to be 6 to 8 years old',
    'National flag has 3 colours: red, blue and white',
    'There are 49 ethnics in Lao PDR',
    'Lao PDR was structed in 2 December 1975',
    'Minister of Foreign Affairs of Lao PDR is Saleumxay Kommasith',
    'There are 10 countries in ASEAN',
    'There are 5 counties in the mean time of established ASEAN: Thailand, Singapore, Philiphine, Malysia and Indonesia',
    'Lao PDR is a member of ASEAN in 23 July 1997',
    'ASEAN establish in 8 August 1967',
    'ASEAN shorted from The Association of Southeast Asian Nations',
    'SSEAYP shorted from The Ship for Southeast Asian and Japanese Youth Program',
    'SIGA shorted from SSEAYP International General Assembly',
    'LPRYU shorted from Lao People\'s Revolutionary Youth Union',
    'ASEAN Headquarters is in Jakartar, Indonesia',
    'ASEAN 3 pillars are ASEAN Political-Security Community Council, ASEAN Economic Community Council and ASEAN Socio-cultural Community Council.',
    'The motto of ASEAN is One Vision One Identity One Community',
    'Lao SAA shorted from Lao SSEAYP Alumni Association',
    'The area of Lao PDR is 236,800 KM',
    'Lao PDR shorted from Lao People\'s Democratic Republic',
    'Lao PDR Government has 18 ministries',
]

module.exports = deepFreeze({
    welcome,
    fact,
});
