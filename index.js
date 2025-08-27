const data=[];
//heart-part
const heart=document.getElementsByClassName('heart');
for(let hearts of heart){
    hearts.addEventListener('click',function(e){
        e.preventDefault();
        const heartCount=parseInt(document.getElementById('heart-count').innerText);
        
       const heartCount2= heartCount+1;
        document.getElementById('heart-count').innerText=heartCount2;
    })
}
// call-part
const callBtn=document.getElementsByClassName('call-btn');
for(let call of callBtn){
    call.addEventListener('click',function(e){
        e.preventDefault();
       const head=call.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
       
        const heading=call.parentNode.parentNode.childNodes[3].childNodes[3].innerText;

         const callNumber=call.parentNode.parentNode.childNodes[3].childNodes[5].innerText;
        
        const coin=parseInt(document.getElementById('coin').innerText);
         const coinLoss=coin-20;

        const date =new Date().toLocaleTimeString();

       if(coinLoss>=0){
         document.getElementById('coin').innerText=coinLoss;

         alert(`📞 calling ${heading} Service ${callNumber}`);

        const cointainer=  document.getElementById('history-cointainer');
       
           const div=  document.createElement('div');
         div.innerHTML=` <div class="flex justify-between gap-12 sm:gap-0 items-center bg-[#FAFAFA]  p-4 my-4">
                <div>
                    <h3 class="font-inter text-xl font-semibold text-[#111111]">${head}</h3>
                    <p class="font-hind-madurai text-[18px] text-[#5C5C5C]">${callNumber}</p>
                </div>
                <p class="font-hind-madurai text-[18px] text-[#111111]">${date}</p>
             </div>`
            
        
       cointainer.appendChild(div);
       
         
       }
        else {
           alert(`You don't have enough coins! you need at least 20 coins to make a call...`)
       }
      
    })
}
//copy- part
const copyCount=document.getElementsByClassName('copy-btn');
for(let copyCounts of copyCount){
    copyCounts.addEventListener('click',function(e){
        e.preventDefault();
        const copy=parseInt(document.getElementById('copy-count').innerText);
        
       const Count2= copy+1;
        document.getElementById('copy-count').innerText=Count2;

        const callNumber=copyCounts.parentNode.parentNode.childNodes[3].childNodes[5].innerText;
         alert(`Copy this number: ${callNumber}`)
         navigator.clipboard.writeText(callNumber);
    })
}

//clear-button
 document.getElementById('clear-btn').addEventListener('click',function(e){
   e.preventDefault();
   document.getElementById('history-cointainer').innerHTML="";
   c
 })