const plugin =  require('tailwindcss/plugin');

const conteiner =  function(rules){
    'use strict';
    for(let i in rules)
        conteiner[i] = rules[i];
    return plugin(
        function({addVariant}){
            if(conteiner.nex instanceof Array)
                conteiner.nex.forEach((e) => addVariant('nex',`& + ${e}`));
            if(conteiner.bro instanceof Array)
                conteiner.bro.forEach((e) => addVariant('bro',`& ~ ${e}`));
            if(conteiner.son instanceof Array)
                conteiner.son.forEach((e) => addVariant('son',`& > ${e}`));
            if(conteiner.dow instanceof Array)
                conteiner.dow.forEach((e) => addVariant('dow',`& ${e}`));
        }
    );
};

conteiner.nex = [];
conteiner.bro = [];//brother
conteiner.son = [];
conteiner.dow = [];// downward 

module.exports = conteiner;