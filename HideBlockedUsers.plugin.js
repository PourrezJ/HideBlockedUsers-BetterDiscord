/**
 * @name HideBlockedUsers
 * @description Hides messages from blocked users completely using CSS only.
 * @version 1.0.0
 * @author Djoe
 */

module.exports = class HideBlockedUsers {
    start() {
        // Inject CSS to hide blocked messages using the groupStart_ class
        BdApi.injectCSS("hideBlockedMessages", `
            ol > [class^='groupStart_'] {
                display: none !important;
            }
        `);
    }

    stop() {
        // Remove the injected CSS
        BdApi.clearCSS("hideBlockedMessages");
    }
};
