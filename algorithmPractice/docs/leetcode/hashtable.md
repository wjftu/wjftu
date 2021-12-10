# Hash Table

### [1 Two Sum](1)

~~~java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer,Integer> map=new HashMap<>();
        int[] ret=new int[2];
        for(int i=0;i<nums.length;++i){
            if(map.containsKey(nums[i])){
                ret[0]=i;
                ret[1]=map.get(nums[i]);
                break;
            }
            map.put(target-nums[i],i);
        }
        return ret;
    }
}
~~~