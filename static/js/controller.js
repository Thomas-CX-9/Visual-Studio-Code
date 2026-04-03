function start(url){
    window.location.href = `/${url}`;               
}
function quit(){
    start('mainPage');
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}