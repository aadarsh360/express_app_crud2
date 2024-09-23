const db = require('../config/db');

// Read all users from database
exports.getAllUsers = (req, res) =>{
    const query = 'Select * from user_table2';
    db.execute(query, (err, result)=>{
        if(err) return res.status(500).json({error:err})
        res.json(result);
    })
}

// insert user in database

exports.createUser = (req, res) =>{

    const {name, email, age} = req.body;
    const query = 'Insert into user_table2 (name, email, age) values(?,?,?)';
    db.execute(query, [name, email, age], (err, result)=>{
        if(err) return res.status(500).json({error:err});
        res.json({message:'Create user successfully'});
    });
};

// update user in database
exports.updateUser = (req, res)=>{
    const {id, name, email, age} = req.body;
    const query = 'Update user_table2 set name=?, email=?, age=? where id=?';
    db.execute(query, [name, email, age, id], (err, result)=>{
        if(err) return res.status(500).json({error:err});
        res.json({message:'Update user successfully'});
    });
};

// delete user from database

exports.deleteUser = (req, res) =>{
    const {id} = req.body;
    const query = 'Delete from user_table2 where id=?';
    db.execute(query, [id], (err, result)=>{
        if(err) return res.status(500).json({error:err});
        res.json({message:"Delete user successfully"});
    });
};