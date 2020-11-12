import { Timeline } from '../model/Timeline';
import { Repository } from 'typeorm';
import { CreateTimelineDto } from '../dto/CreateTimelineDto';
import { TimelineMethodEnum } from '../enum/TimelineMethodEnum';
import { TimelineCauserEnum } from '../enum/TimelineCauserEnum';
export declare class TimelineRepository extends Repository<Timeline> {
    getFullTimelines(causer_type: TimelineCauserEnum, method?: TimelineMethodEnum): Promise<Timeline[]>;
    getTimelines(causer_id: string, method?: TimelineMethodEnum): Promise<Timeline[]>;
    getTimeline(causer_id: string, id: string): Promise<Timeline>;
    getTimelineByCauserAndModel(causer_id: string, model_id: string): Promise<Timeline>;
    createTimeline(timelineDto: CreateTimelineDto): Promise<Timeline>;
    storage(timeline: Timeline): Promise<Timeline>;
}
