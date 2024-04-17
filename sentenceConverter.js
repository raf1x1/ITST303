import nlp from "compromise";

// Base Class
class SentenceConverter {
  constructor() {
    this.result = "";
  }

  setResult(result) {
    this.result = result;
  }

  getResult() {
    return this.result;
  }

  convert(sentence) {
    // Base conversion method (to be overridden by subclasses)
  }
}

// Inherits from the Base Class
class PastTenseConverter extends SentenceConverter {
  convert(sentence) {
    let doc = nlp(sentence);
    doc.sentences().toPastTense();
    this.setResult(doc.text());
  }
}

class PresentTenseConverter extends SentenceConverter {
  convert(sentence) {
    let doc = nlp(sentence);
    doc.sentences().toPresentTense();
    this.setResult(doc.text());
  }
}

class FutureTenseConverter extends SentenceConverter {
  convert(sentence) {
    let doc = nlp(sentence);
    doc.sentences().toFutureTense();
    this.setResult(doc.text());
  }
}

class NegativeFormConverter extends SentenceConverter {
  convert(sentence) {
    let doc = nlp(sentence);
    doc.sentences().toNegative();
    this.setResult(doc.text());
  }
}

export {
  PastTenseConverter,
  PresentTenseConverter,
  FutureTenseConverter,
  NegativeFormConverter,
};
