import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {environment} from "../../enviroments/enviroment";
import {HttpClient} from "@angular/common/http";
import {Blog} from "../interfaces/blog";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl: string = environment.apiUrl;
  private apiUrl: string =  this.baseUrl + '/blogs';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}


  // @ts-ignore
  getBlogs(): Observable<Blog[]>{

      return this.http.get<Blog[]>(this.apiUrl);


  }
  //
  // getBlogsByTags(tag:string):Observable<Blog[]>{
  //   return this.http.get<Blog[]>(this.apiUrl + "/" + tag);
  //
  // }

  //
  // getBlogById(id:number):Observable<Blog>{
  //   return this.http.get<Blog>(this.baseUrl + "/blogs?id=/" + id);
  // }


  getBlogById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`);
  }

  // saveBlog(blog: Blog): Observable<Blog> {
  //   return this.http.post<Blog>(this.apiUrl, blog);  // POST request for both create and update
  // }

  saveBlog(blog: Blog): Observable<Blog> {
    if (blog.id && blog.id > 0) {
      // Use PUT for updating an existing blog
      return this.http.put<Blog>(`${this.apiUrl}/${blog.id}`, blog);  // Update request
    } else {
      // Use POST for creating a new blog
      return this.http.post<Blog>(this.apiUrl, blog);  // Create request
    }
  }

}
