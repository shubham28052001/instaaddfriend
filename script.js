var arr=[
    {
        name:"@Rounika",
        Image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                           
        desc:"I am from Sagar Institute of research and technology",
        status:"strangers",  
    },
       
    {
        name:"@jahnvi",
        Image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
        desc:"I am from Lakshmi Narayan of Collage and Technology",
        status:"strangers",
    },
    {
        name:"@Pallavi",
        Image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
        desc:"I am from Mau. Azad National Insti. of Technology",
        status:"strangers",
    },
];

function print(){
    var container="";
arr.forEach(function(value, index){
    container +=`<div class="card w-52 p-4 rounded-md bg-zinc-700 text-white flex flex-col justify-center gap-5">
    <div class="img w-10 h-10 bg-red-500 rounded-full overflow-hidden">
    <img class="w-full h-full object-cover"
    src="${value.Image}"
    alt="">
    </div>
    <h2 class="text-2xl">${value.name}</h2>
        <p class="text-md font-bold text-xl opacity-60">${value.desc}</p>
        <button id="${index}" class="btn px-2 py-1 ${value.status==="strangers"?"bg-blue-500": value.status==="request sent"?"bg-yellow-500":"bg-red-500"} rounded-md">${value.status==="strangers"? "Add Friend": value.status==="request sent"? "Request sent":"Remove friend"}</button>
     </div>`
});

document.querySelector(".cards").innerHTML=container;
}
print();


//Event bubbling -- jis par click karna usi par click hoga bahar click karne par count ni hoga

// document.querySelector(".cards").addEventListener("click",function(data){
//     if(data.target.classList.contains("btn")){
//       //   console.log(data.target.id);   //jisme click karenge index value dikhegi
//       //console.log(arr[data.target.id]);   //jisme click karenge uska object aajayega 
//       arr[data.target.id].status="friends";
//     }
//     print();
// });


var timer;
document.querySelector(".cards").addEventListener("click",function(data){
    
    if (arr[data.target.id].status==="strangers"){
        arr[data.target.id].status="request sent";
        
        //math function

        let rnnum =  Math.floor(Math.random()*10)  
         
       //settimeout function

        timer =  setTimeout(function(){
        arr[data.target.id].status="friends";
       print();
        },rnnum*1000);
    }

    
    else{
        arr[data.target.id].status="strangers"
        clearTimeout(timer);
    }
    print();
});



