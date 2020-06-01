const Functions = Object.freeze({
  LINGUEE_PROXY_CONTROLLER: "LingueeProxyController",
  FIND_DB_TRANSLATION: "FindDbTranslation",
});

const DynamoDbTables = Object.freeze({
  PROD: 1,
  TEST: 2,
  DEV: 3,
  null: 3,
  properties: Object.freeze({
    1: Object.freeze({
      TRANSLATIONS: "Translations_Prod",
      DEFINITIONS: "Definitions_Prod",
      USERS: "Users_Prod",
      TAGS: "Tags_Prod",
      FLASHCARDS: "Flashcards_Prod",
    }),
    2: Object.freeze({
      TRANSLATIONS: "Translations_Test",
      DEFINITIONS: "Definitions_Test",
      USERS: "Users_Test",
      TAGS: "Tags_Test",
      FLASHCARDS: "Flashcards_Test",
    }),
    3: Object.freeze({
      TRANSLATIONS: "Translations_Dev",
      DEFINITIONS: "Definitions_Dev",
      USERS: "Users_Dev",
      TAGS: "Tags_Dev",
      FLASHCARDS: "Flashcards_Dev",
    }),
  }),
});

exports.Function = Function;
exports.DynamoDbTables = DynamoDbTables;
// module.exports = {
//   Functions: Functions,
//   DynamoDbTables: DynamoDbTables,
// };
