const knex = require('../Models/config/knexConfig');

const activitiesModel = require('../Models/activityQueries');
const getActivities = async (req, res) => {
    try {
        const result = await knex.select('*').from('activities').where({'is_deleted': false });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const getActivitiesByID = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await knex.from('activities').where({ 'activities_id': id, 'is_deleted': false });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const addActivities = async (req, res) => {
    const { title, pricing, availability, type, activity_details } = req.body;
    try {
        
        await knex('activities').insert({ title, pricing, availability, type, activity_details });
        res.json({ message: 'Activity has been added!' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateActivities = async (req, res) => {
    const { id } = req.params;
    const { title, pricing, availability, type, activity_details } = req.body;
    try {
        const result = await knex('activities')
            .where('activities_id', id)
            .update({ title, pricing, availability, type, activity_details });

        if (!result) {
            return res.status(404).json({ error: 'The activity not found' });
        } else {
            res.status(200).json({ message: 'The activity Updated!' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const deleteActivities = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await knex('activities').update({ is_deleted: true }).where("activities_id", id );

        if (!result) {
            return res.status(404).json({ error: 'The Activity not found' });
        } else {
            res.status(200).json({ message: 'The Activity Updated!' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};


const addComment = async (req, res) => {
    const { activities_id, user_id, comment_text } = req.body;

    try {
        const activitiesResult = await knex('activities').where('activities_id', activities_id);

        if (activitiesResult.length === 0) {
            return res.status(404).json({ error: 'activities not found or deleted' });
        }

        const userResult = await knex('users').select('*').where('user_id', user_id);

        if (userResult.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        const commentResult = await knex('comments').insert({ activities_id, user_id, comment_text }).returning('*');

        res.json({ message: 'Comment added successfully', comment: commentResult[0] });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const getActivitiesByID2 = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await knex.from('activities').where('activities_id', id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const getActivitiesPaginated = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 4;

        const result = await activitiesModel.getActivitiesPaginated(page, pageSize);

        if (!result) {
            return res.status(404).json({ error: "No Data !" });
        } else {
            res.json({
                data: result,
                currentPage: page,
                pageSize: pageSize,
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getActivities,

    addActivities,

    updateActivities,

    deleteActivities,

    getActivitiesByID,

    getActivitiesByID2,

    addComment,
    
    getActivitiesPaginated
};
