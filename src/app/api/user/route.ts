import { connectDB } from "@/lib/mongodb";
import User from "./../../../lib/models/contact.model";

export async function GET() {
  await connectDB();
  const users:any[] = await User.find();
  return Response.json(users);
}

export async function POST(request: Request) {
  await connectDB();
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ message: "All fields are required" }, { status: 400 });
  }

  const user:any = await User.create({ name, email, message });
  return Response.json({ message: "User created successfully", user });
}