var socket=io();
console.log('connected');

socket.on('ids',function(data){ 
    document.getElementById('msg').innerHTML='';
    
    for (var key in data[0]) {
    if (data[0].hasOwnProperty(key)) {
        if(key===socket.id){
            document.getElementById('msg').innerHTML+='<p> You joined the conversation!</p>';
        } else{
            document.getElementById('msg').innerHTML+='<p>'+ data[0][key]+' joined the conversation!</p>';
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


























