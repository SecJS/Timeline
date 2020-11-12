import { TimelineMethodEnum } from '../enum/TimelineMethodEnum'
import { TimelineCauserEnum } from '../enum/TimelineCauserEnum'

export class CreateTimelineDto {
    name: string

    description?: string

    method: TimelineMethodEnum

    causer_id: string

    causer_type: TimelineCauserEnum

    model_id?: string

    model_type?: string

    properties?: any
}
