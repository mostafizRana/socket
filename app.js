var express     =require("express"),
    socketIo    =require("socket.io"),
    http        =require("http");

var app         =express(),
    server      =http.Server(app),
    io          =socketIo(server);
    
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));
    


server.listen(process.env.PORT,process.env.IP,function(req,res){
   console.log('server started'); 
});

app.get('/',function(req,res){
   res.render('index'); 
});



        
var socketIds={};
io.on('connect', function (socket) {
    socketIds[socket.id]=socket.id;
    console.log('New connection made added to socketIds:',socketIds);
    io.emit('ids',socketIds);
    
    socket.on('name',function(data){
        socketIds[socket.id]=data.name;
        io.emit('ids',[socketIds,data]);
    });
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });
    socket.on('disconnect', function () {
        delete socketIds[socket.id];
        io.emit('ids',socketIds);
    });
});











