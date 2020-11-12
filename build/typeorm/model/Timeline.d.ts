import { TimelineMethodEnum } from '../enum/TimelineMethodEnum';
import { TimelineCauserEnum } from '../enum/TimelineCauserEnum';
export declare class Timeline {
    id: string;
    name: string;
    description: string;
    method: TimelineMethodEnum;
    causer_id: string;
    causer_type: TimelineCauserEnum;
    model_id: string;
    model_type: string;
    properties: string;
    created_at: Date;
    updated_at: Date;
}
