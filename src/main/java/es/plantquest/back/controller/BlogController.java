package es.plantquest.back.controller;


import es.plantquest.back.domain.Blog;
import es.plantquest.back.domain.Coleccion;
import es.plantquest.back.domain.Usuario;
import es.plantquest.back.service.BlogService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/v1/api/blogs")
public class BlogController {

    @Autowired
    private BlogService blogService;

    @GetMapping({"","/"})
    public List<Blog> getBlogs() {
        log.info("getBlogs");
        return this.blogService.allBlogs();
    }

    @PostMapping({"","/"})
    public Blog nuevoBlog(@RequestBody Blog blog) {
        return blogService.save(blog);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteblog(@PathVariable("id") Long id) {
        blogService.delete(id);
    }


    @GetMapping("/{tag}")
    public List<Blog> getBlogsByTagPathVariable(@PathVariable String tag) {
        return blogService.findByTag(tag);
    }

    @GetMapping("/{id}")
    public Blog getBlogById(@PathVariable("id") Long id) {
        return blogService.findById(id);
    }

}
