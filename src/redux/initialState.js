const initialState = { 
  posts: [
    {
      id: '1',
      title: 'Article title I',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article... full text I.',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe I'
    },

    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article... full text II.',
      publishedDate: new Date('03-03-2022'),
      author: 'John Doe II'
    },

    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article... full text III.',
      publishedDate: new Date('04-04-2022'),
      author: 'John Doe III'
    },

    {
      id: '4',
      title: 'Article title IV',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article... full text IV.',
      publishedDate: new Date('05-04-2022'),
      author: 'John Doe IV'
    },
  ],
};

export default initialState;