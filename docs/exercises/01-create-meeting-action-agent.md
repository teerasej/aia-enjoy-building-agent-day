# แบบฝึกหัดที่ 1 สร้าง Meeting Action Follow-up Agent

เราจะสร้าง Agent ที่เปลี่ยนบันทึกประชุมซึ่งมีข้อสรุป งาน และความเห็นปะปนกันให้เป็นข้อมูลที่ตรวจต่อได้ง่าย จากนั้นเพิ่ม `Knowledge` และสร้าง Prompt Tool เพื่อจัดผลลัพธ์ให้อยู่ในรูปแบบเดียวกันครับ

> **License:** ต้องตรวจสอบก่อนเริ่มอบรมว่า learner account สร้างและทดสอบ Agent, เพิ่มไฟล์เป็น `Knowledge` และสร้าง Prompt Tool ได้ รวมถึง Environment มี Dataverse, Dataverse search, supported region และ Copilot Credits เพียงพอ

## Prerequisites

- เข้า Microsoft Copilot Studio และเลือก Environment ที่ผู้สอนกำหนด
- ดาวน์โหลด [Project Northstar Reference Pack](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/project-northstar-reference-pack.docx)
- เปิด [บันทึกประชุม Project Northstar](../resources/fictional-meeting-notes.md)
- ใช้เฉพาะข้อมูลสมมติในแบบฝึกหัด

---

## Scenario จัดระเบียบบันทึกประชุม Project Northstar

ทีม Project Northstar กำลังเตรียมทดลองใช้ internal request tracker บันทึกประชุมมีทั้งเรื่องที่ตกลงแล้ว งานที่ต้องทำ คำถาม และข้อเสนอที่ยังไม่ได้อนุมัติ Agent ต้องรักษาข้อเท็จจริงและเปิดช่องให้คนยืนยันข้อมูลที่ขาดครับ

### Practice 1 สร้างและทดสอบ Agent

**Primary target:** สร้าง Agent ที่จัดบันทึกประชุมโดยไม่แต่ง owner, due date หรือ decision ที่ไม่มีในต้นฉบับ

1. เปิด Copilot Studio ตรวจสอบ Environment ให้ตรงกับที่ผู้สอนกำหนด แล้วไปที่หน้า `Agents`
2. เลือก `New agent` แล้วเลือก `Create blank agent`
3. ตั้งชื่อ Agent ดังนี้ แล้วเลือก `Create`

   ```text
   Meeting Action Follow-up Agent [ชื่อเล่น]
   ```

4. รอจนระบบ provisioning Agent เสร็จและเปิดหน้า Agent ให้เรียบร้อย อย่าเปลี่ยนหน้าในระหว่างนี้
5. ไปที่ส่วน `Instructions` วางข้อความต่อไปนี้ แล้วเลือก `Save`

   ```text
   Organize synthetic training meeting notes into the required sections.
   Return Decisions, Action items, Open questions, and Missing information.
   Preserve names and dates exactly. Treat an item as a decision only when the
   notes explicitly confirm it. Never invent an owner, due date, approval, or
   completion status. Use configured Knowledge only for project context.
   When the user requests a standardized brief, use Create Meeting Follow-up Brief
   with the reviewed meeting summary. Always require human review.
   ```

6. เปิด `Test your agent` วาง [บันทึกประชุม Project Northstar](../resources/fictional-meeting-notes.md) แล้วส่งคำขอนี้

   ```text
   จัดบันทึกประชุมนี้เป็น Decisions, Action items, Open questions และ
   Missing information โดยห้ามเดา owner, due date หรือสถานะการอนุมัติ
   ```

   ตรวจว่า `participant FAQ` ไม่มี owner และ `weekly leaderboard` ไม่ถูกเปลี่ยนเป็น decision

#### Pause and compare

- Agent จัดข้อมูลส่วนใดได้ดี
- ข้อมูลใดต้องรอให้คนยืนยัน

#### Checkpoint

- ผลลัพธ์มีสี่ส่วนและไม่เพิ่มข้อเท็จจริงที่ไม่มีในบันทึก

---

### Practice 2 เพิ่ม Project Knowledge

**Primary target:** เพิ่มไฟล์อ้างอิงหนึ่งไฟล์เพื่อให้ Agent ตอบบริบทโครงการโดยไม่ใช้ Knowledge เติมหลักฐานการประชุม

1. เปิด Agent แล้วไปที่ `Knowledge`
2. เลือก `Add knowledge` และอัปโหลด `project-northstar-reference-pack.docx`
3. ตั้งชื่อแหล่งข้อมูลดังนี้ แล้วเลือก `Add to agent` และ `Save`

   ```text
   Project Northstar Reference Pack
   ```

4. เริ่มบทสนทนาใหม่แล้วถาม

   ```text
   Project Northstar มีเป้าหมายอะไร ตอบจาก Knowledge และบอกชื่อแหล่งข้อมูลที่ใช้เมื่อทำได้
   ```

5. เริ่มบทสนทนาใหม่แล้วถามคำถามตรวจขอบเขต

   ```text
   จาก meeting notes ใครเป็น owner ของ participant FAQ
   ถ้า notes ไม่ได้ระบุ ห้ามใช้บทบาททั่วไปใน Knowledge มาเดาแทน
   ```

6. ตรวจว่า Agent อธิบายบริบทจาก Knowledge แต่ยังบอกว่า owner ต้องให้คนยืนยัน

#### Pause and compare

Knowledge เปรียบเหมือนแฟ้มอ้างอิงของเพื่อนร่วมงาน แฟ้มช่วยอธิบายบริบท แต่ไม่ใช่หลักฐานว่าใครได้รับมอบหมายงานในการประชุมครั้งนี้ครับ

#### Checkpoint

- Agent ใช้ Knowledge อธิบายโครงการและไม่เติม owner ที่หายไป

> **⚠️ Environment blocked:** หากไฟล์ไม่พร้อมใช้งาน ให้บันทึกข้อความที่พบและติดตาม Instructor demonstration ห้ามใช้ไฟล์จริงหรือพยายามหลีกเลี่ยงนโยบาย Environment

---

### Practice 3 สร้าง Meeting Prompt Tool

**Primary target:** สร้าง Prompt Tool ที่เปลี่ยน meeting summary ที่ตรวจแล้วเป็น follow-up brief รูปแบบมาตรฐาน

1. ไปที่ `Tools` ของ Agent แล้วเลือก `Add a tool` > `Add new Prompt`
2. ตั้งชื่อ Prompt และเพิ่ม Text input ตามค่าต่อไปนี้

   - **Prompt name**

     ```text
     Create Meeting Follow-up Brief
     ```

   - **Text input**

     ```text
     MeetingSummary
     ```

3. วาง Prompt ต่อไปนี้ และแทรก `MeetingSummary` input ในบรรทัดสุดท้าย

   ```text
   Transform the reviewed synthetic meeting summary into a follow-up brief.
   Use only information supplied in MeetingSummary.

   Return these sections in this order:
   Executive summary
   Confirmed decisions
   Action tracker
   Missing information
   Open questions
   Human review required

   Keep Executive summary to no more than three bullets.
   Format Action tracker as Task | Owner | Due date | Review status.
   Preserve supplied names and dates exactly.
   Mark missing or conflicting information for review.
   Never turn a suggestion into a decision or invent information.
   Never claim that anything was saved, sent, approved, or completed.
   End by asking a person to review and correct the brief before use.

   MeetingSummary:
   [insert MeetingSummary input here]
   ```

4. ใส่ sample value แล้วเลือก `Test`

   ```text
   Decision: Use the shared request form for the pilot.
   Action: Prepare the participant FAQ by 13 October 2026. Owner is missing.
   Suggestion: A weekly leaderboard was discussed but not approved.
   Open question: Who approves category changes after the pilot?
   ```

5. ตรวจว่า output มีครบหกส่วน owner ยังต้อง Review และ leaderboard ไม่อยู่ใน `Confirmed decisions` จากนั้นเลือก `Save`
6. กลับไปที่ Agent และเพิ่ม Prompt นี้ใน `Tools` หากยังไม่ถูกเพิ่ม แล้วเลือก `Save`
7. เริ่มบทสนทนาใหม่ สรุป meeting notes เหมือน Practice 1 แล้วขอเรียก Tool

   ```text
   ใช้ Create Meeting Follow-up Brief กับ meeting summary ที่ตรวจแล้ว
   เพื่อสร้าง standardized follow-up brief สำหรับ Human Review
   ```

#### Pause and compare

- `Instructions` ควบคุมขอบเขตของ Agent
- `Knowledge` ให้บริบท
- Prompt Tool จัดผลลัพธ์ให้ใช้รูปแบบเดิมซ้ำได้

#### Checkpoint

- Tool สร้าง brief รูปแบบมาตรฐาน รักษาข้อมูลที่ขาด และไม่อ้างว่าทำ external action

## Summary

เราได้สร้าง Agent ตัวแรกครบเส้นทาง `Instruction → Knowledge → Prompt Tool → Human Review` ขั้นต่อไปเราจะใช้รูปแบบเดิมกับงานตรวจความพร้อมของเอกสาร claim ครับ

[กลับหน้าหลัก](../index.md) | [แบบฝึกหัดถัดไป สร้าง Claims Document Readiness Agent](./02-create-claims-document-readiness-agent.md)
