const fs = require('fs-extra');
if (fs.existsSync('.env'))
  require('dotenv').config({ path: __dirname + '/.env' });
const path = require("path");

module.exports = { 
    SESSION_ID: process.env.SESSION_ID || 'Gifted~H4sIAAAAAAAAA5VU25KiOhT9l7xqjVwEL1VdNYioCIp411PzkIYAkUswCSBO+e9T2N0z/XDOVJ+3ZCfZa+21185PkBHMkIVqMPwJcopLyFGz5HWOwBCMiiBAFLSBDzkEQ7Cz4lmtjOfLay7vfd73Z7Ijpqf+enOy13d7td1lu5sZKZ2Z+wIebZAXrwn2/pIQxYvkclaP5nZp72DE6+KKb1VvM+iIJ2usXFDYupwVQpHbfQGPJiPEFGehkUcoRRQmFqpXENMv0jemySwPlkoMB/jQuZ6XbH22xucqN3FUTOCl1KIbs8RBHH+N/g6ulGlrsr470vy+TPIUK7bdUYrWfBAsUNrNUpt4kTc27qc3+gyHGfJNH2Uc8/rLujt2baJpUl6lcGqnvZlkmXDQqluqzm+CP4KrViaQuqDMML9G3DlGVbzhgu6iYrRm+z639fjsLA+qNNJyvJkNytrhaWJs2GfiK/rhlfj/6L6ZliqadQYnrapO/rQkKnLDbnc0mnfmr0LrEuWvSj+ShVZcfY3++CBZeLHsqqKj3yempB4SK9DmVS9ejcvVyI4m0/60P3mlt0+6Q17Qv7EchQejKBXLI74V3bIISnDhZaOrot4M1Z87t/vpKpNpwbpZ1w9sx7HP4SCDPa1ku6zikqqfRc6rm3GKjuVE08a7/jJyX54Vxag2fTAUH21AUYgZp5Bjkj1jPbUNoF9ukEcRf8oLeMs1SKWUSE7JOUulLaoPpaI5bjCal0Qfx2b16nQhXlTuC2iDnBIPMYb8GWac0HqBGIMhYmD4z482yNCNvzWugZPFNggwZXyXFXlCoP/R1Y9D6HmkyPimzjy9WSAKhsKfMOIcZyFrdCwySL0Il0iPIGdgGMCEod8VIor899jv180rH3GIEwaGQLdVePc0w1hYvsDi6VQzQk0PNfAH7aNtb7J4trPZ66t84C69g2iUvh/srgd7PuhWs/0ltgTHK7R55/qqkZd/SQKGQFqbOdHTjX9nDtlpUR7WBQ8Kc1FcDe4t622cerTFXNaTE6W/cK+LpSfnk+1Op73leG/x43zBXMfaSh1n7LjT/Lq/602P28BHJfbQZzBS79ZW8ToX0OC273ec5HBOkcvye2vZoppZ7QnbzJJJLJ/rnEqtOxEPWrdHDt24k682xfF+Sybu5uifD0E0Jdo6F7XeRXszVPp0MvabmuTuQJTkniIofXmofmffqqYfMM+/ZYiDNkjer4mqLHUVSej1FGGofm/CH6ORvH9J+GmaJnGzDTB6TngGU/QVoDcJGiMJj/anHO9/xn/N3VG/x4l7UYPd+Djha1s+HkUrwXWAFiPxpOh8nNmhHqhpZYHH40cb5AnkAaEpGAKY+ZRgH7QBJUXjTDMLyF/AdM00x244aSpPIOPaH7dvcYoYh2n+nElFUCRRHLzdWlGSzyCLGhFW4ikKwOMXMbaZjDsHAAA=',
    PREFIX: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇",
    OWNER_NUMBER : process.env.OWNER_NUMBER || "",  // put only one number
    SUDO_NUMBERS : process.env.SUDO_NUMBERS || "", // can be multiple numbers separated by commas
    BOT_NAME : process.env.BOT_NAME || '𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃',
    FOOTER : process.env.FOOTER || 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ',
    CAPTION : process.env.CAPTION || '©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓',
    VERSION: process.env.VERSION || '5.0.0',
    BOT_PIC : process.env.BOT_PIC || 'https://gitcdn.giftedtech.co.ke/image/AZO_image.jpg',            
    MODE: process.env.MODE || "public",
    PM_PERMIT: process.env.PM_PERMIT || 'false',
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi",
    DM_PRESENCE : process.env.DM_PRESENCE || 'online', // recording/typing/online/offline
    GC_PRESENCE : process.env.GC_PRESENCE || 'online', // recording/typing/online/offline
    CHATBOT : process.env.CHATBOT || 'false', // can be true/audio/false   
    CHATBOT_MODE : process.env.CHATBOT_MODE || 'inbox', // can be inbox/groups/allchats
    STARTING_MESSAGE : process.env.STARTING_MESSAGE || "true",
    ANTIDELETE : process.env.ANTIDELETE || 'indm', // inchat/indm/false
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'false',
    ANTICALL : process.env.ANTICALL || 'false', // (decline/true)/block/false
    ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'false',
    ANTILINK : process.env.ANTILINK || 'false', // or delete or kick or true
    AUTO_LIKE_STATUS : process.env.AUTO_LIKE_STATUS || 'true',
    AUTO_READ_STATUS : process.env.AUTO_READ_STATUS || 'true',
    STATUS_LIKE_EMOJIS : process.env.STATUS_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",   
    STATUS_REPLY_TEXT: process.env.STATUS_REPLY_TEXT || "*ʏᴏᴜʀ sᴛᴀᴛᴜs ᴠɪᴇᴡᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ ✅*",             
    AUTO_REACT : process.env.AUTO_REACT || 'false',
    AUTO_REPLY : process.env.AUTO_REPLY || 'false',
    AUTO_READ_MESSAGES : process.env.AUTO_READ_MESSAGES || 'false', // true/commands/false
    AUTO_BIO : process.env.AUTO_BIO || 'false',
    AUTO_BLOCK: process.env.AUTO_BLOCK || '212,233',
    YT: process.env.YT || 'youtube.com/@giftedtechnexus',
    NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363408839929349@newsletter',
    NEWSLETTER_URL: process.env.NEWSLETTER_URL || 'https://whatsapp.com/channel/0029Vb3hlgX5kg7G0nFggl0Y',
    BOT_REPO: process.env.BOT_REPO || 'mauricegift/gifted-md',
    PACK_NAME: process.env.PACK_NAME || '𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃',
    PACK_AUTHOR: process.env.PACK_AUTHOR || '𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇'
};

let fileName = require.resolve(__filename);
fs.watchFile(fileName, () => {
    fs.unwatchFile(fileName);
    console.log(`Writing File: ${__filename}`);
    delete require.cache[fileName];
    require(fileName);
});
