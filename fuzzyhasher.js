const hashes = {
 xyz1: { x: 10, y: 9, z: 8 },
 xyz2: { x: 10, y: 11, z: 12 },
};

const weights = {
  x: 2,
  y: 1,
  z: 0,
};

function hasher (obj) {
  const weighted = Object.keys(obj).reduce((acc, k) => {
    const n = {};
    n.val = obj[k] + weights[k];
    n.chan = k;
    if (n.val > 255) n.val = 255;
    acc.push(n);
    return acc;
  }, []);
    
    for (let i = 0; i < 2; i++) {
      if (weighted[i].val === weighted[i + 1].val) {
        console.log(weighted[i].chan, weighted[i + 1].chan, 'equal');
        if (weights[weighted[i].chan] < weights[weighted[i + 1].chan]) {
          console.log(`${weighted[i].chan} weight < ${weighted[i + 1].chan}: ${weights[weighted[i].chan] < weights[weighted[i + 1].chan]}`);
          [ weighted[i], weighted[i + 1]] = [ weighted[i + 1], weighted[i]]
        }
      }
    }

    console.log(weighted)

   return weighted
    .map(c => c.chan)
    .join('');
}

console.log(hasher(hashes.xyz2));
