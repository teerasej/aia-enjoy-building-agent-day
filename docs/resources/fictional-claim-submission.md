# ชุดไฟล์ Claim Package สำหรับการฝึก

ชุดไฟล์นี้เป็นข้อมูลสมมติทั้งหมด ใช้ฝึกตรวจความพร้อมของเอกสารเท่านั้น ไม่ใช่ claim จริงและไม่มีข้อมูลลูกค้าหรือข้อมูลสุขภาพจริง

## ไฟล์ที่ผู้ส่งคำขอส่งมา

1. [fictional-claim-form.docx](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-claim-form.docx)
2. [fictional-itemized-receipt.pdf](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-itemized-receipt.pdf)
3. [fictional-medical-certificate.pdf](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-medical-certificate.pdf)

ไฟล์ทั้งสามใช้ Training reference `TRAIN-CLM-2048`

## ไฟล์ทางเลือกสำหรับเปรียบเทียบ

- [fictional-medical-certificate-signed.pdf](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-medical-certificate-signed.pdf) มี synthetic handwritten provider signature เป็นรูปภาพ ใช้แทน medical certificate ฉบับที่ไม่มีลายเซ็นเมื่อต้องการทดสอบกรณีข้อมูลในเอกสารครบแล้ว

## ผลที่ Agent ควรตรวจพบ

- **เอกสารที่ยังขาด:** payment instruction confirmation ไม่มีอยู่ใน claim package
- **ข้อมูลที่ขาดภายในเอกสาร:** `fictional-medical-certificate.pdf` ไม่มี provider signature
- **เอกสารที่พร้อม:** claim form มีสถานะ completed และ itemized receipt มีรายการบริการ ยอดเงิน และวันที่
- **ผลเมื่อใช้ไฟล์ทางเลือก:** `fictional-medical-certificate-signed.pdf` มี provider signature แล้ว แต่ payment instruction confirmation ยังคงเป็นเอกสารที่ยังขาด

## ขอบเขต

- ตรวจเฉพาะ document readiness ตาม Fictional Claims Readiness Guide
- ใช้ Fictional Claims Readiness Guide เป็น Knowledge และใช้ไฟล์ทั้งสามเป็นเอกสารแนบในบทสนทนา อย่าเพิ่ม claim package เป็น Knowledge ถาวร
- ห้ามสรุป coverage, eligibility, approval, rejection, payment หรือข้อสรุปทางการแพทย์
- ห้ามแทนที่ข้อมูลตัวอย่างด้วยข้อมูลหรือเอกสารจริง
