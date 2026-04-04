function start(url){
    window.location.href = `/page/${url}`;               
}
function quit(){
    start('mainPage');
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function leaderboard(){
    start('/leaderBoard');
}