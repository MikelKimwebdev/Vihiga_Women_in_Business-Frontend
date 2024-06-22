const { Server } = require("socket.io");

const io = new Server({ cors:"http://localhost:3000"});
//online users

let onlineAdmin= [];

io.on("connection", (socket) => {
    console.log("new connection",socket.id);

    socket.on("addAdmin",(adminId)=>{
        !onlineAdmin.some(admin => admin.adminId === adminId) &&
        onlineAdmin.push({
            adminId,
            socketId:socket.id,
        })
        console.log("onlineAdmin",onlineAdmin)
        io.emit("getOnlineAdmin",onlineAdmin)
    })
  socket.on("disconnect",() =>{
    onlineAdmin = onlineAdmin.filter(user=> user.socketId !==socket.id)
    io.emit("getOnlineAdmin",onlineAdmin)
  })
});

io.listen(3001);