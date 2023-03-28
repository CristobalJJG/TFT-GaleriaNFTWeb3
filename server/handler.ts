/* https://vercel.com/docs/cron-jobs */
/* https://vercel.com/docs/concepts/functions/serverless-functions/quickstart#create-a-serverless-function */
import type { VercelRequest, VercelResponse } from '@vercel/node';
 
export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}