import { connectToDatabase } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "email and password are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "email already registered" },
        { status: 400 }
      );
    }

    await User.create({
      email,
      password,
    });

    return NextResponse.json(
      { message: "user registered successfully" },
      { status: 201 }
    );
  } catch (_error: unknown) {
    return NextResponse.json({ error: "user not registered" }, { status: 500 });
  }
}
