const nameStr = "NONG XUAN THAI";
const words = nameStr.split(" ");
const dob = { d: 3, m: 9, y: 1996 };

const val = (char) => {
    const map = {
        A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9,
        J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9,
        S:1, T:2, U:3, V:4, W:5, X:6, Y:7, Z:8
    };
    return map[char] || 0;
};

const vowels = ['A','E','I','O','U','Y']; // Assuming Y is vowel here for simplicity

const reduce = (n) => {
    if (n === 0) return 0;
    while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
        n = n.toString().split('').reduce((a,b)=>a+parseInt(b),0);
    }
    return n;
};

const bruteForce = () => {
    let allPots = {};
    
    // Day, Month, Year
    allPots['Day'] = reduce(dob.d);
    allPots['Month'] = reduce(dob.m);
    allPots['Year'] = reduce(dob.y);
    allPots['Day+Month'] = reduce(reduce(dob.d) + reduce(dob.m));
    allPots['Day+Year'] = reduce(reduce(dob.d) + reduce(dob.y));
    allPots['Month+Year'] = reduce(reduce(dob.m) + reduce(dob.y));
    allPots['LifePath'] = reduce(reduce(dob.d) + reduce(dob.m) + reduce(dob.y));
    
    // Words properties
    words.forEach((w, idx) => {
        let vSum = 0, cSum = 0, total = 0;
        w.split('').forEach(c => {
            let v = val(c);
            total += v;
            if (vowels.includes(c)) vSum += v;
            else cSum += v;
        });
        allPots[`Word${idx}_Sum`] = reduce(total);
        allPots[`Word${idx}_Vow`] = reduce(vSum);
        allPots[`Word${idx}_Con`] = reduce(cSum);
        allPots[`Word${idx}_FirstL`] = val(w[0]);
        allPots[`Word${idx}_FirstV`] = val(w.split('').find(c=>vowels.includes(c)));
    });

    let fullVow = 0, fullCon = 0, fullSum = 0;
    words.forEach((w, idx) => {
        fullVow += allPots[`Word${idx}_Vow`];
        fullCon += allPots[`Word${idx}_Con`];
        fullSum += allPots[`Word${idx}_Sum`];
    });
    allPots['SoulUrge'] = reduce(fullVow);
    allPots['Personality'] = reduce(fullCon);
    allPots['Destiny'] = reduce(fullSum);
    
    // Combinations of Name and DOB
    allPots['Destiny+LifePath'] = reduce(allPots['Destiny'] + allPots['LifePath']);
    allPots['SoulUrge+LifePath'] = reduce(allPots['SoulUrge'] + allPots['LifePath']);
    allPots['Personality+LifePath'] = reduce(allPots['Personality'] + allPots['LifePath']);
    allPots['Word2_Sum+Day'] = reduce(allPots['Word2_Sum'] + allPots['Day']);
    allPots['Word2_Sum+LifePath'] = reduce(allPots['Word2_Sum'] + allPots['LifePath']);
    allPots['Word2_FirstL'] = allPots['Word2_FirstL'];
    
    // Let's also check first letters of all words sum
    allPots['FirstLettersSum'] = reduce(val(words[0][0]) + val(words[1][0]) + val(words[2][0]));
    allPots['FirstVowelsSum'] = reduce(allPots['Word0_FirstV'] + allPots['Word1_FirstV'] + allPots['Word2_FirstV']);

    // Log the targets
    const targets = {
        'ThaiDo': 3,
        'TuNhien': 3,
        'VuotKho': 4,
        'TuDuy': 8,
        'DongLucTiepCan': 5,
        'NangLucTiepCan': 2,
        'ThaiDoTiepCan': 6
    };

    for (let targetName in targets) {
        let targetValue = targets[targetName];
        console.log(`\n--- TARGET: ${targetName} = ${targetValue} ---`);
        for (let pot in allPots) {
            if (allPots[pot] === targetValue || allPots[pot] === targetValue * 1) { // simple match
                console.log(`Match: ${pot}`);
            }
        }
    }
};

bruteForce();
