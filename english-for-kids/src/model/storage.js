import loadData from './service'

export default class Storage {
  constructor() {
    this.game = false;
  }

  async getData(categoriesCallback, cardsCallback, toggleChanged) {
    this.categoriesCallback = categoriesCallback;
    this.cardsCallback = cardsCallback;
    this.toggleChanged = toggleChanged;
    const { categories, cards } = await loadData();
    this.setCategories(categories);
    this.setCards(cards);
  }

  setCategories(categories) {
    if (categories !== this.categories) {
      this.categories = categories;
      this.categoriesCallback();
    }
  }

  setCards(cardsArray) {
    if (cardsArray !== this.cardsArray) {
      this.cardsArray = cardsArray;
      this.cardsCallback();
    }
  }
  setGame(game) {
    if (game !== this.game) {
      this.game = game;
      this.toggleChanged();
    }
  }

  getCardsArray(name) {
    return this.cardsArray.find((e) => e.name === name).cardsArray;
  }
}