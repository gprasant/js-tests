function add(str){
  var nums = str.split(",");
  var sum = 0;
  for (var i= nums.length; i--;) {
    sum += parseInt(nums[i] || 0, 10);
  }
  return sum;
}