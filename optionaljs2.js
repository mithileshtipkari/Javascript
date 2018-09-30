//Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// @author - Mithilesh Tipkari

const arr = [1, "2", "3", 2]

let sorted_arr = arr.sort();
let answer = [];
let index_count = 0;
let current_element;
let num_arr = [];
let str_arr = [];

while(index_count < sorted_arr.length){
	current_element = sorted_arr[index_count];
	if("number" == typeof(current_element)){
		num_arr.push(current_element);
	}
	else{
		str_arr.push(current_element);	
	}
	index_count++;
}

answer.push(num_arr, str_arr);

console.log('Array after sorting num and str in ascending order')
console.log(answer)