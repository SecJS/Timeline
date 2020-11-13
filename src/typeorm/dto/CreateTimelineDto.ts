import { TimelineMethodEnum } from '../enum/TimelineMethodEnum'

export class CreateTimelineDto {
    name: string

    description?: string

    method: TimelineMethodEnum

    causer_id: string

    causer_type: string

    model_id?: string

    model_type?: string

    properties?: any
}
