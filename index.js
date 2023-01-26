const plugin =  require('tailwindcss/plugin');

const conteiner =  function(rules){
    'use strict';
    for(let i in rules)
        conteiner[i] = rules[i];
    return plugin(
        function({addVariant}){
            if(conteiner.nex instanceof Array)
                conteiner.nex.forEach((e) => addVariant('nex',`& + ${e}`));
            if(conteiner.sib instanceof Array)
                conteiner.sib.forEach((e) => addVariant('sib',`& ~ ${e}`));
            if(conteiner.chi instanceof Array)
                conteiner.chi.forEach((e) => addVariant('chi',`& > ${e}`));
            if(conteiner.dow instanceof Array)
                conteiner.dow.forEach((e) => addVariant('dow',`& ${e}`));
        }
    );
};

conteiner.nex = [];
conteiner.sib = [];//brother
conteiner.chi = [];
conteiner.dow = [];// downward 

module.exports = conteiner;