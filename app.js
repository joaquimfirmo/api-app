const express = require('express');
const app = express();
const port = 3000;
app.use('/videos', express.static(__dirname + '/videos'));

app.get('/', (req, res) => {
  res.send('Hello Wolrd');
});

app.get('/videos', (req, res) => {
  res.json([
    {
      title: 'Cachoeira 1',
      link: 'http://localhost:3000/videos/nature.mp4',
    },
    {
      title: 'Cachoeira 2',
      link: 'http://localhost:3000/videos/nature2.mp4',
    },
    {
      title: 'Rio',
      link: 'http://localhost:3000/videos/rio.mp4',
    },
    {
      title: 'BMW Mini',
      link: 'http://localhost:3000/videos/car-1.mp4',
    },
    {
      title: 'Lamborghini 1',
      link: 'http://localhost:3000/videos/labo-1.mp4',
    },
    {
      title: 'Lamborghini 2',
      link: 'http://localhost:3000/videos/car-2.mp4',
    },
  ]);
});
app.listen(port, () => {
  console.log(`Api rodando na porta:${port}`);
});
