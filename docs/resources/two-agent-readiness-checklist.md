# Two-Agent Workshop Readiness Checklist

ใช้รายการนี้ตรวจเส้นทางฝึกตามจริง แยกผลการตรวจไฟล์ออกจากผลการทดสอบด้วย learner account

## Learner account and Environment

- [ ] learner path ใช้ `Agents` > `New agent` > `Create blank agent`
- [ ] ผู้เรียนรอ provisioning เสร็จก่อนใส่ `Instructions`
- [ ] learner account สร้าง บันทึก เปิดใหม่ และทดสอบ Agent ได้
- [ ] Environment มี Dataverse และเปิด Dataverse search
- [ ] อัปโหลด Knowledge DOCX ทั้งสองไฟล์ได้
- [ ] แนบไฟล์ `.docx` และ `.pdf` หลายไฟล์ใน `Test your agent` ได้
- [ ] Prompt Tool พร้อมใช้ใน region ที่เลือก
- [ ] learner account มี maker permission และมี Copilot Credits เพียงพอ

## Meeting Action Follow-up Agent

- [ ] Instructions ไม่ให้แต่ง owner, due date, decision หรือ approval
- [ ] Project Northstar Reference Pack พร้อมใช้งานใน Knowledge
- [ ] `Create Meeting Follow-up Brief` รับ Text input ชื่อ `MeetingSummary`
- [ ] Test หลักทั้งสองกรณีผ่านหรือบันทึกข้อจำกัดตามจริง

## Claims Document Readiness Agent

- [ ] Instructions จำกัดงานไว้ที่ document readiness
- [ ] Fictional Claims Readiness Guide พร้อมใช้งานใน Knowledge
- [ ] เปิดและอ่าน claim form แบบ Word กับ receipt และ medical certificate แบบ PDF ได้
- [ ] Agent แยก missing document ออกจาก missing information ภายในเอกสารได้
- [ ] `Create Claims Revision Email` รับ Text input ชื่อ `ClaimPackageReview`
- [ ] Prompt Tool ให้ร่างอีเมลภาษาไทยที่มีหัวข้อและเนื้อหาพร้อมตรวจทาน
- [ ] Agent ไม่อ้างว่าสร้างหรือส่งอีเมลแล้ว
- [ ] Agent ไม่ตัดสิน coverage, eligibility, approval, rejection, payment หรือข้อสรุปทางการแพทย์

## Safety and delivery

- [ ] ใช้เฉพาะข้อมูลสมมติและไม่มีข้อมูลลูกค้า พนักงาน สุขภาพ หรือ claim จริง
- [ ] ไม่มี Connector, external action หรือ production publishing
- [ ] มีช่วง `Pause and compare` หลังผลลัพธ์สำคัญ
- [ ] ถ้า Environment บล็อก Feature ให้ใช้ Instructor demonstration และไม่อ้างว่า learner test สำเร็จ
