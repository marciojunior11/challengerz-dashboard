/*
  Warnings:

  - You are about to drop the `tb_competicoes_faes_periodos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "challengerz"."tb_competicoes_faes_periodos" DROP CONSTRAINT "tb_competicoes_faes_periodos_idcompeticaofase_fkey";

-- DropForeignKey
ALTER TABLE "challengerz"."tb_competicoes_faes_periodos" DROP CONSTRAINT "tb_competicoes_faes_periodos_idtipoperiodo_fkey";

-- DropTable
DROP TABLE "challengerz"."tb_competicoes_faes_periodos";

-- CreateTable
CREATE TABLE "challengerz"."tb_competicoes_fases_periodos" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "idcompeticaofase" INTEGER NOT NULL,
    "idtipoperiodo" INTEGER NOT NULL,
    "minimopontos" DECIMAL(65,30),
    "maximopontos" DECIMAL(65,30),
    "vantagemminina" DECIMAL(65,30),
    "tempoperiodo" INTEGER,

    CONSTRAINT "tb_competicoes_fases_periodos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "challengerz"."tb_competicoes_fases_periodos" ADD CONSTRAINT "tb_competicoes_fases_periodos_idcompeticaofase_fkey" FOREIGN KEY ("idcompeticaofase") REFERENCES "challengerz"."tb_competicoes_fases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "challengerz"."tb_competicoes_fases_periodos" ADD CONSTRAINT "tb_competicoes_fases_periodos_idtipoperiodo_fkey" FOREIGN KEY ("idtipoperiodo") REFERENCES "challengerz"."tb_tipos_periodo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
