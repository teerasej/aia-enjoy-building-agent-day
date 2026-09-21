# แบบฝึกหัดที่ 3 สร้าง Outlook Draft ด้วย Tool

เราจะเพิ่ม `Draft an email message` จาก Office 365 Outlook ให้ Agent เปลี่ยนสรุปประชุมเป็น email draft ที่ผู้ใช้เปิดตรวจใน Outlook ได้ ผลลัพธ์เหมือนผู้ช่วยเตรียมซองและวางจดหมายไว้บนโต๊ะ แต่คนยังเป็นผู้ตรวจและไม่มีใครกดส่งแทนเราครับ

> **License:** ต้องตรวจสอบก่อนเริ่มอบรมว่า learner account สร้าง Office 365 Outlook connection ได้, Environment อนุญาต Connector ตาม DLP policy และผู้สอนมี training mailbox ที่อนุมัติแล้ว

## Prerequisites

- ทำ [แบบฝึกหัดที่ 1](./01-create-meeting-action-agent.md) แล้ว
- ผู้สอนแจ้ง training mailbox สำหรับการทดลอง
- ผู้สอนยืนยันว่าจะใช้เส้นทาง Hands-on หรือ Instructor demonstration
- ห้ามใช้ email address, distribution list หรือ shared mailbox จริงขององค์กร

เส้นทางของเราคือ **Meeting notes → Agent summary → ผู้ใช้ยืนยัน → Outlook Drafts → Human review** หากยังไม่ยืนยัน ให้กลับไปแก้ preview โดยไม่เรียก Tool

---

## Scenario เตรียม email ติดตามหลังประชุม

Agent จะแสดง recipient, subject และ body summary ให้ผู้ใช้ตรวจก่อน เมื่อผู้ใช้ยืนยันจึงเรียก Outlook Tool เพื่อสร้าง draft เท่านั้น

### Practice 1 เพิ่ม Draft an email message เป็น Tool

**Primary target:** เพิ่ม Office 365 Outlook Tool ที่สร้าง email draft โดยไม่เพิ่มความสามารถในการส่ง email

1. เปิด `Meeting Action Follow-up Assistant [ชื่อเล่น]` แล้วไปที่ `Tools`
2. เลือก `Add a tool` > `Connector`
3. ค้นหาและเลือก `Office 365 Outlook`
4. เลือก action ต่อไปนี้

   ```text
   Draft an email message
   ```

5. หากยังไม่มี Connection ให้เลือก `Create new connection` แล้วลงชื่อเข้าใช้บัญชีสำหรับการอบรมตามที่ผู้สอนกำหนด
6. เลือก `Submit` หรือ `Create` ตามที่ UI แสดง
7. เลือก `Add and configure`
8. ใน `Description` ใส่ข้อความต่อไปนี้

   ```text
   Create an Outlook draft only after the user has reviewed the proposed recipient,
   subject, and body summary and explicitly confirms that a draft should be created.
   Use only the instructor-approved training mailbox in To.
   Build the body from confirmed meeting decisions, action items, missing information,
   and open questions. Ask recipients to review and correct the draft.
   Never send email, use CC or BCC, use a shared mailbox, add attachments,
   or claim that the message was delivered.
   ```

9. ตรวจ input ของ Tool และคงเฉพาะ `To`, `Subject` และ `Body` ที่จำเป็นต่อเส้นทางฝึก
10. ไม่เพิ่ม `Send a Draft message` หรือ action สำหรับส่ง email
11. เลือก `Save`

> **⚠️ Note:** หากไม่พบ action, สร้าง Connection ไม่ได้ หรือถูกบล็อกโดย Data policy ให้หยุดและติดตาม Instructor demonstration ห้ามเปลี่ยนนโยบายหรือเลือก send action แทน

#### Checkpoint

- Agent มี Tool ชื่อ `Draft an email message` เพียงพอสำหรับสร้าง draft และไม่มี Tool สำหรับส่ง email

### Practice 2 Preview ยืนยัน และสร้าง Draft

**Primary target:** สร้าง Outlook draft หลังผู้ใช้ตรวจ preview และยืนยันอย่างชัดเจน

1. เปิด `Test your agent` และเริ่มบทสนทนาใหม่
2. วางบันทึกประชุมจาก [ไฟล์ตัวอย่าง](../resources/fictional-meeting-notes.md) แล้วขอ preview

   ```text
   สรุปบันทึกประชุมนี้ แล้วเตรียม preview ของ email follow-up สำหรับ Project Northstar
   ใช้ meeting date จากบันทึกใน Subject แสดง To, Subject และ Body summary ให้ฉันตรวจ
   แต่ยังห้ามเรียก Tool จนกว่าฉันจะยืนยันให้สร้าง Draft
   ```

3. เมื่อ Agent ถาม recipient ให้ใส่เฉพาะ training mailbox ที่ผู้สอนแจ้ง
4. ตรวจว่า Subject มีรูปแบบ `Meeting follow-up: Project Northstar – [meeting date]`
5. ตรวจว่า body มี Decisions, Action items, Missing information, Open questions และคำขอให้ผู้รับตรวจแก้ไข
6. หากข้อมูลยังไม่ถูกต้อง ให้ขอแก้ preview ก่อน
7. เมื่อพร้อม ให้ยืนยันด้วยข้อความต่อไปนี้

   ```text
   ยืนยันให้สร้าง Outlook Draft เท่านั้น ห้ามส่ง email
   ```

8. เปิด Outlook `Drafts`
9. ตรวจว่า draft ใหม่มี recipient, subject และ body ตรงกับ preview และยังไม่ถูกส่ง
10. ปิด draft โดยไม่เลือก `Send`

#### Checkpoint

- Outlook `Drafts` มี email จากข้อมูลสมมติหลังการยืนยัน และ email ยังอยู่ในสถานะ Draft

## Summary

เราได้เชื่อม Agent กับเครื่องมือที่สร้างผลลัพธ์ในแอปทำงานจริง โดยแยกการเตรียม draft ออกจากการส่งอย่างชัดเจน ขั้นต่อไปเราจะทดสอบกรณีผิดพลาดและตรวจ readiness ของ Agent

[แบบฝึกหัดก่อนหน้า](./02-add-project-knowledge.md) | [กลับหน้าหลัก](../index.md) | [แบบฝึกหัดถัดไป ทดสอบและ Review](./04-test-and-review.md)
