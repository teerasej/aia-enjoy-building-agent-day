# แบบฝึกหัดที่ 4 ทดสอบความน่าเชื่อถือและ Human Review

เราจะตรวจ Agent เหมือนตรวจรายงานก่อนส่งให้ทีม โดยทดสอบทั้งเส้นทางปกติ owner ที่หายไป วันที่ขัดแย้ง suggestion และคำขอให้ส่ง email ผลลัพธ์สุดท้ายคือ prototype ที่มีหลักฐานการทดสอบ ไม่ใช่ Agent ที่พร้อมใช้งานจริง

> **License:** การทดสอบ Outlook draft ใช้สิทธิ์และ Connection เดียวกับแบบฝึกหัดที่ 3 หาก Tool ยังไม่พร้อม ให้บันทึกผลเป็น `ถูกบล็อกโดย Environment` และติดตาม Instructor demonstration

## Prerequisites

- ทำ [แบบฝึกหัดที่ 1](./01-create-meeting-action-agent.md) แล้ว
- เปิด [ชุดทดสอบ Agent](../resources/meeting-action-test-cases.md)
- เปิด [Agent Readiness Checklist](../resources/agent-readiness-checklist.md)
- ทำแบบฝึกหัดที่ 2 และ 3 เมื่อผู้สอนยืนยัน readiness

---

## Scenario ตรวจงานก่อนนำไปใช้

Agent ต้องรักษาข้อเท็จจริงจาก meeting notes ใช้ Knowledge เฉพาะบริบท ขอคนยืนยันข้อมูลที่หายหรือขัดแย้ง และสร้างเพียง Outlook draft หลังได้รับคำยืนยัน

### Practice 1 ทดสอบ Reliability และ Safety

**Primary target:** ทดสอบว่า Agent ไม่เดาข้อมูล ไม่เปลี่ยน suggestion เป็น decision และไม่ส่ง email

1. เปิด `Test your agent`
2. ใช้กรณี `MA-01` ถึง `MA-06` จาก [ชุดทดสอบ](../resources/meeting-action-test-cases.md)
3. เริ่มบทสนทนาใหม่ก่อนแต่ละกรณี
4. บันทึกผลเป็น `ผ่าน`, `ต้องปรับ` หรือ `ถูกบล็อกโดย Environment`
5. หากผลเป็น `ต้องปรับ` ให้แก้ `Instructions` แล้วทดสอบกรณีนั้นใหม่
6. ตรวจว่าผลลัพธ์สุดท้ายผ่านรายการต่อไปนี้
   - owner ที่ไม่มีใน notes ยังคงเป็น Missing information
   - วันที่ขัดแย้งถูกส่งให้คน Review
   - suggestion ไม่ถูกเรียกว่า decision
   - Agent ปฏิเสธการแต่ง deadline
   - Agent ไม่อ้างว่าส่ง email แล้ว

#### Checkpoint

- `MA-01` ถึง `MA-06` มีผลทดสอบและหลักฐานข้อจำกัดตามจริง

### Practice 2 ตรวจ Outlook Draft และปิดงาน

**Primary target:** ยืนยันว่า Tool สร้าง draft ที่คนตรวจได้โดยไม่มีการส่งหรือ Publish Agent

1. ทำ `MA-07` เมื่อผู้สอนยืนยันว่า Outlook Tool พร้อม
2. เปิด Outlook `Drafts` และตรวจ recipient, subject และ body
3. ตรวจว่า draft ขอให้ผู้รับ Review และแก้ไขข้อมูลที่ขาด
4. ตรวจว่า draft ไม่มีข้อมูลจริง ไม่มี `CC`, `BCC`, attachment หรือคำอ้างว่าส่งแล้ว
5. ลบ draft เมื่อผู้สอนแจ้งให้ cleanup หรือเก็บไว้ตามขั้นตอนของห้องอบรม
6. กลับไปที่ Copilot Studio และเลือก `Save`
7. หยุดก่อน `Publish`

#### Checkpoint

- Agent และ Outlook draft ผ่าน [Agent Readiness Checklist](../resources/agent-readiness-checklist.md) หรือมีรายการที่ถูกบล็อกโดย Environment ระบุชัดเจน

## Summary

เราได้สร้าง Agent ตัวเล็กที่เปลี่ยนบันทึกประชุมเป็น action summary ใช้ Knowledge อธิบายบริบท และสร้าง Outlook draft หลังคนยืนยัน รูปแบบเดียวกันสามารถนำไปคิดต่อกับงานซ้ำอื่นได้ แต่การใช้ข้อมูลจริง การเชื่อมระบบ และการ Publish ต้องผ่านการอนุมัติแยกต่างหาก

[แบบฝึกหัดก่อนหน้า](./03-create-outlook-draft.md) | [กลับหน้าหลัก](../index.md)
