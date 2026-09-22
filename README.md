# AIA Enjoy Building Agent Day

Workshop ภาษาไทยสำหรับสร้าง `Meeting Action Follow-up Assistant` ใน Microsoft Copilot Studio ตั้งแต่สรุปบันทึกประชุม เพิ่ม `Knowledge` ไปจนถึงใช้ Prompt Tool สร้าง follow-up brief ที่พร้อมให้คนตรวจครับ

## เริ่มเรียน

- [เปิดเว็บไซต์ Workshop](https://teerasej.github.io/aia-enjoy-building-agent-day/)
- [เริ่มแบบฝึกหัดที่ 1](./docs/exercises/01-create-meeting-action-agent.md)
- [ดูไฟล์ต้นฉบับที่แก้ไขได้](./docs/)

> **ข้อมูลสำหรับการอบรม:** โครงการ การประชุม ชื่อบุคคล วันที่ งาน และข้อความทั้งหมดในชุดนี้เป็นข้อมูลสมมติ ห้ามใช้บันทึกประชุม ข้อมูลบุคคล ข้อมูลติดต่อ หรือข้อมูลภายในจริงในการอบรม

## เส้นทางการเรียนรู้

1. [Instruction — สร้าง Meeting Action Follow-up Assistant](./docs/exercises/01-create-meeting-action-agent.md)
2. [Knowledge — เพิ่ม Project Knowledge](./docs/exercises/02-add-project-knowledge.md)
3. [Tools — สร้าง Follow-up Brief](./docs/exercises/03-create-follow-up-brief-tool.md)
4. [Review — ทดสอบความน่าเชื่อถือและ Human Review](./docs/exercises/04-test-and-review.md)

## ดาวน์โหลดไฟล์ประกอบ

- [ดาวน์โหลดไฟล์ประกอบทั้งหมด (ZIP)](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/meeting-action-assistant-sample-files.zip)
- [Project Northstar Brief (DOCX)](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-project-brief.docx)
- [Project Northstar Roles (DOCX)](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-project-roles.docx)
- [Meeting Follow-up Guidelines (DOCX)](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-follow-up-guidelines.docx)

ไฟล์ข้อความสำหรับทดสอบอยู่ใน [Resources](./docs/resources/index.md)

## กำหนดการ Workshop ฉบับร่าง

**เวลา:** 13:30–16:00 น.

| เวลา | หัวข้อ | ผลลัพธ์ |
|---|---|---|
| 13:30–14:20 | Instruction | สร้าง Agent และแยก Decisions, Action items, Open questions และ Missing information |
| 14:20–14:45 | Knowledge | เพิ่มเอกสาร Project Northstar และทดสอบ grounded answer เมื่อ Environment พร้อม |
| 14:45–15:15 | Tools | สร้างและเรียก `Create Meeting Follow-up Brief` Prompt Tool |
| 15:15–15:35 | Reliability and Human Review | ทดสอบ owner ที่หายไป วันที่ขัดแย้ง suggestion และคำขอที่เกินขอบเขต |
| 15:35–15:45 | Final Wow demo | messy notes → grounded summary → standardized follow-up brief |
| 15:45–16:00 | Q&A and workplace transfer | ตอบคำถามและชวนมองหางานซ้ำที่ใช้รูปแบบเดียวกันได้ |

Workshop ใช้ Agent ตัวเดียวตลอดลำดับ **Instruction → Knowledge → Tools** ไม่มีช่วงเลือก use case ระหว่างกิจกรรม

## ขอบเขต

- ใช้ Copilot Studio Standard harness เป็นเส้นทางหลัก
- `Knowledge` และ Prompt Tool ต้องผ่าน readiness check ของ Environment
- Prompt Tool ทำงานภายใน Copilot Studio และไม่เชื่อมต่อบริการภายนอก
- ไม่ครอบคลุม production publishing, connector, external action, API, MCP หรือการเปลี่ยน tenant policy

## เอกสารอ้างอิง

- [Create and delete agents](https://learn.microsoft.com/microsoft-copilot-studio/authoring-first-bot)
- [Upload files as a knowledge source](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-file-upload)
- [Create a prompt](https://learn.microsoft.com/ai-builder/create-a-custom-prompt)
- [Prompts overview](https://learn.microsoft.com/microsoft-copilot-studio/prompts-overview)
