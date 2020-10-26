const express = require('express');
const userController = require('../controllers')
const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
    res.send('OK')
);

router.get('/', (req, res) => {
    console.log('welcome to the node js application.');
    res.send('welcome to the node js application.');
});

router.route('/api/user-view').get(userController.userView);

module.exports = router;