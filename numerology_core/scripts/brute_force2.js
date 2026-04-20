const nameStr = "HA THU HUONG";
const words = nameStr.split(" ");
const dob = { d: 2, m: 2, y: 1999 };

const val = (char) => {
    const map = {
        A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9,
        J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9,
        S:1, T:2, U:3, V:4, W:5, X:6, Y:7, Z:8
    };
    return map[char] || 0;
};

const vowels = ['A','E','I','O','U','Y'];

const reduce = (n, keepMaster=false) => {
    if (n === 0) return 0;
    while (n > 9) {
        if (keepMaster && (n === 11 || n === 22 || n === 33)) return n;
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
    allPots['Day_NoReduce'] = dob.d;
    allPots['Day+Month'] = reduce(dob.d + dob.m);
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
        allPots[`Word${idx}_Sum`] = reduce(total, true); // Keep master for components? let's standard
        allPots[`Word${idx}_Sum_Reducer`] = reduce(total);
        allPots[`Word${idx}_Vow`] = reduce(vSum);
        allPots[`Word${idx}_Con`] = reduce(cSum);
        allPots[`Word${idx}_FirstL`] = val(w[0]);
        let firstV = w.split('').find(c=>vowels.includes(c));
        allPots[`Word${idx}_FirstV`] = firstV ? val(firstV) : 0;
    });

    allPots['Day+Word0_Sum'] = reduce(dob.d + allPots['Word0_Sum_Reducer']);
    allPots['Day+Word0_Sum_Master'] = reduce(dob.d + allPots['Word0_Sum_Reducer'], true); // For 11
    
    allPots['FirstLettersSum'] = reduce(val(words[0][0]) + val(words[1][0]) + val(words[2][0]));

    // Log the targets
    const targets = {
        'VuotKho': 9,
        'TuDuy': 11,
        'ThaiDoTiepCan': 2
    };

    for (let targetName in targets) {
        let targetValue = targets[targetName];
        console.log(`\n--- TARGET: ${targetName} = ${targetValue} ---`);
        for (let pot in allPots) {
            if (allPots[pot] === targetValue || allPots[pot] === targetValue * 1) { 
                console.log(`Match: ${pot}`);
            }
        }
    }
};

bruteForce();
