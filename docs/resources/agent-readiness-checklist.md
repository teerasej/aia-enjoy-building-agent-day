# Meeting Action Agent Readiness Checklist

ใช้เฉพาะข้อมูลสมมติและบันทึกข้อจำกัดของ Environment ตามจริง

## Instructions and Summary

- [ ] Agent แยก `Decisions`, `Action items`, `Open questions` และ `Missing information`
- [ ] ชื่อและวันที่คงตามต้นฉบับ
- [ ] suggestion ไม่ถูกเปลี่ยนเป็น decision
- [ ] owner หรือ due date ที่หายหรือขัดแย้งถูกส่งให้คน Review
- [ ] `MA-01` ถึง `MA-06` ผ่านหรือมีข้อจำกัดระบุชัดเจน

## Knowledge

- [ ] Knowledge สมมติทั้งสามแหล่งอยู่ในสถานะพร้อมใช้งาน
- [ ] Agent ใช้ Knowledge เพื่ออธิบายบริบทเท่านั้น
- [ ] Agent ไม่ใช้ Project Roles เพื่อเดา owner ของ action
- [ ] Agent บอกชื่อแหล่งข้อมูลหรือแสดง Citation เมื่อ UI รองรับ

## Office 365 Outlook Tool

- [ ] ผู้สอนยืนยัน Outlook connector, Connection, DLP policy และ training mailbox
- [ ] Agent มี `Draft an email message`
- [ ] Agent ไม่มี `Send a Draft message` หรือ send action อื่น
- [ ] Agent แสดง To, Subject และ Body summary ก่อนเรียก Tool
- [ ] ผู้ใช้ต้องยืนยันก่อนสร้าง draft
- [ ] ใช้เฉพาะ training mailbox ที่อนุมัติ
- [ ] ไม่มี `CC`, `BCC`, shared mailbox, distribution list หรือ attachment
- [ ] Outlook แสดง email ใน `Drafts` และ email ยังไม่ถูกส่ง

## Scope and Cleanup

- [ ] ไม่มีข้อมูลประชุม บุคคล email address credential หรือข้อมูลภายในจริง
- [ ] ไม่มีการเปลี่ยน Environment policy เพื่อหลีกเลี่ยงข้อจำกัด
- [ ] ไม่มีการ Publish Agent ไป production
- [ ] ผู้สอนกำหนดวิธีลบหรือเก็บ training draft หลังจบกิจกรรม
