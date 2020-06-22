import messagesTitles from "../fixtures/messagestitle.js";

const baseUrl = "https://www.inmetrics.com.br/";

/**
 * @author Taís Terezinha Mafioleti
 * @since 06-21-2020
 */
class Test {
  /**
   * Open the website
   */
  openSite() {
    cy.visit(baseUrl);
  }

  /**
   * Open the "Na Mídia" tab
   */
  accessNaMidia() {
    cy.contains("Na Mídia").click();
  }

  /**
   * Validates the returned messages
   * @param {String} selector - Selector where the validation message is
   * @param {String} message - Message for validation
   */
  validateMessages(selector, message) {
    cy.get(selector).contains(message);
  }

  /**
   * Method of accessing a media listing item
   * @param {number} position - Dynamic value of position for access
   */
  accessItem(position) {
    cy.get(`:nth-child(${position}) > :nth-child(2) > h3`).click();
  }

  /**
   * Method for returns selector of titles
   * @param {number} h - Dynamic value of position for access
   */
  getSelectorsTitle(h) {
    return `.col-md-12 > h${h}`;
  }

  /**
   * Method for generate random position for validation the medias
   */
  getRandomPosition() {
    return Math.floor(Math.random() * 10 + 1);
  }

  /**
   * Method to search the media title to validate
   * @param {number} position - Dynamic value of position for search title
   */
  getMessage(position) {
    const messages = messagesTitles;
    for (let i in messages) {
      let message = messages[i];
      if (position == i) {
        return message;
      }
    }
  }

  /**
   * Method for visiting some media listed
   * A position is drawn based on the amount of published media
   * Then the media from the selected position is accessed
   * Validates the main page title
   * The media title is also validated
   * @param {number} quantity - Quantity of medias for visit
   */
  visitMidias(quantity) {
    for (let i = 0; i < quantity; i++) {
      const randomPosition = this.getRandomPosition();
      const positionForAccess = randomPosition + 1;
      this.accessItem(positionForAccess);
      this.validateMessages(this.getSelectorsTitle("2"), "Blog");
      this.validateMessages(
        this.getSelectorsTitle("1"),
        this.getMessage(randomPosition)
      );
      if (quantity > 1) {
        this.accessNaMidia();
      }
    }
  }
}

export default new Test();
