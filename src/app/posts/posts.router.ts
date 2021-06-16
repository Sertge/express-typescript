import { Body, Controller, Delete, Get, Post, Put, Query, Route, Tags,Path } from 'tsoa';
import {getAllPosts,createPost,updatePost,deletePost, IPost} from './posts.service'

@Tags('Posts')
@Route('/api/posts')
export class postsController extends Controller {
  @Get('/read')
  public async getAllPosts(){
    return {} // get all posts
  }

  @Get('/read/{id}')
  public async readPostWithId(@Path('id') id: number){
    return getAllPosts(id)
  }

  @Post('/create/')
  public async createPost(@Body() body:{description:string,url:string,createdDate:Date}){
  return createPost({description:body.description,url:body.url,createdDate:body.createdDate})}

  @Put('/update')
  public async updatePost(@Body() post:{id:number} & IPost){
    return updatePost(post)
  }
    
  @Delete('/delete/{id}')
  public async deletePost(@Path('id') id:number){
    return deletePost(id)
  }
}