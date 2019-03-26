//author Mithilesh
//#1n2 Create a promise that resolves in 4 seconds and returns "success" string

const promise = new Promise((resolve, reject) => {
	setTimeout(resolve, 5000, 'success');
});


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

const promise1 = Promise.resolve(setTimeout (resolve, 10000, 'suxxess'));
promise.then((result)=>{console.log(result)})


// #4) Catch this error and console log 'Ooops something went wrong'
//Promise.reject('failed')

const err = Promise.reject('failed')
err.catch((error)=>console.log('Ooops something went wrong'));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

newarr = urls.map((url)=>{
	fetch(url).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
});