import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request) {
    try {
        const data = await request.json();
        if (
            !data.name ||
            data.name.trim().length === 0 ||
            !data.email ||
            data.email.trim().length === 0
        ) {
            return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
        }

        // Support both environment variable credentials (for deployment) and JSON file (for local dev)
        let auth;

        if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
            // Use environment variables (recommended for Vercel/Netlify)
            auth = new google.auth.JWT({
                email: process.env.GOOGLE_CLIENT_EMAIL,
                key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                scopes: ["https://www.googleapis.com/auth/spreadsheets"]
            });
        } else {
            // Fallback to JSON file for local development
            auth = new google.auth.JWT({
                keyFile: process.env.GOOGLE_SHEETS_KEY_FILE || './portfolio-481007-d137e5966a5f.json',
                scopes: ["https://www.googleapis.com/auth/spreadsheets"]
            });
        }

        const sheets = google.sheets({ version: "v4", auth });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_ID,
            range: "Sheet1",
            valueInputOption: "RAW",
            requestBody: {
                values: [[data.name, data.email, data.message || ""]],
            },
        });

        return NextResponse.json({ message: "Message sent successfully", response }, { status: 200 });

    }
    catch (error) {
        console.error("Error submitting contact form:", error);

        // Better error message for users
        const errorMessage = error.message || "Failed to send message. Please try again later.";

        return NextResponse.json({
            error: errorMessage
        }, { status: 500 });
    }
}