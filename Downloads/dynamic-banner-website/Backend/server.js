const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'banner_db'
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('MySQL connection error:', err);
        throw err;
    }
    console.log('MySQL Connected...');
});

// Get Banner Details
app.get('/api/banner', (req, res) => {
    const sql = 'SELECT * FROM banner WHERE id = 1';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching banner details:', err);
            return res.status(500).json({ error: 'Failed to fetch banner details' });
        }
        res.json(result[0]);
    });
});


app.post('/api/banner', (req, res) => {
    const { description, timer, link, is_visible } = req.body;

    console.log('Received data:', { description, timer, link, is_visible });

   
    const sql = `UPDATE banner SET description = ?, timer = ?, link = ?, is_visible = ? WHERE id = 1`;
    db.query(sql, [description, timer, link, is_visible ? 1 : 0], (err, result) => {
        if (err) {
            console.error('Error updating banner:', err);
            return res.status(500).json({ error: 'Failed to update banner' });
        }
        console.log('Banner updated successfully:', result);
        res.json({ msg: 'Banner updated successfully' });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
