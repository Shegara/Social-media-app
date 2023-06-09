const router = require("express").Router()
const Post = require("../models/Post")
const User = require("../models/User");


module.exports = router

//CREATE POST
router.post("/", async (req,res)=>{
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE POST
router.put('/:id', async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await Post.updateOne({$set:req.body})
            res.status(200).json('Post successfully updated')
        } else {
            res.status(403).json('You can update only your posts')
        }
    } catch (err){
        res.status(500).json(err)
    }
})

//DELETE POST 
router.delete('/:id', async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await Post.deleteOne(post)
            res.status(200).json('Post successfully deleted')
        } else {
            res.status(403).json('You can delete only your posts')
        }
    } catch (err){
        res.status(500).json(err)
    }
})

//LIKE OR DISLIKE POST
router.put("/:id/like", async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)) {
            await post.updateOne({$push:{likes:req.body.userId}})
            res.status(200).json('Post has been liked')
        } else {
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json('Post disliked')
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET POST
router.get('/:id', async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})




//GET TIMELINE

router.get("/timeline/:userId", async (req, res) => {
    try {
      const currentUser = await User.findById(req.params.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.status(200).json(userPosts.concat(...friendPosts))
    } catch (err) {
      res.status(500).json(err);
    }
  });



//GET USER'S TIMELINE

router.get("/profile/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username })
        const posts = await Post.find({ userId: user._id})
        res.status(200).json(posts)
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router