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
       
        const heading=call.parentNode.parentNode.childNodes[3].childNodes[3].innerText;
         const callNumber=call.parentNode.parentNode.childNodes[3].childNodes[5].innerText;
        
        const coin=parseInt(document.getElementById('coin').innerText);
         const coinLoss=coin-20;
       if(coinLoss>=0){
         document.getElementById('coin').innerText=coinLoss;
         alert(`📞 calling ${heading} Service ${callNumber}`)
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