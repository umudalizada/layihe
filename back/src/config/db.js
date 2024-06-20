const mongoose = require("mongoose") 
mongoose
	.connect("mongodb+srv://eumud7777:umud123@cluster25.gqdoq6a.mongodb.net/cinema?retryWrites=true&w=majority&appName=Cluster25")
	.then(() => {
		console.log("databasa connect");
	}).catch((error)=>console.log(error))