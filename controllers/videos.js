import Data from './data.js';
import Videos from '../models/dbModel.js';

export const getVideo = async(req,res)=>{
    try{
        res.status(200).send(Data);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getVideo2 = async(req,res)=>{
    try{
        Videos.find({},(err,data)=>{
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(data);
            }
        })
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createVideo = async (req, res)=>{
    const dbVideos = req.body;
    const newVideo = new Videos(dbVideos);
    try{
        await newVideo.save();
        res.status(201).json(newVideo);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}
