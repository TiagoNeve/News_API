import { Request, Response } from 'express'
import { News } from '../entities/News';



class NewsController {
    async create(req: Request, res: Response) {
        console.log(req.body);
        var { title, content } = req.body;

        // const newsRepository = getCustomRepository(NewsRepository);

        // const news = newsRepository.create({
        //     title,
        //     content,
        // })
        // await newsRepository.save(news)

        const news = new News();
        news.title = title;
        news.content = content;
        await news.save()
        return res.status(201).json(news)
    }


    async show(req: Request, res: Response) {
        // const newsRepository = getRepository<News>(NewsRepository)

        // const all = await newsRepository.find({ });

        const newsFinder = await News.find();

        return res.json(newsFinder);
    }
}

module.exports = NewsController;