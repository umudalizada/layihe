const mongoose = require("mongoose") 
mongoose
	.connect("mongodb+srv://umudd:123@cluster25.gqdoq6a.mongodb.net/tickets?retryWrites=true&w=majority&appName=Cluster25")
	.then(() => {
		console.log("databasa connect");
	}).catch((error)=>console.log(error))