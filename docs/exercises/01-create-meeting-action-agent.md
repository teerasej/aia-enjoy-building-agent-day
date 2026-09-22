# แบบฝึกหัดที่ 1 สร้าง Meeting Action Follow-up Assistant

เราจะเปลี่ยนบันทึกประชุมที่มีทั้งข้อสรุป งานที่ต้องทำ และความเห็นปะปนกัน ให้เป็นรายการที่คนอ่านและตรวจต่อได้ง่าย Agent ทำหน้าที่เหมือนผู้ช่วยจัดโต๊ะประชุมหลังทุกคนลุกออกไป แต่จะไม่แต่ง owner, deadline หรือสถานะงานขึ้นเองนะครับ

> **License:** ต้องมีสิทธิ์สร้าง บันทึก และทดสอบ Agent ใน Microsoft Copilot Studio สิทธิ์จริงของ learner account ต้องตรวจสอบก่อนเริ่มอบรม

## Prerequisites

- เข้า Microsoft Copilot Studio และเลือก Environment ที่ผู้สอนกำหนดได้
- เปิด [บันทึกประชุม Project Northstar](../resources/fictional-meeting-notes.md)
- ใช้เฉพาะข้อมูลสมมติในแบบฝึกหัด

---

## Scenario จัดระเบียบบันทึกประชุม Project Northstar

ทีม Project Northstar เพิ่งประชุมเรื่องการทดลองใช้ internal request tracker บันทึกประชุมมีทั้งสิ่งที่ตกลงแล้ว งานที่ต้องทำ คำถาม และข้อเสนอที่ยังไม่ได้อนุมัติ เราจะสร้าง Agent ให้แยกข้อมูลเหล่านี้โดยคงข้อเท็จจริงไว้เหมือนต้นฉบับ

### Practice 1 สร้าง Agent ด้วยภาษาธรรมชาติ

**Primary target:** สร้าง Agent ที่แยกประเภทข้อมูลจากบันทึกประชุมและรักษาขอบเขตการตัดสินใจของมนุษย์

1. เปิด Copilot Studio และตรวจสอบ Environment ที่มุมบนของหน้าให้ตรงกับที่ผู้สอนกำหนด
2. ไปที่ `Home` หรือ `Agents` แล้วเลือกเส้นทางสร้าง Agent ด้วยภาษาธรรมชาติ
3. วางข้อความต่อไปนี้ในช่อง prompt แล้วกดส่ง

   ```text
   You are a Meeting Action Follow-up Assistant.
   Turn synthetic meeting notes into four sections: Decisions, Action items,
   Open questions, and Missing information.
   Preserve every person name and date exactly as written.
   Treat an item as a decision only when the notes explicitly say it was agreed,
   approved, confirmed, or decided. Never turn a suggestion into a decision.
   For every action item, show the task, owner, and due date. If an owner or due date
   is absent or conflicting, label it for human review instead of guessing.
   Use configured Knowledge only for project context and name the source when possible.
   When the user asks for a standardized follow-up brief, use the configured
   Create Meeting Follow-up Brief tool with the reviewed meeting summary as input.
   Never claim that information was saved, delivered, approved, or completed.
   Never request or expose real meeting notes, personal data, credentials, or internal data.
   ```

4. เลือก `Create`
5. หากระบบยังไม่ได้ตั้งชื่อ ให้ตั้งชื่อดังนี้

   ```text
   Meeting Action Follow-up Assistant [ชื่อเล่น]
   ```

6. ตรวจ `Instructions` ให้มีหัวข้อ `Decisions`, `Action items`, `Open questions` และ `Missing information`
7. เลือก `Save`

> **⚠️ Note:** หากไม่เห็นช่องสร้างด้วยภาษาธรรมชาติ ให้เลือก `Create blank agent` ตั้งชื่อ Agent แล้ววาง prompt ด้านบนใน `Instructions`

#### Checkpoint

- Agent มีชื่อของผู้เรียนและ Instructions ระบุชัดว่าจะไม่เดา owner, due date หรือ decision

### Practice 2 สรุปบันทึกประชุมชุดแรก

**Primary target:** ใช้ Agent เปลี่ยนบันทึกประชุมสมมติเป็นสรุปสี่ส่วนที่แยกข้อเท็จจริงออกจากข้อเสนอ

1. เปิด `Test your agent` และเริ่มบทสนทนาใหม่
2. เปิด [บันทึกประชุม Project Northstar](../resources/fictional-meeting-notes.md) แล้วคัดลอกเฉพาะส่วน `Meeting notes for testing`
3. วางบันทึกประชุมตามด้วยคำขอต่อไปนี้

   ```text
   ช่วยจัดบันทึกประชุมนี้เป็น Decisions, Action items, Open questions
   และ Missing information โดยห้ามเดา owner, due date หรือสถานะการอนุมัติ
   ```

4. ตรวจว่าผลลัพธ์แยกสี่ส่วนชัดเจน
5. ตรวจว่า Agent ระบุ owner และวันที่ตามต้นฉบับ
6. ตรวจว่า `participant FAQ` ถูกระบุว่าไม่มี owner
7. ตรวจว่าข้อเสนอเรื่อง weekly leaderboard ไม่ถูกเปลี่ยนเป็น decision
8. เปรียบเทียบกับ [ตัวอย่างผลลัพธ์](../resources/expected-meeting-summary.md)

#### Checkpoint

- Agent แยก decision, action, question และ missing information ได้ โดยไม่เพิ่มข้อมูลที่ไม่มีในบันทึก

## Summary

เราได้ Agent ตัวแรกที่จัดบันทึกประชุมให้เป็นงานที่ตรวจต่อได้ โดยยังเก็บการยืนยันข้อสรุป owner และ deadline ไว้กับคน ขั้นต่อไปเราจะเพิ่มข้อมูล Project Northstar เป็น `Knowledge`

[กลับหน้าหลัก](../index.md) | [แบบฝึกหัดถัดไป เพิ่ม Project Knowledge](./02-add-project-knowledge.md)
