var socket=io();
console.log('connected');

socket.on('ids',function(data){ 
    document.getElementById('msg').innerHTML='';
    // document.getElementById('chat').innerHTML+="<p class='txt'> <strong> <em>"+data[1].username+ ":</em></strong> "+data[1].message+"</p>"
    
    for (var key in data[0]) {
    if (data[0].hasOwnProperty(key)) {
        if(key===socket.id){
            document.getElementById('msg').innerHTML+='<p> You joined the conversation!</p>';
            // document.getElementById('chat').innerHTML+='<p> '+data[0][key]+' said:'+ data[1].message+'</p>';
        } else{
            document.getElementById('msg').innerHTML+='<p>'+ data[0][key]+' joined the conversation!</p>';
            // document.getElementById('chat').innerHTML+='<p> '+data[2]+' said:'+ data[1].message+'</p>';
        }
    }
}
 
    $("#namebtn").unbind().click(function() {
        
        socket.emit('name',{name:document.getElementById('user').value,message:document.getElementById('message').value});
    });
    
    $("#msgbtn").unbind().click(function() {
        
        socket.emit('chat',{name:document.getElementById('user').value,message:document.getElementById('message').value});
    });
});
socket.on('chat',function(data){
    document.getElementById('chat').innerHTML+="<p class='txt'> <strong> <em>"+data.name+ ":</em></strong> "+data.message+"</p>"
});


























// socket.on('ids',function(data){
//     document.getElementById('msg').innerHTML='';
//     $("#button").unbind().click(function() {
//     socket.emit('name',document.getElementById('username').value);
// });
    
  
                        
        
//     if(data.length===1){
//         document.getElementById('msg').innerHTML='<p>waiting for other players</p>';
//     } else {

//             data.forEach(function(id){
//       if(id!=socket.id){
//             document.getElementById('msg').innerHTML+='<p>'+ id +' joined the game!</p>';
//       }
//     });
//     }
// });