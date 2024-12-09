package es.plantquest.back.service;

import es.plantquest.back.domain.FAQ;
import es.plantquest.back.repository.FAQRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class FAQService {

    @Autowired
    private FAQRepository FAQ_REPOSITORY;

    public List<FAQ> findAll(){ return FAQ_REPOSITORY.findAll(); }
//    public FAQ save(FAQ faq){ return FAQ_REPOSITORY.save(faq); }
    public FAQ one(Long ID){ return FAQ_REPOSITORY.findById(ID).get();}

}
