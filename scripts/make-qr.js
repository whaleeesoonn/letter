// Usage: npm run qr -- https://your-site.vercel.app
import QRCode from 'qrcode'

const url = process.argv[2]
if (!url || !/^https?:\/\//.test(url)) {
  console.error('Please give your full website address, e.g.\n  npm run qr -- https://my-winter-letter.vercel.app')
  process.exit(1)
}

await QRCode.toFile('winter-letter-qr.png', url, {
  errorCorrectionLevel: 'H',
  margin: 4,
  width: 900,
  color: { dark: '#1d3557', light: '#ffffff' }
})
console.log('Done! Created winter-letter-qr.png for ' + url)
