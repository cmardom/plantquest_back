package es.plantquest.back.controller;

import es.plantquest.back.domain.FAQ;
import es.plantquest.back.domain.Usuario;
import es.plantquest.back.service.FAQService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/v1/api/faq")
public class FAQController {
    @Autowired
    private FAQService faqService;

    @GetMapping({"","/"})
    public List<FAQ> getFaq() {
        log.info("getFAQ");
        return this.faqService.findAll();
    }

    @GetMapping("/{id}")
    public FAQ getFaq(@PathVariable("id") Long id, @RequestBody FAQ faq) {
        log.info("getFAQ> " + id);
        return this.faqService.one(id);
    }
}
