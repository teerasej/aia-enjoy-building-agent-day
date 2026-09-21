---
layout: home

hero:
  name: Meeting Action Follow-up Assistant
  text: สร้าง AI Agent ที่ช่วยเปลี่ยนบันทึกประชุมให้เป็นงานที่ติดตามต่อได้
  tagline: เรียนรู้ผ่าน Agent ตัวเดียว ตั้งแต่ Instruction → Knowledge → Tools → Human Review
  actions:
    - theme: brand
      text: เริ่มแบบฝึกหัดที่ 1
      link: /exercises/01-create-meeting-action-agent
    - theme: alt
      text: ดาวน์โหลดไฟล์ทั้งหมด
      link: https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/meeting-action-assistant-sample-files.zip

features:
  - title: 1. Instruction
    details: สร้าง Agent ที่แยก Decisions, Action items, Open questions และ Missing information โดยไม่เดาข้อมูล
    link: /exercises/01-create-meeting-action-agent
  - title: 2. Knowledge
    details: เพิ่มแฟ้ม Project Northstar เพื่อให้ Agent ใช้บริบทจากแหล่งข้อมูลที่กำหนด
    link: /exercises/02-add-project-knowledge
  - title: 3. Tools
    details: ใช้ Office 365 Outlook สร้าง draft หลังผู้ใช้ตรวจและยืนยัน โดยไม่มีการส่ง email
    link: /exercises/03-create-outlook-draft
  - title: 4. Human Review
    details: ทดสอบกรณีข้อมูลขาด ขัดแย้ง และคำขอที่ Agent ต้องปฏิเสธก่อนจบงาน
    link: /exercises/04-test-and-review
---

## ก่อนเริ่ม

- เข้า Microsoft Copilot Studio และเลือก Environment ที่ผู้สอนกำหนดได้
- ใช้ Microsoft 365 และ Outlook ด้วยบัญชีสำหรับการอบรมได้
- ดาวน์โหลด [ไฟล์ประกอบทั้งหมด](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/meeting-action-assistant-sample-files.zip) ไว้ก่อนเริ่ม
- ใช้เฉพาะข้อมูลสมมติในชุดฝึก ห้ามใช้บันทึกประชุม email address หรือข้อมูลภายในจริง

> **Readiness:** `Instruction` เป็น hands-on core ส่วน `Knowledge` และ `Draft an email message` ต้องผ่านการตรวจ learner account, Dataverse search, file upload, Office 365 Outlook connection, DLP policy และ training mailbox หากยังไม่พร้อม ให้ติดตาม Instructor demonstration โดยไม่พยายามหลีกเลี่ยงนโยบายของ Environment

## กำหนดการ Workshop

| เวลา | หัวข้อ | ผลลัพธ์ |
|---|---|---|
| 13:00–13:15 | Wow demo | messy notes → action summary → Outlook draft |
| 13:15–14:30 | Instruction | สร้างและทดสอบ Agent ร่วมกัน |
| 14:30–14:45 | Break | พัก 15 นาที |
| 14:45–15:15 | Knowledge | เพิ่มเอกสาร Project Northstar |
| 15:15–15:40 | Tools | เพิ่ม `Draft an email message` และตรวจ `Drafts` |
| 15:40–15:50 | Reliability and safety testing | ทดสอบข้อมูลขาด ขัดแย้ง และคำขอให้ส่ง email |
| 15:50–16:00 | Reflect and transfer | มองหางานซ้ำที่ใช้รูปแบบเดียวกันได้ |

Workshop นี้ไม่ส่ง email และไม่ Publish Agent ไปใช้งานจริง
