const db = require('../Models/config/knexConfig');

const addFlight = async (flightsData) => {
    try {
        return await db('flights')
            .insert(flightsData)
            .returning('*');
    } catch (err) {
        console.error(err);
        throw new Error('Error adding Flights');
    }
};

const getFlights = async () => {
    try {
        return await db
            .select('*')
            .from('flights')
            .where({
                is_deleted: false,
            })
    } catch (err) {
        console.error(err);
        throw new Error('Error fetching Flights');
    }
};


const softDeleteFlights = async (flights_id) => {
    try {
        return await db('flights')
            .where({ flights_id: flights_id })
            .update({ is_deleted: true });
    } catch (err) {
        console.error(err);
        throw new Error('Error marking accommodation as deleted');
    }
};


const updateFlight = async (flights_id, flightsData) => {
    try {
        return await db('flights')
            .where({ flights_id: flights_id })
            .update(flightsData)
            .returning('*');
    } catch (err) {
        console.error(err);
        throw new Error('Error updating Flight');
    }
};


module.exports = {
    addFlight,
    getFlights,
    softDeleteFlights,
    updateFlight
}