func threeSum(nums []int) [][]int {

	result := [][]int{}

    // keyCountMap 数组中的值对应的个数
    var keyCountMap map[int]int /*创建集合 */
    keyCountMap = make(map[int]int,len(nums))

    for i := 0; i < len(nums); i++ {
        
        count, ok := keyCountMap [nums[i]] 
        if ok {
            keyCountMap[nums[i]]=count+1;
        }else{
             keyCountMap[nums[i]]=1;
        }
    }
    // 无重复数组
    newNums := make([]int, 0, len(keyCountMap))

    // 重复数据三元组
    for keyi := range keyCountMap {
        newNums = append(newNums, keyi)
        if keyCountMap[keyi] > 1 {
            // 三个都为0
            if keyi==0 {
                if(keyCountMap[keyi] > 2){
                    result = append(result, append([]int{}, 0, 0, 0)) 
                }
                continue
            }
            // 找出包含重复元素的三元组
            var remain= 0 - keyi * 2
            _, ok := keyCountMap [remain] 
            if ok {               
                result = append(result, append([]int{}, keyi, keyi, remain))
            }

        }
    }
    // 不重复的三元组
    for i := 0; i < len(newNums); i++ {
        for j := i+1; j < len(newNums); j++ {
            var remain = 0-(newNums[i]+newNums[j])
            // 如果有重复元素直接返回
            if remain == newNums[i] || remain == newNums[j] {
                continue
            }
            _, ok := keyCountMap [remain] 
            if ok {

                var b1 bool = true
                // 去除非重复元素的重复三元组
                for k:=0;k<len(result);k++ {
                    if(newNums[i] == result[k][0]){
                        if(newNums[j] == result[k][1] || remain == result[k][1]){
                            b1 = false
                            break
                        }

                    }else if newNums[j] == result[k][0] {
                        if(newNums[i] == result[k][1] || remain == result[k][1]){
                            b1 = false
                            break
                        }

                    }else if remain == result[k][0] {
                        if(newNums[i] == result[k][1] || newNums[j] == result[k][1]){
                            b1 = false
                            break
                        }
                    }
                    
                }

                if b1 {
                    result = append(result, append([]int{}, newNums[i], newNums[j], remain))
                }
                
            }
       
        }
    }
    
    return result;
}

