import { execFileSync } from "node:child_process";
import { createWriteStream, mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import {
  AlignmentType,
  BorderStyle,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import PDFDocument from "pdfkit";
import { PNG } from "pngjs";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..");
const downloadsDirectory = resolve(repositoryRoot, "docs/public/downloads");
const resourcesDirectory = resolve(repositoryRoot, "docs/resources");
const claimFormPath = resolve(downloadsDirectory, "fictional-claim-form.docx");
const receiptPath = resolve(downloadsDirectory, "fictional-itemized-receipt.pdf");
const certificatePath = resolve(
  downloadsDirectory,
  "fictional-medical-certificate.pdf",
);
const signedCertificatePath = resolve(
  downloadsDirectory,
  "fictional-medical-certificate-signed.pdf",
);
const meetingNotesPath = resolve(
  resourcesDirectory,
  "fictional-meeting-notes.md",
);
const claimSubmissionPath = resolve(
  resourcesDirectory,
  "fictional-claim-submission.md",
);
const archivePath = resolve(
  downloadsDirectory,
  "two-agent-workshop-sample-files.zip",
);

mkdirSync(downloadsDirectory, { recursive: true });

const border = { style: BorderStyle.SINGLE, size: 1, color: "B8C2CC" };
const borders = { top: border, bottom: border, left: border, right: border };

function tableCell(label, value, shaded = false) {
  return new TableCell({
    borders,
    width: { size: 4513, type: WidthType.DXA },
    shading: shaded
      ? { fill: "DCEAF2", type: ShadingType.CLEAR }
      : undefined,
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    children: [
      new Paragraph({
        children: [
          new TextRun({ text: label, bold: true }),
          new TextRun({ text: `\n${value}` }),
        ],
      }),
    ],
  });
}

async function createClaimForm() {
  const document = new Document({
    styles: {
      default: { document: { run: { font: "Arial", size: 22 } } },
      paragraphStyles: [
        {
          id: "Heading1",
          name: "Heading 1",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { font: "Arial", size: 32, bold: true, color: "173F5F" },
          paragraph: { spacing: { before: 180, after: 180 }, outlineLevel: 0 },
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: 11906, height: 16838 },
            margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 },
          },
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "FICTIONAL TRAINING DOCUMENT - NOT A REAL CLAIM",
                bold: true,
                color: "B42318",
              }),
            ],
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            children: [new TextRun("Fictional Claim Form")],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 260 },
            children: [
              new TextRun(
                "Synthetic learner sample for document-readiness training only",
              ),
            ],
          }),
          new Table({
            width: { size: 9026, type: WidthType.DXA },
            columnWidths: [4513, 4513],
            rows: [
              new TableRow({
                children: [
                  tableCell("Training reference", "TRAIN-CLM-2048", true),
                  tableCell("Form status", "Completed", true),
                ],
              }),
              new TableRow({
                children: [
                  tableCell("Submitter", "Training Participant A"),
                  tableCell("Submission date", "12 September 2026"),
                ],
              }),
              new TableRow({
                children: [
                  tableCell("Service date", "11 September 2026"),
                  tableCell(
                    "Claim category",
                    "Fictional outpatient training case",
                  ),
                ],
              }),
              new TableRow({
                children: [
                  tableCell("Provider", "Example Health Training Center"),
                  tableCell("Requested amount", "THB 1,250.00"),
                ],
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 260, after: 100 },
            children: [new TextRun({ text: "Documents included", bold: true })],
          }),
          new Paragraph({ text: "1. Fictional claim form" }),
          new Paragraph({ text: "2. Itemized receipt" }),
          new Paragraph({ text: "3. Medical certificate" }),
          new Paragraph({
            spacing: { before: 260 },
            children: [
              new TextRun(
                "Declaration: This package contains synthetic information created only for a workshop exercise.",
              ),
            ],
          }),
          new Paragraph({
            spacing: { before: 200 },
            children: [
              new TextRun({ text: "Training submitter signature: ", bold: true }),
              new TextRun("Training Participant A"),
            ],
          }),
        ],
      },
    ],
  });

  writeFileSync(claimFormPath, await Packer.toBuffer(document));
}

function createPdf(path, title, drawContent) {
  return new Promise((resolvePromise, rejectPromise) => {
    const document = new PDFDocument({
      size: "A4",
      margins: { top: 48, right: 54, bottom: 48, left: 54 },
      info: {
        Title: title,
        Author: "AIA Enjoy Building Agent Day",
        Subject: "Synthetic workshop training document",
        Keywords: "fictional, training, claims readiness",
      },
    });
    const stream = createWriteStream(path);
    stream.on("finish", resolvePromise);
    stream.on("error", rejectPromise);
    document.pipe(stream);

    document
      .font("Helvetica-Bold")
      .fontSize(10)
      .fillColor("#B42318")
      .text("FICTIONAL TRAINING DOCUMENT - NOT A REAL CLAIM", {
        align: "center",
      });
    document.moveDown(1);
    document
      .font("Helvetica-Bold")
      .fontSize(21)
      .fillColor("#173F5F")
      .text(title, { align: "center" });
    document.moveDown(0.4);
    document
      .font("Helvetica")
      .fontSize(10)
      .fillColor("#354052")
      .text("Synthetic learner sample for document-readiness training only", {
        align: "center",
      });
    document.moveDown(1.8);

    drawContent(document);

    document
      .font("Helvetica-Oblique")
      .fontSize(9)
      .fillColor("#667085")
      .text(
        "This document contains no real customer, health, identity, or claim information.",
        54,
        780,
        { width: 487, align: "center" },
      );
    document.end();
  });
}

function labelValue(document, label, value) {
  document
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor("#173F5F")
    .text(label, { continued: true })
    .font("Helvetica")
    .fillColor("#1F2937")
    .text(` ${value}`);
  document.moveDown(0.7);
}

async function createReceipt() {
  await createPdf(receiptPath, "Fictional Itemized Receipt", (document) => {
    labelValue(document, "Receipt number:", "SYN-RCP-2048");
    labelValue(document, "Training reference:", "TRAIN-CLM-2048");
    labelValue(document, "Provider:", "Example Health Training Center");
    labelValue(document, "Service date:", "11 September 2026");
    labelValue(document, "Receipt date:", "11 September 2026");
    document.moveDown(0.6);
    document
      .font("Helvetica-Bold")
      .fontSize(12)
      .fillColor("#173F5F")
      .text("Itemized services");
    document.moveDown(0.7);
    labelValue(document, "Fictional outpatient consultation:", "THB 900.00");
    labelValue(document, "Fictional facility service:", "THB 350.00");
    document.moveDown(0.4);
    document
      .moveTo(54, document.y)
      .lineTo(541, document.y)
      .strokeColor("#B8C2CC")
      .stroke();
    document.moveDown(0.8);
    labelValue(document, "Total paid:", "THB 1,250.00");
    labelValue(document, "Payment status:", "Paid for fictional training case");
  });
}

function createSignatureImage() {
  const image = new PNG({ width: 520, height: 150, colorType: 6 });

  function drawDot(x, y, radius = 3) {
    for (let offsetY = -radius; offsetY <= radius; offsetY += 1) {
      for (let offsetX = -radius; offsetX <= radius; offsetX += 1) {
        if (offsetX * offsetX + offsetY * offsetY > radius * radius) continue;
        const pixelX = Math.round(x + offsetX);
        const pixelY = Math.round(y + offsetY);
        if (
          pixelX < 0 ||
          pixelX >= image.width ||
          pixelY < 0 ||
          pixelY >= image.height
        ) {
          continue;
        }
        const index = (image.width * pixelY + pixelX) << 2;
        image.data[index] = 28;
        image.data[index + 1] = 62;
        image.data[index + 2] = 94;
        image.data[index + 3] = 235;
      }
    }
  }

  function drawBezier(start, controlOne, controlTwo, end, radius = 3) {
    for (let step = 0; step <= 180; step += 1) {
      const time = step / 180;
      const inverse = 1 - time;
      const x =
        inverse ** 3 * start.x +
        3 * inverse ** 2 * time * controlOne.x +
        3 * inverse * time ** 2 * controlTwo.x +
        time ** 3 * end.x;
      const y =
        inverse ** 3 * start.y +
        3 * inverse ** 2 * time * controlOne.y +
        3 * inverse * time ** 2 * controlTwo.y +
        time ** 3 * end.y;
      drawDot(x, y, radius);
    }
  }

  drawBezier(
    { x: 22, y: 102 },
    { x: 42, y: 8 },
    { x: 145, y: 16 },
    { x: 108, y: 92 },
    4,
  );
  drawBezier(
    { x: 108, y: 92 },
    { x: 82, y: 134 },
    { x: 190, y: 119 },
    { x: 202, y: 66 },
  );
  drawBezier(
    { x: 176, y: 94 },
    { x: 230, y: 34 },
    { x: 237, y: 129 },
    { x: 278, y: 76 },
  );
  drawBezier(
    { x: 270, y: 78 },
    { x: 323, y: 26 },
    { x: 343, y: 122 },
    { x: 390, y: 73 },
  );
  drawBezier(
    { x: 382, y: 76 },
    { x: 422, y: 38 },
    { x: 437, y: 105 },
    { x: 474, y: 72 },
  );
  drawBezier(
    { x: 52, y: 126 },
    { x: 180, y: 116 },
    { x: 348, y: 136 },
    { x: 492, y: 112 },
    2,
  );

  return PNG.sync.write(image);
}

async function createMedicalCertificate(path, signed = false) {
  const title = signed
    ? "Fictional Medical Certificate - Signed"
    : "Fictional Medical Certificate";

  await createPdf(path, title, (document) => {
    labelValue(document, "Certificate number:", "SYN-MED-2048");
    labelValue(document, "Training reference:", "TRAIN-CLM-2048");
    labelValue(document, "Provider:", "Example Health Training Center");
    labelValue(document, "Service date:", "11 September 2026");
    labelValue(document, "Service category:", "General consultation training case");
    document.moveDown(1.2);
    document
      .font("Helvetica")
      .fontSize(11)
      .fillColor("#1F2937")
      .text(
        "This certificate confirms only that the fictional service listed above is part of the synthetic workshop case. It contains no diagnosis or medical conclusion.",
      );
    document.moveDown(2);
    document
      .font("Helvetica-Bold")
      .fontSize(11)
      .fillColor("#173F5F")
      .text("Provider signature:");

    if (signed) {
      const signatureTop = document.y + 4;
      document.image(createSignatureImage(), 54, signatureTop, { width: 210 });
      document.y = signatureTop + 66;
      document
        .font("Helvetica-Oblique")
        .fontSize(9)
        .fillColor("#667085")
        .text("Synthetic handwritten signature image for training only");
    } else {
      document.moveDown(1.8);
      document
        .moveTo(54, document.y)
        .lineTo(310, document.y)
        .strokeColor("#667085")
        .stroke();
    }
  });
}

function updateArchive() {
  execFileSync(
    "zip",
    [
      "-j",
      "-FS",
      archivePath,
      resolve(downloadsDirectory, "project-northstar-reference-pack.docx"),
      meetingNotesPath,
      resolve(downloadsDirectory, "fictional-claims-readiness-guide.docx"),
      claimFormPath,
      receiptPath,
      certificatePath,
      signedCertificatePath,
      claimSubmissionPath,
    ],
    { stdio: "inherit" },
  );
}

await createClaimForm();
await Promise.all([
  createReceipt(),
  createMedicalCertificate(certificatePath),
  createMedicalCertificate(signedCertificatePath, true),
]);
updateArchive();

console.log("Generated fictional claims package in docs/public/downloads.");
