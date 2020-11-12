import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { TimelineMethodEnum } from '../enum/TimelineMethodEnum'
import { TimelineCauserEnum } from '../enum/TimelineCauserEnum'

@Entity('timelines')
export class Timeline {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column({
        type: 'enum',
        enum: TimelineMethodEnum,
    })
    method: TimelineMethodEnum

    @Column({
        nullable: false
    })
    causer_id: string

    @Column({
        type: 'enum',
        enum: TimelineCauserEnum,
    })
    causer_type: TimelineCauserEnum

    @Column()
    model_id: string

    @Column()
    model_type: string

    @Column()
    properties: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
