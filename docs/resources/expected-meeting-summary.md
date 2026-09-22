# ตัวอย่างผลลัพธ์ Meeting Action Summary

ใช้ไฟล์นี้ตรวจโครงสร้างและข้อเท็จจริง ไม่ต้องคาดหวังให้ Agent ใช้ถ้อยคำเหมือนกันทุกคำ

## Decisions

- ใช้ shared request form เป็นช่องทางหลักสำหรับ pilot
- ใช้สถานะ `New`, `In review`, `Waiting for information` และ `Complete`

## Action items

- Mali — ร่างข้อความประกาศสำหรับกลุ่มทดลอง — 9 October 2026
- Kanda — รวบรวม request categories เวอร์ชันแรก — 8 October 2026
- Ton — ยืนยันความพร้อมของ test workspace กับผู้ดูแล Environment — วันที่ยังไม่ระบุ
- Owner ยังไม่ระบุ — เตรียม participant FAQ — 13 October 2026

## Open questions

- หลังจบ pilot ใครเป็นผู้อนุมัติการเปลี่ยน request category
- test workspace จะพร้อมวันที่ 12 October 2026 หรือไม่

## Missing information

- owner ของ participant FAQ
- due date สำหรับการยืนยัน test workspace

## สิ่งที่ไม่ควรถูกจัดเป็น Decision

- weekly leaderboard เป็นเพียงข้อเสนอที่ยังไม่ได้ตัดสินใจ
- dashboard สีใหม่เป็นเพียงหัวข้อสนทนา ไม่มี action หรือ decision

## โครงสร้าง Follow-up Brief ที่คาดหวัง

เมื่อใช้ `Create Meeting Follow-up Brief` ผลลัพธ์ควรมีหัวข้อตามลำดับนี้ โดยถ้อยคำอาจต่างกันได้

1. `Executive summary` ไม่เกินสาม bullet
2. `Confirmed decisions`
3. `Action tracker` ที่มี Task, Owner, Due date และ Review status
4. `Missing information`
5. `Open questions`
6. `Human review required`

ใน `Action tracker` ต้องเห็นว่า owner ของ participant FAQ และ due date สำหรับการยืนยัน test workspace ยังต้องให้คน Review ส่วน weekly leaderboard ต้องไม่ปรากฏเป็น confirmed decision
