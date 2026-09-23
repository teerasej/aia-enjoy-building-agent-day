# ตัวอย่าง Claim Submission สำหรับการฝึก

ข้อมูลต่อไปนี้เป็นข้อมูลสมมติทั้งหมด ใช้เพื่อฝึกตรวจความพร้อมของเอกสารเท่านั้น ไม่ใช่ claim จริงและไม่มีข้อมูลลูกค้าหรือข้อมูลสุขภาพจริง

## Submission notes

- **Training reference:** `TRAIN-CLM-2048`
- มี completed fictional claim form
- มี itemized receipt ลงวันที่ 11 September 2026
- มี medical certificate ระบุ service date เป็น 11 September 2026 แต่ไม่พบ provider signature
- ยังไม่มี payment instruction confirmation
- ผู้ส่งขอให้ตรวจว่าเอกสารพร้อมส่งให้ authorized reviewer หรือยัง

## ขอบเขต

- ตรวจเฉพาะ document readiness ตาม Fictional Claims Readiness Guide
- ห้ามสรุป coverage, eligibility, approval, rejection, payment หรือข้อสรุปทางการแพทย์
- ห้ามแทนที่ข้อมูลตัวอย่างด้วยข้อมูลหรือเอกสารจริง
