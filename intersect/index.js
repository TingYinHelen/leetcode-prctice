var intersection1 = function(nums1, nums2) {
  const _nums = []
  const len1 = nums1.length
  const len2 = nums2.length
  if (len1 < len2) {
    for (const i of nums1) {
      if (nums2.includes(i) && !_nums.includes(i)) {
        _nums.push(i)
      }
    }
  } else {
    for (const i of nums2) {
      if (nums1.includes(i) && !_nums.includes(i)) {
        _nums.push(i)
      }
    }
  }
  return _nums
};

var set_intersection = function (set1, set2) {
  if (set1.size > set2.size) {
    return set_intersection(set2, set1)
  }
  const intersection = new Set()
  for (const num of set1) {
    if (set2.has(num)) {
      intersection.add(num)
    }
  }
  return [...intersection]
}
var intersection2 = function (nums1, nums2) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  return set_intersection(set1, set2)
}

var intersection3 = function (nums1, nums2) {
  nums1.sort((a,b)=>a-b)
  nums2.sort((a,b)=>a-b)
  const len1 = nums1.length
  const len2 = nums2.length
  let index1 = index2 = 0
  const intersection = []

  while (index1 < len1 && index2 < len2) {
    const num1 = nums1[index1]
    const num2 = nums2[index2]

    if (num1 === num2) {
      if (!intersection.length || num1 !== intersection[intersection.length - 1]) {
        intersection.push(num1)
      }
      index1++
      index2++
    } else if (num1 < num2) {
      index1++
    } else {
      index2++
    }
  }
  return intersection
}

console.log(intersection3([4,9,5], [9,4,9,8,4]));