const seq = [0, 8, 4, 12, 2, 10]

function lis(seq) {
  const valueToMax = {}
  let len = seq.length
  for (let i = 0; i < len; i++) {
    valueToMax[seq[i]] = 1
  }

  let i = len - 1
  let last = seq[i]
  let prev = seq[i - 1]
  while (typeof prev !== 'undefined') {
    let j = i
    while (j < len) {
      last = seq[j]
      if (prev < last) {
        const currentMax = valueToMax[last] + 1
        valueToMax[prev] =
          valueToMax[prev] !== 1
            ? valueToMax[prev] > currentMax
              ? valueToMax[prev]
              : currentMax
            : currentMax
      }
      j++
    }
    i--
    last = seq[i]
    prev = seq[i - 1]
  }

  const lis = []
  i = 1
  while (--len >= 0) {
    const n = seq[len]
    if (valueToMax[n] === i) {
      i++
      lis.unshift(len)
    }
  }

  return lis
}

console.log(lis(seq)) //得到的序列中的位置索引
