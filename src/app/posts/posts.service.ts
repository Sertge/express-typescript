import { Post } from '@entity/post'
import { Todo } from '@entity/todo'

export interface IPost{
  description:string,
  url:string,
  createdDate:Date,
}

export const getAllPosts = async(id?:number) => {
  try{
    if(id){
      return await Post.findOne({where:{id:id}})
    }else{
    return await Post.find()}
  }catch(e){
    console.error(e)
  }
}

export const createPost = async(post:IPost)=>{
  try{
    const _newPost=new Post();
    _newPost.description=post.description
    _newPost.createdDate=post.createdDate
    _newPost.url=post.url
    return await _newPost.save()
  }catch(e){console.log(e)}
}

export const updatePost = async (post:{id:number} & IPost )=>{
  try{
    const _foundPost = await Post.findOne({where:{id:post.id}})
    if(!_foundPost) return {message:"Post was not found"}
    if(post.description) _foundPost.description=post.description
    if (post.url) _foundPost.url
    return await _foundPost.save()
  }catch(e){console.log(e)}
}

export const deletePost = async (id:number) => {
  try{
    const _foundPost = await Post.findOne({where:{id:id}})
    if(!_foundPost) return {message:"Post was not found"}
    return await _foundPost.remove()
  }catch(e){console.log(e)}
}