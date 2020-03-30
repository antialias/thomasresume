const os = require('os')
const fs = require('fs')
const skipWords = fs
  .readFileSync('allowed-words.txt', 'utf8')
  .split(os.EOL)

module.exports = {
  overrides: [{
    files: ["resume.yaml.js"],
    plugins: ['spellcheck'],
    rules: {
      "spellcheck/spell-checker": [2, {
        comments: true,
        lang: 'en_US',
        identifiers: false,
        minLength: 4,
        skipWords,
            "skipIfMatch": [
                "https?://[^s]*"
            ],
            "skipWordIfMatch": [
                "^foobar.*$"
            ],
      }]
    }
  }],
}
