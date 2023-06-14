function twoSum(nums: number[], target: number): number[] {
  let valuesMap: Record<number, number> = {};

  for (let index in nums) {
    if (valuesMap[nums[index]] !== undefined) {
      return [valuesMap[nums[index]], Number(index)];
    }

    let complement = target - nums[index];
    valuesMap[complement] = Number(index);
  }

  return [];
}
