import errorHandler from '#exceptions/error_handler';
import Schedule from '#models/schedule';
import { scheduleValidator } from '#validators/schedule';
export default class SchedulesController {
    async index({ logger, response }) {
        try {
            const schedules = await Schedule.query();
            return response.json(schedules);
        }
        catch (error) {
            errorHandler(error, response, logger, 'Index Schedule Error');
        }
    }
    async update({ logger, request, response }) {
        try {
            const payload = await request.validateUsing(scheduleValidator);
            const { id } = request.params();
            const schedule = await Schedule.findOrFail(id);
            if (payload.isOpen === true) {
                schedule.merge(payload);
            }
            if (payload.isOpen === false) {
                schedule.isOpen = payload.isOpen;
                schedule.openingTime = null;
                schedule.closingTime = null;
            }
            await schedule.save();
            return response.json({
                success: true,
                message: 'Updated successfully ',
            });
        }
        catch (error) {
            errorHandler(error, response, logger, 'Updating Schedule Error');
        }
    }
}
//# sourceMappingURL=schedules_controller.js.map