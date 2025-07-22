require('dotenv').config();


// Helper function to convert "true"/"false" strings to real booleans
const toBool = (value) => value === "true";

// Owner & Bot Details
global.owner = process.env.OWNER_NUMBER;2349123675528
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "David Cyril";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.author = process.env.AUTHOR || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";

// Auto-Features
global.autoTyping = toBool(process.env.AUTO_TYPING);
global.autoRecord = toBool(process.env.AUTO_RECORD);
global.autoViewStatus = toBool(process.env.AUTO_VIEW_STATUS);
global.AUTO_STATUS_REACT = toBool(process.env.AUTO_STATUS_REACT);
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";
global.LEVELUP = toBool(process.env.LEVELUP);
global.ANTIVIEWONCE = toBool(process.env.ANTIVIEWONCE);

global.public = process.env.PUBLIC === 'true';
// Group & Security Settings

global.ANTIDELETE = toBool(process.env.ANTIDELETE);
global.unavailable = toBool(process.env.UNAVAILABLE);
global.available = toBool(process.env.AVAILABLE);
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);
global.chatbot = toBool(process.env.CHATBOT);
global.autoreact = toBool(process.env.AUTO_REACT);
global.WELCOME = toBool(process.env.WELCOME);

// Prefix & Other Settings
global.prefix = process.env.PREFIX || '.';
global.autobio = toBool(process.env.AUTO_BIO);
global.ANTI_TEMU = toBool(process.env.ANTI_TEMU);
global.ANTI_TAG = toBool(process.env.ANTI_TAG);
global.ANTICALL = toBool(process.env.ANTICALL);
global.antilink = toBool(process.env.ANTILINK);
global.antilinkkick = toBool(process.env.ANTILINK_KICK);
global.antilinkwarn = toBool(process.env.ANTILINK_WARN);

// Messages
global.mess = {{"noiseKey":{"private":{"type":"Buffer","data":"yNjPDHjIkHZy9so4MuLkQj+JF29iwLnNzYisDCRYgEc="},"public":{"type":"Buffer","data":"EkO+7pSV/ctOpOSsK8SSMOx4TMDlw8MR+6IkNvTwQTs="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"yFiy22kN5Ec6yDCK/01S7ed8qtm0WidEOM3+HUUxq2Y="},"public":{"type":"Buffer","data":"fBMTx6u9utG9GlA74pUIXwZipteP+Hclrt7VeNDOKXc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"sJf8GHazEumYBX8t1dwz4NnBL7RrELVLnFW98FvHfGw="},"public":{"type":"Buffer","data":"+0yiSxrpoxIteoqWRdL1cq6cweXqp20SolKGqhm63EE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"SMvOIILxhz7tgwcanmCL9ijOERN0I3rIFKwIcXdEDnY="},"public":{"type":"Buffer","data":"q9kd5meviiE8HCCy9ZirJ+W7s66ntiZ6hPVJ7T9uFhk="}},"signature":{"type":"Buffer","data":"rSdhwpyl5KRyM5HIh/fKxj5Ps6obU/WwVIStV2jpnS19p/LGS7S9vv1/xw1FypEZ7GXVuNP13Q/l2H8N6E63Bw=="},"keyId":1},"registrationId":140,"advSecretKey":"SNUDWOjGY65zBkkwJB/4uOjI8e4j07WFAB+CW6uEUoo=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"WXtFA-oiRSykNqyS1tYUSg","phoneId":"310ab7d5-9026-40f5-8744-2a80c1fa5c24","identityId":{"type":"Buffer","data":"ShlB1VywQovMk1YwaNloKQ+8P/A="},"registered":true,"backupToken":{"type":"Buffer","data":"QvCEiH5oMoni2q/+xpS9ydc7uf4="},"registration":{},"pairingCode":"CYRILDEV","me":{"id":"2349123675528:10@s.whatsapp.net","name":"Abbey","lid":"81527723577599:10@lid"},"account":{"details":"CNXmoakGEIun+8MGGAMgACgA","accountSignatureKey":"SLDg+QrPlVvq0zLbIeWd/7pz4Wmuol6aGCVnpptxl10=","accountSignature":"QVxyiVsaSGm8UtRYtkoWuOPhaZOBypBFvFM3jl7c+W6lx7K3kS1Z/cpjqHjumdrLuGbr8CZ4gU5mxBmeWLGsDQ==","deviceSignature":"VyJU4Li1r4n5UTsNRFRu8mh/QNn9gAyBz7MPYAlSU2m1A+0ObaZMn9JG58nUd2aq7zHBCRv1WRqN4MQmvk+gDg=="},"signalIdentities":[{"identifier":{"name":"2349123675528:10@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUiw4PkKz5Vb6tMy2yHlnf+6c+FprqJemhglZ6abcZdd"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAIIEg=="},"lastAccountSyncTimestamp":1753142164,"lastPropHash":"2P1Yhf","myAppStateKeyId":"AAAAAOfR","preKeys":{"private":{"type":"Buffer","data":"wB1Z6jKbTBtnexAP3b9+wy8IHc/OfVThQYjpOyCfKXU="},"public":{"type":"Buffer","data":"X1nsnYSCEmvLnfg48yKFHPYxWW2TyWAj3CmITt76cj4="}},"senderKeys":{},"timestamp":"2025-07-21T23:56:11.065Z"}
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
