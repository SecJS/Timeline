"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineRepository = void 0;
const Timeline_1 = require("../model/Timeline");
const typeorm_1 = require("typeorm");
let TimelineRepository = class TimelineRepository extends typeorm_1.Repository {
    async getFullTimelines(causer_type, method) {
        return this.find({ causer_type, method });
    }
    async getTimelines(causer_id, method) {
        return this.find({ causer_id, method });
    }
    async getTimeline(causer_id, id) {
        return this.findOne({ where: { causer_id, id } });
    }
    async getTimelineByCauserAndModel(causer_id, model_id) {
        return this.findOne({ where: { causer_id, model_id } });
    }
    async createTimeline(timelineDto) {
        const timeline = await this.create({
            causer_id: timelineDto.causer_id,
            causer_type: timelineDto.causer_type,
            model_id: timelineDto.model_id,
            model_type: timelineDto.model_type,
            name: timelineDto.name,
            description: timelineDto.description,
            method: timelineDto.method,
            properties: JSON.stringify(timelineDto.properties)
        });
        return this.storage(timeline);
    }
    async storage(timeline) {
        return this.save(timeline);
    }
};
TimelineRepository = __decorate([
    typeorm_1.EntityRepository(Timeline_1.Timeline)
], TimelineRepository);
exports.TimelineRepository = TimelineRepository;
//# sourceMappingURL=TimelineRepository.js.map