# AIA Enjoy Building Agent Day

Workshop ภาษาไทยสำหรับสร้าง `Meeting Action Follow-up Assistant` ใน Microsoft Copilot Studio ตั้งแต่สรุปบันทึกประชุม เพิ่ม `Knowledge` ไปจนถึงสร้าง email ใน Outlook `Drafts` เพื่อให้คนตรวจครับ

## เริ่มเรียน

- [เปิดเว็บไซต์ Workshop](https://teerasej.github.io/aia-enjoy-building-agent-day/)
- [เริ่มแบบฝึกหัดที่ 1](./docs/exercises/01-create-meeting-action-agent.md)
- [ดูไฟล์ต้นฉบับที่แก้ไขได้](./docs/)

> **ข้อมูลสำหรับการอบรม:** โครงการ การประชุม ชื่อบุคคล วันที่ งาน และข้อความ email ทั้งหมดในชุดนี้เป็นข้อมูลสมมติ ห้ามใช้บันทึกประชุม ข้อมูลบุคคล email address หรือข้อมูลภายในจริงในการอบรม

## เส้นทางการเรียนรู้

1. [Instruction — สร้าง Meeting Action Follow-up Assistant](./docs/exercises/01-create-meeting-action-agent.md)
2. [Knowledge — เพิ่ม Project Knowledge](./docs/exercises/02-add-project-knowledge.md)
3. [Tools — สร้าง Outlook Draft](./docs/exercises/03-create-outlook-draft.md)
4. [Review — ทดสอบความน่าเชื่อถือและ Human Review](./docs/exercises/04-test-and-review.md)

## ดาวน์โหลดไฟล์ประกอบ

- [ดาวน์โหลดไฟล์ประกอบทั้งหมด (ZIP)](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/meeting-action-assistant-sample-files.zip)
- [Project Northstar Brief (DOCX)](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-project-brief.docx)
- [Project Northstar Roles (DOCX)](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-project-roles.docx)
- [Meeting Follow-up Guidelines (DOCX)](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-follow-up-guidelines.docx)

ไฟล์ข้อความสำหรับทดสอบอยู่ใน [Resources](./docs/resources/index.md)

## กำหนดการ Workshop ฉบับร่าง

**เวลา:** 13:00–16:00 น.

| เวลา | หัวข้อ | ผลลัพธ์ |
|---|---|---|
| 13:00–13:15 | Wow demo | เห็นบันทึกประชุมเปลี่ยนเป็น action summary และ Outlook draft |
| 13:15–14:30 | Instruction | สร้าง Agent และแยก Decisions, Action items, Open questions และ Missing information |
| 14:30–14:45 | Break | พัก 15 นาที |
| 14:45–15:15 | Knowledge | เพิ่มเอกสาร Project Northstar และทดสอบ grounded answer เมื่อ Environment พร้อม |
| 15:15–15:40 | Tools | เพิ่ม `Draft an email message` และตรวจ email ใน Outlook `Drafts` เมื่อผ่าน readiness check |
| 15:40–15:50 | Reliability and safety testing | ทดสอบ owner ที่หายไป วันที่ขัดแย้ง suggestion และคำขอให้ส่ง email |
| 15:50–16:00 | Reflect and transfer | มองหางานซ้ำลักษณะเดียวกันโดยไม่สร้าง Agent อีกตัวในห้องอบรม |

Workshop ใช้ Agent ตัวเดียวตลอดลำดับ **Instruction → Knowledge → Tools** ไม่มีช่วงเลือก use case ระหว่างกิจกรรม

## ขอบเขต

- ใช้ Copilot Studio Standard harness เป็นเส้นทางหลัก
- `Knowledge` และ Office 365 Outlook Tool ต้องผ่าน readiness check ของ Environment
- `Draft an email message` สร้าง draft เท่านั้น ไม่มีการส่ง email
- ไม่ครอบคลุม production publishing, shared mailbox, distribution list, automatic sending, custom connector, API, MCP หรือการเปลี่ยน tenant policy

## เอกสารอ้างอิง

- [Create and delete agents](https://learn.microsoft.com/microsoft-copilot-studio/authoring-first-bot)
- [Upload files as a knowledge source](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-file-upload)
- [Use Power Platform connectors as tools](https://learn.microsoft.com/microsoft-copilot-studio/advanced-connectors)
- [Office 365 Outlook connector](https://learn.microsoft.com/connectors/office365/)
