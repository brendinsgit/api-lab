const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/cats/fact', async (req, res) => {
    try {
        const catFactResponse = await axios.get('https://catfact.ninja/fact');
        const catFact = catFactResponse.data.fact;
        res.render('cat/fact', { catFact });
    } catch (error) {
        console.error('Error fetching cat fact:', error);
        res.status(500).send('Error fetching cat fact');
    }
});

module.exports = router;
