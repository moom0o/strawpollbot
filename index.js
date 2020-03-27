                                                                                                                
//                                                bbbbbbbb                                                         
//                                                b::::::b                                      tttt               
//                                                b::::::b                                   ttt:::t               
//                                                b::::::b                                   t:::::t               
//                                                 b:::::b                                   t:::::t               
//     eeeeeeeeeeee         zzzzzzzzzzzzzzzzz      b:::::bbbbbbbbb       ooooooooooo   ttttttt:::::ttttttt         
//   ee::::::::::::ee       z:::::::::::::::z      b::::::::::::::bb   oo:::::::::::oo t:::::::::::::::::t         
//  e::::::eeeee:::::ee     z::::::::::::::z       b::::::::::::::::b o:::::::::::::::ot:::::::::::::::::t         
// e::::::e     e:::::e     zzzzzzzz::::::z        b:::::bbbbb:::::::bo:::::ooooo:::::otttttt:::::::tttttt         
// e:::::::eeeee::::::e           z::::::z         b:::::b    b::::::bo::::o     o::::o      t:::::t               
// e:::::::::::::::::e           z::::::z          b:::::b     b:::::bo::::o     o::::o      t:::::t               
// e::::::eeeeeeeeeee           z::::::z           b:::::b     b:::::bo::::o     o::::o      t:::::t               
// e:::::::e                   z::::::z            b:::::b     b:::::bo::::o     o::::o      t:::::t    tttttt     
// e::::::::e                 z::::::zzzzzzzz      b:::::bbbbbb::::::bo:::::ooooo:::::o      t::::::tttt:::::t     
//  e::::::::eeeeeeee        z::::::::::::::z      b::::::::::::::::b o:::::::::::::::o      tt::::::::::::::t     
//   ee:::::::::::::e       z:::::::::::::::z      b:::::::::::::::b   oo:::::::::::oo         tt:::::::::::tt     
//     eeeeeeeeeeeeee       zzzzzzzzzzzzzzzzz      bbbbbbbbbbbbbbbb      ooooooooooo             ttttttttttt       
//
//
//
// IP VERIFICATION (need to use socks proxys.)
//======================================
const fs = require("fs")
let words = fs.readFileSync(`proxies.txt`, "utf-8");
const lines = words.split(/\r?\n/);
lines.forEach(function(line,index,collection) {
    setTimeout(() => {
        main(line)
    }, index * 100)
})
async function main(proxy) {
var SocksProxyAgent = require('socks-proxy-agent');
var rp = require('request-promise');

var proxy = `socks4://${proxy}`

var agent = new SocksProxyAgent(proxy);

var options = {
    uri: 'https://www.strawpoll.me/19629149',
    agent: agent,
    method: 'POST',
    headers: {
        'User-Agent': 'ez bot fuck you strawpoll!'
    },
    form: {
        "options": '148658214'
    },
}

try {
    var responce = await rp(options)
} catch(err) {
    console.log(err)
}

console.log(responce)
}
//=======================================
// No verification/browser cookie verification (comment other one and uncomment this one)
//====================================
// setInterval(() => {
//     var unirest = require('unirest');
//     var req = unirest('POST', 'https://www.strawpoll.me/19628956')
//       .headers({
//         'Content-Type': 'application/x-www-form-urlencoded'
//       })
//       .send('options=148657397')
//       .end(function (res) { 
//         if (res.error) console.log(res.error); 
//         console.log(res.raw_body);
//       });
// }, 100)
//=====================================
//
