const _0x26109c=_0x266f;(function(_0x1ccbf5,_0x1c4a73){const _0x79f668=_0x266f,_0x18666c=_0x1ccbf5();while(!![]){try{const _0x36c82c=-parseInt(_0x79f668(0x6c))/0x1+parseInt(_0x79f668(0x79))/0x2*(-parseInt(_0x79f668(0xa3))/0x3)+parseInt(_0x79f668(0xbc))/0x4+parseInt(_0x79f668(0x6a))/0x5*(-parseInt(_0x79f668(0x74))/0x6)+parseInt(_0x79f668(0xa1))/0x7+parseInt(_0x79f668(0x92))/0x8+-parseInt(_0x79f668(0x96))/0x9*(-parseInt(_0x79f668(0x7f))/0xa);if(_0x36c82c===_0x1c4a73)break;else _0x18666c['push'](_0x18666c['shift']());}catch(_0x26026c){_0x18666c['push'](_0x18666c['shift']());}}}(_0x3ce3,0x9c0dc));import{generateWAMessageFromContent}from'@whiskeysockets/baileys';const {proto,generateWAMessage,areJidsSameUser,prepareWAMessageMedia}=(await import(_0x26109c(0x89)))[_0x26109c(0xb1)];import{createHash}from'crypto';import _0x1d1b5b from'awesome-phonenumber';import{canLevelUp,xpRange}from'../lib/levelling.js';import _0x17ea16 from'node-fetch';import _0x1036dc from'fs';const {levelling}=_0x26109c(0x82);import _0x888a52 from'moment-timezone';import{promises}from'fs';import{join}from'path';const time=_0x888a52['tz'](_0x26109c(0x9a))[_0x26109c(0xaa)]('HH');let wib=_0x888a52['tz'](_0x26109c(0x9a))[_0x26109c(0xaa)](_0x26109c(0x91)),handler=async(_0x328e5f,{conn:_0x1e0e91,usedPrefix:_0x4fab0e,command:_0x3aa25c})=>{const _0x473f85=_0x26109c;let _0x64cd79=new Date(new Date()+0x36ee80),_0x5b477b='en',_0x5d6bd0=_0x64cd79[_0x473f85(0xba)](_0x5b477b,{'weekday':'long'}),_0x6b97aa=_0x64cd79[_0x473f85(0xba)](_0x5b477b,{'day':'numeric','month':'long','year':_0x473f85(0x8c)}),_0x3f466f=process[_0x473f85(0x9c)]()*0x3e8,_0x2881da=clockString(_0x3f466f),_0x4378cf=_0x328e5f[_0x473f85(0x95)]?_0x328e5f[_0x473f85(0x95)][_0x473f85(0xad)]:_0x328e5f[_0x473f85(0xa6)]&&_0x328e5f[_0x473f85(0xa6)][0x0]?_0x328e5f[_0x473f85(0xa6)][0x0]:_0x328e5f['fromMe']?_0x1e0e91['user']['jid']:_0x328e5f[_0x473f85(0xad)];if(!(_0x4378cf in global['db'][_0x473f85(0x98)][_0x473f85(0xae)]))throw _0x473f85(0xa8);let _0x2b9934=global['db']['data']['users'][_0x328e5f[_0x473f85(0xad)]],{name:_0x33b633,exp:_0x1b4047,diamond:_0x450709,lastclaim:_0x4ed6c9,registered:_0x1f46d2,regTime:_0x712bf9,age:_0xbf4db5,level:_0x2c9c9b,role:_0x26fe7f,warn:_0x47822c}=global['db'][_0x473f85(0x98)][_0x473f85(0xae)][_0x4378cf],{min:_0x550e6d,xp:_0x5c8729,max:_0x3d3e74}=xpRange(_0x2b9934[_0x473f85(0x90)],global[_0x473f85(0x72)]),_0x4eee12=_0x1e0e91[_0x473f85(0xab)](_0x4378cf),_0x37bd1c=_0x3d3e74-_0x5c8729,_0x16b495=global[_0x473f85(0x7b)][_0x473f85(0x83)](_0x4378cf[_0x473f85(0x80)]`@`[0x0]),_0x30f616=createHash(_0x473f85(0x9d))[_0x473f85(0xb0)](_0x4378cf)[_0x473f85(0x69)](_0x473f85(0x68)),_0x5abc6c=Object[_0x473f85(0xa2)](global['db'][_0x473f85(0x98)]['users'])[_0x473f85(0xb7)],_0x4de745=Object[_0x473f85(0xa2)](global['db'][_0x473f85(0x98)]['users'])[_0x473f85(0xa5)](_0x1addf3=>_0x1addf3[_0x473f85(0x94)]==!![])[_0x473f85(0xb7)],_0x2223ad=String[_0x473f85(0x87)](0x200e),_0x5127b1=_0x2223ad[_0x473f85(0x81)](0x352),_0x5f209b=ucapan(),_0x3fe26c='@'+_0x328e5f[_0x473f85(0xad)][_0x473f85(0x80)](_0x473f85(0x7d))[0x0],_0x586c27='\x0a\x20\x20┏──⟬\x20*QUEEN\x20ANNA*\x20⟭\x0a\x20\x20││ᯤ\x20'+_0x4fab0e+'ʙᴏᴛ\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20'+_0x4fab0e+'ᴏᴡɴᴇʀ\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20'+_0x4fab0e+'ɢʀᴏᴜᴘ\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20'+_0x4fab0e+'ғᴜɴ\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20'+_0x4fab0e+_0x473f85(0x75)+_0x4fab0e+'ᴅᴏᴡɴʟᴏᴀᴅᴇʀ\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20'+_0x4fab0e+_0x473f85(0x73)+_0x4fab0e+_0x473f85(0x9f)+_0x4fab0e+_0x473f85(0xb9)+_0x4fab0e+_0x473f85(0x8e)+_0x4fab0e+_0x473f85(0xb3)+_0x4fab0e+_0x473f85(0x99)+_0x4fab0e+_0x473f85(0x88)+_0x4fab0e+_0x473f85(0x78)+_0x4fab0e+_0x473f85(0x86),_0x56922b=generateWAMessageFromContent(_0x328e5f[_0x473f85(0xbb)],{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadata':{},'deviceListMetadataVersion':0x2},'interactiveMessage':proto[_0x473f85(0x6d)][_0x473f85(0xa9)][_0x473f85(0x8a)]({'body':proto[_0x473f85(0x6d)]['InteractiveMessage'][_0x473f85(0xb8)][_0x473f85(0x8a)]({'text':_0x586c27}),'footer':proto['Message'][_0x473f85(0xa9)][_0x473f85(0x9e)]['create']({'text':_0x473f85(0xb5)}),'header':proto['Message'][_0x473f85(0xa9)][_0x473f85(0x70)][_0x473f85(0x8a)]({...await prepareWAMessageMedia({'image':{'url':_0x473f85(0x7a)}},{'upload':_0x1e0e91['waUploadToServer']}),'title':null,'subtitle':null,'hasMediaAttachment':![]}),'nativeFlowMessage':proto[_0x473f85(0x6d)][_0x473f85(0xa9)][_0x473f85(0xa4)]['create']({'buttons':[{'name':_0x473f85(0x8d),'buttonParamsJson':'{\x22title\x22:\x22ʟɪꜱᴛᴇ\x20ᴍᴇɴᴜ\x22,\x22sections\x22:[{\x22title\x22:\x22HERE\x20IS\x20ALL\x20LIST\x20OF\x20MENU\x22,\x22highlight_label\x22:\x22𝚀𝚄𝙴𝙴𝙽\x20𝙰𝙽𝙽𝙰\x22,\x22rows\x22:[{\x22header\x22:\x22\x22,\x22title\x22:\x22🤖\x20Bot\x20Menu\x22,\x22description\x22:\x22The\x20Bot\x27s\x20secret\x20control\x20panel.\x20What\x27s\x20your\x20command,\x20oh\x20great\x20one?\x22,\x22id\x22:\x22.botmenu\x22},{\x22header\x22:\x22\x22,\x22title\x22:\x22👑\x20Owner\x20Menu\x22,\x22description\x22:\x22The\x20sacred\x20scroll\x20only\x20for\x20the\x20chosen\x20one.\x20Yep,\x20that\x27s\x20you,\x20Boss!\x22,\x22id\x22:\x22.ownermenu\x22},{\x22header\x22:\x22\x22,\x22title\x22:\x22🧑‍🤝‍🧑\x20Group\x20Menu\x22,\x22description\x22:\x22Group\x20shenanigans\x20central!\x20Unite,\x20chat,\x20conquer!\x22,\x22id\x22:\x22.groupmenu\x22},{\x22header\x22:\x22\x22,\x22title\x22:\x22📥\x20Download\x20Menu\x22,\x22description\x22:\x22\x27DL\x27\x20stands\x20for\x20\x27Delicious\x20Loot\x27.\x20Come\x20grab\x20your\x20goodies!\x22,\x22id\x22:\x22.dlmenu\x22},{\x22header\x22:\x22\x22,\x22title\x22:\x22🎉\x20Fun\x20Menu\x22,\x22description\x22:\x22The\x20bot\x27s\x20party\x20hat.\x20Games,\x20jokes\x20and\x20instant\x20ROFLs.\x20Let\x27s\x20get\x20this\x20party\x20started!\x22,\x22id\x22:\x22.funmenu\x22},{\x22header\x22:\x22\x22,\x22title\x22:\x22💰\x20Economy\x20Menu\x22,\x22description\x22:\x22Bling\x20bling!\x20Your\x20personal\x20vault\x20of\x20virtual\x20economy.\x20Spend\x20or\x20save?\x20Choose\x20wisely!\x22,\x22id\x22:\x22.economymenu\x22},{\x22header\x22:\x22\x22,\x22title\x22:\x22🎮\x20Game\x20Menu\x22,\x22description\x22:\x22Enter\x20the\x20gaming\x20arena.\x20May\x20the\x20odds\x20be\x20ever\x20in\x20your\x20favor!\x22,\x22id\x22:\x22.gamemenu\x22},{\x22header\x22:\x22\x22,\x22title\x22:\x22🎨\x20Sticker\x20Menu\x22,\x22description\x22:\x22A\x20rainbow\x20of\x20stickers\x20for\x20your\x20inner\x20artist.\x20Make\x20your\x20chats\x20pop!\x22,\x22id\x22:\x22.stickermenu\x22},{\x22header\x22:\x22\x22,\x22title\x22:\x22🧰\x20Tool\x20Menu\x22,\x22description\x22:\x22Your\x20handy-dandy\x20toolkit.\x20What\x27s\x20your\x20pick,\x20genius?\x22,\x22id\x22:\x22.toolmenu\x22},{\x22header\x22:\x22\x22,\x22title\x22:\x22🎩\x20Logo\x20Menu\x22,\x22description\x22:\x22Create\x20a\x20logo\x20that\x20screams\x20YOU.\x20Or\x20whispers.\x20You\x20choose\x20the\x20volume.\x22,\x22id\x22:\x22.logomenu\x22},{\x22header\x22:\x22\x22,\x22title\x22:\x22🌙\x20NSFW\x20Menu\x22,\x22description\x22:\x22The\x20After\x20Dark\x20menu.\x20But\x20remember,\x20sharing\x20adult\x20secrets\x20must\x20be\x20consent-based.\x22,\x22id\x22:\x22.nsfwmenu\x22}]}]}'},{'name':_0x473f85(0x7e),'buttonParamsJson':'{\x22display_text\x22:\x22ꜱᴜᴘᴘᴏʀᴛ\x20ɢʀᴏᴜᴘ\x22,\x22id\x22:\x22.info\x22}'},{'name':_0x473f85(0xb2),'buttonParamsJson':_0x473f85(0x85)},{'name':'cta_url','buttonParamsJson':_0x473f85(0x77)}]})})}}},{});await _0x1e0e91[_0x473f85(0x6e)](_0x56922b['key'][_0x473f85(0x8f)],_0x56922b[_0x473f85(0x71)],{'messageId':_0x56922b['key']['id']});};handler[_0x26109c(0x97)]=[_0x26109c(0xb4)],handler[_0x26109c(0xac)]=[_0x26109c(0x93)],handler[_0x26109c(0xaf)]=[_0x26109c(0x76),_0x26109c(0x97),'h',_0x26109c(0x6b)];export default handler;function _0x266f(_0x461407,_0x8fff5f){const _0x3ce3b4=_0x3ce3();return _0x266f=function(_0x266f77,_0x1e5394){_0x266f77=_0x266f77-0x68;let _0x36e00c=_0x3ce3b4[_0x266f77];return _0x36e00c;},_0x266f(_0x461407,_0x8fff5f);}function clockString(_0x10fcba){const _0x5b8f55=_0x26109c;let _0x4aaed7=isNaN(_0x10fcba)?'--':Math[_0x5b8f55(0x9b)](_0x10fcba/0x36ee80),_0x594cd9=isNaN(_0x10fcba)?'--':Math['floor'](_0x10fcba/0xea60)%0x3c,_0x203ee3=isNaN(_0x10fcba)?'--':Math['floor'](_0x10fcba/0x3e8)%0x3c;return[_0x4aaed7,_0x594cd9,_0x203ee3][_0x5b8f55(0xb6)](_0x427c8e=>_0x427c8e[_0x5b8f55(0x8b)]()[_0x5b8f55(0x6f)](0x2,0x0))[_0x5b8f55(0x7c)](':');}function _0x3ce3(){const _0x50880b=['remoteJid','level','HH:mm:ss','9868784knRcMy','group','registered','quoted','1386QmtpLM','help','data','ᴛᴏᴏʟs\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20','Africa/Cameroon','floor','uptime','md5','Footer','ʟᴏɢᴏ\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20','Good\x20Night\x20🌙','1033543PUshLu','values','2954892yfFObZ','NativeFlowMessage','filter','mentionedJid','Good\x20Afternoon\x20🌇','✳️\x20The\x20user\x20is\x20not\x20found\x20in\x20my\x20database','InteractiveMessage','format','getName','tags','sender','users','command','update','default','cta_url','ɴᴇᴡs\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20','main','ᴍᴜʟᴛɪ\x20ᴅᴇᴠɪᴄᴇ\x20ᴡʜᴀᴛꜱᴀᴘᴘ\x20ʙᴏᴛ','map','length','Body','sᴛɪᴄᴋᴇʀ\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20','toLocaleDateString','chat','3101264HFFJbO','hex','digest','96055HWgAsb','commands','478907juBgxL','Message','relayMessage','padStart','Header','message','multiplier','ɢᴀᴍᴇ\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20','228tcMYoS','ʀᴇᴀᴄᴛɪᴏɴ\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20','menu','{\x22display_text\x22:\x22ꜱᴄʀɪᴘᴛ\x22,\x22url\x22:\x22https://github.com/toge012345/QUEEN-ANNA\x22}','ʀᴇʟɪɢɪᴏɴ\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20','2mELYwG','https://i.ibb.co/Btk5dcq/ANNA.jpg','prems','join','@s.whatsapp.net','quick_reply','43930ycfoNx','split','repeat','../lib/levelling.js','includes','Good\x20Morning\x20🥱','{\x22display_text\x22:\x22ᴏᴡɴᴇʀ\x22,\x22Url\x22:\x22https://wa.me/message/7JQKSN6B3LLKF1\x22}','ᴘʟᴜɢɪɴ\x20ᴍᴇɴᴜ\x0a\x20\x20┗───────────────┛','fromCharCode','ᴀɪ\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20','@whiskeysockets/baileys','create','toString','numeric','single_select','ᴀᴜᴅɪᴏ\x20ᴍᴇɴᴜ\x0a\x20\x20││ᯤ\x20'];_0x3ce3=function(){return _0x50880b;};return _0x3ce3();}function ucapan(){const _0x5e8aef=_0x26109c,_0x43a555=_0x888a52['tz'](_0x5e8aef(0x9a))[_0x5e8aef(0xaa)]('HH');let _0x14e60b='happy\x20early\x20in\x20the\x20day☀️';return _0x43a555>=0x4&&(_0x14e60b=_0x5e8aef(0x84)),_0x43a555>=0xa&&(_0x14e60b='Good\x20Afternoon\x20🫠'),_0x43a555>=0xf&&(_0x14e60b=_0x5e8aef(0xa7)),_0x43a555>=0x12&&(_0x14e60b=_0x5e8aef(0xa0)),_0x14e60b;}