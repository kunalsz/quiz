var ans = document.getElementById('btn')
var a_tag = document.getElementById('links')
ans.addEventListener('click',function(){
    let choice = document.getElementById('ans').value 
    console.log(choice)
    if(choice==='1 Player'){
        window.open('1_player/1_player.html')
    }else if(choice==='2 Player'){
        window.open('2_player/2_player.html')
    }
    
})