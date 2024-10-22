const progressBar = document.querySelector('.progress-bar');
    const startTimeSpan = document.querySelector('.start-time');
    const endTimeSpan = document.querySelector('.end-time');
    
    
    const endTimeInSeconds = 213; 
    
    
    progressBar.addEventListener('input', () => {
    
        const currentTimeInSeconds = (progressBar.value / 100) * endTimeInSeconds;
    
        const minutes = Math.floor(currentTimeInSeconds / 60);
        const seconds = Math.floor(currentTimeInSeconds % 60);
        startTimeSpan.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
        
        endTimeSpan.textContent = '3:33'; 
    });
    const sideBar = document.querySelector('.sidebar');
    const backwordBtn = document.querySelector('.show'); 
    const forwordBtn = document.querySelector('.hide');  
    const installBtn=document.querySelector('.bagde2');
function show(){
    if(sideBar.style.display==='none'){
        sideBar.style.display='block';
        backwordBtn.style.display='block';
        forwordBtn.style.display='none';
        installBtn.style.display='none';
    }
    else{
        sideBar.style.display='none'
        
    }
}
function hide(){
    if(sideBar.style.display==='block'){
        sideBar.style.display='none';
        forwordBtn.style.display='block';
        backwordBtn.style.display='none';
        installBtn.style.display='inline-block';
    }
    else{
        sideBar.style.display='block'
        
    }
}
