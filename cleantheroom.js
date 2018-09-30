//Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
//make a function that organizes these into individual array that is ordered.
//For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

// @author - Mithilesh Tipkari

const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

let sorted_arr = arr.sort((a,b)=>a-b);
let answer = [];
let index_count = 0;
let current_element;

function countIt(arg){
	let count = 0;
    sorted_arr.forEach((value) => value == arg ? count++ : count)
	return count;
}

while(index_count < sorted_arr.length){
	current_element = sorted_arr[index_count];
	element_count = countIt(current_element);
	if(element_count == 1){
		answer.push(current_element);
	}
	else{
		var new_arr = [];
		for(i=0; i<element_count; i++){
			console.log('added ', current_element)
			new_arr.push(current_element);
		}
		answer.push(new_arr);	
	}
	index_count = index_count + element_count;
}

console.log('Array after sorting individually in ascending order')
console.log(answer)