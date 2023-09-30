const selectdate=document.getElementById('selectdate');
const btn=document.getElementById('btn');
const apikey='CJlVhtmaSPa1shBMbsJnD9dFomuhm0okUDhehEP3';
const main=document.getElementById("main");

let date;
// async function getheading(date){
//     return 
// }
async function details(result){

    console.log(result.explanation)
    
    // main.innerHTML='';
    // const detail=document.createElement("div");
    // detail.className='detail1'
    // detail.innerHTML=`<h1 class="heading">Picture On ${video.date}</h1>

    // <img class="img"src="${video.media_type}" alt="img Of the Day"/>
    // <p class="para-1">${result.title}</p>

    // <p class="data">${result.explanation}</p>`
    // main.appendChild(detail)
}

async function fetchdate(url){
    const responce= await fetch(url);
    const result=await responce.json();
    console.log(result);
//     let date1=result.date;
//    let heading=await getheading(date1);
    //    let day=result.date;
    //    let  exp=result.explanation;
    //    let img=result.media_type;
    //    let heading=result.title;
       details(result);
      
}

btn.addEventListener('click',(event)=>{
    event.preventDefault();
   date=selectdate.value;
   let url=`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apikey}`
   fetchdate(url)

})