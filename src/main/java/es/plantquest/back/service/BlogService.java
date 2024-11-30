package es.plantquest.back.service;

import es.plantquest.back.domain.Blog;
import es.plantquest.back.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {
    @Autowired
    private BlogRepository blogRepository;

    public List<Blog> allBlogs(){
        return blogRepository.findAll();
    }

    public Blog save(Blog blog){
        return blogRepository.save(blog);
    }

    public void delete(Long id){
        blogRepository.deleteById(id);
    }

    public Blog findById(Long id){
        return blogRepository.findById(id).get();
    }

    public List<Blog> findByTag(String tag){
        return blogRepository.findBlogsByTagsContains(tag);
    }


}
