import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import rssParser from 'rss-parser';

let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

  let feed = await parser.parseURL('https://thefactfile.org/feed/');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();