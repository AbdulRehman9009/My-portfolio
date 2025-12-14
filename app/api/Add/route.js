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

        const auth = new google.auth.JWT({
            keyFile: process.env.GOOGLE_SHEETS_KEY_FILE,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"]
        });



        const sheets = google.sheets({ version: "v4", auth });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_ID,
            range: "Sheet1",
            valueInputOption: "RAW",
            requestBody: {
                values: [[data.name, data.email, data.message]],
            },
        });


        return NextResponse.json({ message: "Message sent successfully", response }, { status: 200 });

    }
    catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }


}