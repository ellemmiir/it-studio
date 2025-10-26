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
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Order = class Order {
    clientId;
    companyId;
    serviceId;
    title;
    status;
    priority;
    brief;
    estimate;
    assignedTo;
    participants;
    files;
    messagesThreadId;
    checklist;
    timeline;
};
exports.Order = Order;
__decorate([
    (0, mongoose_1.Prop)({ required: true, ref: 'User' }),
    __metadata("design:type", String)
], Order.prototype, "clientId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: 'Company' }),
    __metadata("design:type", String)
], Order.prototype, "companyId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, ref: 'Service' }),
    __metadata("design:type", String)
], Order.prototype, "serviceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['new', 'discovery', 'proposal', 'in_progress', 'review', 'done', 'archived', 'lost'], default: 'new' }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: [1, 2, 3], default: 2 }),
    __metadata("design:type", Number)
], Order.prototype, "priority", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], Order.prototype, "brief", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], Order.prototype, "estimate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: 'User' }),
    __metadata("design:type", String)
], Order.prototype, "assignedTo", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: String, ref: 'User' }]),
    __metadata("design:type", Array)
], Order.prototype, "participants", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: String, ref: 'File' }]),
    __metadata("design:type", Array)
], Order.prototype, "files", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: 'Thread' }),
    __metadata("design:type", String)
], Order.prototype, "messagesThreadId", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: Object }]),
    __metadata("design:type", Array)
], Order.prototype, "checklist", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: Object }]),
    __metadata("design:type", Array)
], Order.prototype, "timeline", void 0);
exports.Order = Order = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Order);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map