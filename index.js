
function shout(string){
    return string.toUpperCase();
}


function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    const spy = "HELLO"
    console.log(spy);
}

function logWhisper(string){
    const spy = "hello"
    console.log(spy);
}

function sayHiToHeadphonedRoommate(greeting){
    const greeting = "Hello"
   if (greeting === greeting.toLowerCase())
    console.log("I can't hear you!")
   else if (greeting === greeting.toUpperCase())
    console.log("Yes Please!")
}