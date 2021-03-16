import { Request, Response } from 'express'
import { News } from '../entities/News';



class NewsController {
    async create(req: Request, res: Response) {
        console.log(req.body);
        var { title, content } = req.body;

        const news = new News();
        news.title = title;
        news.content = content;
        await news.save()
        return res.status(201).json(news)
    }

    async update(req: Request, res: Response) {
        const newsId = await News.findOne(req.params.id)

        newsId.title = req.body.title
        newsId.content = req.body.content
        await newsId.save()

        return res.json({"message": "News edited sucessfull"})
    }

    async search(req: Request, res: Response) {
        let querySearch = req.query.query;

        const result = await News.findOne({ 
            where: {
                $all: `${querySearch}`
            }
        })

        return res.json(result)
    }

    async show(req: Request, res: Response) {

        const newsFinder = await News.find();

        return res.json(newsFinder);
    }

    async showId(req: Request, res: Response) {
        const newsId = await News.findOne(req.params.id)

        if(newsId) {
            return res.json(newsId)
        }else {
            return res.status(404).json({"message": "This news no exists"})
        }

        
    }

    async deleteAll(req: Request, res: Response) {
        const getAll = await News.find();
        await News.remove(getAll);

        return res.json(getAll)
    }

    async deleteId(req: Request, res: Response) {
        const getId = await News.findOne(req.params.id)
        await News.remove(getId)

        return res.json({"message": "News removed sucessfull"})
    }
}

module.exports = NewsController;