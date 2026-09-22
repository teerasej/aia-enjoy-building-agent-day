# Meeting Action Agent Readiness Checklist

ใช้เฉพาะข้อมูลสมมติและบันทึกข้อจำกัดของ Environment ตามจริง

## Instructions and Summary

- [ ] Agent แยก `Decisions`, `Action items`, `Open questions` และ `Missing information`
- [ ] ชื่อและวันที่คงตามต้นฉบับ
- [ ] suggestion ไม่ถูกเปลี่ยนเป็น decision
- [ ] owner หรือ due date ที่หายหรือขัดแย้งถูกส่งให้คน Review
- [ ] `MA-01` ถึง `MA-07` ผ่านหรือมีข้อจำกัดระบุชัดเจน

## Knowledge

- [ ] Knowledge สมมติทั้งสามแหล่งอยู่ในสถานะพร้อมใช้งาน
- [ ] Agent ใช้ Knowledge เพื่ออธิบายบริบทเท่านั้น
- [ ] Agent ไม่ใช้ Project Roles เพื่อเดา owner ของ action
- [ ] Agent บอกชื่อแหล่งข้อมูลหรือแสดง Citation เมื่อ UI รองรับ

## Prompt Tool

- [ ] ผู้สอนยืนยัน supported region, Dataverse, maker permission และ Copilot Credits
- [ ] Agent มี `Create Meeting Follow-up Brief`
- [ ] Tool รับ Text input ชื่อ `MeetingSummary`
- [ ] Tool คืน `Executive summary`, `Confirmed decisions`, `Action tracker`, `Missing information`, `Open questions` และ `Human review required`
- [ ] `Action tracker` มี Task, Owner, Due date และ Review status
- [ ] Tool ไม่เติม owner, due date, decision หรือ approval ที่ไม่มีใน input
- [ ] Tool ไม่เชื่อม Connector และไม่ทำ external action
- [ ] ผู้สอนทดสอบ Prompt Tool ด้วย learner account ก่อนวันอบรม

## Scope and Cleanup

- [ ] ไม่มีข้อมูลประชุม บุคคล ข้อมูลติดต่อ credential หรือข้อมูลภายในจริง
- [ ] ไม่มีการเปลี่ยน Environment policy เพื่อหลีกเลี่ยงข้อจำกัด
- [ ] ไม่มีการ Publish Agent ไป production
- [ ] ถ้า Prompt Tool ใช้งานไม่ได้ ระบุว่าเป็น Instructor demonstration โดยไม่อ้างว่า learner test สำเร็จ
