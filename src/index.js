let mongoClient = require("mongodb").MongoClient;
let express = require("express");
let cors = require('cors');
let conString = 'mongodb://127.0.0.1:27017';
let port = 5500;

let app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//  All get requests ***************

app.get('/admins', (req, res) => {
    mongoClient.connect(conString).then((clientObj) => {
        let database = clientObj.db("reactdb");
        database.collection("tbladmin").find({}).toArray().then((docs) => {
            if (docs[0] === undefined) {
                res.status(200).json({ message: 'No admin exists, please register as an admin', error: false, data: [] });
            } else {
                res.status(200).json({ message: 'Admins sent.', error: false, data: docs });
            }
            res.end();
        }).catch((error) => {
            console.log(error);
            res.status(404).json({ message: 'Error Occurs', error: true, errorMessage: error });
            res.end();
        }).finally(() => {
            clientObj.close();
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: true, errorMessage: error });
        res.end();
    });
});


app.get('/users', (req, res) => {
    mongoClient.connect(conString).then((clientObj) => {
        let database = clientObj.db("reactdb");
        database.collection("tbluser").find({}).toArray().then((docs) => {
            if (docs[0] === undefined) {
                res.status(200).json({ message: 'No use exists, please register as a user', error: false, data: [] });
            } else {
                res.status(200).json({ message: 'User sent.', error: false, data: docs });
            }
            res.end();
        }).catch((error) => {
            console.log(error);
            res.status(404).json({ message: 'Error Occurs', error: true, errorMessage: error });
            res.end();
        }).finally(() => {
            clientObj.close();
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: true, errorMessage: error });
        res.end();
    });
});


app.get('/user/:id', (req, res) => {
    mongoClient.connect(conString).then((clientObj) => {
        let id = req.params.id;
        let database = clientObj.db("reactdb");
        database.collection("tbluser").find({ UserId: id }).toArray().then((docs) => {
            if (docs[0] === undefined) {
                res.status(200).json({ message: `No User exist of id :${id}`, error: false, data: [] });
            } else {
                res.status(200).json({ message: 'User sent.', error: false, data: docs });
            }
            res.end();
        }).catch((error) => {
            console.log(error);
            res.status(404).json({ message: 'Error Occurs', error: true, errorMessage: error });
            res.end();
        }).finally(() => {
            clientObj.close();
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: true, errorMessage: error });
        res.end();
    });
});


app.get('/categories', (req, res) => {
    mongoClient.connect(conString).then((clientObj) => {
        let database = clientObj.db("reactdb");
        database.collection("tblcategories").find({}).toArray().then((categories) => {
            if (categories[0] === undefined) {
                res.status(200).json({ message: 'No category found', error: false, data: [] });
            } else {
                res.status(200).json({ message: 'Category sent.', error: false, data: categories });
            }
            res.end();
        }).catch((error) => {
            console.log(error);
            res.status(404).json({ message: 'Error Occurs', error: true, errorMessage: error });
            res.end();
        }).finally(() => {
            clientObj.close();
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: true, errorMessage: error });
        res.end();
    });
});

app.get('/category/:id', (req, res) => {
    mongoClient.connect(conString).then((clientObj) => {
        let id = parseInt(req.params.id);

        let database = clientObj.db("reactdb");
        database.collection("tblcategories").find({ Category_Id: id }).toArray().then((docs) => {
            if (docs[0] === undefined) {
                res.status(200).json({ message: `No Category exist of id : ${id}`, error: false, data: [] });
            } else {
                res.status(200).json({ message: `Category sent of id :${id}`, error: false, data: docs });
            }
            res.end();
        }).catch((error) => {
            console.log(error);
            res.status(404).json({ message: 'Error Occurs', error: true, errorMessage: error });
            res.end();
        }).finally(() => {
            clientObj.close();
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: true, errorMessage: error });
        res.end();
    });
});

app.get('/videos', (req, res) => {
    mongoClient.connect(conString).then((clientObj) => {
        let database = clientObj.db("reactdb");

        database.collection("tblvideos").find({}).toArray().then((videos) => {
            if (videos[0] === undefined) {
                res.status(200).json({ message: "No video found", error: false, data: [] });
            } else {
                res.status(200).json({ message: "Videos sent.", error: false, data: videos });
            }
            res.end();
        }).catch((error) => {
            console.log(error);
            res.status(404).json({ message: 'Error Occuring', error: true, errorMessage: error });
            res.end();
        }).finally(() => {
            clientObj.close();
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: true, errorMessage: error });
        res.end();
    });
});



app.get('/video/:id', (req, res) => {
    mongoClient.connect(conString).then((clientObj) => {
        let id = parseInt(req.params.id);
        let database = clientObj.db("reactdb");

        database.collection("tblvideos").find({ VideoId: id }).toArray().then((doc) => {
            if (doc[0] === undefined) {
                res.status(200).json({ message: `No Video exists with id : ${id}`, error: false, data: [] });
            } else {
                res.status(200).json({ message: `Video sent of id :${id}`, error: false, data: doc });
            }
            res.end();
        }).catch((error) => {
            console.log(error);
            res.status(404).json({ message: 'Error Occuring', error: true, errorMessage: error });
            res.end();
        }).finally(() => {
            clientObj.close();
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: true, errorMessage: error });
        res.end();
    })
});



// POST methos *************************

app.post("/adduser", (req, res) => {
    let user = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Email: req.body.Email,
        Phone: parseInt(req.body.Phone),
        Password: req.body.Password
    };

    mongoClient.connect(conString).then((clientObj) => {
        let database = clientObj.db('reactdb');
        database.collection("tbluser").insertOne(user).then(() => {
            res.status(200).json({ message: `${user.UserName} added as a user.`, error: false });
            res.end();
        }).catch((error) => {
            res.status(404).json({ message: `Error occuring in adding user ${user.UserName}`, error: true, errorMessage: error });
            res.end();
        }).finally(() => {
            clientObj.close();
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).send(`Server Error`);
        res.end();
    });
});



app.post("/addvideo", (req, res) => {
    let video = {
        VideoId: parseInt(req.body.VideoId),
        Title: req.body.Title,
        Url: req.body.Url,
        Likes: parseInt(req.body.Likes),
        Comments: parseInt(req.body.Comments),
        Category_Id: parseInt(req.body.Category_Id)
    };

    mongoClient.connect(conString).then((clientObj) => {
        let database = clientObj.db('reactdb');
        database.collection("tblvideos").insertOne(video).then(() => {
            res.status(200).json({ message: `${video.VideoId} Video added.`, error: false });
            res.end();
        }).catch((error) => {
            res.status(404).json({ message: `Error occuring in adding video ${video.VideoId}`, error: true, errorMessage: error });
            res.end();
        }).finally(() => {
            clientObj.close();
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).send(`Server Error`);
        res.end();
    });
});

// Edit method        *******

// app.put('/editvideo/:id',(req, res)=>{
//     let id = parseInt(req.params.id);

//     let newData = {
//         Title : req.body.Title,
//         Url: req.body.Url,
//         Comments:parseInt(req.body.Comments),
//         Likes: parseInt(req.body.Likes),
//         Category_Id:parseInt(req.body.Category_Id)
//     }

//     mongoClient.connect(conString).then((clientObj)=>{
//         let database = clientObj.db("reactdb");
//         // Find the document with that ID and update it with new data
//         database.collection("tblvideos").updateOne({VideoId:id},newData).then(()=>{
//             res.status(200).json({message:`${id} Video updated.`, error:false});
//             res.end();
//         }).catch((error)=>{
//             res.status(400).json({message:"Error updating.", error:true});
//             res.end();
//         });
//     }).catch((error)=>{
//         console.log(error);
//         res.status(500).send(`Server Error`);
//         res.end();
//     })
// })


app.put('/editvideo/:id', (req, res) => {
    let id = parseInt(req.params.id);

    let newData = {
        Title: req.body.Title,
        Url: req.body.Url,
        Comments: parseInt(req.body.Comments),
        Likes: parseInt(req.body.Likes),
        Category_Id: parseInt(req.body.Category_Id)
    }

    mongoClient.connect(conString)
        .then((clientObj) => {
            let database = clientObj.db("reactdb");
            // Find the document with that ID and update it with new data
            database.collection("tblvideos").updateOne({ VideoId: id }, { $set: newData })
                .then(() => {
                    res.status(200).json({ message: `${id} Video updated.`, error: false });
                    res.end();
                })
                .catch((error) => {
                    res.status(400).json({ message: "Error in updating.", error: true });
                    res.end();
                })
                .finally(() => {
                    clientObj.close(); // Close the MongoDB connection when done
                });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(`Server Error`);
            res.end();
        });
});


// Delete Method ***********************

app.delete('/deletevideo/:id', (req, res) => {
    let id = parseInt(req.params.id);
    mongoClient.connect(conString).then((clientObj) => {
        let database = clientObj.db("reactdb");
        database.collection('tblvideos').findOneAndDelete({ "VideoId": id }).then((result) => {
            res.status(200).json({message:`${id} Video Deleted`, error:false});
        }).catch((error)=>{
            res.status(401).json({message:`Unable to delete video ${id}`, error:true});
        }).finally(()=>{
            clientObj.close();
        })
    }).catch((error)=>{
        console.log(error);
        res.status(500).json({message:"Internal server error", error:true, errorMessage:error});
    });
});



app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});