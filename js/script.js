const questionnaires = document.querySelectorAll(".questionnaire__wrapper"),
    pacient = document.querySelector("#pacient"),
    modal = document.querySelector('.modal');

const today = document.querySelector('#today');
let date = new Date();
let output = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
today.textContent = output;

const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
        el.style.opacity = 1;
    }, 10);
};

const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
    setTimeout(() => {
        el.style.display = 'none';
    }, timeout);
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function age_group(age) {
    let group;
    if (age < 1) {
        group = 1;
    }
    else if (age >= 1 && age <= 3) {
        group = 2;
    }
    else if (age >= 4 && age <= 7) {
        group = 3;
    }
    else if (age >= 8 && age <= 14) {
        group = 4;
    }
    else if (age > 14) {
        group = 5;
    }

    return group;
} 

const mark = {
    1: {
        age : { 1: {wave : {1 : 3, 2 : 2, 3 : 2, 4 : 2, 5 : 5,} },},
        sex : {
            male : {wave : {1 : 1, 2 : 1, 3 : 1, 4 : 1, 5 : 1}}, 
            female : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        anamnes : {
            1 : {wave : {1 : 1, 2 : 1, 3 : 1, 4 : 1, 5 : 0,}}, 
            0 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 1, }}},
        duration_disease : { 
            1 : { wave : { 1 : 2, 2 : 2, 3 : 2, 4 : 2, 5 : 2, } }, 
            2 : { wave : { 1 : 1, 2 : 1, 3 : 1, 4 : 1, 5 : 1, } }, 
            3 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        comorbid : {
            zhkt : {wave : {1 : 5, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
            immuno : {wave : {1 : 3, 2 : 2, 3 : 0, 4 : 4, 5 : 0,}},
            nevr : {wave : {1 : 2, 2 : 4, 3 : 5, 4 : 5, 5 : 0,}},
            bronch : {wave : {1 : 4, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
            allerg : {wave : {1 : 0, 2 : 5, 3 : 4, 4 : 4, 5 : 0,}},
            endokrin : {wave : {1 : 2, 2 : 0, 3 : 0, 4 : 4, 5 : 0,}},
            autoimmun : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
            onko : {wave : {1 : 0, 2 : 0, 3 : 2, 4 : 0, 5 : 0,}},
            gen : {wave : {1 : 0, 2 : 3, 3 : 3, 4 : 0, 5 : 0,}},
            sss : {wave : {1 : 4, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}}},
        clinic : {
            orvi : {wave : {1 : 0, 2 : 4, 3 : 4, 4 : 4, 5 : 4,}},
            pnevm : {wave : {1 : 0, 2 : 3, 3 : 3, 4 : 2, 5 : 2,}},
            gastro : {wave : {1 : 0, 2 : 2, 3 : 2, 4 : 3, 5 : 3,}},
            kozh : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
            ssf : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
            cereb : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},},
        complications : {
            dn1 : {wave : {1 : 0, 2 : 1, 3 : 1, 4 : 1, 5 : 0,}},
            dn2 : {wave : {1 : 0, 2 : 1, 3 : 1, 4 : 1, 5 : 0,}},
            dn3 : {wave : {1 : 0, 2 : 1, 3 : 1, 4 : 1, 5 : 0,}},
            cns : {wave : {1 : 0,2 : 0,3 : 5,4 : 5,5 : 0,}},
            ps : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            kss : {wave : {1 : 0,2 : 5,3 : 0,4 : 4,5 : 5,}},
            ords : {wave : {1 : 0,2 : 0,3 : 5,4 : 3,5 : 0,}},
            sepsis : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            s_shock : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            pn : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            bo : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            not : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},},
        mvs : {
            1 : {wave : {1 : 0,2 : 4,3 : 0,4 : 0,5 : 0,}}, 
            0 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        kt : {
            kt1 : {wave : {1 : 0,2 : 1,3 : 1,4 : 0,5 : 0,}},
            kt2 : {wave : {1 : 1,2 : 0,3 : 0,4 : 1,5 : 0,}},
            kt3 : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            kt4 : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}}},
        duration_virus : {
            1 : {wave : {1 : 0,2 : 0,3 : 0,4 : 2,5 : 0,}},
            2 : {wave : {1 : 1,2 : 1,3 : 1,4 : 1,5 : 2,}},
            3 : {wave : {1 : 2,2 : 2,3 : 2,4 : 0,5 : 1,}}},
        srb : {
            1 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 1, 5 : 1,}}, 
            0 : { wave : { 1 : 1, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        dimer : {
            1 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 1, 5 : 1,}}, 
            0 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        form : {
            0 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}}, 
            1 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }},
            2 : {wave : {1 : 0, 2 : 2, 3 : 2, 4 : 2, 5 : 2,}}, 
            3 : { wave : { 1 : 0, 2 : 1, 3 : 1, 4 : 1, 5 : 0, }},
            4 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}}},
    }, 
    2: {
        age : {2: {wave : {1 : 1,2 : 1,3 : 1,4 : 1,5 : 4,}},},
        sex : {
            male : {wave : {1 : 1,2 : 1,3 : 1,4 : 1,5 : 1,}},
            female : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}}},
        anamnes : {
            1 : {wave : {1 : 1,2 : 1,3 : 1,4 : 1,5 : 0,}},
            0 : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 1,}}},
        duration_disease : {
            1 : {wave : {1 : 2,2 : 2,3 : 2,4 : 2,5 : 2,}},
            2 : {wave : {1 : 1,2 : 1,3 : 1,4 : 1,5 : 1,}},
            3 : {wave : {1 : 0,2 : 0,3 : 0,4 : 1,5 : 0,}}},
        comorbid : {
            zhkt : {wave : {1 : 4,2 : 0,3 : 0,4 : 0,5 : 0,}},
            immuno : {wave : {1 : 3,2 : 3,3 : 0,4 : 0,5 : 0,}},
            nevr : {wave : {1 : 5,2 : 4,3 : 4,4 : 5,5 : 0,}},
            bronch : {wave : {1 : 3,2 : 0,3 : 0,4 : 0,5 : 0,}},
            allerg : {wave : {1 : 0,2 : 5,3 : 5,4 : 4,5 : 0,}},
            endokrin : {wave : {1 : 0,2 : 2,3 : 3,4 : 3,5 : 0,}},
            autoimmun : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            onko : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            gen : {wave : {1 : 0,2 : 2,3 : 0,4 : 2,5 : 0,}},
            sss : {wave : {1 : 3,2 : 0,3 : 0,4 : 0,5 : 0,}}},
        clinic : {
            orvi : {wave : {1 : 0,2 : 4,3 : 4,4 : 4,5 : 4,}},
            pnevm : {wave : {1 : 0,2 : 3,3 : 3,4 : 3,5 : 1,}},
            gastro : {wave : {1 : 0,2 : 2,3 : 2,4 : 2,5 : 3,}},
            kozh : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
            ssf : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
            cereb : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},},
        complications : {
            dn1 : {wave : {1 : 0,2 : 3,3 : 3,4 : 3,5 : 1,}},
            dn2 : {wave : {1 : 0,2 : 3,3 : 3,4 : 3,5 : 1,}},
            dn3 : {wave : {1 : 0,2 : 3,3 : 3,4 : 3,5 : 1,}},
            cns : {wave : {1 : 0,2 : 0,3 : 0,4 : 5,5 : 0,}},
            ps : {wave : {1 : 0,2 : 0,3 : 0,4 : 3,5 : 0,}},
            kss : {wave : {1 : 0,2 : 5,3 : 5,4 : 3,5 : 5,}},
            ords : {wave : {1 : 0,2 : 4,3 : 0,4 : 4,5 : 0,}},
            sepsis : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            s_shock : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            pn : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            bo : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            not : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}}},
        mvs : {
            1 : {wave : {1 : 0,2 : 5,3 : 0,4 : 0,5 : 0,}}, 
            0 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        kt : {
            kt1 : {wave : {1 : 0,2 : 3,3 : 0,4 : 3,5 : 0,}},
            kt2 : {wave : {1 : 0,2 : 3,3 : 0,4 : 0,5 : 0,}},
            kt3 : {wave : {1 : 0,2 : 0,3 : 0,4 : 3,5 : 0,}},
            kt4 : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}}},
        duration_virus : {
            1 : {wave : {1 : 0,2 : 1,3 : 1,4 : 3,5 : 1,}},
            2 : {wave : {1 : 2,2 : 2,3 : 2,4 : 2,5 : 3,}},
            3 : {wave : {1 : 3,2 : 3,3 : 3,4 : 1,5 : 2,}}},
        srb : {
            1 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 1, 5 : 1,}}, 
            0 : { wave : { 1 : 1, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        dimer : {
            1 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 1, 5 : 1,}}, 
            0 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        form : {
            0 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}}, 
            1 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }},
            2 : {wave : {1 : 0, 2 : 2, 3 : 2, 4 : 2, 5 : 2,}}, 
            3 : { wave : { 1 : 0, 2 : 1, 3 : 1, 4 : 1, 5 : 0, }},
            4 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}}},
    },
    3: {
        age : {3: {wave : {1 : 2,2 : 3,3 : 2,4 : 2,5 : 2,}},},
        sex : {
            male : {wave : {1 : 1,2 : 1,3 : 0,4 : 1,5 : 1,}},
            female : {wave : {1 : 0,2 : 1,3 : 1,4 : 0,5 : 0,}}},
        anamnes : {
            1 : {wave : {1 : 1,2 : 1,3 : 0,4 : 1,5 : 0,}},
            0 : {wave : {1 : 0,2 : 0,3 : 1,4 : 0,5 : 1,}}},
        duration_disease : {
            1 : {wave : {1 : 2,2 : 2,3 : 2,4 : 2,5 : 2,}},
            2 : {wave : {1 : 1,2 : 1,3 : 1,4 : 1,5 : 1,}},
            3 : {wave : {1 : 0,2 : 0,3 : 0,4 : 1,5 : 0,}}},
        comorbid : {
            zhkt : {wave : {1 : 4,2 : 0,3 : 0,4 : 0,5 : 0,}},
            immuno : {wave : {1 : 3,2 : 0,3 : 3,4 : 0,5 : 0,}},
            nevr : {wave : {1 : 5,2 : 4,3 : 5,4 : 5,5 : 0,}},
            bronch : {wave : {1 : 2,2 : 0,3 : 0,4 : 0,5 : 0,}},
            allerg : {wave : {1 : 0,2 : 5,3 : 4,4 : 4,5 : 0,}},
            endokrin : {wave : {1 : 2,2 : 2,3 : 2,4 : 2,5 : 0,}},
            autoimmun : {wave : {1 : 1,2 : 0,3 : 0,4 : 0,5 : 0,}},
            onko : {wave : {1 : 0,2 : 3,3 : 2,4 : 3,5 : 0,}},
            gen : {wave : {1 : 0,2 : 3,3 : 2,4 : 0,5 : 0,}},
            sss : {wave : {1 : 2,2 : 0,3 : 0,4 : 0,5 : 0,}}},
        clinic : {
            orvi : {wave : {1 : 0,2 : 4,3 : 4,4 : 4,5 : 4,}},
            pnevm : {wave : {1 : 0,2 : 3,3 : 2,4 : 3,5 : 0,}},
            gastro : {wave : {1 : 0,2 : 2,3 : 3,4 : 2,5 : 3,}},
            kozh : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
            ssf : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
            cereb : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},},
        complications : {
            dn1 : {wave : {1 : 0,2 : 1,3 : 1,4 : 1,5 : 0,}},
            dn2 : {wave : {1 : 0,2 : 1,3 : 1,4 : 1,5 : 0,}},
            dn3 : {wave : {1 : 0,2 : 1,3 : 1,4 : 1,5 : 0,}},
            cns : {wave : {1 : 0,2 : 4,3 : 4,4 : 0,5 : 0,}},
            ps : {wave : {1 : 0,2 : 3,3 : 0,4 : 4,5 : 0,}},
            kss : {wave : {1 : 0,2 : 4,3 : 5,4 : 5,5 : 5,}},
            ords : {wave : {1 : 0,2 : 3,3 : 0,4 : 4,5 : 0,}},
            sepsis : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            s_shock : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            pn : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            bo : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            not : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}}},
        mvs : {
            1 : {wave : {1 : 0,2 : 5,3 : 4,4 : 0,5 : 0,}}, 
            0 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        kt : {
            kt1 : {wave : {1 : 3,2 : 3,3 : 3,4 : 3,5 : 0,}},
            kt2 : {wave : {1 : 0,2 : 1,3 : 0,4 : 2,5 : 0,}},
            kt3 : {wave : {1 : 0,2 : 2,3 : 2,4 : 1,5 : 0,}},
            kt4 : {wave : {1 : 0,2 : 0,3 : 0,4 : 1,5 : 0,}}},
        duration_virus : {
            1 : {wave : {1 : 1,2 : 3,3 : 1,4 : 3,5 : 2,}},
            2 : {wave : {1 : 2,2 : 2,3 : 2,4 : 1,5 : 3,}},
            3 : {wave : {1 : 3,2 : 1,3 : 3,4 : 2,5 : 2,}}},
        srb : {
            1 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 1, 5 : 1,}}, 
            0 : { wave : { 1 : 1, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        dimer : {
            1 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 1, 5 : 1,}}, 
            0 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        form : {
            0 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}}, 
            1 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }},
            2 : {wave : {1 : 0, 2 : 2, 3 : 2, 4 : 2, 5 : 2,}}, 
            3 : { wave : { 1 : 0, 2 : 1, 3 : 1, 4 : 1, 5 : 0, }},
            4 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}}},
    },
    4: {
        age : {4: {wave : {1 : 5,2 : 4,3 : 4,4 : 4,5 : 3,}},},
        sex : {
            male : {wave : {1 : 1,2 : 1,3 : 0,4 : 0,5 : 1,}},
            female : {wave : {1 : 0,2 : 0,3 : 1,4 : 1,5 : 0,}}},
        anamnes : {
            1 : {wave : {1 : 1,2 : 1,3 : 1,4 : 1,5 : 0,}},
            0 : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 1,}}},
        duration_disease : {
            1 : {wave : {1 : 2,2 : 2,3 : 2,4 : 2,5 : 0,}},
            2 : {wave : {1 : 0,2 : 0,3 : 1,4 : 1,5 : 2,}},
            3 : {wave : {1 : 1,2 : 1,3 : 0,4 : 0,5 : 1,}}},
        comorbid : {
            zhkt : {wave : {1 : 5,2 : 0,3 : 0,4 : 0,5 : 0,}},
            immuno : {wave : {1 : 5,2 : 0,3 : 0,4 : 2,5 : 0,}},
            nevr : {wave : {1 : 5,2 : 5,3 : 4,4 : 5,5 : 0,}},
            bronch : {wave : {1 : 4,2 : 0,3 : 0,4 : 0,5 : 0,}},
            allerg : {wave : {1 : 0,2 : 4,3 : 5,4 : 5,5 : 0,}},
            endokrin : {wave : {1 : 3,2 : 3,3 : 3,4 : 4,5 : 0,}},
            autoimmun : {wave : {1 : 2,2 : 0,3 : 0,4 : 0,5 : 0,}},
            onko : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            gen : {wave : {1 : 0,2 : 2,3 : 2,4 : 0,5 : 0,}},
            sss : {wave : {1 : 4,2 : 0,3 : 0,4 : 0,5 : 0,}},},
        clinic : {
            orvi : {wave : {1 : 0,2 : 4,3 : 4,4 : 4,5 : 4,}},
            pnevm : {wave : {1 : 0,2 : 3,3 : 3,4 : 3,5 : 2,}},
            gastro : {wave : {1 : 0,2 : 2,3 : 2,4 : 2,5 : 3,}},
            kozh : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
            ssf : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
            cereb : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},},
        complications : {
            dn1 : {wave : {1 : 0,2 : 1,3 : 1,4 : 0,5 : 2,}},
            dn2 : {wave : {1 : 0,2 : 1,3 : 1,4 : 0,5 : 2,}},
            dn3 : {wave : {1 : 0,2 : 1,3 : 1,4 : 0,5 : 2,}},
            cns : {wave : {1 : 0,2 : 4,3 : 4,4 : 0,5 : 0,}},
            ps : {wave : {1 : 0,2 : 1,3 : 0,4 : 0,5 : 0,}},
            kss : {wave : {1 : 0,2 : 3,3 : 5,4 : 4,5 : 5,}},
            ords : {wave : {1 : 0,2 : 2,3 : 3,4 : 5,5 : 0,}},
            sepsis : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            s_shock : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            pn : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            bo : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            not : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}}},
        mvs : {
            1 : {wave : {1 : 0,2 : 5,3 : 0,4 : 3,5 : 0,}}, 
            0 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        kt : {
            kt1 : {wave : {1 : 3,2 : 3,3 : 3,4 : 3,5 : 0,}},
            kt2 : {wave : {1 : 2,2 : 2,3 : 2,4 : 2,5 : 0,}},
            kt3 : {wave : {1 : 2,2 : 1,3 : 1,4 : 1,5 : 0,}},
            kt4 : {wave : {1 : 0,2 : 0,3 : 0.5,4 : 0.5,5 : 0,}}},
        duration_virus : {
            1 : {wave : {1 : 1,2 : 1,3 : 1,4 : 3,5 : 1,}},
            2 : {wave : {1 : 2,2 : 3,3 : 2,4 : 2,5 : 3,}},
            3 : {wave : {1 : 3,2 : 2,3 : 3,4 : 1,5 : 2,}}},
        srb : {
            1 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 1, 5 : 1,}}, 
            0 : { wave : { 1 : 1, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        dimer : {
            1 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 1, 5 : 1,}}, 
            0 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        form : {
            0 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}}, 
            1 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }},
            2 : {wave : {1 : 0, 2 : 2, 3 : 2, 4 : 2, 5 : 2,}}, 
            3 : { wave : { 1 : 0, 2 : 1, 3 : 1, 4 : 1, 5 : 0, }},
            4 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}}},
    },
    5: {
        age : {5: {wave : {1 : 4,2 : 5,3 : 5,4 : 5,5 : 2,}}},
        sex : {
            male : {wave : {1 : 0,2 : 0,3 : 1,4 : 0,5 : 0,}},
            female : {wave : {1 : 1,2 : 1,3 : 0,4 : 1,5 : 1,}}},
        anamnes : {
            1 : {wave : {1 : 1,2 : 1,3 : 1,4 : 0,5 : 0,}},
            0 : {wave : {1 : 0,2 : 0,3 : 1,4 : 1,5 : 1,}}},
        duration_disease : {
            1 : {wave : {1 : 0,2 : 0,3 : 1,4 : 2,5 : 2,}},
            2 : {wave : {1 : 2,2 : 1,3 : 2,4 : 1,5 : 0,}},
            3 : {wave : {1 : 1,2 : 2,3 : 0,4 : 0,5 : 1,}}},
        comorbid : {
            zhkt : {wave : {1 : 3,2 : 0,3 : 0,4 : 0,5 : 0,}},
            immuno : {wave : {1 : 4,2 : 1,3 : 0,4 : 1,5 : 0,}},
            nevr : {wave : {1 : 5,2 : 4,3 : 4,4 : 3,5 : 0,}},
            bronch : {wave : {1 : 2,2 : 0,3 : 0,4 : 0,5 : 0,}},
            allerg : {wave : {1 : 0,2 : 5,3 : 5,4 : 4,5 : 0,}},
            endokrin : {wave : {1 : 1,2 : 3,3 : 3,4 : 5,5 : 0,}},
            autoimmun : {wave : {1 : 0.5,2 : 0,3 : 0,4 : 0,5 : 0,}},
            onko : {wave : {1 : 0,2 : 1,3 : 2,4 : 2,5 : 0,}},
            gen : {wave : {1 : 0,2 : 2,3 : 1,4 : 1,5 : 0,}},
            sss : {wave : {1 : 2,2 : 0,3 : 0,4 : 0,5 : 0,}}},
        clinic : {
            orvi : {wave : {1 : 0,2 : 4,3 : 4,4 : 4,5 : 4,}},
            pnevm : {wave : {1 : 0,2 : 3,3 : 3,4 : 3,5 : 2,}},
            gastro : {wave : {1 : 0,2 : 2,3 : 1,4 : 2,5 : 3,}},
            kozh : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
            ssf : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
            cereb : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}},
        },
        complications : {
            dn1 : {wave : {1 : 0,2 : 2,3 : 2,4 : 1,5 : 2,}},
            dn2 : {wave : {1 : 0,2 : 2,3 : 2,4 : 1,5 : 2,}},
            dn3 : {wave : {1 : 0,2 : 2,3 : 2,4 : 1,5 : 2,}},
            cns : {wave : {1 : 0,2 : 5,3 : 5,4 : 0,5 : 0,}},
            ps : {wave : {1 : 0,2 : 0,3 : 2,4 : 5,5 : 0,}},
            kss : {wave : {1 : 0,2 : 3,3 : 4,4 : 5,5 : 0,}},
            ords : {wave : {1 : 0,2 : 4,3 : 3,4 : 5,5 : 0,}},
            sepsis : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            s_shock : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            pn : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            bo : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},
            not : {wave : {1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,}},},
        mvs : {
            1 : {wave : {1 : 0,2 : 3,3 : 0,4 : 0,5 : 0,}}, 
            0 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        kt : {
            kt1 : {wave : {1 : 3,2 : 3,3 : 3,4 : 3,5 : 0,}},
            kt2 : {wave : {1 : 2,2 : 2,3 : 2,4 : 2,5 : 0,}},
            kt3 : {wave : {1 : 2,2 : 2,3 : 1,4 : 1,5 : 0,}},
            kt4 : {wave : {1 : 0,2 : 1,3 : 0.5,4 : 0.5,5 : 0,}}},
        duration_virus : {
            1 : {wave : {1 : 1,2 : 1,3 : 1,4 : 3,5 : 1,}},
            2 : {wave : {1 : 2,2 : 2,3 : 2,4 : 2,5 : 3,}},
            3 : {wave : {1 : 3,2 : 3,3 : 3,4 : 1,5 : 2,}}},
        srb : {
            1 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 1, 5 : 1,}}, 
            0 : { wave : { 1 : 1, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        dimer : {
            1 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 1, 5 : 1,}}, 
            0 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }}},
        form : {
            0 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}}, 
            1 : { wave : { 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, }},
            2 : {wave : {1 : 0, 2 : 2, 3 : 2, 4 : 2, 5 : 2,}}, 
            3 : { wave : { 1 : 0, 2 : 1, 3 : 1, 4 : 1, 5 : 0, }},
            4 : {wave : {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0,}}},
    },
}

let name_p = getRandomIntInclusive(100,300);
let lastname = getRandomIntInclusive(100,300);
pacient.textContent = name_p + "" + lastname;

const pnevmonia = document.querySelector('.virus_pnevm');
const kt = document.querySelector('.kt');
pnevmonia.addEventListener('change', function () {
    timeout = 1000;
    kt.style.opacity = 0;
    kt.style.display = 'flex';
    kt.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
        kt.style.opacity = 1;
    }, 10);
});

const without_kt = document.querySelectorAll('.without_kt');
without_kt.forEach(el => {
    el.addEventListener('change', function () {
        fadeOut(kt,500);
    });
});

function questionnaireSubmit() {
    let age, sex, anamnes, duration_disease, duration_disease_check, comorbid, kt, duration_virus, duration_virus_check, clinic, complications, group, mvs, srb, dimer, form, dimer_check, srb_check;

    if (document.querySelector('#age').value == '' || document.querySelector('input[name="sex"]:checked') == null) {
        let conclusion = 'Заполните все поля';
        let resultModal = document.getElementById("modal__body");
        resultModal.innerText = conclusion;
        fadeIn(modal,500);
    } else {
        age = document.querySelector('#age').value;
        sex = document.querySelector('input[name="sex"]:checked').value;
        anamnes = document.querySelector('input[name="anamnes"]:checked').value;
        duration_disease = document.querySelector('#day').value;
        clinic = document.querySelector('input[name="clinic"]:checked').value;
        complications = document.querySelector('input[name="complications"]:checked').value;
        mvs = document.querySelector('input[name="mvs"]:checked').value;
        srb = document.querySelector('#srb').value.replace(',', ".");
        dimer = document.querySelector('#d-dimer').value.replace(',', ".");
        form = document.querySelector('input[name="form"]:checked').value;

        if (clinic == 'pnevm') {
            kt = document.querySelector('input[name="kt"]:checked').value;
        }
        
        duration_virus = document.querySelector('#day_virus').value;
        comorbid = document.querySelectorAll('input[name="comorbid"]:checked');

        if (duration_disease >= 1 && duration_disease <= 3) {
            duration_disease_check = 1;
        } else if (duration_disease >= 4 && duration_disease <= 7) {
            duration_disease_check = 2;
        } else if (duration_disease >= 8) {
            duration_disease_check = 3;
        }

        if (duration_virus < 5) {
            duration_virus_check = 1;
        } else if (duration_virus >= 5 && duration_virus < 10) {
            duration_virus_check = 2;
        } else if (duration_virus >= 10) {
            duration_virus_check = 3;
        }

        if (srb > 5) {
            srb_check = 1;
        } else {
            srb_check = 0;
        }

        if (dimer > 500) {
            dimer_check = 1;
        } else {
            dimer_check = 0;
        }

        let comorbid_array = [];
        for (i = 0; i < comorbid.length; i++) {
            if (comorbid[i].checked) {
                comorbid_array.push(comorbid[i].value);
            }
        }

        group = age_group(age); 
        let wave_result = [0, 0, 0, 0, 0];

        for (i = 1; i <= wave_result.length; i++) {
            wave_result[i - 1] += mark[group]["age"][group]["wave"][i];
            wave_result[i - 1] += mark[group]["sex"][sex]["wave"][i];
            wave_result[i - 1] += mark[group]["anamnes"][anamnes]["wave"][i];
            wave_result[i - 1] += mark[group]["duration_disease"][duration_disease_check]["wave"][i];
            for (j = 0; j < comorbid_array.length; j++) {
                wave_result[i - 1] += mark[group]["comorbid"][comorbid_array[j]]["wave"][i];
            }
            wave_result[i - 1] += mark[group]["clinic"][clinic]["wave"][i];
            wave_result[i - 1] += mark[group]["complications"][complications]["wave"][i];

            if ((complications.includes('dn')) && (clinic == 'pnevm')) {
                wave_result[i - 1] -= mark[group]["clinic"]["pnevm"]["wave"][i];
            }
            wave_result[i - 1] += mark[group]["mvs"][mvs]["wave"][i];

            if (clinic == 'pnevm') {
                wave_result[i - 1] += mark[group]["kt"][kt]["wave"][i];
            }
            wave_result[i - 1] += mark[group]["duration_virus"][duration_virus_check]["wave"][i];
            wave_result[i - 1] += mark[group]["srb"][srb_check]["wave"][i];
            wave_result[i - 1] += mark[group]["dimer"][dimer_check]["wave"][i];
            wave_result[i - 1] += mark[group]["form"][form]["wave"][i];
        }

        max_wave = Math.max(...wave_result);
        count_max_waves = wave_result.filter(i=>i==max_wave).length;
        wave = '';

        if (count_max_waves > 1) {
            indexes = Array.from(wave_result.entries()).filter(i => i[1] == max_wave).map(i => i[0]);
            for (i = 0; i < indexes.length; i++) {
                wave += ' ' + (indexes[i]+1);
            }
        } else {
            wave = wave_result.indexOf(max_wave) + 1;
        }

        let conclusion = 'Данный пациент относится к ' + wave + ' волне(-ам)';
        let resultModal = document.getElementById("modal__body");
        resultModal.innerText = conclusion;
        fadeIn(modal,500);
    }
}

document
    .querySelector(".modal__btn-close")
    .addEventListener("click", () => fadeOut(modal,500));
document
    .querySelector(".close")
    .addEventListener("click", () => fadeOut(modal,500));
