import type { NextApiRequest, NextApiResponse } from 'next'
import chromium from 'chrome-aws-lambda'
import { chromium as playwrightChromium } from 'playwright-core'
import { getAbsoluteURL } from '../../utils/utils'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const browser = await playwrightChromium.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  })

  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 630,
    },
  })

  const relativeUrl = (req.query['path'] as string) || ''
  const url = getAbsoluteURL(relativeUrl)

  await page.goto(url, {
    timeout: 15 * 1000,
    waitUntil: 'networkidle',
  })
  const data = await page.screenshot({
    type: 'png',
  })

  await browser.close()

  res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate')
  res.setHeader('Content-Type', 'image/png')
  res.end(data)
}
