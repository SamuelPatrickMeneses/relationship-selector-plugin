const plugin =  require('tailwindcss/plugin');

const nextRules = [];
const lestRules = [];
const brotherRules = [];

const conteiner =  function(){
    'use strict';
    return plugin(
        function({addVariant}){
            conteiner.nextRules.forEach((e) => addVariant('next',`& + ${e}`));
            conteiner.lestRules.forEach((e) => addVariant('lest',`${e} + &`));
            conteiner.brotherRules.forEach((e) => addVariant('brother',`& ~ ${e}`));
        }
    );
};

conteiner.nextRules = nextRules;
conteiner.lestRules = lestRules;
conteiner.brotherRules = brotherRules;

module.exports = conteiner;