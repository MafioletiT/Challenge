import Test from "../pagemodels/test-page";

/**
 * @author Taís Terezinha Mafioleti
 * @since 06-21-2020
 */
const naMidia = "Na Mídia";

describe("Browse the InMetrics website", () => {
  beforeEach(() => {
    Test.openSite();
  });

  it("Access Na Mídia", () => {
    Test.accessNaMidia();
    Test.validateMessages(Test.getSelectorsTitle("1"), naMidia);
  });

  it("Access random midias", () => {
    Test.accessNaMidia();
    Test.visitMidias(2);
  });
});
