module.exports = {
  title: "evoToBetter",
  description: "Share For Fun",
  base: "/Blog/",
  dest: "public",
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    authorAvatar: '/hiker.jpg',
    noFoundPageByTecent: false,
    nav: [
      {text: 'TimeLine', link: '/timeline/', icon: 'reco-date'}
    ],
    blogConfig: {
      category: {
        location: 2,
        text: 'Category'
      },
      tag: {
        location: 3,
        text: 'Tag'
      }
    }
  }
}