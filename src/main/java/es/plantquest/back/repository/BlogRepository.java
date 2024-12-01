package es.plantquest.back.repository;

import es.plantquest.back.domain.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BlogRepository extends JpaRepository<Blog, Long> {
    // Custom query to find blogs where tags contain the specified tag
    @Query("SELECT b FROM Blog b WHERE b.tags LIKE %:tag%")
    List<Blog> findBlogsByTagsContains(String tag);}