const header = document.querySelector('.header')

window.addEventListener('scroll', () =>{
    const scrollY = window.scrollY;
    if(scrollY > 120) {
        header.classList.add('active') 
    }
    else{
        header.classList.remove('active') 
    }
})
// const url = 'https://duclux-api.herokuapp.com/api/v1/blogs/'
// async function getData () {
//     const res = await fetch(url)
//     const resJson = await res.json()
//     console.log(resJson);
// }

// getData()