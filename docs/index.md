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
    details: สร้าง Prompt Tool ที่เปลี่ยนสรุปประชุมเป็น follow-up brief รูปแบบมาตรฐาน
    link: /exercises/03-create-follow-up-brief-tool
  - title: 4. Human Review
    details: ทดสอบกรณีข้อมูลขาด ขัดแย้ง และคำขอที่ Agent ต้องปฏิเสธก่อนจบงาน
    link: /exercises/04-test-and-review
---

## ก่อนเริ่ม

- เข้า Microsoft Copilot Studio และเลือก Environment ที่ผู้สอนกำหนดได้
- ใช้บัญชีสำหรับการอบรมที่มีสิทธิ์สร้าง Prompt Tool ได้
- ดาวน์โหลด [ไฟล์ประกอบทั้งหมด](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/meeting-action-assistant-sample-files.zip) ไว้ก่อนเริ่ม
- ใช้เฉพาะข้อมูลสมมติในชุดฝึก ห้ามใช้บันทึกประชุม ข้อมูลติดต่อ หรือข้อมูลภายในจริง

> **Readiness:** `Instruction` เป็น hands-on core ส่วน `Knowledge` และ Prompt Tool ต้องผ่านการตรวจ learner account, Dataverse search, file upload, supported region, Dataverse, maker permission และ Copilot Credits หากยังไม่พร้อม ให้ติดตาม Instructor demonstration โดยไม่พยายามหลีกเลี่ยงนโยบายของ Environment

## กำหนดการ Workshop

| เวลา | หัวข้อ | ผลลัพธ์ |
|---|---|---|
| 13:30–14:20 | Instruction | สร้างและทดสอบ Agent ร่วมกัน |
| 14:20–14:45 | Knowledge | เพิ่มเอกสาร Project Northstar |
| 14:45–15:15 | Tools | สร้างและเรียก `Create Meeting Follow-up Brief` |
| 15:15–15:35 | Reliability and Human Review | ทดสอบข้อมูลขาด ขัดแย้ง และคำขอที่เกินขอบเขต |
| 15:35–15:45 | Final Wow demo | messy notes → grounded summary → standardized follow-up brief |
| 15:45–16:00 | Q&A and workplace transfer | ถามตอบและมองหางานซ้ำที่ใช้รูปแบบเดียวกันได้ |

Workshop นี้ไม่เชื่อมต่อบริการภายนอกและไม่ Publish Agent ไปใช้งานจริง
