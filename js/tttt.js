let wave1 = 0;
let wave2 = 0;
let wave3 = 0;
let wave4 = 0;
let wave5 = 0;

function age_structure (group) {
    switch (group) {
        case 1:
            wave5+=3;
            wave4+=2;
            wave3+=1;
            break;

        case 2:
            wave5+=3;
            wave4+=2;
            wave3+=1;
            break;

        case 3:
            wave2+=2;
            wave4+=3;
            wave5+=1;
            break;

        case 4:
            wave1+=3;
            wave2+=2;
            wave5+=1;
            break;

        case 5:
            wave3+=3;
            wave2+=2;
            wave1+=1;
            wave4+=1;
            break;
    }
}

function sex_structure (group, sex) {
    switch (group) {
        case 1:
            if (sex == 'male') {
                wave1++;
                wave2++;
                wave3++;
                wave4++;
                wave5++;
            }
            break;

        case 2:
            if (sex == 'male') {
                wave1++;
                wave2++;
                wave3++;
                wave4++;
                wave5++;
            }
            break;

        case 3:
            if (sex == 'male') {
                wave1++;
                wave2++;
                wave4++;
                wave5++;
            } else {
                wave2++;
                wave3++;
            }
            break;

        case 4:
            if (sex == 'male') {
                wave1++;
                wave2++;
                wave5++;
            } else {
                wave3++;       
                wave4++;
            }
            break;

        case 5:
            if (sex == 'male') {
                wave3++;
            } else {
                wave1++;
                wave2++;
                wave5++;      
                wave4++;
            }
            break;
    }
}

function anamnes_check (group, anamnes) {
    switch (group) {
        case 1:
            if (anamnes == 1) {
                wave1++;
                wave2++;
                wave3++;
                wave4++;
            } else {
                wave5++;
            }
            break;

        case 2:
            if (anamnes == 1) {
                wave1++;
                wave2++;
                wave3++;
                wave4++;
            } else {
                wave5++;
            }
            break;

        case 3:
            if (anamnes == 1) {
                wave1++;
                wave2++;
                wave4++;
            } else {
                wave3++;
                wave5++;
            }
            break;

        case 4:
            if (anamnes == 1) {
                wave1++;
                wave2++;
                wave3++;
                wave4++;
            } else {
                wave5++;
            }
            break;

        case 5:
            if (anamnes == 1) {
                wave1++;
                wave2++;
                wave3++;
                wave4++;
            } else {
                wave3++;
                wave5++;
            }
            break;
    }
}

function duration_disease_check (group, duration_disease) {
    switch (group) {
        case 1:
            if (duration_disease >= 1 && duration_disease <= 3) {
                wave1+=3;
                wave2+=3;
                wave3+=3;
                wave4+=3;
                wave5+=3;
            } else if (duration_disease >= 4 && duration_disease <= 7) {
                wave1+=2;
                wave2+=2;
                wave3+=2;
                wave4+=2;
                wave5+=2;
            } else if (duration_disease > 8) {
                wave1++;
                wave2++;
                wave3++;
                wave4++;
                wave5++;
            }
            break;

        case 2:
            if (duration_disease >= 1 && duration_disease <= 3) {
                wave1+=3;
                wave2+=3;
                wave3+=3;
                wave4+=3;
                wave5+=3;
            } else if (duration_disease >= 4 && duration_disease <= 7) {
                wave1+=2;
                wave2+=2;
                wave3+=2;
                wave4+=2;
                wave5+=2;
            } else if (duration_disease > 8) {
                wave1++;
                wave2++;
                wave3++;
                wave4+=2;
                wave5++;
            }
            break;

        case 3:
            if (duration_disease >= 1 && duration_disease <= 3) {
                wave1+=3;
                wave2+=3;
                wave3+=3;
                wave4+=3;
                wave5+=3;
            } else if (duration_disease >= 4 && duration_disease <= 7) {
                wave1+=2;
                wave2+=2;
                wave3+=2;
                wave4+=2;
                wave5+=2;
            } else if (duration_disease > 8) {
                wave1++;
                wave2++;
                wave3++;
                wave4+=2;
                wave5++;
            }
            break;

        case 4:
            if (duration_disease >= 1 && duration_disease <= 3) {
                wave1+=3;
                wave2+=3;
                wave3+=3;
                wave4+=3;
                wave5+=3;
            } else if (duration_disease >= 4 && duration_disease <= 7) {
                wave1++;
                wave2++;
                wave3+=2;
                wave4+=2;
                wave5+=2;
            } else if (duration_disease > 8) {
                wave1+=2;
                wave2+=2;
                wave3++;
                wave4++;
                wave5++;
            }
            break;

        case 5:
            if (duration_disease >= 1 && duration_disease <= 3) {
                wave1++;
                wave2++;
                wave3+=2;
                wave4+=3;
                wave5+=3;
            } else if (duration_disease >= 4 && duration_disease <= 7) {
                wave1+=3;
                wave2+=2;
                wave3+=3;
                wave4+=2;
                wave5++;
            } else if (duration_disease > 8) {
                wave1+=2;
                wave2+=3;
                wave3++;
                wave4++;
                wave5+=2;
            }
            break;
    }
}

function clear () {
    wave1 = 0;
    wave2 = 0;
    wave3 = 0;
    wave4 = 0;
    wave5 = 0;
}

function comorbid (group, comorbid) {
    switch (group) {
        case 1:
            switch (comorbid) {

            }
            break;

        case 2:
            wave5+=3;
            wave4+=2;
            wave3+=1;
            break;

        case 3:
            wave2+=2;
            wave4+=3;
            wave5+=1;
            break;

        case 4:
            wave1+=3;
            wave2+=2;
            wave5+=1;
            break;

        case 5:
            wave3+=3;
            wave2+=2;
            wave1+=1;
            wave4+=1;
            break;
    }
}