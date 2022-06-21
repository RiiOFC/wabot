let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tsel [081247822525]
│ • Dana [081247822525]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281247822525
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
