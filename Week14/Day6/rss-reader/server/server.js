// server.js (ESM)
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import RSSParser from 'rss-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app = express();
const parser = new RSSParser();
const FEED_URL = 'https://thefactfile.org/feed/';

// View engine + views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false })); // for POSTed form data
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ---- Helpers ----------------------------------------------------
async function fetchPosts() {
  const feed = await parser.parseURL(FEED_URL);

  // Normalize items for templates
  const posts = (feed.items || []).map(item => ({
    title: item.title || '',
    link: item.link || '',
    pubDate: item.pubDate || item.isoDate || '',
    creator: item.creator || item['dc:creator'] || '',
    categories: item.categories || [],
    // Use snippet if available; switch to 'content' if you want full HTML
    content: item.contentSnippet || item.content || ''
  }));

  // Collect distinct categories for dropdowns
  const categories = Array.from(new Set(posts.flatMap(p => p.categories || []))).sort();

  return { posts, categories, feedTitle: feed.title || 'Feed' };
}

// ---- Routes -----------------------------------------------------

// GET / : retrieve all facts and render in index.ejs
app.get('/', async (req, res, next) => {
  try {
    const { posts, feedTitle } = await fetchPosts();
    res.render('pages/index', { posts, feedTitle });
  } catch (err) {
    next(err);
  }
});

// GET /search : render search.ejs with NO posts initially
app.get('/search', async (req, res, next) => {
  try {
    const { categories } = await fetchPosts();
    res.render('pages/search', {
      posts: [],                 // nothing shown initially
      categories,                // still provide options
      selected: { title: '', category: '' }
    });
  } catch (err) {
    next(err);
  }
});

// POST /search/title : filter by title substring (case-insensitive)
app.post('/search/title', async (req, res, next) => {
  try {
    const { title = '' } = req.body;
    const { posts, categories } = await fetchPosts();
    const q = title.trim().toLowerCase();

    const results = q
      ? posts.filter(p => p.title.toLowerCase().includes(q))
      : [];

    res.render('pages/search', {
      posts: results,
      categories,
      selected: { title, category: '' }
    });
  } catch (err) {
    next(err);
  }
});

// POST /search/category : filter by exact category match
app.post('/search/category', async (req, res, next) => {
  try {
    const { category = '' } = req.body;
    const { posts, categories } = await fetchPosts();

    const results = category
      ? posts.filter(p =>
          (p.categories || []).some(c => c.toLowerCase() === category.toLowerCase())
        )
      : [];

    res.render('pages/search', {
      posts: results,
      categories,
      selected: { title: '', category }
    });
  } catch (err) {
    next(err);
  }
});

// 404
app.use((req, res) => res.status(404).send('Not found'));

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Server error');
});

// Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));