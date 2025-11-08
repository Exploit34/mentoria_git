const connectDB = require("../../database/mongo");

export default async function handler(req, res) {
  try {
    await connectDB();
    res.status(200).json({ message: "✅ MongoDB conectado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "❌ Error al conectar a MongoDB", error });
  }
}
