import axios from 'axios';
import SignUp from '../models/SignUp.js';

var config = {
  method: 'get',
  url: 'https://api.rootnet.in/covid19-in/hospitals/beds',
  headers: { }
};

export const home = async (req, res) => {
    try {
        await axios(config)
        .then((response) => {
            // console.log(response.headers)
            const data = response.data.data.regional;
            res.status(200).send(data);
        })
        .catch((error) => {
            console.log(error);
        });
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createUser = (req, res) => {
    const user = req.body;
    
    const newUser = new SignUp(user);
    try {
        newUser.save();
        res.json(newUser);
    } catch (error) {
        res.json({message: error.message})
    }
}
