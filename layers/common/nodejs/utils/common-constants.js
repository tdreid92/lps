"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDbTables = exports.FunctionNames = void 0;
exports.FunctionNames = {
    LINGUEE_PROXY_CONTROLLER: "LingueeProxyController",
    FIND_DB_TRANSLATION: "FindDbTranslation",
};
exports.DynamoDbTables = Object.freeze({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1vbi1jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxhQUFhLEdBQUc7SUFDM0Isd0JBQXdCLEVBQUUsd0JBQXdCO0lBQ2xELG1CQUFtQixFQUFFLG1CQUFtQjtDQUN6QyxDQUFDO0FBRVcsUUFBQSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMxQyxJQUFJLEVBQUUsQ0FBQztJQUNQLElBQUksRUFBRSxDQUFDO0lBQ1AsR0FBRyxFQUFFLENBQUM7SUFDTixJQUFJLEVBQUUsQ0FBQztJQUNQLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2YsWUFBWSxFQUFFLG1CQUFtQjtZQUNqQyxXQUFXLEVBQUUsa0JBQWtCO1lBQy9CLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxXQUFXO1lBQ2pCLFVBQVUsRUFBRSxpQkFBaUI7U0FDOUIsQ0FBQztRQUNGLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2YsWUFBWSxFQUFFLG1CQUFtQjtZQUNqQyxXQUFXLEVBQUUsa0JBQWtCO1lBQy9CLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxXQUFXO1lBQ2pCLFVBQVUsRUFBRSxpQkFBaUI7U0FDOUIsQ0FBQztRQUNGLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2YsWUFBWSxFQUFFLGtCQUFrQjtZQUNoQyxXQUFXLEVBQUUsaUJBQWlCO1lBQzlCLEtBQUssRUFBRSxXQUFXO1lBQ2xCLElBQUksRUFBRSxVQUFVO1lBQ2hCLFVBQVUsRUFBRSxnQkFBZ0I7U0FDN0IsQ0FBQztLQUNILENBQUM7Q0FDSCxDQUFDLENBQUMifQ==