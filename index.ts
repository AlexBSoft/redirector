import express from 'express';
import dotenv from 'dotenv';
import { ParsedQs } from 'qs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const REDIRECT_URL = process.env.REDIRECT_URL;

if (!REDIRECT_URL) {
    console.error('REDIRECT_URL is not set in environment variables.');
    process.exit(1);
}

app.get('*', (req, res) => {
    const queryParams: ParsedQs = req.query;
    const redirectUrl = new URL(REDIRECT_URL);
    
    if (queryParams) {
        Object.keys(queryParams).forEach(key => {
            const value = queryParams[key];
            // Check if value is defined
            if (value !== undefined) {
                if (Array.isArray(value)) {
                    value.forEach(val => redirectUrl.searchParams.append(key, val));
                } else {
                    redirectUrl.searchParams.append(key, value.toString());
                }
            }
        });
    }

    res.redirect(302, redirectUrl.toString());
});

app.listen(PORT, () => {
    console.log(`Redirector app listening at http://localhost:${PORT}`);
});