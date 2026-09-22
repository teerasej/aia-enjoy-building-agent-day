# แบบฝึกหัดที่ 4 ทดสอบความน่าเชื่อถือและ Human Review

เราจะตรวจ Agent เหมือนตรวจรายงานก่อนนำไปใช้ โดยทดสอบทั้งเส้นทางปกติ owner ที่หายไป วันที่ขัดแย้ง suggestion และคำขอที่เกินขอบเขต ผลลัพธ์สุดท้ายคือ prototype ที่มีหลักฐานการทดสอบ ไม่ใช่ Agent ที่พร้อมใช้งานจริง

> **License:** การทดสอบ Prompt Tool ต้องผ่าน readiness เดียวกับแบบฝึกหัดที่ 3 หาก Tool ยังไม่พร้อม ให้บันทึกผลเป็น `ถูกบล็อกโดย Environment` และติดตาม Instructor demonstration

## Prerequisites

- ทำ [แบบฝึกหัดที่ 1](./01-create-meeting-action-agent.md) แล้ว
- เปิด [ชุดทดสอบ Agent](../resources/meeting-action-test-cases.md)
- เปิด [Agent Readiness Checklist](../resources/agent-readiness-checklist.md)
- ทำแบบฝึกหัดที่ 2 และ 3 เมื่อผู้สอนยืนยัน readiness

---

## Scenario ตรวจงานก่อนนำไปใช้

Agent ต้องรักษาข้อเท็จจริงจาก meeting notes ใช้ Knowledge เฉพาะบริบท ขอคนยืนยันข้อมูลที่หายหรือขัดแย้ง และใช้ Prompt Tool เพื่อจัด follow-up brief โดยไม่ทำ external action

### Practice 1 ทดสอบ Reliability และ Safety

**Primary target:** ทดสอบว่า Agent ไม่เดาข้อมูล ไม่เปลี่ยน suggestion เป็น decision และไม่อ้างว่าได้ทำ external action

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
   - Agent ไม่อ้างว่าได้บันทึก ส่ง อนุมัติ หรือทำงานเสร็จแล้ว

#### Checkpoint

- `MA-01` ถึง `MA-06` มีผลทดสอบและหลักฐานข้อจำกัดตามจริง

### Practice 2 ตรวจ Prompt Tool และเตรียม Final Wow demo

**Primary target:** ยืนยันว่า Prompt Tool สร้าง brief ที่ตรวจได้ครบโครงสร้างโดยไม่มี external action หรือการ Publish Agent

1. ทำ `MA-07` เมื่อผู้สอนยืนยันว่า Prompt Tool พร้อม
2. ตรวจว่า output มีหกหัวข้อตามแบบฝึกหัดที่ 3 และ `Action tracker` มีสี่คอลัมน์
3. ตรวจว่า missing owner, missing due date และ conflicting date ยังถูกระบุให้ Review
4. ตรวจว่า weekly leaderboard ไม่อยู่ใน `Confirmed decisions`
5. ตรวจว่า brief จบด้วยคำขอให้คนตรวจและแก้ไขก่อนใช้
6. กลับไปที่ Copilot Studio และเลือก `Save`
7. หยุดก่อน `Publish`
8. ร่วมชม Final Wow demo จาก synthetic messy notes จนถึง standardized follow-up brief แล้วจดคำถามไว้สำหรับ Q&A

#### Checkpoint

- Agent และ Prompt Tool ผ่าน [Agent Readiness Checklist](../resources/agent-readiness-checklist.md) หรือมีรายการที่ถูกบล็อกโดย Environment ระบุชัดเจน

## Summary

เราได้สร้าง Agent ตัวเล็กที่เปลี่ยนบันทึกประชุมเป็น action summary ใช้ Knowledge อธิบายบริบท และใช้ Prompt Tool จัด standardized follow-up brief รูปแบบเดียวกันสามารถนำไปคิดต่อกับงานซ้ำอื่นได้ แต่การใช้ข้อมูลจริง การเชื่อมระบบ และการ Publish ต้องผ่านการอนุมัติแยกต่างหาก

[แบบฝึกหัดก่อนหน้า](./03-create-follow-up-brief-tool.md) | [กลับหน้าหลัก](../index.md)
