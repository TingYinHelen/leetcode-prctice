var intersect = function(nums1, nums2) {
  nums1.sort((a,b)=>a-b)
  nums2.sort((a,b)=>a-b)

  let index1 = index2 = 0
  const len1 = nums1.length
  const len2 = nums2.length
  const intersect = []

  while(index1 < len1 && index2 < len2) {
    if (nums1[index1] === nums2[index2]) {
      intersect.push(nums1[index1])
      index1++
      index2++
    } else if (nums1[index1] < nums2[index2]) {
      index1++
    } else {
      index2++
    }
  }

  return intersect
};


console.log(intersect([1,2], [1,1]));