-- CreateEnum
CREATE TYPE "public"."FormatoTipoCompeticao" AS ENUM ('TABELA', 'CHAVE');

-- CreateEnum
CREATE TYPE "public"."TipoCompetidor" AS ENUM ('INDIVIDUAL', 'EQUIPE');

-- CreateEnum
CREATE TYPE "public"."SituacaoEquipeCompetidor" AS ENUM ('ATIVO', 'INATIVO');

-- CreateTable
CREATE TABLE "public"."tb_pessoas" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "tb_pessoas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_pessoas_fisicas" (
    "id" INTEGER NOT NULL,
    "nomecompleto" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "rg" VARCHAR(11) NOT NULL,
    "datanascimento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_pessoas_fisicas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_pessoas_juridicas" (
    "id" INTEGER NOT NULL,
    "razaosocial" VARCHAR(255) NOT NULL,
    "nomefantasia" VARCHAR(255) NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,

    CONSTRAINT "tb_pessoas_juridicas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_esportes" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "tb_esportes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_tipos_periodo" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "minimopontos" DECIMAL(65,30),
    "maximopontos" DECIMAL(65,30),
    "vantagemminina" DECIMAL(65,30),
    "tempoperiodo" INTEGER,
    "idesporte" INTEGER NOT NULL,

    CONSTRAINT "tb_tipos_periodo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_competicoes" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(4000) NOT NULL,
    "observacoes" VARCHAR(4000) NOT NULL,
    "datainicio" TIMESTAMP(3) NOT NULL,
    "datafim" TIMESTAMP(3) NOT NULL,
    "tipocompetidor" "public"."TipoCompetidor" NOT NULL,
    "idesporte" INTEGER NOT NULL,

    CONSTRAINT "tb_competicoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_tipos_fase" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "vitoriasclassificacao" INTEGER,
    "derrotaseliminacao" INTEGER,
    "pontosvitoria" DECIMAL(65,30),
    "pontosempate" DECIMAL(65,30),
    "pontosderrota" DECIMAL(65,30),
    "formato" "public"."FormatoTipoCompeticao" NOT NULL,
    "formula" VARCHAR(50) NOT NULL,
    "campos" JSONB NOT NULL,

    CONSTRAINT "tb_tipos_fase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_competicoes_fases" (
    "id" SERIAL NOT NULL,
    "idcompeticao" INTEGER NOT NULL,
    "idtipofase" INTEGER NOT NULL,
    "vitoriasclassificacao" INTEGER,
    "derrotaseliminacao" INTEGER,
    "pontosvitoria" DECIMAL(65,30),
    "pontosempate" DECIMAL(65,30),
    "pontosderrota" DECIMAL(65,30),
    "maximoclassificados" INTEGER,
    "maximoeliminados" INTEGER,
    "turnos" INTEGER,

    CONSTRAINT "tb_competicoes_fases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_competicoes_fases_periodos" (
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

-- CreateTable
CREATE TABLE "public"."tb_competicoes_fases_grupos" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "idcompeticaofase" INTEGER NOT NULL,
    "tamanho" INTEGER NOT NULL,
    "tamanhominimo" INTEGER,
    "tamanhomaximo" INTEGER,

    CONSTRAINT "tb_competicoes_fases_grupos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_competicoes_competidores" (
    "idcompeticao" INTEGER NOT NULL,
    "idcompetidor" INTEGER NOT NULL,

    CONSTRAINT "tb_competicoes_competidores_pkey" PRIMARY KEY ("idcompeticao","idcompetidor")
);

-- CreateTable
CREATE TABLE "public"."tb_equipes" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "tb_equipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_equipes_competidores" (
    "idequipe" INTEGER NOT NULL,
    "idcompetidor" INTEGER NOT NULL,
    "situacao" "public"."SituacaoEquipeCompetidor" NOT NULL DEFAULT 'ATIVO',

    CONSTRAINT "tb_equipes_competidores_pkey" PRIMARY KEY ("idequipe","idcompetidor")
);

-- AddForeignKey
ALTER TABLE "public"."tb_pessoas_fisicas" ADD CONSTRAINT "tb_pessoas_fisicas_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."tb_pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_pessoas_juridicas" ADD CONSTRAINT "tb_pessoas_juridicas_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."tb_pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_tipos_periodo" ADD CONSTRAINT "tb_tipos_periodo_idesporte_fkey" FOREIGN KEY ("idesporte") REFERENCES "public"."tb_esportes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_competicoes" ADD CONSTRAINT "tb_competicoes_idesporte_fkey" FOREIGN KEY ("idesporte") REFERENCES "public"."tb_esportes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_competicoes_fases" ADD CONSTRAINT "tb_competicoes_fases_idcompeticao_fkey" FOREIGN KEY ("idcompeticao") REFERENCES "public"."tb_competicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_competicoes_fases" ADD CONSTRAINT "tb_competicoes_fases_idtipofase_fkey" FOREIGN KEY ("idtipofase") REFERENCES "public"."tb_tipos_fase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_competicoes_fases_periodos" ADD CONSTRAINT "tb_competicoes_fases_periodos_idcompeticaofase_fkey" FOREIGN KEY ("idcompeticaofase") REFERENCES "public"."tb_competicoes_fases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_competicoes_fases_periodos" ADD CONSTRAINT "tb_competicoes_fases_periodos_idtipoperiodo_fkey" FOREIGN KEY ("idtipoperiodo") REFERENCES "public"."tb_tipos_periodo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_competicoes_fases_grupos" ADD CONSTRAINT "tb_competicoes_fases_grupos_idcompeticaofase_fkey" FOREIGN KEY ("idcompeticaofase") REFERENCES "public"."tb_competicoes_fases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_competicoes_competidores" ADD CONSTRAINT "tb_competicoes_competidores_idcompeticao_fkey" FOREIGN KEY ("idcompeticao") REFERENCES "public"."tb_competicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_competicoes_competidores" ADD CONSTRAINT "tb_competicoes_competidores_idcompetidor_fkey" FOREIGN KEY ("idcompetidor") REFERENCES "public"."tb_pessoas_fisicas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_equipes_competidores" ADD CONSTRAINT "tb_equipes_competidores_idequipe_fkey" FOREIGN KEY ("idequipe") REFERENCES "public"."tb_equipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_equipes_competidores" ADD CONSTRAINT "tb_equipes_competidores_idcompetidor_fkey" FOREIGN KEY ("idcompetidor") REFERENCES "public"."tb_pessoas_fisicas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
