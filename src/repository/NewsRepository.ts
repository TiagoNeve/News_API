import { EntityRepository, Repository } from 'typeorm'
import { News } from '../entities/News';

@EntityRepository(News)
class NewsRepository extends Repository<News> {

}

export { NewsRepository }