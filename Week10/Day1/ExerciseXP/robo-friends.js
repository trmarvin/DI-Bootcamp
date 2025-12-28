const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];

    // --- DOM hooks ---
    const grid = document.getElementById('grid');
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
        const list = filterRobots(searchInput.value);
        render(list);
    });

    // --- Rendering the robot cards ---
    function createCard({name, email, image}) {
      const card = document.createElement('article');
      card.className = 'card';
      card.tabIndex = 0;

      const img = document.createElement('img');
      img.src = image;
      img.alt = `${name} robot avatar`;
      img.loading = 'lazy';

      const h3 = document.createElement('h3');
      h3.className = 'name';
      h3.textContent = name;

      const p = document.createElement('p');
      p.className = 'email';
      p.textContent = email;

      card.append(img, h3, p);
      return card;
    }

    function render(list){
      grid.replaceChildren(...list.map(createCard));
    }

    // --- Search / Filter ---
    function filterRobots(query){
      const q = query.trim().toLowerCase();
      if(!q) return robots;
      return robots.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.username.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q)
      );
    }

    // initial render
    render(robots);
