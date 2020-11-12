"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeline = void 0;
const typeorm_1 = require("typeorm");
const TimelineMethodEnum_1 = require("../enum/TimelineMethodEnum");
const TimelineCauserEnum_1 = require("../enum/TimelineCauserEnum");
let Timeline = class Timeline {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Timeline.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Timeline.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Timeline.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: TimelineMethodEnum_1.TimelineMethodEnum,
    }),
    __metadata("design:type", String)
], Timeline.prototype, "method", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false
    }),
    __metadata("design:type", String)
], Timeline.prototype, "causer_id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: TimelineCauserEnum_1.TimelineCauserEnum,
    }),
    __metadata("design:type", String)
], Timeline.prototype, "causer_type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Timeline.prototype, "model_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Timeline.prototype, "model_type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Timeline.prototype, "properties", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Timeline.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Timeline.prototype, "updated_at", void 0);
Timeline = __decorate([
    typeorm_1.Entity('timelines')
], Timeline);
exports.Timeline = Timeline;
//# sourceMappingURL=Timeline.js.map