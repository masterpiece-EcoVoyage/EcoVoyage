const db = require('../Models/config/knexConfig');
const AccommodationModel = require('../Models/AccommodationModel');

const Firebase = require("../Middleware/FirebaseConfig/FireBaseConfig")
const addAccommodation = async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: "No file provided" });
        }

        const fileName = `${Date.now()}_${file.originalname}`;

        const fileUrl = await Firebase.uploadFileToFirebase(file, fileName);

        const accommodationData = {
            ...req.body,
            imageUrl: fileUrl,
        };

        const result = await AccommodationModel.addAccommodation(accommodationData);

        res.json({ message: 'Accommodation has been added!', data: result[0] });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAccommodations = async (req, res) => {
    try {
        const result = await AccommodationModel.getAccommodations();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};


const getAccommodationsByID = async (req, res) => {
    const accommodation_id = req.params.id;
    try {
        const result = await AccommodationModel.getAccommodationsByID(accommodation_id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateAccommodation = async (req, res) => {
    const accommodation_id = req.params.id;
    const accommodationData = req.body;
    try {
        const result = await AccommodationModel.updateAccommodation(accommodation_id, accommodationData);

        if (!result.length) {
            return res.status(404).json({ error: 'The Accommodation not found' });
        } else {
            res.status(200).json({
                message: 'The Accommodation Updated!',
                data: result[0],
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const markAccommodationAsDeleted = async (req, res) => {
    const accommodation_id = req.params.id;
    try {
        const result = await AccommodationModel.markAccommodationAsDeleted(accommodation_id);

        if (!result) {
            return res.status(404).json({ error: "The Accommodation not found" });
        } else {
            res.status(200).json({
                message: 'The Accommodation Is Marked as Deleted!',
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const addCommentAccomm = async (req, res) => {
    const comment_text = req.body;
    const accommodation_id = req.params.id;
    const user_id = req.user.user_id;

    try {
        const commentResult = await AccommodationModel.addComment(accommodation_id, user_id, comment_text);
        res.json({ message: 'Comment added successfully', comment: commentResult[0] });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const getAccommodationsWithComments = async (req, res) => {
    const accommodation_id = req.params.id;
    try {
        const result = await AccommodationModel.getAccommodationsWithComments(accommodation_id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const bookAccommodation = async (req, res) => {
    const accommodation_id = req.params.id;
    const { address, phone, room_preference, adults, children, date_from, date_to } = req.body;
    const user_id = req.user.user_id;

    try {
        const result = await AccommodationModel.bookAccommodation(accommodation_id, user_id, address, phone, room_preference, adults, children, date_from, date_to);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const getBookAccommodations = async (req, res) => {
    const accommodation_id = req.params.id;
    try {
        const result = await AccommodationModel.getBookAccommodations(accommodation_id);

        if (!result.length) {
            return res.status(404).json({ error: "No Books In this Accommodation !" });
        } else {
            res.json(result);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const getAccommodationsPaginated = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 4;

        const result = await AccommodationModel.getAccommodationsPaginated(page, pageSize);

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

    getAccommodations,

    addAccommodation,

    updateAccommodation,

    markAccommodationAsDeleted,

    getAccommodationsByID,

    addCommentAccomm,

    getAccommodationsWithComments,

    bookAccommodation,

    getBookAccommodations,

    getAccommodationsPaginated

}