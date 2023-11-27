const { Router } = require('express');
const activitiesController = require('../controllers/activities-controller');
const router = Router();
const verifyJWT = require('../Middleware/VerifyJWT');


router.get('/getActivities', activitiesController.getActivities);

router.post('/addActivities',verifyJWT.authorize([2]), activitiesController.addActivities);

router.put('/updateActivities/:id', verifyJWT.authorize([2]),activitiesController.updateActivities);

router.put('/deleteActivities/:id', verifyJWT.authorize([2]),activitiesController.deleteActivities);

router.get('/getActivitiesByID/:id', activitiesController.getActivitiesByID);

router.post('/addCommentAC', verifyJWT.authorize([1 , 2]),activitiesController.addComment);

router.get('/getAccommodationsByID2AC/:id', activitiesController.getActivitiesByID2);

router.get('/getActivitiesPaginated', activitiesController.getActivitiesPaginated); //


module.exports = router;
