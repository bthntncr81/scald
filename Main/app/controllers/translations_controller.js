import Setting from '#models/setting';
import Translation from '#models/translation';
export default class TranslationsController {
    async getByLang({ request, response }) {
        const { lang } = request.params();
        try {
            const translations = await Translation.query().where('code', lang);
            if (!translations.length) {
                return response.json({});
            }
            const obj = {};
            for (const translation of translations) {
                obj[translation.key] = translation.value;
            }
            return response.json(obj);
        }
        catch {
            return response.badRequest({ success: false, message: 'Something went wrong' });
        }
    }
    async createMissingLang({ request, response }) {
        const { lang } = request.params();
        const { key } = request.body();
        try {
            const data = await Translation.query().where('code', lang).andWhere('key', key).first();
            if (!data) {
                await Translation.create({
                    code: lang,
                    key,
                    value: key,
                });
            }
            return response.json({ success: false, message: 'Successfully saved missing keys' });
        }
        catch {
            return response.badRequest({ success: false, message: 'Something went wrong' });
        }
    }
    async getLangPage({ inertia }) {
        const data = await Setting.query().where('key', 'branding').first();
        const langs = data?.value5 || '[]';
        return inertia.render('Admin/Languages/Languages', { langs });
    }
    async saveLangs({ request, response }) {
        const { lotSelector } = request.body();
        try {
            const data = await Setting.query().where('key', 'branding').firstOrFail();
            const newLangs = lotSelector;
            for (const lang of newLangs) {
                const findIndex = await Translation.query().where('code', lang.code).first();
                if (!findIndex) {
                    const translations = await Translation.query().where('code', 'en');
                    await Translation.createMany(translations.map((t) => ({ code: lang.code, key: t.key, value: t.value })));
                }
            }
            data.value5 = JSON.stringify(lotSelector);
            await data.save();
            return response.json({ success: true, message: 'Successfully saved languages' });
        }
        catch {
            return response.badRequest({ success: false, message: 'Something went wrong' });
        }
    }
    async getTranslationsPage({ request, inertia }) {
        const { code } = request.params();
        return inertia.render('Admin/Languages/Translations', { code });
    }
    async getTranslationsApi({ request, response }) {
        const { code } = request.params();
        const { search, page, limit } = request.qs();
        try {
            const data = await Translation.query()
                .where('code', code)
                .if(search, (query) => {
                query.where('key', 'LIKE', `%${search}%`).orWhere('value', 'Like', `%${search}`);
            })
                .orderBy('id', 'desc')
                .paginate(page, limit);
            return response.json(data);
        }
        catch {
            return response.badRequest({ success: false, message: 'Something went wrong' });
        }
    }
    async createTranslations({ request, response }) {
        const { code, key, value } = request.body();
        try {
            await Translation.create({
                code,
                key,
                value,
            });
            return response.json({ success: true, message: 'Successfully created translation' });
        }
        catch {
            return response.badRequest({ success: false, message: 'Something went wrong' });
        }
    }
    async updateTranslations({ request, response }) {
        const { id } = request.params();
        const { key, value } = request.body();
        try {
            const data = await Translation.findOrFail(id);
            data.key = key;
            data.value = value;
            await data.save();
            return response.json({ success: true, message: 'Successfully updated translation' });
        }
        catch {
            return response.badRequest({ success: false, message: 'Something went wrong' });
        }
    }
    async deleteTranslations({ request, response }) {
        const { id } = request.params();
        try {
            const data = await Translation.findOrFail(id);
            await data.delete();
            return response.json({ success: true, message: 'Successfully deleted translation' });
        }
        catch {
            return response.badRequest({ success: false, message: 'Something went wrong' });
        }
    }
}
//# sourceMappingURL=translations_controller.js.map