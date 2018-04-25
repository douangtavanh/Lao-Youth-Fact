const deepFreeze = require('deepfreeze');

//Craete readable data

//Person
const ThonglounSisoulith = [
    'https://firebasestorage.googleapis.com/v0/b/lao-youth-f819d.appspot.com/o/PM-Thongloun.jpg?alt=media&token=4c664847-eab0-43c5-bbb1-1aa8e6e6267e',
    'H.E. Thongloun Sisoulith',
]

const BounnhangVorachith = [
    'https://firebasestorage.googleapis.com/v0/b/lao-youth-f819d.appspot.com/o/Bounnhang_Vorachith_2016_(cropped).jpg?alt=media&token=f7640d57-4052-43ba-aeb2-6a45806bae21',
    'H.E. Bounnhang Vorachith',
]

const PhankhamViphavanh = [
    'https://firebasestorage.googleapis.com/v0/b/lao-youth-f819d.appspot.com/o/Phankham%20Viphavanh.jpg?alt=media&token=09daa877-a710-4dae-9d22-722a95997cd6',
    'H.E. Phankham Viphavanh',
]

const PanyYathortou = [
    null,
    'H.E. Pany Yathortou',
]

const KaysonePhomvihane = [
    'https://firebasestorage.googleapis.com/v0/b/lao-youth-f819d.appspot.com/o/Kaysone_Phomvihane_1978.jpg?alt=media&token=8915dd5a-bb25-47c1-aab9-3ac9a1a08beb',
    'H.E. Kaysone Phomvihane',
]

const Souphanouvong = [
    'https://firebasestorage.googleapis.com/v0/b/lao-youth-f819d.appspot.com/o/Souphanouvong1978.jpg?alt=media&token=df025f4e-c2ae-42d9-b9a7-17594306ab72',
    'H.E. Souphanouvong',
]

const SaleumxayKommasith = [
    'https://firebasestorage.googleapis.com/v0/b/lao-youth-f819d.appspot.com/o/50%20Mr%20Saleumxay%20Kommasith.jpg?alt=media&token=4136e701-c39c-4d48-946c-c541eae739c4',
    'H.E Saleumxay Kommasith',
]

//Uncategory Date
const LaoPeopleRevolutionaryParty = null;
const NationalArmyDay = null;


//General
const LaoPDRProvices = null;
const NationalFlag = [
    'https://firebasestorage.googleapis.com/v0/b/lao-youth-f819d.appspot.com/o/National%20Flag.png?alt=media&token=cb4e135c-04cb-40fc-a26d-f373dcb893b9',
    'National Flag',
]
const LaoEthnics = null;
const LaoPDR = null;
const LaoPDRArea = null;
const LaoPDRShorted = null;
const LaoPDRGovMinistries = null;


//LPRYU
const LaoYouthUnion = null;
const LaoYouthMember = null;
const LaoJuvenile = null;
const LaoYoungPrioneer = null;
const LPRYUShorted = null;

//ASEAN
const ASEANCountries = null;
const ASEANCountriesEstabished = null;
const ASEANLaoPDRMember = null;
const ASEANEstablish = null;
const ASEANShorted = null;
const ASEANHeadquarters = null;
const ASEAN3Pillars = null;
const ASEANMotto = null;

//SSEAYP
const SSEAYPShorted = null;
const SIGAShorted = null;
const LAOSAAShorted = null;


//Main Data
const images = [
    ThonglounSisoulith[0],
    LaoPDRProvices,
    BounnhangVorachith[0],
    BounnhangVorachith[0],
    PhankhamViphavanh[0],
    PanyYathortou[0],
    LaoPeopleRevolutionaryParty,
    NationalArmyDay,
    LaoYouthUnion,
    KaysonePhomvihane[0],
    Souphanouvong[0],
    LaoYouthMember,
    LaoJuvenile,
    LaoYoungPrioneer,
    NationalFlag[0],
    LaoEthnics,
    LaoPDR,
    SaleumxayKommasith[0],
    ASEANCountries,
    ASEANCountriesEstabished,
    ASEANLaoPDRMember,
    ASEANEstablish,
    ASEANShorted,
    SSEAYPShorted,
    SIGAShorted,
    LPRYUShorted,
    ASEANHeadquarters,
    ASEAN3Pillars,
    ASEANMotto,
    LAOSAAShorted,
    LaoPDRArea,
    LaoPDRShorted,
    LaoPDRGovMinistries,
]

const imagesTitle = [
    ThonglounSisoulith[1],
    LaoPDRProvices,
    BounnhangVorachith[1],
    BounnhangVorachith[1],
    PhankhamViphavanh[1],
    PanyYathortou[1],
    LaoPeopleRevolutionaryParty,
    NationalArmyDay,
    LaoYouthUnion,
    KaysonePhomvihane[1],
    Souphanouvong[1],
    LaoYouthMember,
    LaoJuvenile,
    LaoYoungPrioneer,
    NationalFlag[1],
    LaoEthnics,
    LaoPDR,
    SaleumxayKommasith[1],
    ASEANCountries,
    ASEANCountriesEstabished,
    ASEANLaoPDRMember,
    ASEANEstablish,
    ASEANShorted,
    SSEAYPShorted,
    SIGAShorted,
    LPRYUShorted,
    ASEANHeadquarters,
    ASEAN3Pillars,
    ASEANMotto,
    LAOSAAShorted,
    LaoPDRArea,
    LaoPDRShorted,
    LaoPDRGovMinistries,
]

module.exports = deepFreeze({
    images,
    imagesTitle,
});