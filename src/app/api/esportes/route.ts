import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await prisma.esporte.findMany({
      include: {
        TiposPeriodo: true,
      },
    });

    return NextResponse.json(result);
  } catch (e) {
    console.error("ERRO API GET /esportes", e);
    return NextResponse.json(
      { error: "Erro ao buscar esportes" },
      { status: 500 }
    );
  }
}