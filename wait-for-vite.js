function loadReact(){
    //wait for this url
    const url="http://192.168.29.81:3000";
    fetch(url).then( (response)=>{
        if(response.status === 200){
            console.log("React is now ready to serve ....");
            return;
        } else{
            setTimeout(()=>{
                loadReact();
            }, 500);
        }
    }).catch(()=>{
        console.log("react not ready");
        setTimeout(()=>{
            loadReact();
        }, 500);
    })
}
loadReact();