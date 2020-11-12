import { Timeline } from '../model/Timeline'
import { EntityRepository, Repository } from 'typeorm'
import { CreateTimelineDto } from '../dto/CreateTimelineDto'
import { TimelineMethodEnum } from '../enum/TimelineMethodEnum'
import { TimelineCauserEnum } from '../enum/TimelineCauserEnum'

@EntityRepository(Timeline)
export class TimelineRepository extends Repository<Timeline> {
  public async getFullTimelines(
    causer_type: TimelineCauserEnum,
    method?: TimelineMethodEnum,
  ): Promise<Timeline[]> {
    return this.find({ causer_type, method })
  }

  public async getTimelines(
    causer_id: string,
    method?: TimelineMethodEnum,
  ): Promise<Timeline[]> {
    return this.find({ causer_id, method })
  }

  public async getTimeline(causer_id: string, id: string): Promise<Timeline> {
    return this.findOne({ where: { causer_id, id } })
  }

  public async getTimelineByCauserAndModel(
    causer_id: string,
    model_id: string,
  ): Promise<Timeline> {
    return this.findOne({ where: { causer_id, model_id } })
  }

  public async createTimeline(
    timelineDto: CreateTimelineDto,
  ): Promise<Timeline> {
    const timeline = await this.create({
      causer_id: timelineDto.causer_id,
      causer_type: timelineDto.causer_type,
      model_id: timelineDto.model_id,
      model_type: timelineDto.model_type,
      name: timelineDto.name,
      description: timelineDto.description,
      method: timelineDto.method,
      properties: JSON.stringify(timelineDto.properties)
    })

    return this.storage(timeline)
  }

  public async storage(timeline: Timeline): Promise<Timeline> {
    return this.save(timeline)
  }
}
